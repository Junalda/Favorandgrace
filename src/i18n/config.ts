/**
 * Language architecture.
 *
 * Dutch is the source of truth. English and Papiamentu are prepared but must
 * be translated by a human: Papiamentu in particular is not machine-translated
 * here, and an untranslated key intentionally falls back to Dutch rather than
 * shipping an approximation.
 */

export const locales = ['nl', 'en', 'pap'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'nl';

export const localeNames: Record<Locale, string> = {
  nl: 'Nederlands',
  en: 'English',
  pap: 'Papiamentu',
};

/** BCP-47 tags for the `lang` attribute and hreflang links. */
export const localeTags: Record<Locale, string> = {
  nl: 'nl-NL',
  en: 'en',
  pap: 'pap',
};

/**
 * Locales with a complete, human-approved translation. Only these are exposed
 * in the language switcher and in hreflang metadata.
 */
export const publishedLocales: readonly Locale[] = ['nl'];

export function localeHref(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === defaultLocale ? clean : `/${locale}${clean === '/' ? '' : clean}`;
}
