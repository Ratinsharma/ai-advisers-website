import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbListNode, graph, pageHead } from "@/seo";
import { JsonLd } from "@/components/site/JsonLd";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { HeroPortrait } from "@/components/site/HeroPortrait";
import { Reveal } from "@/components/site/Reveal";
import { FilmPoster } from "@/components/site/ProductSections";
import { fact, formatDate } from "@/content/regulatory";

const ART4 = fact("art4-ai-literacy");
const ART50 = fact("art50-transparency");

export const Route = createFileRoute("/ime/executive")({
  head: () => {
    const h = pageHead({
      path: "/ime/executive",
      title: "iMe — The executive AI that refuses to lie — AI Advisers",
      description:
        "iMe is a controlled digital representation of a leader. It speaks only what you have approved, in 32 languages, and records every interaction.",
    });
    return { meta: h.meta, links: h.links };
  },
  component: Ime,
});

const BUILD: [string, string][] = [
  ["Voice", "Voice captured and matched to the executive."],
  ["Visual likeness", "Photorealistic capture in the AI Advisers in-house studio."],
  ["Approved knowledge", "Only material the organisation has reviewed and approved."],
  ["32 languages", "Interaction across languages, with consistent voice and tone."],
  ["Live engagement", "Real question and answer, not a recorded video."],
  ["Private deployment", "Knowledge stays on your premises, your cloud, or your air-gap."],
];

function YouTubeEmbed({ id, title, eyebrow }: { id: string; title: string; eyebrow?: string }) {
  return (
    <FilmPoster
      href={`https://www.youtube.com/watch?v=${id}`}
      title={title}
      eyebrow={eyebrow ?? "Watch the product demonstration"}
    />
  );
}

const BREADCRUMB_GRAPH = graph([breadcrumbListNode("/ime/executive", "iMe Executive")]);

