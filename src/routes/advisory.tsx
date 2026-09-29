import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbListNode, graph, pageHead } from "@/seo";
import { JsonLd } from "@/components/site/JsonLd";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/advisory")({
  head: () => {
    const h = pageHead({
      path: "/advisory",
      title: "Boardroom AI Advisory — AI Advisers",
      description:
        "Plain-English strategic advice for leaders deciding what AI means for their organisation: readiness, opportunity, risk, workforce and deployment.",
    });
    return { meta: h.meta, links: h.links };
  },
  component: Advisory,
});

const PATHS: [string, string][] = [
  ["Value", "Where can AI materially improve the business?"],
  ["Risk", "Which information, decisions and processes require greater control?"],
  ["People", "Which activities should move from repetitive work to higher-value human roles?"],
  [
    "Revenue",
    "Can existing knowledge, IP, content or operational expertise create new AI-enabled opportunities?",
  ],
];

const SCOPE = [
  "AI readiness",
  "Opportunity mapping",
  "Business-model impact",
  "AI risk",
  "Workforce implications",
  "Existing IP",
  "Revenue opportunities",
  "Private deployment",
  "Implementation priorities",
];

const BREADCRUMB_GRAPH = graph([breadcrumbListNode("/advisory", "Boardroom AI Advisory")]);

function Advisory() {
  return (
    <>
      <JsonLd data={BREADCRUMB_GRAPH} />
      <PageHero
        eyebrow="Boardroom intelligence"
        eyebrowTone="terracotta"
        title={
          <>
            AI at{" "}
            <span className="display-serif italic text-[var(--muted-foreground)]">
              board level.
            </span>
          </>
        }
        lead="Plain-English strategic advice for leaders deciding what AI means for their organisation. Founder-led. Twenty-five years of boardroom experience."
        actions={<Cta to="/contact">Begin an advisory conversation</Cta>}
      />

      {/* The 4 paths */}
      <SectionShell className="border-b border-[var(--border)] bg-[var(--surface)]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="mono-label text-[var(--terracotta)]">Four lines of inquiry</p>
              <h2
                className="display-lg mt-6 max-w-[14ch]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                Clarity.{" "}
                <span className="display-serif italic text-[var(--muted-foreground)]">
                  Not complexity.
                </span>
              </h2>
            </div>
            <div className="grid gap-px border-t border-[var(--border)] sm:grid-cols-2">
              {PATHS.map(([t, d]) => (
                <div key={t} className="border-b border-[var(--border)] py-10 pr-6">
                  <h3
                    className="mono-label text-[var(--terracotta)]"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {t}
                  </h3>
                  <p className="mt-5 max-w-[36ch] text-[1.0625rem] leading-relaxed text-[var(--foreground)]">
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </SectionShell>

      {/* Engagement scope */}
      <SectionShell className="border-b border-[var(--border)]">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="mono-label text-[var(--terracotta)]">What an engagement covers</p>
              <h2
                className="display-lg mt-6 max-w-[16ch]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                Nine lines.{" "}
                <span className="display-serif italic text-[var(--muted-foreground)]">
                  One outcome.
                </span>
              </h2>
              <p className="mt-8 max-w-[42ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
                Founder-led throughout. The executive briefing is the usual starting point — a
                confidential conversation with Kenn Joyce.
              </p>
              <div className="mt-10">
                <Cta to="/contact" variant="terracotta">
                  Request an executive briefing
                </Cta>
              </div>
            </div>
            <ul className="order-1 grid gap-px border-t border-[var(--border)] sm:grid-cols-2 lg:order-2">
              {SCOPE.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 border-b border-[var(--border)] py-5 pr-6 text-[0.95rem] text-[var(--muted-foreground)]"
                >
                  <span aria-hidden className="block h-1 w-1 rounded-full bg-[var(--foreground)]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </SectionShell>

      {/* Closing note */}
      <SectionShell className="border-t border-[var(--border)] bg-[var(--surface-2)]">
        <Reveal>
          <div className="max-w-[820px]">
            <p className="mono-label text-[var(--terracotta)]">A final note</p>
            <p
              className="display-serif italic mt-8 text-[1.5rem] leading-snug text-[var(--foreground)] sm:text-[2rem]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
            >
              &ldquo;The work begins with the decision in front of the leadership team — not with
              the technology, and not with the trend.&rdquo;
            </p>
            <p className="mono-label mt-8 text-[var(--subtle)]">Kenn Joyce · Founder</p>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
