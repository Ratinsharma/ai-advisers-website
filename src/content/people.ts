/**
 * People shown on the site. Only real, verified people go in this file.
 *
 * ROLES are editorial placeholders for the three advisors AI Advisers is
 * recruiting. They deliberately carry no names, no portraits and no invented
 * biography — a named advisor implies an endorsement we do not have permission
 * to imply. Drop a real name in here once it is cleared and the layout is
 * unchanged.
 */

export type Advisor = {
  /** Empty while the seat is unfilled. Rendered as a role-only card. */
  name: string | null;
  /** Always present, so an unfilled seat still reads as designed. */
  seat: string;
  credential: string;
  /** What they are looked at for. */
  remit: string;
};

export const ADVISORS: ReadonlyArray<Advisor> = [
  {
    name: null,
    seat: "Chief Compliance Officer",
    credential: "Financial services, regulated operations",
    remit: "Whether the evidence pack would survive a supervisory review.",
  },
  {
    name: null,
    seat: "Infrastructure lead",
    credential: "On-premise and air-gapped deployment",
    remit: "Whether the sovereign deployment claim is technically honest.",
  },
  {
    name: null,
    seat: "Brand and production lead",
    credential: "Broadcast and executive media",
    remit: "Whether the studio output is good enough to put our name on.",
  },
];

/**
 * Client marks. Permissions confirmed. These are the *founder's* track record
 * through Metropolis Interactive, not AI Advisers clients — so the section they
 * appear in is headed "Before founding AI Advisers" and never implies otherwise.
 */
export const CLIENT_MARKS: ReadonlyArray<{ name: string; file: string; w: number; h: number }> = [
  { name: "Apple", file: "/logos/apple.webp", w: 220, h: 120 },
  { name: "Citi", file: "/logos/citi.webp", w: 220, h: 120 },
  { name: "CBRE", file: "/logos/cbre.webp", w: 220, h: 120 },
  { name: "Coca-Cola", file: "/logos/coca-cola.webp", w: 220, h: 120 },
  { name: "Deutsche Bank", file: "/logos/deutsche-bank.webp", w: 220, h: 120 },
  { name: "Virgin", file: "/logos/virgin.webp", w: 220, h: 120 },
  { name: "Guinness", file: "/logos/guinness.webp", w: 220, h: 120 },
  { name: "IBM", file: "/logos/ibm.webp", w: 220, h: 120 },
  { name: "ING", file: "/logos/ing.webp", w: 220, h: 120 },
  { name: "JLL", file: "/logos/jll.webp", w: 220, h: 120 },
  { name: "Savills", file: "/logos/savills.webp", w: 220, h: 120 },
  { name: "Visa", file: "/logos/visa.webp", w: 220, h: 120 },
];

export const TRACK_RECORD_INTRO =
  "Before founding AI Advisers, Kenn Joyce led Metropolis Interactive, delivering digital work — including large-scale data mining, the forerunner of today's AI — to organisations including:";
