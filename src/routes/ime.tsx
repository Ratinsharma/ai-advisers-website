import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { JsonLd } from "@/components/site/JsonLd";
import { Cta } from "@/components/site/Cta";
import {
  ProductHero,
  ProductSection,
  TrainingUses,
  TrainerFilm,
  TrainingProcess,
  TrainingPricing,
  SupportingServices,
} from "@/components/site/ProductSections";
import { breadcrumbListNode, graph, pageHead } from "@/seo";

export const Route = createFileRoute("/ime")({
  head: ({ matches }) => {
    // Child pages own their metadata; otherwise both canonicals would render.
    if (String(matches.at(-1)?.routeId) !== "/ime") return {};
    const head = pageHead({
      path: "/ime",
      title: "iMe · Interactive training and executive presence",
      description:
        "Meet the iMe product family: AI tutors for AI literacy, onboarding and team training, plus executive presence built around approved knowledge.",
    });
    return { meta: head.meta, links: head.links };
  },
  component: Ime,
});
function Ime() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname !== "/ime" && pathname !== "/ime/") return <Outlet />;
  return (
    <>
      <JsonLd data={graph([breadcrumbListNode("/ime", "iMe")])} />
      <ProductHero
        eyebrow="The iMe product family"
        title={
          <>
            Your knowledge.{" "}
            <span className="display-serif italic text-[var(--terracotta)]">
              A live conversation.
            </span>
          </>
        }
        lead="iMe brings your approved knowledge into a conversation. Start with Live Trainer for your workforce, or explore a digital representation of an executive for presentations and live questions."
      />
      <TrainingUses />
      <ProductSection className="bg-[var(--surface)]">
        <div className="grid gap-8 md:grid-cols-2">
          <article>
            <p className="mono-label text-[var(--terracotta)]">Workforce training</p>
            <h2 className="display-md mt-5">iMe Live Trainer</h2>
            <p className="mb-6 mt-5 max-w-[54ch] leading-relaxed text-[var(--muted-foreground)]">
              A tutor built from your policies, procedures and subject expert. Staff practise
              scenarios in 32 languages, with completion and transcript records.
            </p>
            <Cta to="/live-trainer">Explore Live Trainer</Cta>
          </article>
          <article className="border-t border-[var(--border)] pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="mono-label text-[var(--terracotta)]">Executive presence</p>
            <h2 className="display-md mt-5">iMe Executive</h2>
            <p className="mb-6 mt-5 max-w-[54ch] leading-relaxed text-[var(--muted-foreground)]">
              A photorealistic, voice-matched digital representation of a leader. Presentations,
              briefings and live questions based on approved material.
            </p>
            <Cta to="/ime/executive" variant="secondary">
              Explore iMe Executive
            </Cta>
          </article>
        </div>
      </ProductSection>
      <TrainerFilm />
      <TrainingProcess />
      <TrainingPricing />
      <SupportingServices />
    </>
  );
}
