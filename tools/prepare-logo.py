#!/usr/bin/env python3
"""Cut the Favor & Grace logo out of its photographic background.

The logo was supplied as a JPEG: flat illustration artwork sitting on a
sky-to-sand photo with a sun flare down the right-hand edge. This script
separates the artwork from that background and writes the assets the site uses.

Run it again if a better source ever arrives. If a vector logo arrives instead,
this script becomes unnecessary: replace `src/assets/logo.png` directly.

    pip install numpy pillow
    python3 tools/prepare-logo.py public/images/logo-source.jpg

How the separation works
------------------------
The emblem and the script are strongly coloured; their background is pale and
washed out. So a pixel is treated as background when it is both unsaturated and
light AND it connects to the edge of the frame. The connectivity test is what
protects the pale areas *inside* the artwork, such as the white centre of the
hibiscus and the gaps between the two hands.

Two exceptions needed handling:

* The sun flare on the right is warm enough to survive the saturation test, so
  it comes through as a scatter of blobs past the right edge of the artwork.
  Anything centred beyond that edge is discarded.
* The tagline sits on warm sand that is saturated enough to be mistaken for
  artwork, which merged the last few letters into a border-touching blob and
  deleted them. That strip is separated by brightness instead, which is clean
  because the tagline is dark text on a light ground.

Outputs
-------
    src/assets/logo.png            horizontal lockup: emblem beside the script
    public/images/logo-full.png    the original stacked lockup, tagline included,
                                   transparent, for print and partner use
    public/images/og-image.jpg     1200x630 sharing card on the cream ground
    public/images/apple-touch-icon.png  the emblem alone

The horizontal lockup exists because the supplied lockup is stacked, and a
stacked logo is illegible at the ~44px a site header allows.
"""
from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

# --- Tuning ------------------------------------------------------------------
BG_MAX_SATURATION = 0.32   # above this a pixel is too colourful to be background
BG_MIN_VALUE = 0.52        # below this it is too dark to be background
TAGLINE_TOP = 655          # first row of the tagline strip
TAGLINE_MAX_VALUE = 0.72   # the tagline is dark text on a light ground
ARTWORK_RIGHT_EDGE = 930   # rightmost real element is the hibiscus leaf
MIN_BLOB = 45              # smaller than this is JPEG noise
EMBLEM_BOTTOM = 500        # rows below this belong to the script
WORDMARK_BOTTOM = 660      # rows below this belong to the tagline

CREAM = (251, 246, 238)
# Sized for the largest place the lockup appears (60px tall in the footer) at
# 2x, with headroom. Astro downsizes from here; anything larger is dead weight
# in the build output, since the source asset is emitted alongside the variants.
LOCKUP_EMBLEM_HEIGHT = 220
LOCKUP_WORD_HEIGHT = 116
LOCKUP_GAP = 25

NEIGHBOURS_4 = ((1, 0), (-1, 0), (0, 1), (0, -1))
NEIGHBOURS_8 = NEIGHBOURS_4 + ((1, 1), (1, -1), (-1, 1), (-1, -1))


def flood(seeds, passable, neighbours=NEIGHBOURS_4):
    """Everything reachable from `seeds` while staying inside `passable`."""
    h, w = passable.shape
    seen = np.zeros((h, w), bool)
    queue = deque()
    for y, x in seeds:
        if passable[y, x] and not seen[y, x]:
            seen[y, x] = True
            queue.append((y, x))
    while queue:
        y, x = queue.popleft()
        for dy, dx in neighbours:
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and passable[ny, nx] and not seen[ny, nx]:
                seen[ny, nx] = True
                queue.append((ny, nx))
    return seen


def components(mask):
    """Every connected blob in `mask`, as a list of pixel lists."""
    h, w = mask.shape
    seen = np.zeros((h, w), bool)
    found = []
    for sy in range(h):
        for sx in range(w):
            if not mask[sy, sx] or seen[sy, sx]:
                continue
            pixels = []
            seen[sy, sx] = True
            queue = deque([(sy, sx)])
            while queue:
                y, x = queue.popleft()
                pixels.append((y, x))
                for dy, dx in NEIGHBOURS_8:
                    ny, nx = y + dy, x + dx
                    if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True
                        queue.append((ny, nx))
            found.append(pixels)
    return found


