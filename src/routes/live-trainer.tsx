import { createFileRoute } from "@tanstack/react-router";
import { JsonLd } from "@/components/site/JsonLd";
import {
  ProductHero,
  ProductSection,
  TrainingUses,
  TrainerFilm,
  TrainingProcess,
  TrainingDeployment,
  TrainingPricing,
} from "@/components/site/ProductSections";
import { breadcrumbListNode, graph, pageHead, trainerProductNode } from "@/seo";
import { PRODUCT_DESCRIPTION, SEGMENTS } from "@/content/product";
const head = pageHead({
  path: "/live-trainer",
  title: "iMe Live Trainer · Training that answers back",
  description: PRODUCT_DESCRIPTION,
});
export const Route = createFileRoute("/live-trainer")({
  head: () => ({ meta: head.meta, links: head.links }),
  component: LiveTrainer,
});
function LiveTrainer() {
  return (
    <>
      <JsonLd
        data={graph([
          trainerProductNode({ description: PRODUCT_DESCRIPTION, faq: [] }),
          breadcrumbListNode("/live-trainer", "iMe Live Trainer"),
        ])}
      />
      <ProductHero
        sample
        title={
          <>
            Training that{" "}
            <span className="display-serif italic text-[var(--terracotta)]">answers back.</span>
          </>
        }
        lead="We build an interactive AI tutor from your own policies and subject expert. Your people ask questions out loud, practise scenarios and receive training in 32 languages. You approve the knowledge and review the tutor before deployment."
        secondary={false}
      />
      <TrainingUses />
      <TrainerFilm />
      <TrainingProcess />
      <TrainingDeployment />
      <ProductSection>
        <p className="mono-label text-[var(--terracotta)]">Built around your team</p>
        <h2 className="display-md mt-5">The subject changes. The conversation stays useful.</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SEGMENTS.map((segment) => (
            <article key={segment.name} className="border-t border-[var(--border)] pt-5">
              <h3 className="font-display text-xl">{segment.name}</h3>
              <p className="mt-3 leading-relaxed text-[var(--muted-foreground)]">
                {segment.detail}
              </p>
            </article>
          ))}
        </div>
      </ProductSection>
      <TrainingPricing />
    </>
  );
}
