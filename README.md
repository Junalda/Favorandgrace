# Favor & Grace

One-page website for Favor & Grace — culturally recognisable day activities
and social care for older adults, built with Astro and TypeScript.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then builds to dist/
npm run preview  # serves the production build
```

Node 20 or newer.

## How it is put together

```
src/
  components/          one component per page section, plus ui/ primitives
  copy/                all visible text: nl.ts is the source, en.ts and pap.ts are stubs
  data/site.ts         every organisational fact and legal placeholder
  data/navigation.ts   section ids, nav order and CTA anchors
  i18n/                locale config and the fallback merge
  layouts/Layout.astro <head>, metadata, structured data, the two small scripts
  pages/index.astro    composes the sections in order
  styles/              tokens.css (design tokens), global.css, fonts.css
public/
  fonts/               self-hosted variable subsets, preloaded
  images/              files served as-is (partner logos, the supplied logo)
```

Two rules keep this maintainable:

1. **No fact is hardcoded in a component.** Everything organisational lives in
   `src/data/site.ts`. Values that are still `null` do not render, so the site
   cannot publish a claim that has not been confirmed.
2. **No design value is hardcoded either.** Colour, type, space, radius and
   elevation all come from `src/styles/tokens.css`.

### Adding content

- **Text** — edit `src/copy/nl.ts`.
- **Photography** — see `src/assets/README.md`.
- **Contact details, KvK, ANBI, partners, donation link** — `src/data/site.ts`.
  Filling one in makes the matching block appear on the page.

### Languages

Dutch is the default and the source of truth. English and Papiamentu are
scaffolded in `src/copy/` and registered in `astro.config.mjs`, but both files
are deliberately empty: any key that is not translated falls back to Dutch, and
neither locale appears in the language switcher or in `hreflang` until it is
added to `publishedLocales` in `src/i18n/config.ts`.

Papiamentu must be translated by a native speaker. Machine translation is not
acceptable for this audience.

## Performance and accessibility

- Roughly 2.4 KB of JavaScript, all inlined: a mobile menu, the header's
  scrolled state and one `IntersectionObserver` for the scroll reveal. Nothing
  is hidden unless the browser has confirmed it can reveal it again, so the
  page reads correctly with JavaScript disabled.
- Fonts are self-hosted variable subsets (65 KB total for Latin), preloaded,
  with `font-synthesis` off.
- Every image slot reserves its aspect ratio, so photography can be dropped in
  without shifting the layout.
- Body text starts at 19px. The audience is 55+ and readability outranks
  density.
- All text meets WCAG AA contrast; motion is disabled under
  `prefers-reduced-motion`.

## Before launch

The site is built to run with placeholders, but these must be settled:

| What | Where |
| --- | --- |
| Production domain | `astro.config.mjs` and `public/robots.txt` |
| Contact details and opening hours | `src/data/site.ts` → `contact` |
| Contact form endpoint | `src/data/site.ts` → `contact.formEndpoint` |
| KvK numbers, ANBI status, board, donation link | `src/data/site.ts` → `organisation` |
| Privacy statement and cookie policy | `src/data/site.ts` → `legal` |
| Real photography | `src/assets/` |
| Sign-off on the day-programme and referral copy | `src/data/site.ts` → `contentApproval` |

### The logo

The supplied logo was a JPEG on a photographic background. `tools/prepare-logo.py`
cuts the artwork out of it and writes four assets: the header lockup, a
transparent stacked version for print, the sharing card and the touch icon. Run
it again if a better source arrives, or replace `src/assets/logo.png` directly
if a vector version turns up — nothing else needs to change.

The header uses a horizontal lockup, emblem beside the script, rather than the
supplied stacked arrangement. Stacked, the wordmark is illegible at the ~44px a
header allows.

The name is spelled "Favor & Grace" throughout, matching the logo artwork. It
lives in one place, `brand.name` in `src/data/site.ts`, and flows from there
into headings, metadata, structured data, the footer and the form's consent
line.
