import { createFileRoute } from "@tanstack/react-router";
import { JsonLd } from "@/components/site/JsonLd";
import { TrackRecord } from "@/components/site/TrackRecord";
import {
  ProductHero,
  TrainingUses,
  TrainerFilm,
  TrainingProcess,
  TrainingDeployment,
  TrainingPricing,
  SupportingServices,
} from "@/components/site/ProductSections";
import {
  breadcrumbListNode,
  graph,
  organizationNode,
  pageHead,
  personNode,
  professionalServiceNode,
  trainerProductNode,
  websiteNode,
} from "@/seo";
import { PRODUCT_DESCRIPTION } from "@/content/product";

const head = pageHead({
  path: "/",
  title: "AI Advisers · iMe training, advisory & private AI",
  description:
    "Interactive AI tutors built from your own policies for AI literacy, onboarding and team training. 32 languages, client-approved knowledge and training records.",
});
const schema = graph([
  organizationNode(),
  websiteNode(),
  professionalServiceNode(),
  personNode(),
  trainerProductNode({ description: PRODUCT_DESCRIPTION, faq: [] }),
  breadcrumbListNode("/", "Home"),
]);
export const Route = createFileRoute("/")({
  head: () => ({ meta: head.meta, links: head.links }),
  component: Home,
});

function Home() {
  return (
    <>
      <JsonLd data={schema} />
      <ProductHero
        sample
        title={
          <>
            Training that{" "}
            <span className="display-serif italic text-[var(--terracotta)]">answers back.</span>
          </>
        }
        lead="An interactive AI tutor built from your policies and your subject expert. Staff ask questions, practise real scenarios and learn in their own language. You review the knowledge before it goes live, and receive a record of the training."
      />
      <TrainingUses />
      <TrainerFilm />
      <TrainingProcess />
      <TrainingDeployment />
      <TrainingPricing />
      <SupportingServices />
      <div className="[&_section]:!py-16 lg:[&_section]:!py-20">
        <TrackRecord />
      </div>
    </>
  );
}
