import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbListNode, graph, pageHead } from "@/seo";
import { JsonLd } from "@/components/site/JsonLd";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { CapabilityCard } from "@/components/site/CapabilityCard";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/studio")({
  head: () => {
    const h = pageHead({
      path: "/studio",
      title: "AI Advisers Studio — Broadcast-grade AI production",
      description:
        "In-house broadcast, video, photography, voice and audio production in Dublin. We own the studios and the kit, so delivery is never outsourced.",
    });
    return { meta: h.meta, links: h.links };
  },
  component: Studio,
});

const CAPABILITIES = [
  "Podcast production",
  "TV and video",
  "AI video and avatars",
  "Executive photography",
  "Branding",
  "Communications",
  "Voiceover and audio",
];

const BREADCRUMB_GRAPH = graph([breadcrumbListNode("/studio", "Studio")]);

function Studio() {
  return (
    <>
      <JsonLd data={BREADCRUMB_GRAPH} />
      <PageHero
        eyebrow="AI Advisers Studio"
        eyebrowTone="terracotta"
        title={
          <>
            The technology is AI.{" "}
            <span className="display-serif italic text-[var(--muted-foreground)]">
              The standard is broadcast.
            </span>
          </>
        }
        lead="In-house production capability for everything an executive AI programme requires — from brand to broadcast. The standard of the output is never outsourced."
        actions={<Cta to="/contact">Brief us on a project</Cta>}
      />

      {/* Wide shot + details */}
      <SectionShell className="border-b border-[var(--border)]">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <CapabilityCard
              title="The floor"
              detail="Two purpose-built rooms in Dublin. One for video and broadcast, one for voice and audio. Both ours, both bookable by you."
            />
            <div className="grid gap-6">
              <CapabilityCard
                title="The kit"
                detail="Broadcast cameras, lighting and a treated room, so a take does not need a second unit."
              />
              <CapabilityCard
                title="The people"
                detail="Directors, editors, engineers and a photographer. Employed, not booked per project."
              />
            </div>
          </div>
        </Reveal>
      </SectionShell>

      {/* Capabilities */}
      <SectionShell className="border-b border-[var(--border)] bg-[var(--surface)]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p className="mono-label text-[var(--terracotta)]">Capabilities</p>
              <h2
                className="display-lg mt-6 max-w-[14ch]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                Seven practices.{" "}
                <span className="display-serif italic text-[var(--muted-foreground)]">
                  One roof.
                </span>
              </h2>
            </div>
            <ul className="border-t border-[var(--border)] sm:grid sm:grid-cols-2">
              {CAPABILITIES.map((c) => (
                <li
                  key={c}
                  className="border-b border-[var(--border)] py-6 pr-6 font-display text-[1.125rem]"
                  style={{ fontVariationSettings: '"opsz" 36' }}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </SectionShell>

      {/* Why in-house */}
      <SectionShell className="border-t border-[var(--border)]">
        <Reveal>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="mono-label text-[var(--terracotta)]">Why in-house</p>
            <p
              className="display-serif italic mt-8 text-[1.75rem] leading-snug text-[var(--foreground)] sm:text-[2.25rem]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
            >
              &ldquo;Production capability in-house means the standard of the output is never
              outsourced.&rdquo;
            </p>
            <p className="mono-label mt-8 text-[var(--subtle)]">Kenn Joyce · Founder</p>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
