import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { companyEnquiryMailto } from "@/lib/enquiry";
import { pageHead, SITE } from "@/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      path: "/contact",
      title: "Request a call — AI Advisers",
      description:
        "Contact Kenn Joyce, Founder & Principal of AI Advisers, in Blackrock, Dublin. Prepare an enquiry in your own email program.",
    }),
  component: Contact,
});

function Contact() {
  const [draft, setDraft] = useState<string>();
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const href = companyEnquiryMailto({
      name: value("name"),
      company: value("company"),
      title: value("title"),
      email: value("email"),
      phone: value("phone"),
      message: value("message"),
    });
    setDraft(href);
    window.location.href = href;
  }
  return (
    <>
      <PageHero
        eyebrow="Speak with Kenn Joyce"
        eyebrowTone="terracotta"
        title={
          <>
            Let’s talk about{" "}
            <span className="italic text-[var(--muted-foreground)]">your team.</span>
          </>
        }
        lead="Request a call about iMe training, EU AI Act literacy, onboarding or our advisory and production services. Tell Kenn what you need and suggest a time to speak."
      />
      <SectionShell className="border-b border-[var(--border)] !py-16 sm:!py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mono-label text-[var(--terracotta)]">
              Kenn Joyce · Founder &amp; Principal
            </p>
            <address className="mt-6 space-y-4 not-italic">
              <p>
                <a href={"mailto:" + SITE.email} className="link-underline break-all">
                  {SITE.email}
                </a>
              </p>
              <p>
                <a href={"tel:" + SITE.phone} className="link-underline">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>Blackrock, Co. Dublin, Ireland</p>
            </address>
            <div className="mt-10 border-t border-[var(--border)] pt-6">
              <h2 className="font-display text-2xl">Looking for iMe training?</h2>
              <p className="mt-4 max-w-[42ch] leading-relaxed text-[var(--muted-foreground)]">
                Request a trainer demonstration through the existing iMe enquiry form. The team will
                arrange the next step with you.
              </p>
              <a href="https://ime.ceo/trainer.html#enquire" className="btn-primary mt-5">
                Book a demonstration ↗
              </a>
              <p className="mt-4 text-sm">
                <a href="https://ime.ceo/privacy.html" className="link-underline">
                  iMe product privacy policy
                </a>
              </p>
            </div>
          </div>
          <div className="bezel">
            <div className="bezel-inner p-6 sm:p-9">
              <h2 className="font-display text-2xl">Request a call or send an enquiry</h2>
              <p
                id="email-handoff"
                className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]"
              >
                This form opens your own email program with an enquiry addressed to us. Nothing is
                sent until you press Send there. You can also email or phone us directly.
              </p>
              <form
                action={"mailto:" + SITE.email}
                method="post"
                encType="text/plain"
                onSubmit={prepareEmail}
                aria-describedby="email-handoff"
                className="mt-7 grid gap-5"
              >
                <Field label="Full name" name="name" autoComplete="name" required />
                <Field label="Company" name="company" autoComplete="organization" required />
                <Field
                  label="Position / title"
                  name="title"
                  autoComplete="organization-title"
                  required
                />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <Field label="Phone number" name="phone" type="tel" autoComplete="tel" />
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Special instructions / message{" "}
                    <span className="font-normal text-[var(--muted-foreground)]">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What would you like to discuss? For a call, suggest a couple of suitable times and your time zone."
                    className="mt-2 block w-full resize-y rounded-sm border border-[var(--border-strong)] bg-[var(--background)] px-4 py-3 text-base"
                  />
                </div>
                <button type="submit" className="btn-primary justify-center">
                  Continue in your email app <span aria-hidden="true">→</span>
                </button>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  See our{" "}
                  <a href="/privacy" className="link-underline">
                    company privacy policy
                  </a>{" "}
                  for how enquiry correspondence is handled. A call time is agreed by
                  correspondence; this form does not reserve a calendar slot.
                </p>
              </form>
              <div role="status" aria-live="polite">
                {draft && (
                  <div className="mt-6 border-t border-[var(--border)] pt-5">
                    <p className="font-medium">Your email draft is ready.</p>
                    <p className="mt-2 text-sm leading-relaxed">
                      Send it from your email program. If it did not open,{" "}
                      <a href={draft} className="link-underline">
                        open the draft again
                      </a>
                      , or contact us directly using the details on this page.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium">
        {label}{" "}
        <span className="font-normal text-[var(--muted-foreground)]">
          {required ? "(required)" : "(optional)"}
        </span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 block w-full rounded-sm border border-[var(--border-strong)] bg-[var(--background)] px-4 py-3 text-base"
      />
    </div>
  );
}
