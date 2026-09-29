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
  path: "/team-training",
  title: "iMe Team Training · Practise your policies together",
  description:
    "Interactive training built from your team’s policies and procedures. Live questions, scenario practice, manager and staff pathways, and quarterly records.",
});
export const Route = createFileRoute("/team-training")({
  head: () => ({ meta: head.meta, links: head.links }),
  component: TeamTraining,
});
function TeamTraining() {
  return (
    <>
      <JsonLd data={graph([breadcrumbListNode("/team-training", "Team training")])} />
      <ProductHero
        eyebrow="iMe for team training"
        title={
          <>
            Your policies.{" "}
            <span className="display-serif italic text-[var(--terracotta)]">
              Practised together.
            </span>
          </>
        }
        lead="Turn policy updates and familiar workplace questions into a live conversation. Your team works through scenarios with an AI tutor built from your approved knowledge, on a shared screen or the devices they already use."
      />
      <ProductSection className="bg-[var(--surface)]">
        <p className="mono-label text-[var(--terracotta)]">A subject your team recognises</p>
        <h2 className="display-md mt-5 max-w-[25ch]">Make the policy useful in the moment.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Ask and practise",
              detail:
                "Staff ask questions in their own words and work through real scenarios based on your procedures and the edge cases your subject expert knows.",
            },
            {
              title: "Reach the whole team",
              detail:
                "Use a group screen for questions from the room, laptops at desks, phones between sites, or an on-floor booth. Training is available in 32 languages.",
            },
            {
              title: "Review the record",
              detail:
                "Completion and transcript records support a quarterly evidence pack. Content is refreshed each quarter as policies change.",
            },
          ].map((item) => (
            <article key={item.title} className="border-t border-[var(--border)] pt-5">
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-[var(--muted-foreground)]">{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-[80ch] leading-relaxed text-[var(--muted-foreground)]">
          For a wider programme, Faculty includes up to four tutors, four subjects built and
          maintained, separate manager and staff pathways, a named contact and an annual review with
          your compliance lead.
        </p>
      </ProductSection>
      <TrainerFilm />
      <TrainingProcess />
      <TrainingDeployment />
      <TrainingPricing />
    </>
  );
}
