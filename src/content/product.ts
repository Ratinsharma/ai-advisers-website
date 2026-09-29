/** Published product terms, preserved from the live iMe trainer source. */
export const PRICING = {
  firstTutor: {
    name: "First Tutor",
    price: "€6,500",
    priceValue: 6500,
    unit: "fixed fee · one subject · about four weeks",
    detail:
      "Knowledge interview and curriculum. One tutor, synthetic or one of your own people. Scenario practice, booth/screen/laptop/phone deployment, completion and transcript records.",
  },
  keepingLive: {
    name: "Subscription",
    price: "€499",
    priceValue: 499,
    unit: "per tutor, per month · after the build",
    detail:
      "Hosting, voice and usage. Content refreshed each quarter as policy changes. Quarterly evidence pack for audit.",
  },
  additionalSubject: {
    name: "Additional subject",
    price: "€4,000",
    priceValue: 4000,
    unit: "each",
  },
  faculty: {
    name: "Faculty",
    price: "€24,000",
    priceValue: 24000,
    unit: "per year · up to four tutors · all inclusive",
    detail:
      "Four subjects built and maintained. Separate manager and staff pathways. A named contact. Annual review with your compliance lead.",
  },
} as const;

/** Existing offer; demonstration is the main navigation action. */
export const TRIAL_OFFER = {
  headline: "Send us one policy document.",
  detail:
    "We build a working tutor on it and you talk to it yourself. If it is not good enough, you owe us nothing and you keep the meeting.",
} as const;

export const SEGMENTS: ReadonlyArray<{ name: string; detail: string }> = [
  {
    name: "Professional services",
    detail: "Regulatory updates, ethics and client-care briefings for partners and associates.",
  },
  {
    name: "Visitor-facing teams",
    detail: "Member services, site rules and safety for staff who meet the public every day.",
  },
  {
    name: "Corporate academy",
    detail: "Structured skills modules delivered as a course, with progress tracked per learner.",
  },
  {
    name: "Executive workshops",
    detail: "Leadership and management development, delivered in the boardroom or remotely.",
  },
  {
    name: "Events and venues",
    detail: "Volunteer, marshal and steward briefings for tournaments, clubs and large venues.",
  },
  {
    name: "Corporate compliance",
    detail:
      "Harassment prevention, code of conduct and whistleblowing, for head office and the floor.",
  },
];

export const DEPLOYMENTS: ReadonlyArray<{ name: string; detail: string }> = [
  {
    name: "Chat booth",
    detail:
      "A physical booth on the floor of the plant, the warehouse, the hotel or the ward. No login, no device, no excuse.",
  },
  {
    name: "Group screen",
    detail:
      "One screen, one room, a whole team at once, with the tutor taking questions from the floor.",
  },
  {
    name: "Laptop",
    detail: "In the browser, at the desk, in induction week, or whenever policy changes.",
  },
  {
    name: "Phone",
    detail: "For field staff, drivers, contractors and anyone you need to reach between sites.",
  },
];

export const BUILD_STEPS: ReadonlyArray<{ week: string; title: string; detail: string }> = [
  {
    week: "Week 1",
    title: "The interview",
    detail:
      "Two sessions with your subject expert, plus whatever policy documents you already have. We do the reading.",
  },
  {
    week: "Week 2",
    title: "The build",
    detail:
      "We write the curriculum and the scenarios and produce the tutor. Nothing is asked of your team in this week.",
  },
  {
    week: "Week 3",
    title: "Your review",
    detail:
      "You talk to the tutor yourself and tell us what to change. We change it. Sign-off is yours.",
  },
  {
    week: "Week 4",
    title: "Live",
    detail: "Deployed where you want it, and the first training records start landing.",
  },
];

/** No regulatory or client-data promises are emitted as hidden FAQ schema. */
export const FAQ: ReadonlyArray<{ q: string; a: string }> = [];

export const PRODUCT_DESCRIPTION =
  "iMe Live Trainer is a photorealistic, voice-accurate AI tutor that trains your staff from your own policies and procedures, in 32 languages, and produces a quarterly evidence pack showing who was trained, on what, and how they performed.";
