/**
 * Navigation for the one-page site.
 *
 * `id` doubles as the section's DOM id and as the anchor target, so a link and
 * its section can never drift apart. Labels are resolved per locale from the
 * copy file, not hardcoded here.
 *
 * The order below follows the reading order of the page rather than the order
 * the items were first sketched in, so the active-section highlight always
 * moves forward as the visitor scrolls.
 */

export interface NavItem {
  /** DOM id of the section this links to. */
  id: string;
  /** Key into `copy.nav.items` for the visible label. */
  labelKey: 'about' | 'audience' | 'programme' | 'foundation' | 'contact';
}

export const navItems: readonly NavItem[] = [
  { id: 'over-ons', labelKey: 'about' },
  { id: 'voor-wie', labelKey: 'audience' },
  { id: 'dagbesteding', labelKey: 'programme' },
  { id: 'stichting', labelKey: 'foundation' },
  { id: 'contact', labelKey: 'contact' },
] as const;

/** Anchor targets used by call-to-action buttons across the page. */
export const anchors = {
  contact: '#contact',
  referral: '#aanmelden',
  foundation: '#stichting',
  programme: '#dagbesteding',
  audience: '#voor-wie',
} as const;
