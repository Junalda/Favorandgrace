# Photography

Put real Favour & Grace photographs here, then import them in the component
that needs them. Files in this folder go through Astro's image pipeline: they
are converted to WebP, resized into a srcset and given explicit dimensions, so
they never cause layout shift.

```astro
---
import ontmoeting from '../assets/ontmoeting.jpg';
---
<Picture
  src={ontmoeting}
  alt="Twee deelnemers in gesprek tijdens de ochtendkoffie."
  slotLabel="Sfeerbeeld: deelnemers in gesprek"
  ratio="4 / 5"
/>
```

Leave `src` off and the slot renders a branded placeholder with the label —
useful while the photography is still being gathered.

Notes:

- Candid phone photography is fine. The slots crop with `object-fit: cover`,
  so subjects should sit near the centre of the frame.
- Match the slot's orientation where you can: a portrait crop in a `4 / 5`
  slot, a landscape crop in `16 / 9`.
- Anyone recognisable in a photograph must have given permission for it to be
  published. This matters more than usual here: the participants are the
  subject of the site.
- Files in `public/images/` are served as-is and are *not* optimised. Use that
  folder only for things that cannot be imported, such as partner logos.
