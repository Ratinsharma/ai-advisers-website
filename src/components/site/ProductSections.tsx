import type { ReactNode } from "react";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";
import { BUILD_STEPS, DEPLOYMENTS, TRIAL_OFFER } from "@/content/product";

export const PRODUCT_ENQUIRY = "https://ime.ceo/trainer.html#enquire";
export const PRODUCT_PRIVACY = "https://ime.ceo/privacy.html";

export function ProductSection({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`border-b border-[var(--border)] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 ${className}`}
    >
      <div className="mx-auto max-w-[1440px]">{children}</div>
    </section>
  );
}

export function ProductHero({
  eyebrow = "iMe Live Trainer",
  title,
  lead,
  secondary = true,
  sample = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead: string;
  secondary?: boolean;
  sample?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] px-5 pb-12 pt-28 sm:px-8 lg:px-12 lg:pb-16 lg:pt-36">
      <div className="paper-grid pointer-events-none absolute inset-0 opacity-30" />
      <div
        className={
          "relative mx-auto max-w-[1440px] " +
          (sample ? "grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr]" : "")
        }
      >
        <div>
          <p className="eyebrow-pill text-[var(--terracotta)]">{eyebrow}</p>
          <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(2.8rem,5.6vw,5.2rem)] leading-[1.04] tracking-[-0.04em] text-balance">
            {title}
          </h1>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
            {lead}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Cta to={PRODUCT_ENQUIRY} external variant="terracotta">
              Book a demonstration
            </Cta>
            <Cta to={PRODUCT_ENQUIRY} external variant="secondary">
              Try it on one policy
            </Cta>
            {secondary && (
              <Cta to="/live-trainer" variant="text">
                Explore the trainer
              </Cta>
            )}
          </div>
          <p className="mt-4 text-sm text-[var(--muted-foreground)]">
            Built from your policies. Reviewed by you. In 32 languages.
          </p>
        </div>
        {sample && (
          <figure className="mx-auto w-full max-w-[390px] border border-[var(--border)] bg-[var(--surface)] p-2">
            <img
              src="/avatars/corporate-library.jpg"
              alt="An existing synthetic iMe tutor presented in a library"
              width={1024}
              height={1024}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="px-3 py-3 text-xs leading-relaxed text-[var(--muted-foreground)]">
              An existing iMe tutor example. Synthetic presenter.
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

const USES = [
  {
    to: "/eu-ai-act",
    title: "EU AI literacy",
    text: "Help people practise using AI in the context of their roles, with your approved policies and a record of the training.",
  },
  {
    to: "/onboarding",
    title: "Onboarding",
    text: "Give new starters a tutor they can ask about your policies, procedures and everyday scenarios, in their own language.",
  },
  {
    to: "/team-training",
    title: "Team training",
    text: "Make policy updates and scenario practice available to a whole team, at a desk, on a phone or on the floor.",
  },
];

export function TrainingUses() {
  return (
    <ProductSection>
      <Reveal>
        <p className="mono-label text-[var(--terracotta)]">Three uses. Your own knowledge.</p>
        <h2 className="display-md mt-5">What does your team need to learn?</h2>
      </Reveal>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {USES.map((use, i) => (
          <article
            key={use.to}
            className="flex flex-col border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
          >
            <p className="mono-label text-[var(--terracotta)]">0{i + 1}</p>
            <h3 className="mt-4 font-display text-2xl">{use.title}</h3>
            <p className="mb-7 mt-4 leading-relaxed text-[var(--muted-foreground)]">{use.text}</p>
            <div className="mt-auto">
              <Cta to={use.to} variant="text">
                Explore {use.title.toLowerCase()}
              </Cta>
            </div>
          </article>
        ))}
      </div>
    </ProductSection>
  );
}

export function FilmPoster({
  href = "https://www.youtube.com/watch?v=wnA1YZsQgNc",
  title = "iMe Trainer demonstration",
  eyebrow = "Watch the product demonstration",
}: {
  href?: string;
  title?: string;
  eyebrow?: string;
}) {
  return (
    <figure className="overflow-hidden border border-[var(--border)] bg-[var(--foreground)]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-video overflow-hidden"
        aria-label={`Watch ${title} (opens in a new tab)`}
      >
        <img
          src={
            href.includes("wnA1YZsQgNc") ? "/avatars/academy-trainer-female.jpg" : "/kenn-joyce.jpg"
          }
          alt={
            href.includes("wnA1YZsQgNc")
              ? "Existing synthetic iMe tutor example"
              : "Kenn Joyce, founder of AI Advisers"
          }
          width={1068}
          height={833}
          loading="lazy"
          className="h-full w-full object-cover object-[center_25%] opacity-70 transition-opacity group-hover:opacity-90"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--background)] text-2xl text-[var(--foreground)]"
        >
          ▶
        </span>
        <span className="absolute bottom-5 left-5 right-5 font-display text-xl text-white sm:text-3xl">
          {title}
        </span>
      </a>
      <figcaption className="flex flex-wrap items-center justify-between gap-2 px-5 py-4 text-xs text-[var(--background)]">
        <span className="mono-label">{eyebrow}</span>
        <span>
          {href.includes("wnA1YZsQgNc") ? "Synthetic tutor example · " : ""}Opens on YouTube ↗
        </span>
      </figcaption>
    </figure>
  );
}

