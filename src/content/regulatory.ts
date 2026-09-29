/**
 * SINGLE SOURCE OF TRUTH for every regulatory claim on this site.
 *
 * Nothing legal is typed by hand into JSX. If the law changes, this file changes
 * and every page that imports from it updates with it.
 *
 * Each fact carries `verifiedOn`. `scripts/verify-site.mjs` fails the build if a
 * fact is older than STALE_AFTER_DAYS and warns at REVIEW_AFTER_DAYS. Re-verify
 * against `sourceUrl` before extending either window.
 */

export type RegulatoryFact = {
  /** Stable id, kebab-case. Used as the lookup key. */
  id: string;
  /** Human label, e.g. "AI literacy". */
  label: string;
  /** Full citation including the amending instrument. */
  citation: string;
  /** The amending instrument, if any. */
  instrument?: string;
  /** ISO date the instrument entered into force. */
  inForce?: string;
  /** ISO date the obligation became applicable. */
  appliesFrom: string;
  /** ISO date supervision/enforcement began, where different from appliesFrom. */
  enforcedFrom?: string;
  /** Who actually enforces it. */
  authority: string;
  /** One sentence, plain English, no hedging and no jargon. */
  summary: string;
  /** What the duty requires right now. */
  obligation: string;
  /** What it explicitly does NOT require. This is the commercially important field. */
  notRequired: string;
  /** Primary source. */
  sourceUrl: string;
  /** ISO date this was last checked against the source. */
  verifiedOn: string;
};

export type RegulatoryDaylight = "passed" | "imminent" | "future";

export type RegulatoryDeadline = {
  id: string;
  /** ISO date. */
  date: string;
  /** Short title. */
  label: string;
  /** What happens on this date. */
  what: string;
  sourceUrl: string;
  verifiedOn: string;
};

export const REVIEW_AFTER_DAYS = 60;
export const STALE_AFTER_DAYS = 120;

/** Today, as a constant, so staleness is deterministic rather than build-time dependent. */
const VERIFIED = "2026-09-28";

export const regulatoryFacts: RegulatoryFact[] = [
  {
    id: "art4-ai-literacy",
    label: "AI literacy",
    citation:
      "Regulation (EU) 2024/1689, Article 4, as amended by Regulation (EU) 2026/1744 (Digital Omnibus on AI)",
    instrument: "Digital Omnibus on AI",
    inForce: "2026-07-27",
    appliesFrom: "2025-02-02",
    enforcedFrom: "2026-08-02",
    authority: "National market surveillance authorities in each Member State",
    summary:
      "Providers and deployers of AI systems must take measures to support the development of AI literacy among staff and others operating their AI systems.",
    obligation:
      "Document what you did, who you did it for, and why it was proportionate to their role. Keep the record.",
    notRequired:
      "The Digital Omnibus removed the 'sufficient level' test. No specific level of any individual's AI literacy is mandated, and no certification scheme is prescribed.",
    sourceUrl: "https://digital-strategy.ec.europa.eu/en/policies/ai-talent-skills-and-literacy",
    verifiedOn: VERIFIED,
  },
  {
    id: "art4-authority",
    label: "Who enforces AI literacy",
    citation: "European Commission, AI literacy questions and answers",
    authority: "National market surveillance authorities — not the AI Office",
    appliesFrom: "2026-08-02",
    summary:
      "Enforcement of Article 4 sits with national market surveillance authorities. The AI Office does not supervise it.",
    obligation:
      "Assume the first supervisory question will be documentary: show your role inventory, your risk assessment and your training record.",
    notRequired:
      "No prior notification to the AI Office is required, and no AI Office approval is needed.",
    sourceUrl: "https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers",
    verifiedOn: VERIFIED,
  },
  {
    id: "art4-penalty-relief",
    label: "Penalties and smaller organisations",
    citation: "Regulation (EU) 2026/1744 (Digital Omnibus on AI)",
    instrument: "Digital Omnibus on AI",
    inForce: "2026-07-27",
    appliesFrom: "2026-07-27",
    authority: "National market surveillance authorities",
    summary:
      "The Digital Omnibus extended the lower penalty-cap treatment to SMEs and to small mid-cap companies of up to 500 employees.",
    obligation:
      "Nothing changes about your duty; the financial exposure is lower than the market believes.",
    notRequired:
      "There is no small-company exemption from the obligation itself. The relief is on penalty caps, not on duty.",
    sourceUrl: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj",
    verifiedOn: VERIFIED,
  },
  {
    id: "art50-transparency",
    label: "Transparency duties on interactive systems",
    citation: "Regulation (EU) 2024/1689, Article 50",
    appliesFrom: "2026-08-02",
    enforcedFrom: "2026-08-02",
    authority: "National market surveillance authorities",
    summary:
      "People interacting with an AI system must be told they are doing so, and generated content must be marked as artificially generated.",
    obligation:
      "Disclose AI interaction to users, and mark synthetic output in a machine-readable way.",
    notRequired:
      "This applies to the systems the Regulation reaches. It is not a blanket rule that every interactive AI anywhere must announce itself — scope depends on the system's role and whether people are aware.",
    sourceUrl: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50",
    verifiedOn: VERIFIED,
  },
  {
    id: "art50-content-marking",
    label: "Synthetic content marking",
    citation:
      "Regulation (EU) 2026/1744 (Digital Omnibus on AI) — AI-generated content marking obligations",
    instrument: "Digital Omnibus on AI",
    inForce: "2026-07-27",
    appliesFrom: "2026-12-02",
    authority: "National market surveillance authorities",
    summary:
      "New content-marking obligations apply to AI-generated content, including systems in use before August 2026.",
    obligation: "If you generate synthetic media, mark it so downstream systems can detect it.",
    notRequired: "No specific marking standard is mandated by this provision.",
    sourceUrl: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj",
    verifiedOn: VERIFIED,
  },
  {
    id: "art5-prohibitions",
    label: "Prohibited practices",
    citation: "Regulation (EU) 2024/1689, Article 5, as amended by Regulation (EU) 2026/1744",
    instrument: "Digital Omnibus on AI",
    inForce: "2026-07-27",
    appliesFrom: "2026-12-02",
    authority: "National market surveillance authorities",
    summary:
      "A new prohibition on AI-generated non-consensual intimate imagery and child sexual abuse material takes effect, alongside the existing prohibited-practice list.",
    obligation: "Review any AI system that generates imagery against the amended Article 5 list.",
    notRequired: "This does not restrict ordinary business AI use.",
    sourceUrl: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj",
    verifiedOn: VERIFIED,
  },
  {
    id: "art26-oversight",
    label: "Human oversight competence",
    citation: "Regulation (EU) 2024/1689, Article 26(2)",
    appliesFrom: "2027-12-02",
    authority: "National market surveillance authorities",
    summary:
      "Deployers of high-risk AI must assign human oversight to people with sufficient competence, and must be able to demonstrate it.",
    obligation:
      "Name the overseeing people and evidence their competence. Article 4 literacy is a prerequisite here.",
    notRequired: "No specific certification is required for the oversight role.",
    sourceUrl: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-26",
    verifiedOn: VERIFIED,
  },
  {
    id: "annex3-high-risk",
    label: "High-risk systems in Annex III",
    citation: "Regulation (EU) 2024/1689, as amended by Regulation (EU) 2026/1744",
    instrument: "Digital Omnibus on AI",
    inForce: "2026-07-27",
    appliesFrom: "2027-12-02",
    authority: "National market surveillance authorities",
    summary:
      "The Digital Omnibus deferred Annex III high-risk obligations from 2 August 2026 to 2 December 2027.",
    obligation:
      "Build the oversight and evidence trail now; it becomes a legal requirement rather than a good practice.",
    notRequired: "The risk classification system itself was not changed.",
    sourceUrl: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj",
    verifiedOn: VERIFIED,
  },
  {
    id: "uk-era-2025-harassment",
    label: "Workplace harassment prevention",
    citation: "Employment Rights Act 2025 (UK)",
    appliesFrom: "2026-10-01",
    authority: "UK employment regulators; enforceable on the civil and tribunal route",
    summary:
      "The duty to prevent harassment rises from reasonable steps to all reasonable steps, and extends to customers, clients and contractors.",
    obligation:
      "Scenario-based practice, a separate pathway for managers, role-specific content, and auditable records of who was trained, on what, and how they performed.",
    notRequired:
      "No specific training format or provider is prescribed. A signed policy is no longer treated as sufficient on its own.",
    sourceUrl: "https://www.gov.uk/employment-rights-act",
    verifiedOn: VERIFIED,
  },
];