function Ime() {
  return (
    <>
      <JsonLd data={BREADCRUMB_GRAPH} />
      <PageHero
        eyebrow="Executive presence"
        eyebrowTone="terracotta"
        title={
          <>
            Your presence.{" "}
            <span className="display-serif italic text-[var(--muted-foreground)]">
              Beyond your calendar.
            </span>
          </>
        }
        lead="iMe is a photorealistic, voice-matched digital representation of an executive that presents, interacts and answers questions — using only what you have approved."
        actions={
          <>
            <Cta to="https://ime.ceo/trainer.html#enquire" external>
              Request a demonstration
            </Cta>
            <Cta to="/live-trainer" variant="secondary">
              See Live Trainer
            </Cta>
          </>
        }
      />

      {/* The 2-minute film */}
      <SectionShell className="!py-16 lg:!py-20 border-b border-[var(--border)]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <YouTubeEmbed
              id="mrm-ZLzsg44"
              title="iMe — Meet the other Kenn Joyce"
              eyebrow="Watch · 2-minute film"
            />
          </Reveal>
          <div className="flex flex-col justify-center">
            <Reveal delay={100}>
              <p className="mono-label text-[var(--terracotta)]">The 2-minute film</p>
              <h2
                className="display-lg mt-6 max-w-[18ch]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                <span className="block">Kenn handed</span>
                <span className="block">
                  <span className="display-serif italic text-[var(--terracotta)]">his face</span> to
                  an AI.
                </span>
              </h2>
              <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
                Everyone asks the same question: what if it says something you never said? So Kenn
                tried to make it. He impersonated his own CFO. He asked it for figures the company
                had never published. It refused. Every time. Politely, in his voice.{" "}
                <span className="display-serif italic text-[var(--foreground)]">
                  That refusal is the product.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      {/* Executive + iMe resolve */}
      <SectionShell className="!py-16 lg:!py-20 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <HeroPortrait />
          </Reveal>
          <div className="flex flex-col justify-center">
            <Reveal delay={100}>
              <p className="mono-label text-[var(--terracotta)]">The two versions</p>
              <h2
                className="display-lg mt-6 max-w-[18ch]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                The executive,{" "}
                <span className="display-serif italic text-[var(--muted-foreground)]">
                  and everywhere
                </span>{" "}
                the executive can&rsquo;t be.
              </h2>
              <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
                iMe is built from approved likeness, approved voice and approved knowledge. It
                presents, answers and engages — without pretending to be anything other than a
                controlled digital representation. Knowledge stays on your premises. Tested before
                launch. Signed off by you.
              </p>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      {/* EU AI Act — Trainer edition */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-2)] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
              <div>
                <p className="mono-label text-[var(--terracotta)]">EU AI Act · Trainer edition</p>
                <h2
                  className="display-xl mt-10 max-w-[14ch] text-balance"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
                >
                  <span className="block">iMe Trainer,</span>
                  <span className="block">
                    built for the{" "}
                    <span className="display-serif italic text-[var(--terracotta)]">
                      EU AI Act.
                    </span>
                  </span>
                </h2>
              </div>

              <div>
                <Reveal delay={120}>
                  <YouTubeEmbed
                    id="wnA1YZsQgNc"
                    title="iMe EU AI Act Trainer"
                    eyebrow="New · Trainer edition"
                  />
                </Reveal>
                <Reveal delay={200}>
                  <p className="mt-8 max-w-[44ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
                    {`Transparency duties have applied to interactive AI since ${formatDate(ART50.enforcedFrom ?? ART50.appliesFrom)}, and AI literacy is supervised by ${ART4.authority.toLowerCase()}. iMe is built so the record already exists — disclosure, approved knowledge, and a full interaction log, by design rather than retrofit.`}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {[
                      ["Disclosure by design.", "Users know they are speaking to iMe."],
                      ["Approved knowledge only.", "The model refuses anything outside the brief."],
                      [
                        "Auditable.",
                        "Every interaction is recorded for the implemented training model.",
                      ],
                      ["On your terms.", "Deploy on premises, in your cloud, or air-gapped."],
                    ].map(([k, v]) => (
                      <li
                        key={k}
                        className="grid gap-2 border-t border-[var(--foreground)]/15 pt-4 sm:grid-cols-[1fr_1.6fr] sm:gap-8"
                      >
                        <span
                          className="font-display"
                          style={{ fontSize: "1.0625rem", fontVariationSettings: '"opsz" 36' }}
                        >
                          {k}
                        </span>
                        <span className="text-[var(--muted-foreground)]">{v}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Cta to="https://ime.ceo/trainer.html#enquire" external variant="terracotta">
                      Discuss an EU AI Act pilot
                    </Cta>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it's built */}
      <SectionShell className="!py-16 lg:!py-20">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p className="mono-label text-[var(--terracotta)]">How it&rsquo;s built</p>
              <h2
                className="display-lg mt-6 max-w-[14ch]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                How the identity is created.
              </h2>
            </div>
            <dl className="border-t border-[var(--border)]">
              {BUILD.map(([t, d]) => (
                <div
                  key={t}
                  className="grid gap-3 border-b border-[var(--border)] py-8 sm:grid-cols-[1fr_2fr] sm:gap-10"
                >
                  <dt
                    className="font-display"
                    style={{ fontSize: "1.1875rem", fontVariationSettings: '"opsz" 80' }}
                  >
                    {t}
                  </dt>
                  <dd className="text-[var(--muted-foreground)] leading-relaxed">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </SectionShell>

      {/* Use cases + sample prompts */}
      <SectionShell className="!py-16 lg:!py-20 border-t border-[var(--border)] bg-[var(--surface)]">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <div>
              <p className="mono-label text-[var(--terracotta)]">Use cases</p>
              <h2 className="display-md mt-6 max-w-[18ch]">Where iMe shows up.</h2>
              <ul className="mt-10 grid gap-px border-t border-[var(--border)] sm:grid-cols-2">
                {[
                  "Executive communications",
                  "Investor briefings",
                  "All-hands presentations",
                  "Multilingual engagement",
                  "Conference booths",
                  "Internal training at scale",
                ].map((u) => (
                  <li
                    key={u}
                    className="border-b border-[var(--border)] py-5 pr-6 font-display text-[1.0625rem]"
                    style={{ fontVariationSettings: '"opsz" 36' }}
                  >
                    {u}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--background)] p-8">
              <p className="mono-label text-[var(--terracotta)]">Sample prompts</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                Illustrative. A live interactive session is arranged as part of a demonstration.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Tell me about our strategy.",
                  "Explain this in French.",
                  "What have I approved you to discuss?",
                  "Summarise this for my leadership team.",
                ].map((p) => (
                  <li
                    key={p}
                    className="border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] display-serif italic"
                    style={{ fontVariationSettings: '"opsz" 36, "WONK" 1' }}
                  >
                    &ldquo;{p}&rdquo;
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Cta to="https://ime.ceo/trainer.html#enquire" external>
                  Request a demonstration
                </Cta>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