export function TrainerFilm() {
  return (
    <ProductSection className="bg-[var(--surface)]">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="mono-label text-[var(--terracotta)]">See the conversation</p>
          <h2 className="display-md mt-5 max-w-[20ch]">Meet a tutor that answers back.</h2>
          <p className="mt-5 max-w-[50ch] leading-relaxed text-[var(--muted-foreground)]">
            Staff ask questions out loud and work through scenarios drawn from your own material.
            Watch the existing demonstration, then try a tutor built around one of your policies.
          </p>
          <p className="mt-4 text-sm text-[var(--muted-foreground)]">Opens on YouTube.</p>
        </div>
        <FilmPoster />
      </div>
    </ProductSection>
  );
}

export function TrainingProcess() {
  return (
    <ProductSection>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="mono-label text-[var(--terracotta)]">How it works</p>
          <h2 className="display-md mt-5 max-w-[18ch]">
            Your subject. Your approval. A working tutor.
          </h2>
          <p className="mt-5 max-w-[45ch] leading-relaxed text-[var(--muted-foreground)]">
            We interview your subject expert, build the curriculum and scenarios, and produce the
            tutor. You review the knowledge and test the conversation before it goes live.
          </p>
        </div>
        <ol className="border-t border-[var(--border)]">
          {BUILD_STEPS.map((step) => (
            <li
              key={step.week}
              className="grid gap-2 border-b border-[var(--border)] py-5 sm:grid-cols-[6rem_1fr]"
            >
              <span className="mono-label text-[var(--terracotta)]">{step.week}</span>
              <div>
                <h3 className="font-display text-xl">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-[var(--muted-foreground)]">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </ProductSection>
  );
}

export function TrainingDeployment() {
  return (
    <ProductSection className="bg-[var(--surface)]">
      <p className="mono-label text-[var(--terracotta)]">
        32 languages. Four ways to reach people.
      </p>
      <h2 className="display-md mt-5 max-w-[24ch]">
        Bring training to the places your team works.
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {DEPLOYMENTS.map((item) => (
          <article key={item.name} className="border-t border-[var(--border)] pt-5">
            <h3 className="font-display text-xl">{item.name}</h3>
            <p className="mt-3 leading-relaxed text-[var(--muted-foreground)]">{item.detail}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 border-t border-[var(--border)] pt-5">
        <p className="max-w-[80ch] leading-relaxed text-[var(--muted-foreground)]">
          Completion and transcript records support a quarterly evidence pack. Multi-site
          deployments and on-floor booths are quoted separately.
        </p>
        <a
          href={PRODUCT_PRIVACY}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm underline underline-offset-4"
        >
          Read the product privacy notice ↗
        </a>
      </div>
    </ProductSection>
  );
}

export function TrainingPricing() {
  return (
    <ProductSection id="pricing">
      <p className="mono-label text-[var(--terracotta)]">The investment</p>
      <h2 className="display-md mt-5">Start with one subject. Build a faculty.</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <article className="border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
          <h3 className="font-display text-2xl">First tutor</h3>
          <p className="mt-5 font-display text-4xl">€6,500</p>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            One subject · about four weeks
          </p>
          <p className="mt-5 leading-relaxed text-[var(--muted-foreground)]">
            Knowledge interview, curriculum, a synthetic tutor or one based on your own person,
            scenario practice, deployment, and completion and transcript records.
          </p>
          <p className="mt-5 border-t border-[var(--border)] pt-4">
            Additional subjects: <strong>€4,000</strong> each.
          </p>
        </article>
        <article className="border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
          <h3 className="font-display text-2xl">Keep it live</h3>
          <p className="mt-5 font-display text-4xl">€499</p>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Per tutor, per month · after the build
          </p>
          <p className="mt-5 leading-relaxed text-[var(--muted-foreground)]">
            Hosting, voice and usage, quarterly content refresh as policies change, and a quarterly
            evidence pack.
          </p>
        </article>
        <article className="border border-[var(--terracotta)] bg-[var(--surface-2)] p-6 sm:p-8">
          <h3 className="font-display text-2xl">Faculty</h3>
          <p className="mt-5 font-display text-4xl">€24,000</p>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Per year · up to four tutors · all inclusive
          </p>
          <ul className="mt-5 space-y-3 leading-relaxed text-[var(--muted-foreground)]">
            <li>Four subjects built and maintained</li>
            <li>Separate manager and staff pathways</li>
            <li>A named contact</li>
            <li>Annual review with your compliance lead</li>
          </ul>
        </article>
      </div>
      <p className="mt-5 text-sm text-[var(--muted-foreground)]">
        Multi-site deployments and on-floor booths are quoted separately.
      </p>
      <div className="mt-9 grid gap-6 border-t border-[var(--border)] pt-8 lg:grid-cols-[1fr_auto]">
        <div>
          <h3 className="font-display text-2xl">{TRIAL_OFFER.headline}</h3>
          <p className="mt-3 max-w-[66ch] leading-relaxed text-[var(--muted-foreground)]">
            {TRIAL_OFFER.detail}
          </p>
        </div>
        <div className="self-center">
          <Cta to={PRODUCT_ENQUIRY} external variant="terracotta">
            Try it on one policy
          </Cta>
        </div>
      </div>
    </ProductSection>
  );
}

export function SupportingServices() {
  const services = [
    {
      to: "/ime/executive",
      title: "iMe Executive",
      text: "A digital representation of a leader, using their approved likeness, voice and knowledge.",
    },
    {
      to: "/advisory",
      title: "Advisory",
      text: "Founder-led guidance on the AI decisions facing your business.",
    },
    {
      to: "/private-ai",
      title: "Private AI",
      text: "Deployment on your own infrastructure, including air-gapped options.",
    },
    {
      to: "/studio",
      title: "Studio",
      text: "In-house capture and production for executive presence and digital tutors.",
    },
  ];
  return (
    <ProductSection className="bg-[var(--surface)]">
      <p className="mono-label text-[var(--terracotta)]">Beyond training</p>
      <h2 className="display-md mt-5">The capabilities behind the tutor.</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => (
          <article key={item.to} className="border-t border-[var(--border)] pt-5">
            <h3 className="font-display text-xl">{item.title}</h3>
            <p className="mb-5 mt-3 leading-relaxed text-[var(--muted-foreground)]">{item.text}</p>
            <Cta to={item.to} variant="text">
              Explore
            </Cta>
          </article>
        ))}
      </div>
    </ProductSection>
  );
}
