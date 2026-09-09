/**
 * Favour & Grace — central configuration.
 *
 * This is the ONLY place where organisational facts live. Components read from
 * here and render conditionally: anything still `null` is simply not shown, so
 * the site never publishes a claim that has not been confirmed.
 *
 * HOW TO FILL THIS IN
 * -------------------
 * Replace a `null` with the real value and the matching block appears on the
 * page automatically. Do not invent values — an empty section is always better
 * than an incorrect one, especially for legal, ANBI and referral information.
 */

/** A fact that has not been supplied yet. */
export type Pending<T> = T | null;

export interface PostalAddress {
  street: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle?: string;
}

export interface OpeningPeriod {
  /** e.g. "Maandag t/m donderdag" */
  days: string;
  /** e.g. "09:30 – 15:30" */
  hours: string;
}

export interface BoardMember {
  name: string;
  role: string;
}

/* -------------------------------------------------------------------------- */
/* Brand                                                                      */
/* -------------------------------------------------------------------------- */

export const brand = {
  /**
   * NOTE FOR THE CLIENT: the supplied logo reads "Favor & Grace" while the
   * brief and all written communication use "Favour & Grace". The site uses
   * the spelling below everywhere. Change this one value if the logo spelling
   * should win instead.
   */
  name: 'Favour & Grace',
  nameParts: { first: 'Favour', connector: '&', second: 'Grace' },
  foundationName: 'Stichting Favour & Grace',
  tagline: 'De kracht van cultuursensitieve dagbesteding',

  /**
   * [LOGO] — drop the supplied artwork in `public/images/` and point to it.
   * A transparent SVG or PNG is strongly preferred over the JPG version, which
   * carries a background and cannot sit on the site's cream ground.
   * While this is `null` the header renders the typographic wordmark, which is
   * intentionally a good-looking fallback rather than a broken image.
   */
  logo: null as Pending<{ src: string; width: number; height: number }>,

  /** Open Graph / social sharing image. TODO: supply a 1200x630 brand image. */
  ogImage: null as Pending<string>,
} as const;

/* -------------------------------------------------------------------------- */
/* Contact                                                                    */
/* -------------------------------------------------------------------------- */

export const contact = {
  /** [EMAIL] */
  email: null as Pending<string>,
  /** [PHONE] — international format for the tel: link, e.g. "+31612345678" */
  phone: null as Pending<{ display: string; href: string }>,
  /** [ADDRESS] — leave null until the location is final. */
  address: null as Pending<PostalAddress>,
  /** Optional: a short line about where the day programme takes place. */
  locationNote: null as Pending<string>,
  /** [OPENING DAYS/HOURS] */
  openingHours: [] as OpeningPeriod[],

  /**
   * Endpoint for the contact form.
   * TODO: replace with a real handler before launch. Any provider works
   * (Formspree, Netlify Forms, Web3Forms, a custom serverless function).
   * While this is `null` the form renders in a clearly disabled state instead
   * of silently discarding a visitor's message.
   */
  formEndpoint: null as Pending<string>,
} as const;

/* -------------------------------------------------------------------------- */
/* Organisations — day programme and foundation are legally distinct           */
/* -------------------------------------------------------------------------- */

export const organisation = {
  dayProgramme: {
    legalName: null as Pending<string>,
    /** [KVK DAY PROGRAM] */
    kvk: null as Pending<string>,
    vat: null as Pending<string>,
  },
  foundation: {
    legalName: null as Pending<string>,
    /** [KVK FOUNDATION] */
    kvk: null as Pending<string>,
    /** [ANBI STATUS] — only set this once the status is formally granted. */
    anbi: null as Pending<{ rsin: string; grantedOn: string }>,
    /** [DONATION LINK] */
    donationUrl: null as Pending<string>,
    /** Bank details for direct transfers. */
    iban: null as Pending<{ number: string; holder: string }>,
    /** Link to the published beleidsplan (PDF or page). */
    policyPlanUrl: null as Pending<string>,
    /** Link to the most recent annual report. */
    annualReportUrl: null as Pending<string>,
    /** Board composition — renders only when at least one member is listed. */
    board: [] as BoardMember[],
  },
} as const;

/* -------------------------------------------------------------------------- */
/* Social                                                                     */
/* -------------------------------------------------------------------------- */

/** [SOCIAL LINKS] — add the real profiles; unknown platforms stay out. */
export const socialLinks: SocialLink[] = [];

/* -------------------------------------------------------------------------- */
/* Partners                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * [PARTNERS] — never add an organisation here without written permission to
 * use its name or logo. While the list is empty the partner section renders an
 * invitation to collaborate instead of placeholder logos.
 */
export const partners: Array<{
  name: string;
  href?: string;
  logo?: { src: string; width: number; height: number };
}> = [];

/* -------------------------------------------------------------------------- */
/* Content approval                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Copy that was written from the brief and is shown on the page, but still
 * needs a read-through by Favour & Grace. Nothing here is a factual claim
 * about certification, funding or partners — it is descriptive text about how
 * a day is spent and how a referral starts.
 *
 * [APPROVED ACTIVITIES] / [REFERRAL PROCESS] / founder quote.
 */
export const contentApproval = {
  /** `copy.programme.activities` and `copy.programme.moments`. */
  programmeActivities: false,
  /** `copy.referral.steps`. */
  referralSteps: false,
  /** `copy.founder.quote` — supplied in the brief as a suggested phrasing. */
  founderQuote: false,
} as const;

/* -------------------------------------------------------------------------- */
/* Legal pages                                                                 */
/* -------------------------------------------------------------------------- */

export const legal = {
  /** Set to a URL or path once the page exists; footer links render then. */
  privacyUrl: null as Pending<string>,
  cookieUrl: null as Pending<string>,
  termsUrl: null as Pending<string>,
  /** True only if the site actually sets non-essential cookies. */
  usesTrackingCookies: false,
} as const;

/* -------------------------------------------------------------------------- */
/* Presentation flags                                                          */
/* -------------------------------------------------------------------------- */

export const flags = {
  /**
   * Show the small "photo needed" chips on empty image slots. Keep this true
   * while gathering photography; set to false for a client preview.
   */
  showPhotoPlaceholderLabels: true,
} as const;

/* -------------------------------------------------------------------------- */
/* Derived helpers                                                             */
/* -------------------------------------------------------------------------- */

export const hasContactChannel = Boolean(contact.email || contact.phone);
export const hasFoundationDetails = Boolean(
  organisation.foundation.kvk ||
    organisation.foundation.anbi ||
    organisation.foundation.policyPlanUrl ||
    organisation.foundation.annualReportUrl ||
    organisation.foundation.board.length > 0,
);
