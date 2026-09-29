import { createFileRoute } from "@tanstack/react-router";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbListNode, graph, pageHead } from "@/seo";

const LITERACY_SOURCE =
  "https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers";

const PRACTICE = [
  {
    title: "Know the tools",
    detail: "Start with the AI systems your team actually uses and the tasks they support.",
  },
  {
    title: "Practise the decisions",
    detail:
      "Use workplace scenarios: checking an invented answer, protecting sensitive information and knowing when to ask a person for help.",
  },
  {
    title: "Review what worked",
    detail:
      "Discuss the difficult questions with your subject expert and update the guidance when your tools or policies change.",
  },
];

const PAGE_GRAPH = graph([breadcrumbListNode("/eu-ai-act", "AI literacy")]);

export const Route = createFileRoute("/eu-ai-act")({
  head: () => {
    const h = pageHead({
      path: "/eu-ai-act",
      title: "AI literacy for your team | AI Advisers",
      description:
        "A practical AI literacy use case for iMe Live Trainer, with European Commission guidance and a clear distinction between learning records and compliance.",
    });
    return { meta: h.meta, links: h.links };
  },
  component: EuAiAct,
});

function EuAiAct() {
  return (
    <>
      <JsonLd data={PAGE_GRAPH} />
      <PageHero
        eyebrow="AI literacy"
        eyebrowTone="terracotta"
        title={
          <>
            Help your team use AI with{" "}
            <span className="display-serif italic text-[var(--muted-foreground)]">
              better judgement.
            </span>
          </>
        }
        lead="Turn your organisation’s AI guidance into conversations people can practise. AI literacy is one use case for iMe Live Trainer."
        actions={
          <>
            <Cta to="https://ime.ceo/trainer.html#enquire" external variant="terracotta">
              Book a trainer demonstration (opens in a new tab)
            </Cta>
            <Cta to="/live-trainer" variant="secondary">
              Explore Live Trainer
            </Cta>
          </>
        }
        meta={
          <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
            Draft for review · Guidance checked <time dateTime="2026-09-29">29 September 2026</time>
            . This explanation does not change your contract or the product’s privacy terms.
          </p>
        }
      />

      <SectionShell className="border-b border-[var(--border)]" narrow>
        <Reveal>
          <p className="mono-label text-[var(--terracotta)]">The guidance</p>
          <h2 className="display-lg mt-8 max-w-[22ch] text-balance">
            Build literacy around the work.
          </h2>
          <div className="mt-8 max-w-[62ch] space-y-5 leading-relaxed text-[var(--muted-foreground)]">
            <p>
              The Commission’s current FAQ describes Article 4 as requiring providers and deployers
              to support AI literacy among staff and others using AI on their behalf. Measures
              should reflect people’s experience and the context of use.
            </p>
            <p>
              It says no specific individual literacy level, course format or certificate is
              prescribed. Internal records can document training and guidance initiatives.
            </p>
            <a
              href={LITERACY_SOURCE}
              className="link-underline inline-block text-[var(--foreground)]"
            >
              Read the European Commission’s AI literacy FAQ
            </a>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="border-b border-[var(--border)] bg-[var(--surface-2)]">
        <Reveal>
          <p className="mono-label text-[var(--terracotta)]">A practical programme</p>
          <h2 className="display-lg mt-8 max-w-[22ch] text-balance">
            Start with your tools and policies.
          </h2>
          <p className="mt-8 max-w-[62ch] leading-relaxed text-[var(--muted-foreground)]">
            These are examples of learning activities to discuss when planning your programme. Your
            organisation decides the content, participants and review process.
          </p>
        </Reveal>
        <ol className="mt-12 grid gap-8 lg:grid-cols-3">
          {PRACTICE.map((item, index) => (
            <li key={item.title} className="border-t border-[var(--border-strong)] pt-6">
              <span className="mono-label text-[var(--terracotta)]" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">{item.detail}</p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell className="border-b border-[var(--border)]" narrow>
        <Reveal>
          <p className="mono-label text-[var(--terracotta)]">Where the trainer fits</p>
          <h2 className="display-lg mt-8 max-w-[22ch] text-balance">
            Practise, ask questions, keep learning.
          </h2>
          <div className="mt-8 max-w-[62ch] space-y-5 leading-relaxed text-[var(--muted-foreground)]">
            <p>
              Live Trainer is built around your policies and subject expertise. People can ask
              questions and work through scenarios in a conversation. Discuss the learning records
              and deployment you need during the demonstration.
            </p>
            <p>
              A trainer or attendance record does not certify compliance. High-risk AI oversight has
              separate requirements. The Commission also cautions that copying an example from its
              literacy repository does not automatically establish compliance.
            </p>
            <a
              href={LITERACY_SOURCE}
              className="link-underline inline-block text-[var(--foreground)]"
            >
              See the Commission’s guidance on records and high-risk oversight
            </a>
            <p>
              Before introducing recorded training, review the{" "}
              <a
                href="https://ime.ceo/privacy.html"
                className="link-underline text-[var(--foreground)]"
              >
                iMe privacy notice
              </a>{" "}
              and agree the arrangements for your team.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Cta to="https://ime.ceo/trainer.html#enquire" external variant="terracotta">
              Book a demonstration (opens in a new tab)
            </Cta>
            <Cta to="/contact" variant="secondary">
              Discuss your programme
            </Cta>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
