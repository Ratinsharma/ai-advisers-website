import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbListNode, graph, pageHead } from "@/seo";
import { JsonLd } from "@/components/site/JsonLd";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/founder")({
  head: () => {
    const h = pageHead({
      path: "/founder",
      title: "Kenn Joyce — Founder & CEO — AI Advisers",
      description:
        "Kenn Joyce founded AI Advisers in 2016 after twenty-five years advising senior executives. Post-graduate in AI for Business at Wharton. Founder of iMe.",
    });
    return { meta: h.meta, links: h.links };
  },
  component: FounderPage,
});

const PRINCIPLES = [
  {
    n: "01",
    t: "Plain English, not jargon.",
    d: "Executives are entitled to understand what they are approving. Jargon is a failure of explanation, not a sign of depth.",
  },
  {
    n: "02",
    t: "Where AI creates decisions.",
    d: "The work begins with the decision in front of the leadership team — not with the technology, and not with the trend.",
  },
  {
    n: "03",
    t: "Control over convenience.",
    d: "Where information is sensitive, control over the environment matters more than convenience. Private AI is a default, not an upgrade.",
  },
  {
    n: "04",
    t: "Refusal is the product.",
    d: "iMe can only say what the executive has approved. Tested by impersonating his own CFO and asking it to ignore its rules — it refused, every time, in his voice. That refusal is the product.",
  },
  {
    n: "05",
    t: "Studio-grade delivery.",
    d: "Production capability in-house — video, audio, photography, voice — means the standard of the output is never outsourced.",
  },
];

const CAREER = [
  {
    role: "Founder & CEO",
    company: "AI Advisers",
    period: "2016 — Present",
    place: "Dublin",
    detail: "iMe digital humans, iMe Live Trainer, executive briefings, private AI infrastructure.",
  },
  {
    role: "CEO",
    company: "GravityElectricity.Net",
    period: "2017 — 2024",
    place: "Ireland · Hong Kong · Sydney · New York · San Francisco",
    detail:
      "Proved a viable way to produce electricity from gravity (with Trinity College Dublin, Columbia University and Enterprise Ireland). Patent filed.",
  },
  {
    role: "Founder / Managing Creative Director",
    company: "Metropolis Interactive",
    period: "1996 — 2012",
    place: "Dublin · London · New York · Singapore · Sydney",
    detail:
      "Built the early-adopter agency into an international digital business — including large-scale data mining, the forerunner of today's AI.",
  },
  {
    role: "Founder / CEO",
    company: "Ulysses Investments Asia Pacific",
    period: "2004 — 2021",
    place: "Hong Kong",
    detail: "Asia-Pacific investment vehicle.",
  },
  {
    role: "Founder / Managing & Creative Director",
    company: "Virtu Advertising Sydney",
    period: "1992 — 2004",
    place: "Sydney",
    detail:
      "Brand campaigns for Guinness, Visa, Knight Frank, Citibank, Savills, Commonwealth Bank Australia.",
  },
  {
    role: "Founding Chairman & Board Member",
    company: "The Ireland Fund of China",
    period: "2005 — Present",
    place: "China",
    detail: "Cultural and bilateral relations.",
  },
];

const EDUCATION = [
  {
    inst: "The Wharton School",
    detail: "Postgraduate — Artificial Intelligence for Business",
    period: "2021 — 2023",
  },
  {
    inst: "Harvard Innovation Lab (i-lab)",
    detail: "Startup Secrets · Entrepreneurship",
    period: "2019 — 2021",
  },
  { inst: "Macquarie Business School", detail: "MBA — Marketing", period: "" },
  { inst: "University College Dublin", detail: "Bachelor of Fine Arts (BFA)", period: "" },
  { inst: "BBC", detail: "Broadcasting", period: "" },
  { inst: "RTÉ", detail: "TV Presentation · Documentary Making", period: "" },
  { inst: "TAFE NSW", detail: "Advanced Advertising", period: "" },
  { inst: "Blackrock College", detail: "Secondary", period: "" },
];

const BREADCRUMB_GRAPH = graph([breadcrumbListNode("/founder", "Kenn Joyce")]);