/** Commercial deadlines, newest first. `passed` is computed from `date`. */
export const regulatoryDeadlines: RegulatoryDeadline[] = [
  {
    id: "2026-12-02",
    date: "2026-12-02",
    label: "Content marking and Article 5 amendments",
    what: "AI-generated content marking obligations apply, and the amended prohibited-practice list takes effect.",
    sourceUrl: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj",
    verifiedOn: VERIFIED,
  },
  {
    id: "2026-10-01",
    date: "2026-10-01",
    label: "UK all reasonable steps",
    what: "UK employers must take all reasonable steps to prevent harassment, including for customers, clients and contractors.",
    sourceUrl: "https://www.gov.uk/employment-rights-act",
    verifiedOn: VERIFIED,
  },
  {
    id: "2026-08-02",
    date: "2026-08-02",
    label: "Article 50 transparency, and Article 4 supervision begins",
    what: "Transparency duties apply, and national market surveillance authorities begin supervising AI literacy.",
    sourceUrl: "https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers",
    verifiedOn: VERIFIED,
  },
  {
    id: "2027-12-02",
    date: "2027-12-02",
    label: "Annex III high-risk obligations",
    what: "High-risk obligations apply in full, including human oversight whose competence must be demonstrable.",
    sourceUrl: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj",
    verifiedOn: VERIFIED,
  },
];

const byId = new Map(regulatoryFacts.map((f) => [f.id, f]));

/** Look up a fact. Throws at build time rather than rendering undefined copy. */
export function fact(id: string): RegulatoryFact {
  const f = byId.get(id);
  if (!f) {
    throw new Error(`Unknown regulatory fact "${id}". Known ids: ${[...byId.keys()].join(", ")}`);
  }
  return f;
}

export function deadline(id: string): RegulatoryDeadline {
  const d = regulatoryDeadlines.find((x) => x.id === id);
  if (!d) {
    throw new Error(`Unknown regulatory deadline "${id}".`);
  }
  return d;
}

export function daylight(dateIso: string, todayIso: string): RegulatoryDaylight {
  if (dateIso <= todayIso) return "passed";
  const days = daysBetween(todayIso, dateIso);
  return days <= 180 ? "imminent" : "future";
}

function daysBetween(fromIso: string, toIso: string): number {
  const ms = Date.parse(`${toIso}T00:00:00Z`) - Date.parse(`${fromIso}T00:00:00Z`);
  return Math.round(ms / 86_400_000);
}

/** "2 August 2026" — used everywhere a deadline is shown, so formatting is never hand-typed. */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** All facts, for pages that need the full set. */
export const allFacts = regulatoryFacts;

/** Days since a fact was last verified. Used by the verify script. */
export function daysSinceVerified(f: RegulatoryFact, todayIso: string): number {
  return daysBetween(f.verifiedOn, todayIso);
}
