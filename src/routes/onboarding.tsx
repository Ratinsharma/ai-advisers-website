import { createFileRoute } from "@tanstack/react-router";
import { JsonLd } from "@/components/site/JsonLd";
import {
  ProductHero,
  ProductSection,
  TrainerFilm,
  TrainingProcess,
  TrainingDeployment,
  TrainingPricing,
} from "@/components/site/ProductSections";
import { breadcrumbListNode, graph, pageHead } from "@/seo";
const head = pageHead({
  path: "/onboarding",
  title: "iMe Onboarding · A tutor for your new starters",
  description:
    "Help new starters learn your policies and procedures through live questions and scenario practice. Client-approved knowledge, 32 languages and training records.",
});
export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: head.meta, links: head.links }),
  component: Onboarding,
});
function Onboarding() {
  return (
    <>
      <JsonLd data={graph([breadcrumbListNode("/onboarding", "Onboarding")])} />
      <ProductHero
        eyebrow="iMe for onboarding"
        title={
          <>
            New starters.{" "}
            <span className="display-serif italic text-[var(--terracotta)]">Real questions.</span>
          </>
        }
        lead="Give new people a tutor they can ask about your policies, procedures and everyday scenarios. Built from your subject expert and approved material, iMe makes induction a conversation in the learner’s own language."
      />
      <ProductSection>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="mono-label text-[var(--terracotta)]">From policy to practice</p>
            <h2 className="display-md mt-5 max-w-[20ch]">
              Explain the work before the first awkward moment.
            </h2>
          </div>
          <div>
            <p className="max-w-[65ch] leading-relaxed text-[var(--muted-foreground)]">
              Start with one subject: your code of conduct, site rules, safety procedures or
              client-care policies. We interview the person who knows it best and build scenarios
              from your organisation’s own material.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "New starters ask questions out loud, in their own words.",
                "The tutor can be a synthetic human or a representation of one of your own people.",
                "You test the conversation and approve the content before launch.",
                "Completion and transcript records feed the quarterly evidence pack.",
              ].map((text) => (
                <li key={text} className="border-t border-[var(--border)] pt-4 leading-relaxed">
                  {text}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[var(--muted-foreground)]">
              Illustrative subjects. The curriculum and scenarios are agreed with you.
            </p>
          </div>
        </div>
      </ProductSection>
      <TrainerFilm />
      <TrainingProcess />
      <TrainingDeployment />
      <TrainingPricing />
    </>
  );
}