function FounderPage() {
  return (
    <>
      <JsonLd data={BREADCRUMB_GRAPH} />
      <PageHero
        eyebrow="Founder & CEO"
        eyebrowTone="terracotta"
        title={
          <>
            Kenn <span className="display-serif italic text-[var(--muted-foreground)]">Joyce.</span>
          </>
        }
        lead="After twenty-five years advising senior executives, Kenn Joyce founded AI Advisers to make AI understandable at the level where consequential decisions are made. Plain English. Non-technical. Strategic."
        actions={
          <>
            <Cta to="/contact">Request a private briefing</Cta>
            <Cta to="/ime" variant="secondary">
              Meet the iMe
            </Cta>
          </>
        }
      />

      {/* Portrait + quote */}
      <SectionShell className="border-b border-[var(--border)]">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <figure className="relative overflow-hidden border border-[var(--border)]">
              <img
                src="/kenn-joyce.jpg"
                alt="Kenn Joyce, Founder and CEO of AI Advisers"
                width={1068}
                height={833}
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/65 via-black/15 to-transparent p-5 text-xs text-white">
                <span>Kenn Joyce · Dublin</span>
                <span className="text-white/75">Founder &amp; CEO</span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="flex flex-col justify-center">
            <Reveal delay={100}>
              <p
                className="display-serif italic text-[1.75rem] leading-snug text-[var(--foreground)] sm:text-[2.25rem]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
              >
                Plain English. No hype. Nothing to be afraid of.
              </p>
              <p className="mt-4 font-sans text-[0.9375rem] text-[var(--muted-foreground)]">
                How Kenn describes the job.
              </p>
              <p className="mt-10 max-w-[54ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
                Kenn works with boards, C-suites and entrepreneurs to cut through the noise and find
                where AI drives real business outcomes. His work starts with one question:{" "}
                <span className="text-[var(--foreground)]">
                  &ldquo;What can AI do for us — now?&rdquo;
                </span>
              </p>
              <p className="mt-6 max-w-[54ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
                For some, the answer is productivity and automation. For others, new business
                models, competitive positioning, or risk. For all of them, it takes leadership that
                balances vision with realism.
              </p>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      {/* Principles */}
      <SectionShell className="border-b border-[var(--border)] bg-[var(--surface)]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="mono-label text-[var(--terracotta)]">Principles</p>
              <h2
                className="display-lg mt-6 max-w-[16ch]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                How Kenn{" "}
                <span className="display-serif italic text-[var(--muted-foreground)]">works.</span>
              </h2>
            </div>
            <ol className="border-t border-[var(--border)]">
              {PRINCIPLES.map((p) => (
                <li
                  key={p.n}
                  className="grid gap-3 border-b border-[var(--border)] py-8 sm:grid-cols-[auto_1fr_2fr] sm:items-baseline sm:gap-8"
                >
                  <span
                    className="font-display text-[var(--terracotta)]"
                    style={{ fontSize: "1.5rem", fontVariationSettings: '"opsz" 36' }}
                  >
                    {p.n}
                  </span>
                  <h3
                    className="font-display text-[1.125rem]"
                    style={{ fontVariationSettings: '"opsz" 36' }}
                  >
                    {p.t}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">{p.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </SectionShell>

      {/* Career */}
      <SectionShell className="border-b border-[var(--border)]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="mono-label text-[var(--terracotta)]">Career</p>
              <h2
                className="display-lg mt-6 max-w-[16ch]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                Twenty-five years{" "}
                <span className="display-serif italic text-[var(--muted-foreground)]">before</span>{" "}
                the AI hype.
              </h2>
              <p className="mt-8 max-w-[44ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
                The founder has been building and operating companies across digital, energy,
                investment and media since the early 1990s — long before AI was a board-level topic.
              </p>
            </div>
            <ol className="border-t border-[var(--border)]">
              {CAREER.map((b) => (
                <li
                  key={b.role + b.company}
                  className="grid gap-2 border-b border-[var(--border)] py-6 sm:grid-cols-[1.4fr_2fr] sm:gap-10"
                >
                  <div>
                    <h3
                      className="font-display text-[1.0625rem]"
                      style={{ fontVariationSettings: '"opsz" 36' }}
                    >
                      {b.role}
                    </h3>
                    <p className="mono-label mt-1 text-[var(--terracotta)]">{b.company}</p>
                    <p className="mono-label mt-2 text-[var(--subtle)]">
                      {b.period} · {b.place}
                    </p>
                  </div>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">{b.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </SectionShell>

      {/* Education */}
      <SectionShell className="border-b border-[var(--border)] bg-[var(--surface)]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="mono-label text-[var(--terracotta)]">Education</p>
              <h2
                className="display-lg mt-6 max-w-[14ch]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                Where the rigour comes from.
              </h2>
            </div>
            <ul className="border-t border-[var(--border)] sm:grid sm:grid-cols-2">
              {EDUCATION.map((e) => (
                <li
                  key={e.inst + e.detail}
                  className="flex flex-col gap-1 border-b border-[var(--border)] py-6 pr-6"
                >
                  <span
                    className="font-display text-[1.0625rem]"
                    style={{ fontVariationSettings: '"opsz" 36' }}
                  >
                    {e.inst}
                  </span>
                  <span className="text-[var(--muted-foreground)]">{e.detail}</span>
                  {e.period && (
                    <span className="mono-label mt-1 text-[var(--subtle)]">{e.period}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
