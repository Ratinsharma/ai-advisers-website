import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbListNode, graph, pageHead } from "@/seo";
import { JsonLd } from "@/components/site/JsonLd";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { CapabilityCard } from "@/components/site/CapabilityCard";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/private-ai")({
  head: () => {
    const h = pageHead({
      path: "/private-ai",
      title: "Private AI & Bot in a Box — AI Advisers",
      description:
        "Private AI infrastructure for organisations that need greater control: on-premise architecture, air-gapped options and data sovereignty.",
    });
    return { meta: h.meta, links: h.links };
  },
  component: PrivateAi,
});

const ARCH = [
  ["User", "Your team. Your customers. Your partners."],
  ["Private interface", "Hosted in your environment, on your domain."],
  ["Private AI system", "iMe, configured to your approved knowledge."],
  ["Organisational knowledge", "Indexed from your own documents — never shared."],
  ["Client-controlled environment", "On-premise, in your cloud, or fully air-gapped."],
];

const CONCEPTS = [
  "Private deployment",
  "On-premise architecture",
  "Air-gapped options",
  "Organisational knowledge",
  "Dedicated hardware",
  "Local models where applicable",
  "Client control",
];

const BREADCRUMB_GRAPH = graph([breadcrumbListNode("/private-ai", "Private AI")]);

function PrivateAi() {
  return (
    <>
      <JsonLd data={BREADCRUMB_GRAPH} />
      <PageHero
        eyebrow="Private AI"
        eyebrowTone="terracotta"
        title={
          <>
            Your intelligence should not have to{" "}
            <span className="display-serif italic text-[var(--muted-foreground)]">
              leave your business.
            </span>
          </>
        }
        lead="AI infrastructure designed for organisations that need greater control over sensitive information and organisational knowledge."
        actions={<Cta to="/contact">Discuss Private AI</Cta>}
      />

      {/* Architecture */}
      <SectionShell className="border-b border-[var(--border)] bg-[var(--surface)]">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <p className="mono-label text-[var(--terracotta)]">The architecture</p>
              <h2
                className="display-lg mt-6 max-w-[14ch]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                Public cloud
                <br />
                versus{" "}
                <span className="display-serif italic text-[var(--terracotta)]">private AI.</span>
              </h2>
            </div>
            <div>
              <p className="max-w-[50ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
                Public cloud services process information in environments the organisation does not
                control. A private deployment keeps the system and the knowledge inside an
                environment the client defines — with the trade-offs made explicit rather than
                promised away.
              </p>
              <ul className="mt-10 grid gap-px border-t border-[var(--border)] sm:grid-cols-2">
                {CONCEPTS.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 border-b border-[var(--border)] py-4 pr-6 text-[0.95rem] text-[var(--muted-foreground)]"
                  >
                    <span
                      aria-hidden
                      className="block h-1 w-1 rounded-full bg-[var(--foreground)]"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      {/* Stack */}
      <SectionShell className="border-b border-[var(--border)]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p className="mono-label text-[var(--terracotta)]">The stack</p>
              <h2
                className="display-lg mt-6 max-w-[14ch]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                Five layers.{" "}
                <span className="display-serif italic text-[var(--muted-foreground)]">
                  One boundary.
                </span>
              </h2>
              <p className="mt-8 max-w-[42ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
                Every layer stays inside your environment. The boundary is yours to draw.
              </p>
            </div>
            <ol className="border-t border-[var(--border)]">
              {ARCH.map(([t, d], i) => (
                <li
                  key={t}
                  className="grid gap-2 border-b border-[var(--border)] py-6 sm:grid-cols-[auto_1fr_2fr] sm:items-baseline sm:gap-8"
                >
                  <span
                    className="font-display text-[var(--terracotta)]"
                    style={{ fontSize: "1.0625rem", fontVariationSettings: '"opsz" 36' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-display text-[1.0625rem]"
                    style={{ fontVariationSettings: '"opsz" 36' }}
                  >
                    {t}
                  </span>
                  <span className="text-[var(--muted-foreground)]">{d}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </SectionShell>

      {/* Bot in a Box */}
      <SectionShell className="border-b border-[var(--border)] bg-[var(--surface-2)]">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="mono-label text-[var(--terracotta)]">Bot in a Box</p>
              <h2
                className="display-xl mt-8 max-w-[14ch] text-balance"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
              >
                <span className="block">Your own AI.</span>
                <span className="block">
                  <span className="display-serif italic text-[var(--terracotta)]">
                    Under your control.
                  </span>
                </span>
              </h2>
              <p className="mt-8 max-w-[50ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
                Bot in a Box is AI Advisers' private-infrastructure approach: a dedicated, isolated
                AI capability designed to operate inside the client&rsquo;s environment. It can be
                deployed on your hardware, in your cloud, or fully air-gapped.
              </p>
              <ul className="mt-8 space-y-3 text-[var(--muted-foreground)]">
                {[
                  "Dedicated hardware, optionally on-premise",
                  "Approved knowledge base, indexed on your side",
                  "Local models where the use case permits",
                  "Full audit trail; deployable behind your firewall",
                ].map((b) => (
                  <li key={b} className="flex items-baseline gap-3">
                    <span
                      aria-hidden
                      className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[var(--foreground)]"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Cta to="/contact" variant="terracotta">
                  Discuss Private AI
                </Cta>
              </div>
            </div>
            <CapabilityCard
              tall
              title="On your floor, not ours"
              detail="Dedicated hardware, deployed on your premises or behind your firewall. An indexed knowledge base that never leaves your side, and an audit trail you hold."
            />
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
