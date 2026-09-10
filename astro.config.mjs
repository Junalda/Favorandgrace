// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the definitive production domain before launch.
const SITE = 'https://www.favorandgrace.nl';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en', 'pap'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Keeps generated variants predictable for the responsive `Picture` component.
    responsiveStyles: false,
  },
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
