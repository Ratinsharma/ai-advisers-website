import { useRef, useState } from "react";

/**
 * v3 HeroPortrait — used on the iMe page.
 * Left: real CEO portrait. Right: the "iMe resolve" panel — quiet, monogrammed.
 * Draggable seam (50% default).
 */
export function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos(Math.min(94, Math.max(6, ((e.clientX - r.left) / r.width) * 100)));
      }}
      onMouseLeave={() => setPos(50)}
      className="relative aspect-[5/6] w-full overflow-hidden border border-[var(--border)] bg-[var(--surface)] select-none"
    >
      {/* Left: real portrait */}
      <img
        src="/kenn-joyce.jpg"
        alt="Kenn Joyce, Founder and CEO of AI Advisers"
        width={1068}
        height={833}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/15 to-transparent" />

      {/* Right: iMe resolve */}
      <div
        className="absolute inset-y-0 right-0 overflow-hidden bg-[var(--surface-2)]"
        style={{ width: `${100 - pos}%` }}
      >
        <div className="field-grid absolute inset-0 opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[var(--muted-foreground)]">
          <span
            className="font-display"
            style={{
              fontSize: "3rem",
              letterSpacing: "-0.04em",
              fontWeight: 360,
              fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
            }}
          >
            iMe
          </span>
          <span className="mono-label text-[var(--subtle)]">resolve</span>
        </div>
      </div>

      {/* Header chip */}
      <div className="absolute left-5 top-5 flex items-center gap-2">
        <span className="block h-1.5 w-1.5 rounded-full bg-white/80" />
        <span className="mono-label text-white/90 mix-blend-difference">Portrait · Kenn Joyce</span>
      </div>

      {/* Bottom labels */}
      <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-center justify-between">
        <span className="mono-label text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          Executive
        </span>
        <span className="mono-label text-[var(--subtle)]">iMe resolve</span>
      </div>

      {/* Drag seam */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-[var(--foreground)]/50"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-sm">
          <span className="text-[0.7rem] text-[var(--muted-foreground)]">⇆</span>
        </div>
      </div>
    </div>
  );
}
