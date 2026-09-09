import { en } from '../copy/en';
import { nl, type SiteCopy } from '../copy/nl';
import { pap } from '../copy/pap';
import { defaultLocale, type Locale } from './config';
import { mergeCopy, type DeepPartial } from './merge';

const translations: Record<Locale, DeepPartial<SiteCopy>> = { nl, en, pap };

/**
 * Returns the full copy object for a locale, with Dutch filling any gap.
 * Untranslated keys fall back rather than rendering an empty string.
 */
export function getCopy(locale: Locale = defaultLocale): SiteCopy {
  if (locale === defaultLocale) return nl;
  return mergeCopy(nl, translations[locale]);
}

export type { SiteCopy };
export * from './config';
