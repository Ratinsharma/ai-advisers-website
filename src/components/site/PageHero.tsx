import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * v3 PageHero — single editorial statement per page.
 * Eyebrow → display heading → lead → actions. Generous baseline.
 */
export function PageHero({
  eyebrow,
  eyebrowTone = "default",
  title,
  lead,
  actions,
  meta,
}: {
  eyebrow: string;
  eyebrowTone?: "default" | "terracotta";
  title: ReactNode;
  lead?: string;
  actions?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] px-5 pt-32 pb-16 sm:px-8 lg:px-12 lg:pt-44 lg:pb-20">
      {/* Subtle paper grid */}
      <div className="paper-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-[1440px]">
        <Reveal>
          <span
            className={`eyebrow-pill ${eyebrowTone === "terracotta" ? "border-[var(--terracotta)]/40 text-[var(--terracotta)]" : ""}`}
          >
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display-xl mt-8 max-w-[22ch] text-balance">{title}</h1>
        </Reveal>
        {lead && (
          <Reveal delay={160}>
            <p className="mt-8 max-w-[62ch] text-[1.125rem] leading-relaxed text-[var(--muted-foreground)] sm:text-[1.1875rem]">
              {lead}
            </p>
          </Reveal>
        )}
        {actions && (
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-3">{actions}</div>
          </Reveal>
        )}
        {meta && (
          <Reveal delay={300}>
            <div className="mt-12 border-t border-[var(--border)] pt-5">{meta}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