def build_mask(rgb):
    a = rgb.astype(np.float32) / 255.0
    mx, mn = a.max(axis=2), a.min(axis=2)
    saturation = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0.0)
    value = mx
    h, w = value.shape

    background_like = (saturation < BG_MAX_SATURATION) & (value > BG_MIN_VALUE)
    seeds = [(y, x) for x in range(w) for y in (0, h - 1)]
    seeds += [(y, x) for y in range(h) for x in (0, w - 1)]
    artwork = ~flood(seeds, background_like)

    # The tagline strip is judged on brightness alone.
    artwork[TAGLINE_TOP:] = value[TAGLINE_TOP:] < TAGLINE_MAX_VALUE
    return artwork


def group_components(artwork):
    """Split the artwork into emblem, wordmark and tagline, dropping flare."""
    h, w = artwork.shape
    groups = {'emblem': [], 'word': [], 'tagline': []}
    for pixels in components(artwork):
        if len(pixels) < MIN_BLOB:
            continue
        cy = sum(p[0] for p in pixels) / len(pixels)
        cx = sum(p[1] for p in pixels) / len(pixels)
        part = ('emblem' if cy < EMBLEM_BOTTOM
                else 'word' if cy < WORDMARK_BOTTOM
                else 'tagline')
        if part == 'tagline':
            # The tagline runs wider than the artwork above it, so it is never
            # trimmed on the right; it only needs its own border check.
            if any(x in (0, w - 1) or y in (0, h - 1) for y, x in pixels):
                continue
        else:
            if cx > ARTWORK_RIGHT_EDGE:
                continue
            if any(x in (0, w - 1) or y in (0, h - 1) for y, x in pixels):
                continue
        groups[part].append(pixels)
    return groups


def render(rgb, groups, keys):
    mask = np.zeros(rgb.shape[:2], bool)
    for key in keys:
        for pixels in groups[key]:
            for y, x in pixels:
                mask[y, x] = True
    alpha = Image.fromarray(np.where(mask, 255, 0).astype(np.uint8))
    # Pull the edge in a pixel to shed the JPEG halo, then soften it so the
    # outline does not look cut with scissors.
    alpha = alpha.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.6))
    img = Image.fromarray(np.dstack([rgb, np.asarray(alpha)]), 'RGBA')
    return img.crop(img.getbbox())


def main(source: str) -> None:
    root = Path(__file__).resolve().parent.parent
    rgb = np.asarray(Image.open(source).convert('RGB'))
    groups = group_components(build_mask(rgb))

    emblem = render(rgb, groups, ['emblem'])
    word = render(rgb, groups, ['word'])
    stacked = render(rgb, groups, ['emblem', 'word', 'tagline'])
    print(f'emblem {emblem.size}  wordmark {word.size}  stacked {stacked.size}')

    e = emblem.resize(
        (round(emblem.width * LOCKUP_EMBLEM_HEIGHT / emblem.height), LOCKUP_EMBLEM_HEIGHT),
        Image.LANCZOS)
    t = word.resize(
        (round(word.width * LOCKUP_WORD_HEIGHT / word.height), LOCKUP_WORD_HEIGHT),
        Image.LANCZOS)
    height = max(e.height, t.height)
    lockup = Image.new('RGBA', (e.width + LOCKUP_GAP + t.width, height), (0, 0, 0, 0))
    lockup.alpha_composite(e, (0, (height - e.height) // 2))
    lockup.alpha_composite(t, (e.width + LOCKUP_GAP, (height - t.height) // 2))
    lockup.save(root / 'src/assets/logo.png')
    print(f'lockup {lockup.size} ratio {lockup.width / lockup.height:.2f}')

    stacked.resize(
        (round(stacked.width * 0.62), round(stacked.height * 0.62)), Image.LANCZOS
    ).save(root / 'public/images/logo-full.png')

    card = Image.new('RGBA', (1200, 630), CREAM + (255,))
    scale = min(760 / stacked.width, 430 / stacked.height)
    art = stacked.resize(
        (round(stacked.width * scale), round(stacked.height * scale)), Image.LANCZOS)
    card.alpha_composite(art, ((1200 - art.width) // 2, (630 - art.height) // 2))
    card.convert('RGB').save(root / 'public/images/og-image.jpg', quality=88, optimize=True)

    icon = Image.new('RGBA', (180, 180), CREAM + (255,))
    scale = min(152 / emblem.width, 152 / emblem.height)
    small = emblem.resize(
        (round(emblem.width * scale), round(emblem.height * scale)), Image.LANCZOS)
    icon.alpha_composite(small, ((180 - small.width) // 2, (180 - small.height) // 2))
    icon.convert('RGB').save(root / 'public/images/apple-touch-icon.png')
    print('wrote logo, logo-full, og-image and apple-touch-icon')


if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv) > 1 else 'public/images/logo-source.jpg')
