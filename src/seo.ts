/**
 * One place for every site-wide SEO fact, so a route head is one line and
 * nothing drifts. Canonical URLs, OG/Twitter tags and JSON-LD all derive from
 * SITE, so a domain change is a one-line edit.
 */

export const SITE = {
  origin: "https://aiadvisers.io",
  name: "AI Advisers",
  legalName: "Kenn Joyce, trading as AI Advisers",
  tagline: "iMe training, executive avatars, advisory, private AI and studio production",
  email: "kenn.joyce@aiadvisers.io",
  phone: "+353863262239",
  phoneDisplay: "+353 86 326 2239",
  founder: "Kenn Joyce",
  founderJobTitle: "Founder & Principal",
  city: "Dublin",
  country: "Ireland",
  countryCode: "IE",
  areaServed: "IE",
  ogImage: "/og-image.png",
  /** Same origin as the site, so omit the URL and let consumers resolve it. */
  logo: "/favicon.ico",
} as const;

export function url(path: string): string {
  return `${SITE.origin}${path === "/" ? "" : path}`;
}

type MetaObj = Record<string, string>;
type LinkObj = Record<string, string>;

/**
 * Full per-route head. Emits title, description, canonical, and a complete
 * OG + Twitter set so no route can ship a partial one.
 */
export function pageHead(opts: {
  path: string;
  title: string;
  description: string;
  /** Omit to reuse the description. */
  ogTitle?: string;
  image?: string;
  type?: "website" | "article";
}): { meta: MetaObj[]; links: LinkObj[] } {
  const canonical = url(opts.path);
  const ogTitle = opts.ogTitle ?? opts.title;
  const image = opts.image ?? SITE.ogImage;
  const type = opts.type ?? "website";

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "author", content: SITE.name },

      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: url(image) },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_IE" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: url(image) },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

/* ------------------------------------------------------------------ *
 * JSON-LD
 * ------------------------------------------------------------------ */

const ORG_ID = `${SITE.origin}/#organization`;
const PERSON_ID = `${SITE.origin}/founder#person`;
const PRODUCT_ID = `${SITE.origin}/live-trainer#product`;
const SITE_ID = `${SITE.origin}/#website`;

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: SITE.city,
  addressCountry: SITE.countryCode,
};

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.origin,
    logo: url(SITE.logo),
    description: SITE.tagline,
    email: SITE.email,
    telephone: SITE.phone,
    foundingDate: "2016",
    address: POSTAL_ADDRESS,
    founder: { "@id": PERSON_ID },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        telephone: SITE.phone,
        areaServed: SITE.areaServed,
        availableLanguage: ["en"],
      },
    ],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE.origin,
    name: SITE.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IE",
  };
}

export function professionalServiceNode() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE.origin}/#service`,
    name: SITE.name,
    url: SITE.origin,
    description:
      "Founder-led AI consultancy in Dublin. iMe Live Trainer, executive avatars, boardroom consultancy, proprietary AI infrastructure and in-house media production.",
    image: url(SITE.ogImage),
    logo: url(SITE.logo),
    email: SITE.email,
    telephone: SITE.phone,
    priceRange: "€€",
    address: POSTAL_ADDRESS,
    areaServed: SITE.areaServed,
    parentOrganization: { "@id": ORG_ID },
    founder: { "@id": PERSON_ID },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Offerings",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@id": PRODUCT_ID },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Boardroom AI Advisory",
            url: url("/advisory"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Private AI / Bot in a Box",
            url: url("/private-ai"),
          },
        },
      ],
    },
  };
}

export function trainerProductNode(opts: {
  description: string;
  faq: ReadonlyArray<{ q: string; a: string }>;
}) {
  return {
    "@type": "Product",
    "@id": PRODUCT_ID,
    name: "iMe Live Trainer",
    url: url("/live-trainer"),
    description: opts.description,
    brand: { "@type": "Brand", name: "iMe" },
    category: "Workforce training software",
    offers: [
      {
        "@type": "Offer",
        name: "First Tutor",
        price: "6500",
        priceCurrency: "EUR",
        description:
          "Fixed fee, one subject, approximately four weeks. Knowledge interview and curriculum, one tutor, scenario practice, deployment to booth, screen, laptop and phone, completion and transcript records.",
        url: url("/live-trainer"),
        seller: { "@id": ORG_ID },
      },
      {
        "@type": "Offer",
        name: "Keeping it live",
        price: "499",
        priceCurrency: "EUR",
        description:
          "Per tutor, per month, after the build. Hosting, voice and usage, quarterly content refresh, quarterly evidence pack.",
        url: url("/live-trainer"),
        seller: { "@id": ORG_ID },
      },
      {
        "@type": "Offer",
        name: "Additional subject",
        price: "4000",
        priceCurrency: "EUR",
        description: "Additional subjects at €4,000 each.",
        url: url("/live-trainer"),
        seller: { "@id": ORG_ID },
      },
      {
        "@type": "Offer",
        name: "Faculty",
        price: "24000",
        priceCurrency: "EUR",
        description:
          "Per year, up to four tutors, all inclusive. Four subjects built and maintained, separate manager and staff pathways, a named contact and annual review with your compliance lead. Multi-site rollouts and on-floor chat booths are quoted separately.",
        url: url("/live-trainer"),
        seller: { "@id": ORG_ID },
      },
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Languages",
        value: "32",
      },
      {
        "@type": "PropertyValue",
        name: "Evidence output",
        value:
          "Quarterly pack: who was trained, on what, when, and how they handled the scenarios.",
      },
    ],
    faq: opts.faq.length ? faqPageNode(opts.faq) : undefined,
  };
}

export function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE.founder,
    jobTitle: SITE.founderJobTitle,
    description:
      "Founder & Principal of AI Advisers. Previously led Metropolis Interactive, delivering digital solutions to international organisations.",
    url: url("/founder"),
    image: url("/kenn-joyce.jpg"),
    worksFor: { "@id": ORG_ID },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "The Wharton School, University of Pennsylvania" },
      { "@type": "CollegeOrUniversity", name: "Macquarie Business School" },
      { "@type": "CollegeOrUniversity", name: "University College Dublin" },
    ],
    knowsAbout: ["AI literacy", "EU AI Act", "workforce training", "enterprise AI strategy"],
    sameAs: ["https://www.linkedin.com/in/kennjoyce"],
  };
}

export function faqPageNode(faq: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE.origin}/#faq`,
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbListNode(path: string, name: string) {
  const segments = path.split("/").filter(Boolean);
  return {
    "@type": "BreadcrumbList",
    "@id": `${url(path)}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: url("/") },
      ...segments.map((s, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: i === segments.length - 1 ? name : titleCase(s),
        item: url(`/${segments.slice(0, i + 1).join("/")}`),
      })),
    ],
  };
}

function titleCase(s: string): string {
  return s
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Assembles a graph. Undefined nodes are dropped so the JSON stays valid. */
export function graph(nodes: ReadonlyArray<Record<string, unknown> | undefined>) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter((n): n is Record<string, unknown> => Boolean(n)),
  };
}
