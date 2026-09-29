import { SectionShell } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { CLIENT_MARKS, TRACK_RECORD_INTRO } from "@/content/people";

/**
 * The proof band.
 *
 * These are the founder's clients from Metropolis Interactive, not AI Advisers
 * clients. The heading says so. Framing them any more strongly than that would
 * be the single easiest thing on this site to disprove in a meeting.
 */
export function TrackRecord() {
  return (
    <SectionShell className="border-y border-[var(--border)] bg-[var(--surface-2)]">
      <Reveal>
        <p className="mono-label text-[var(--terracotta)]">Track record</p>
        <h2 className="display-lg mt-8 max-w-[16ch] text-balance">Before founding AI Advisers.</h2>
        <p className="mt-8 max-w-[58ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
          {TRACK_RECORD_INTRO}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <ul className="mt-12 grid grid-cols-2 gap-px border-t border-l border-[var(--border)] sm:grid-cols-3 lg:grid-cols-4">
          {CLIENT_MARKS.map((m) => (
            <li
              key={m.name}
              className="flex items-center justify-center bg-[var(--background)] p-6"
            >
              <img
                src={m.file}
                alt={m.name}
                width={m.w}
                height={m.h}
                loading="lazy"
                decoding="async"
                className="max-h-12 w-auto opacity-70 mix-blend-multiply"
              />
            </li>
          ))}
        </ul>
      </Reveal>

      <p className="mt-8 text-[0.8125rem] leading-relaxed text-[var(--muted-foreground)]">
        Marks are the property of their owners and are shown with permission to record the founder's
        previous work. They are not AI Advisers clients and are not presented as such.
      </p>
    </SectionShell>
  );
}
