import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const TRAINING = [
  { label: "Live Trainer", to: "/live-trainer" },
  { label: "EU AI Act literacy", to: "/eu-ai-act" },
  { label: "Multilingual onboarding", to: "/onboarding" },
  { label: "Team training", to: "/team-training" },
];
const SERVICES = [
  { label: "Executive avatars", to: "/ime/executive" },
  { label: "Boardroom advisory", to: "/advisory" },
  { label: "Private AI · Bot in a Box", to: "/private-ai" },
  { label: "Studio", to: "/studio" },
];
const DEMO = "https://ime.ceo/trainer.html#enquire";

export function Header() {
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const home = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const dialog = menu.current;
    if (!dialog) return;
    if (!open) {
      if (dialog.open) {
        dialog.close();
        if (window.matchMedia("(min-width: 1024px)").matches) home.current?.focus();
        else toggle.current?.focus();
      }
      return;
    }
    // Native modal dialog contains focus and makes the background inert.
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-6">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-3 rounded-full border border-[var(--border-strong)] bg-[var(--background)] py-2 pl-4 pr-2 shadow-sm sm:pl-5">
          <Link
            ref={home}
            to="/"
            aria-label="AI Advisers — home"
            className="flex shrink-0 items-center gap-2.5"
          >
            <span
              aria-hidden="true"
              className="grid h-8 w-8 place-items-center rounded-full border border-[var(--foreground)] font-display"
            >
              A
            </span>
            <span className="font-display text-base tracking-[-0.02em] sm:text-lg">
              AI Advisers
            </span>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            <Link to="/ime" className="rounded-full px-3 py-2 text-sm">
              iMe
            </Link>
            <NavGroup label="Training" links={TRAINING} />
            <NavGroup label="Services" links={SERVICES} />
            <Link to="/about" className="rounded-full px-3 py-2 text-sm">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={DEMO}
              className="rounded-full bg-[var(--foreground)] px-4 py-3 text-sm font-medium text-[var(--background)]"
              aria-label="Book a demonstration on the iMe website"
            >
              <span className="hidden sm:inline">Book a demonstration</span>
              <span className="sm:hidden">Demo</span>
              <span aria-hidden="true"> ↗</span>
            </a>
            <button
              ref={toggle}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border-strong)] lg:hidden"
            >
              <span aria-hidden="true" className="text-xl">
                ☰
              </span>
            </button>
          </div>
        </div>
      </header>
      <dialog
        ref={menu}
        id="mobile-menu"
        aria-label="Website navigation"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = Array.from(
            event.currentTarget.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
          ).filter((element) => element.tabIndex >= 0 && element.getClientRects().length > 0);
          const first = controls[0];
          const last = controls.at(-1);
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
        onClose={() => setOpen(false)}
        className="m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-[var(--background)] p-0 text-[var(--foreground)]"
      >
        <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-5">
          <span className="font-display text-xl">AI Advisers</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="min-h-11 rounded-full border border-[var(--border-strong)] px-5"
          >
            Close menu <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav aria-label="Mobile" className="grid gap-7 px-6 py-8">
          <Link to="/ime" onClick={() => setOpen(false)} className="font-display text-3xl">
            iMe
          </Link>
          {[
            { label: "Training", links: TRAINING },
            { label: "Services", links: SERVICES },
          ].map((group) => (
            <div key={group.label}>
              <p className="mono-label mb-2 text-[var(--terracotta)]">{group.label}</p>
              <ul>
                {group.links.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block border-b border-[var(--border)] py-3 text-lg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link to="/about" onClick={() => setOpen(false)} className="font-display text-3xl">
            About
          </Link>
          <a href={DEMO} className="btn-primary justify-center">
            Book a demonstration ↗
          </a>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="link-underline justify-self-start"
          >
            Request a call with Kenn
          </Link>
        </nav>
      </dialog>
    </>
  );
}

function NavGroup({ label, links }: { label: string; links: { label: string; to: string }[] }) {
  return (
    <details
      className="relative"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.currentTarget.open = false;
          event.currentTarget.querySelector("summary")?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          event.currentTarget.open = false;
      }}
    >
      <summary className="cursor-pointer rounded-full px-3 py-2 text-sm">{label}</summary>
      <ul className="absolute left-0 mt-3 min-w-64 rounded-2xl border border-[var(--border-strong)] bg-[var(--background)] p-3 shadow-lg">
        {links.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="block rounded-lg px-3 py-3 text-sm hover:bg-[var(--surface-2)]"
              onClick={(event) => {
                const parent = event.currentTarget.closest("details");
                if (parent) parent.open = false;
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
