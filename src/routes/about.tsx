import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbListNode, graph, pageHead } from "@/seo";
import { JsonLd } from "@/components/site/JsonLd";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => {
    const h = pageHead({
      path: "/about",
      title: "About AI Advisers — A founder-led strategic AI partner",
      description:
        "A founder-led strategic AI partner, founded by Kenn Joyce in 2016 after twenty-five years advising senior executives. Strategy, staff training and delivery.",
    });
    return { meta: h.meta, links: h.links };
  },
  component: About,
});

const PRINCIPLES: [string, string][] = [
  ["Clarity", "Plain English at the level where consequential decisions are made."],
  ["Control", "Data sovereignty and organisational control considered from the beginning."],
  ["Human accountability", "AI supports decisions. People remain accountable for them."],
  ["Strategic value", "Work begins with where AI materially improves the business."],
  ["Execution", "Advice is delivered alongside the capability to build it."],
];

const BEFORE = [
  {
    role: "Founder & CEO, AI Advisers",
    period: "2016 — Present",
    detail: "iMe, Live Trainer, executive briefings, private AI.",
  },
  {
    role: "CEO, GravityElectricity.Net",
    period: "2017 — 2024",
    detail:
      "Patented electricity-from-gravity technology with Trinity College Dublin, Columbia University and Enterprise Ireland.",
  },
  {
    role: "Founder & MD, Metropolis Interactive",
    period: "1996 — 2012",
    detail:
      "International digital agency. Dublin, London, New York, Singapore, Sydney. Large-scale data mining — the forerunner of today's AI.",
  },
  {
    role: "Founder & Creative Director, Virtu Advertising Sydney",
    period: "1992 — 2004",
    detail:
      "Brand campaigns for Guinness, Visa, Knight Frank, Citibank, Savills, Commonwealth Bank.",
  },
  {
    role: "Founding Chairman, The Ireland Fund of China",
    period: "2005 — Present",
    detail: "Cultural and bilateral relations across Greater China.",
  },
];

const BREADCRUMB_GRAPH = graph([breadcrumbListNode("/about", "About")]);

function About() {
  return (
    <>
      <JsonLd data={BREADCRUMB_GRAPH} />
      <PageHero
        eyebrow="About AI Advisers"
        eyebrowTone="terracotta"
        title={
          <>
            AI should become clearer as the{" "}
            <span className="display-serif italic text-[var(--muted-foreground)]">
              decisions get bigger.
            </span>
          </>
        }
        lead="AI Advisers is a founder-led strategic AI intelligence partner, not simply an IT vendor — working at the intersection of strategy, executive identity, training, private infrastructure and communications."
        actions={
          <>
            <Cta to="/contact">Request a private briefing</Cta>
            <Cta to="/founder" variant="secondary">
              Meet the founder
            </Cta>
          </>
        }
      />

      {/* Portrait + intro */}
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
              <p className="mono-label text-[var(--terracotta)]">Founder &amp; CEO</p>
              <h2
                className="display-lg mt-6"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                Kenn Joyce
              </h2>
              <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
                After twenty-five years advising senior executives, Kenn Joyce founded AI Advisers
                in 2016 to make AI understandable at the level where consequential decisions are
                made.
              </p>
              <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
                His approach is deliberately plain-English: separate real strategic opportunity from
                hype, identify where control matters, and help leadership move from AI discussion to
                practical action.
              </p>
              <p className="mt-8 border-t border-[var(--border)] pt-5 text-sm text-[var(--muted-foreground)]">
                Postgraduate in AI for Business — The Wharton School · MBA, Macquarie · BFA,
                University College Dublin
              </p>
              <div className="mt-8">
                <Cta to="/founder">Read the full bio</Cta>
              </div>
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
                className="display-lg mt-6 max-w-[14ch]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                How the firm{" "}
                <span className="display-serif italic text-[var(--muted-foreground)]">
                  operates.
                </span>
              </h2>
            </div>
            <ul className="border-t border-[var(--border)]">
              {PRINCIPLES.map(([t, d]) => (
                <li
                  key={t}
                  className="grid gap-3 border-b border-[var(--border)] py-8 sm:grid-cols-[1fr_2fr] sm:gap-10"
                >
                  <h3
                    className="font-display text-[1.25rem]"
                    style={{ fontVariationSettings: '"opsz" 80' }}
                  >
                    {t}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </SectionShell>

      {/* Founder track record */}
      <SectionShell className="border-b border-[var(--border)]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="mono-label text-[var(--terracotta)]">Founder&rsquo;s track record</p>
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
                investment and media since the early 1990s.
              </p>
            </div>
            <ol className="border-t border-[var(--border)]">
              {BEFORE.map((b) => (
                <li
                  key={b.role + b.period}
                  className="grid gap-2 border-b border-[var(--border)] py-6 sm:grid-cols-[1.4fr_2fr] sm:gap-10"
                >
                  <div>
                    <h3
                      className="font-display text-[1.0625rem]"
                      style={{ fontVariationSettings: '"opsz" 36' }}
                    >
                      {b.role}
                    </h3>
                    <p className="mono-label mt-2 text-[var(--subtle)]">{b.period}</p>
                  </div>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">{b.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </SectionShell>

      {/* Manifesto pull-quote */}
      <SectionShell className="border-t border-[var(--border)] bg-[var(--surface-2)]">
        <Reveal>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="mono-label text-[var(--terracotta)]">A position</p>
            <p
              className="display-serif italic mt-8 text-[1.75rem] leading-snug text-[var(--foreground)] sm:text-[2.25rem]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
            >
              &ldquo;AI supports decisions. People remain accountable for them. The technology is a
              tool. Leadership is the craft.&rdquo;
            </p>
            <p className="mono-label mt-8 text-[var(--subtle)]">AI Advisers</p>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
