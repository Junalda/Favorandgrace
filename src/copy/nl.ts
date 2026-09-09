/**
 * Dutch copy — the source of truth for all visible text.
 *
 * Rules for editing:
 *  - Never state a fact here that has not been confirmed by Favour & Grace.
 *  - Organisational facts (address, KvK, ANBI, partners) belong in
 *    `src/data/site.ts`, not in this file.
 *  - Copy marked in `contentApproval` (site.ts) is written from the brief and
 *    still needs a read-through by Elisabeth before launch.
 */

export const nl = {
  meta: {
    title: 'Favour & Grace — cultureel herkenbare dagbesteding voor ouderen',
    description:
      'Favour & Grace biedt cultuursensitieve dagbesteding voor ouderen vanaf circa 55 jaar. Een warme plek met herkenning, verbinding en persoonlijke aandacht.',
    ogAlt: 'Favour & Grace — de kracht van cultuursensitieve dagbesteding',
  },

  nav: {
    label: 'Hoofdnavigatie',
    items: {
      about: 'Over ons',
      audience: 'Voor wie',
      programme: 'Dagbesteding',
      foundation: 'Stichting',
      contact: 'Contact',
    },
    cta: 'Kennismaken',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    skipToContent: 'Direct naar de inhoud',
    homeLabel: 'Favour & Grace, terug naar het begin van de pagina',
  },

  hero: {
    eyebrow: 'Cultuursensitieve dagbesteding',
    title: 'Een plek waar herkenning, verbinding en aandacht samenkomen.',
    lead: 'Favour & Grace biedt cultureel herkenbare dagbesteding voor ouderen die behoefte hebben aan verbinding, persoonlijke aandacht en een omgeving waar zij zich thuis voelen.',
    primaryCta: 'Kennismaken',
    secondaryCta: 'Iemand aanmelden',
    note: 'Dagbesteding voor ouderen vanaf circa 55 jaar.',
    imageAlt:
      'Deelnemers van Favour & Grace in gesprek met elkaar tijdens een dagbestedingsochtend.',
    imageSlot: 'Sfeerbeeld: deelnemers in gesprek',
  },

  intro: {
    eyebrow: 'De aanleiding',
    title: 'Niet iedereen voelt zich thuis binnen reguliere dagbesteding.',
    body: [
      'Taal, cultuur, herinneringen, eten en muziek bepalen of iemand zich werkelijk begrepen voelt. Ontbreken die vanzelfsprekendheden, dan wordt meedoen ineens ingewikkeld — en blijft iemand liever thuis.',
      'Bij Favour & Grace zijn die elementen geen bijzaak, maar het uitgangspunt. Een gesprek in de eigen taal, een gerecht van vroeger, een lied dat iedereen kent: kleine dingen die het verschil maken tussen aanwezig zijn en erbij horen.',
    ],
    pullQuote: 'Herkenning is geen extraatje. Het is de voorwaarde om mee te kunnen doen.',
    imageAlt:
      'Deelnemers en begeleiders van Favour & Grace zitten samen rond een tafel.',
    imageSlot: 'Breedbeeld: samen rond de tafel',
  },

  why: {
    eyebrow: 'Onze aanpak',
    title: 'Waarom Favour & Grace?',
    lead: 'Vier uitgangspunten die iedere dag bepalen hoe wij mensen ontvangen.',
    items: [
      {
        title: 'Culturele herkenning',
        body: 'Een omgeving waarin achtergrond, taal en leefwereld er mogen zijn. Geen aanpassing aan de norm, maar ruimte voor wie iemand werkelijk is.',
      },
      {
        title: 'Sociale verbinding',
        body: 'Samen zijn, elkaar ontmoeten, praten en lachen. Ervaringen delen met mensen die dezelfde wereld kennen en dezelfde verhalen begrijpen.',
      },
      {
        title: 'Persoonlijke aandacht',
        body: 'Wij kijken naar de mens achter de zorgvraag: naar het levensverhaal, de gewoonten en de wensen die daarbij horen.',
      },
      {
        title: 'Een vertrouwde omgeving',
        body: 'Een plek die aanvoelt als thuis in plaats van als een instelling. Warm, rustig en zonder haast.',
      },
    ],
  },

  audience: {
    eyebrow: 'Voor wie',
    title: 'Voor wie is Favour & Grace?',
    lead: 'Voor ouderen vanaf ongeveer 55 jaar die behoefte hebben aan gezelschap, ritme en een omgeving waarin zij zichzelf kunnen zijn. In het bijzonder voor mensen met een Caribische, Surinaamse, Afrikaanse of andere migratieachtergrond.',
    situationsTitle: 'Herkenbare situaties',
    situations: [
      'Eenzaamheid of sociaal isolement',
      'Beginnende geheugenproblemen',
      'Weinig contact met de omgeving of de samenleving',
      'Behoefte aan structuur en ritme in de week',
      'Een taal- of cultuurbarrière binnen bestaande zorg',
      'Behoefte aan zinvolle activiteiten en gezelschap',
    ],
    supportTitle: 'Ook voor de mensen eromheen',
    supportBody:
      'Familie en mantelzorgers vinden bij ons rust: een dag in de week waarop hun naaste in goede handen is. Zorgprofessionals, wijkteams en maatschappelijk werkers kunnen rechtstreeks met ons overleggen over een passende plek.',
    supportGroups: [
      'Familie',
      'Mantelzorgers',
      'Zorgprofessionals',
      'Wijkteams',
      'Maatschappelijk werk',
      'Verwijzers',
    ],
    cta: 'Bespreek de mogelijkheden',
  },

  programme: {
    eyebrow: 'Een dag bij ons',
    title: 'Een dag die draait om ontmoeting en betekenis.',
    lead: 'Geen strak programma, wel een herkenbaar ritme. Iedere dag heeft een begin, een midden en een afsluiting — met ruimte voor wat er die dag nodig is.',
    moments: [
      {
        time: 'Ochtend',
        title: 'Aankomst en ontmoeting',
        body: 'De dag begint rustig. Koffie, thee en het bijpraten dat er vaak het meeste toe doet. Wie binnenkomt, wordt bij naam begroet.',
        imageAlt: 'Deelnemers begroeten elkaar bij aankomst met koffie en thee.',
        imageSlot: 'Portret: aankomst en begroeting',
      },
      {
        time: 'Middag',
        title: 'Samen aan tafel',
        body: 'Een warme maaltijd met smaken van vroeger. Koken, ruiken en proeven brengen herinneringen terug die woorden soms niet bereiken.',
        imageAlt: 'Een gezamenlijke warme maaltijd op tafel, klaar om te delen.',
        imageSlot: 'Liggend: gezamenlijke maaltijd',
      },
      {
        time: 'Namiddag',
        title: 'Muziek, beweging en verhalen',
        body: 'Muziek uit de eigen cultuur, lichte beweging, creatief werk en gesprekken over vroeger. Op feestdagen vieren we samen.',
        imageAlt: 'Deelnemers luisteren naar muziek en bewegen mee tijdens een activiteit.',
        imageSlot: 'Portret: muziek en beweging',
      },
    ],
    activitiesTitle: 'Wat een dag kan bevatten',
    activities: [
      'Gezamenlijke maaltijden',
      'Muziek',
      'Gesprek en ontmoeting',
      'Culturele activiteiten',
      'Creatief werken',
      'Bewegen',
      'Herinneringen ophalen',
      'Vieringen',
    ],
  },

  founder: {
    eyebrow: 'Het ontstaan',
    title: 'Ontstaan vanuit zorg, ervaring en een duidelijke missie.',
    body: [
      'Favour & Grace is opgericht door Elisabeth. Jarenlang zorgde zij als mantelzorger voor ouderen in haar omgeving: voor haar oma, en voor haar vader tot aan zijn laatste momenten.',
      'Naast die persoonlijke zorg volgde zij een professionele opleiding in de zorg. Daar zag zij van dichtbij wat er gebeurt wanneer taal, cultuur en achtergrond geen plek krijgen: mensen haken af, trekken zich terug en verdwijnen langzaam uit beeld.',
      'Uit die ervaring, en uit een sterke persoonlijke roeping, groeide Favour & Grace.',
    ],
    quote: 'Ik zag hoeveel verschil herkenning, aandacht en vertrouwdheid kunnen maken.',
    quoteAttribution: 'Elisabeth, oprichter van Favour & Grace',
    faithTitle: 'Over geloof',
    faithBody:
      'Geloof staat aan de basis van Favour & Grace. Het bepaalt de houding waarmee wij mensen ontvangen — niet wie er welkom is. Iedereen is welkom, ongeacht achtergrond of overtuiging.',
    imageAlt: 'Portret van Elisabeth, oprichter van Favour & Grace.',
    imageSlot: 'Portret: Elisabeth',
  },

  gallery: {
    eyebrow: 'Momenten',
    title: 'Dit is Favour & Grace.',
    lead: 'Beelden uit onze dagen: ontmoeting, samen eten, muziek en gezelschap.',
    items: [
      { alt: 'Deelnemers zitten samen te praten in de huiskamer.', slot: 'Samen in de huiskamer' },
      { alt: 'Handen die een gerecht opdienen tijdens de gezamenlijke maaltijd.', slot: 'Detail: eten opdienen' },
      { alt: 'Een deelnemer lacht tijdens een activiteit.', slot: 'Candid: een lach' },
      { alt: 'Deelnemers doen mee aan een creatieve activiteit aan tafel.', slot: 'Creatieve activiteit' },
      { alt: 'Muziek maken en meezingen tijdens een viering.', slot: 'Muziek en viering' },
      { alt: 'Een begeleider en een deelnemer in gesprek.', slot: 'Persoonlijk gesprek' },
    ],
  },

  referral: {
    eyebrow: 'Aanmelden en verwijzen',
    title: 'Kent u iemand voor wie Favour & Grace passend kan zijn?',
    lead: 'Familie, mantelzorgers, wijkteams en zorgprofessionals kunnen rechtstreeks contact opnemen. Eén gesprek is vaak genoeg om te bepalen of het past.',
    stepsTitle: 'Zo gaat het in zijn werk',
    steps: [
      {
        title: 'Neem contact op',
        body: 'Bel of stuur een bericht. U hoeft nog niets voorbereid te hebben.',
      },
      {
        title: 'Kennismaken',
        body: 'We plannen een rustig gesprek, samen met de oudere zelf en eventueel familie.',
      },
      {
        title: 'Een dag meedraaien',
        body: 'Wie dat prettig vindt, komt vrijblijvend een dag meedoen om de sfeer te ervaren.',
      },
    ],
    primaryCta: 'Iemand aanmelden',
    secondaryCta: 'Neem contact op',
  },

  foundation: {
    eyebrow: 'Stichting Favour & Grace',
    title: 'Samen kunnen we meer betekenen.',
    lead: 'De vraag naar cultureel passende dagbesteding is groter dan wat altijd direct gefinancierd kan worden. De stichting maakt activiteiten, projecten en ondersteuning mogelijk voor mensen die daar zelf niet in kunnen voorzien.',
    paths: [
      {
        title: 'Vrijwilliger worden',
        body: 'Een dagdeel per week gezelschap houden, meekoken, rijden of meehelpen bij activiteiten. Ervaring is niet nodig, betrokkenheid wel.',
        cta: 'Vrijwilliger worden',
      },
      {
        title: 'Samenwerken',
        body: 'Werkt u vanuit een zorgorganisatie, gemeente, kerk of buurtinitiatief? We denken graag mee over een passend aanbod.',
        cta: 'Samenwerken',
      },
      {
        title: 'Doneren',
        body: 'Een bijdrage maakt maaltijden, vervoer en activiteiten mogelijk voor deelnemers die dat zelf niet kunnen dragen.',
        cta: 'Steun Favour & Grace',
      },
    ],
    detailsTitle: 'Over de stichting',
    labels: {
      kvk: 'KvK-nummer',
      rsin: 'RSIN',
      anbi: 'ANBI-status',
      anbiGranted: 'toegekend op',
      policyPlan: 'Beleidsplan',
      annualReport: 'Jaarverslag',
      board: 'Bestuur',
      iban: 'IBAN',
      viewDocument: 'Bekijk document',
    },
  },

  partners: {
    eyebrow: 'Samenwerking',
    titleWithPartners: 'Samen met',
    titleEmpty: 'We bouwen aan een netwerk van partners.',
    body: 'Werkt u vanuit een gemeente, zorgorganisatie, kerk of fonds en herkent u deze doelgroep? We gaan graag het gesprek aan over wat we samen mogelijk kunnen maken.',
    cta: 'Neem contact op',
  },

  finalCta: {
    title: 'Een plek waar mensen zich gezien, gehoord en thuis mogen voelen.',
    lead: 'Kom langs, stel uw vragen of bespreek vrijblijvend de mogelijkheden.',
    primaryCta: 'Maak kennis met Favour & Grace',
    secondaryCta: 'Neem contact op',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Laten we kennismaken.',
    lead: 'Vul het formulier in, of bel ons als u dat prettiger vindt. We nemen zo snel mogelijk contact met u op.',
    directTitle: 'Direct contact',
    hoursTitle: 'Wanneer u ons kunt bereiken',
    form: {
      legend: 'Uw gegevens',
      name: { label: 'Naam', autocomplete: 'name' },
      email: { label: 'E-mailadres', autocomplete: 'email' },
      phone: { label: 'Telefoonnummer', optional: 'optioneel', autocomplete: 'tel' },
      role: {
        label: 'Ik neem contact op als',
        placeholder: 'Maak een keuze',
        options: [
          'Geïnteresseerde',
          'Familielid of mantelzorger',
          'Verwijzer of zorgprofessional',
          'Vrijwilliger',
          'Partner of sponsor',
          'Anders',
        ],
      },
      message: {
        label: 'Uw bericht',
        hint: 'Vertel kort om wie het gaat en waar u aan denkt. U hoeft geen medische details te delen.',
      },
      consent:
        'Ik ga ermee akkoord dat Favour & Grace mijn gegevens gebruikt om contact met mij op te nemen.',
      submit: 'Versturen',
      required: 'verplicht',
      unavailableTitle: 'Het formulier is nog niet actief',
      unavailableBody:
        'Het verzendadres van dit formulier moet nog worden ingesteld. Neem in de tussentijd rechtstreeks contact op.',
    },
  },

  footer: {
    blurb:
      'Cultureel herkenbare dagbesteding voor ouderen die behoefte hebben aan verbinding, aandacht en een vertrouwde omgeving.',
    navTitle: 'Op deze pagina',
    contactTitle: 'Contact',
    foundationTitle: 'Stichting',
    socialTitle: 'Volg ons',
    legalTitle: 'Juridisch',
    privacy: 'Privacyverklaring',
    cookies: 'Cookiebeleid',
    terms: 'Algemene voorwaarden',
    separationNote:
      'De dagbesteding en Stichting Favour & Grace zijn afzonderlijke organisaties met een gedeelde missie.',
    backToTop: 'Terug naar boven',
    copyright: (year: number) => `© ${year} Favour & Grace. Alle rechten voorbehouden.`,
  },

  common: {
    photoPending: 'Foto volgt',
  },
};

export type SiteCopy = typeof nl;
