import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-2)]">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <p className="mono-label text-[var(--terracotta)]">iMe · A product of AI Advisers</p>
            <h2 className="font-display mt-5 max-w-[20ch] text-3xl sm:text-4xl">
              Find the right starting point.
            </h2>
            <p className="mt-5 max-w-[44ch] leading-relaxed text-[var(--muted-foreground)]">
              See iMe in action, or speak with Kenn about the training or service your team needs.
            </p>
            <a href="https://ime.ceo/trainer.html#enquire" className="btn-primary mt-6">
              Book a demonstration ↗
            </a>
            <Link to="/contact" className="mt-4 block w-fit link-underline">
              Request a call with Kenn →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterCol
              label="iMe & training"
              links={[
                ["iMe product family", "/ime"],
                ["Live Trainer", "/live-trainer"],
                ["EU AI Act literacy", "/eu-ai-act"],
                ["Onboarding", "/onboarding"],
                ["Team training", "/team-training"],
              ]}
            />
            <FooterCol
              label="Services"
              links={[
                ["Executive avatars", "/ime/executive"],
                ["Boardroom advisory", "/advisory"],
                ["Private AI", "/private-ai"],
                ["Studio", "/studio"],
              ]}
            />
            <FooterCol
              label="Company"
              links={[
                ["About", "/about"],
                ["Kenn Joyce", "/founder"],
                ["Company enquiries", "/contact"],
                ["Company privacy policy", "/privacy"],
                ["iMe product privacy policy", "https://ime.ceo/privacy.html"],
              ]}
            />
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-5 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted-foreground)]">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a href="mailto:kenn.joyce@aiadvisers.io" className="break-all hover:underline">
              kenn.joyce@aiadvisers.io
            </a>
            <a href="tel:+353863262239" className="hover:underline">
              +353 86 326 2239
            </a>
            <span>Blackrock, Co. Dublin, Ireland</span>
          </div>
          <p>© {new Date().getFullYear()} AI Advisers · Trading name of Kenn Joyce</p>
        </div>
        <p
          aria-hidden="true"
          className="font-display mt-12 text-[clamp(3rem,13vw,12rem)] leading-none tracking-[-0.06em]"
        >
          AI Advisers
        </p>
      </div>
    </footer>
  );
}
function FooterCol({ label, links }: { label: string; links: [string, string][] }) {
  return (
    <div>
      <p className="mono-label text-[var(--subtle)]">{label}</p>
      <ul className="mt-4 space-y-3">
        {links.map(([text, to]) => (
          <li key={to}>
            {to.startsWith("https:") ? (
              <a href={to} className="text-sm hover:underline">
                {text} ↗
              </a>
            ) : (
              <Link to={to} className="text-sm hover:underline">
                {text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
