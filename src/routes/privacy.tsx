import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/seo";
import { PageHero } from "@/components/site/PageHero";
import { SectionShell } from "@/components/site/Cta";

export const Route = createFileRoute("/privacy")({
  head: () => {
    const h = pageHead({
      path: "/privacy",
      title: "Privacy Policy — AI Advisers",
      description:
        "Privacy Policy for aiadvisers.io, operated by Kenn Joyce trading as AI Advisers, Blackrock, Co. Dublin, Ireland. Last updated 7 September 2026.",
    });
    return { meta: h.meta, links: h.links };
  },
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        eyebrowTone="terracotta"
        title={
          <>
            Privacy{" "}
            <span className="display-serif italic text-[var(--muted-foreground)]">Policy</span>
          </>
        }
        lead="Last updated 7 September 2026"
      />

      <SectionShell className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[70ch]">
          <Prose>
            <h2 className="display-md mt-0">Who we are</h2>
            <p>
              aiadvisers.io is operated by AI Advisers, a trading name of Kenn Joyce, based in
              Blackrock, Co. Dublin, Ireland. For the purposes of the EU General Data Protection
              Regulation (GDPR), Kenn Joyce, trading as AI Advisers, is the data controller for the
              personal information described in this policy.
            </p>
            <p>
              You can reach us at{" "}
              <a href="mailto:kenn.joyce@aiadvisers.io" className="link-underline">
                kenn.joyce@aiadvisers.io
              </a>{" "}
              or on{" "}
              <a href="tel:+353863262239" className="link-underline">
                +353 (0)86 326 2239
              </a>
              . Save the environment — all post by email only, please. For legal correspondence,
              please phone us for our solicitors’ address.
            </p>

            <h2 className="display-md">The short version</h2>
            <p>
              This website does not track you. It sets no cookies, runs no analytics, and stores
              nothing about you in your browser. The only personal information we ever receive is
              what you choose to send us in an enquiry.
            </p>

            <h2 className="display-md">Information you give us</h2>
            <p>
              The enquiry form on this site asks for your name, company, position, email address,
              and optionally your phone number and a message.
            </p>
            <p>
              The form does not send anything to us over the internet. When you submit it, your own
              email program opens with the details already written into a message addressed to us.
              Nothing is sent until you press send in your own email program, and the information
              does not pass through this website or any third party on its way to us. If you change
              your mind, simply close the message.
            </p>
            <p>
              We use what you send only to respond to your enquiry and to carry on any business
              discussion that follows. Our lawful basis is our legitimate interest in responding to
              people who contact us about our services, and, where a contract follows, the
              performance of that contract.
            </p>

            <h2 className="display-md">Information collected automatically</h2>
            <p>
              We do not run analytics on this site. However, two things happen automatically when
              any web page loads, and you should know about them:
            </p>
            <ul>
              <li>
                Hosting. This site is hosted on GitHub Pages. GitHub records standard server
                information, including your IP address, when a page is served. See the{" "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                  className="link-underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub Privacy Statement
                </a>
                .
              </li>
              <li>
                Fonts. The typefaces used on this site are loaded from Google Fonts, which means
                Google receives your IP address when the fonts load. See the{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="link-underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Google Privacy Policy
                </a>
                .
              </li>
            </ul>
            <p>
              Neither is used by us to identify or profile you, and we do not have access to that
              data.
            </p>

            <h2 className="display-md">Cookies</h2>
            <p>
              This site sets no cookies and uses no browser storage. There is nothing for you to
              consent to or opt out of.
            </p>

            <h2 className="display-md">How long we keep it</h2>
            <p>
              We keep enquiry correspondence for as long as needed to deal with your enquiry and for
              any ongoing business relationship that follows from it. Where no relationship follows,
              we delete the correspondence within two years. You can ask us to delete it sooner at
              any time.
            </p>

            <h2 className="display-md">Who else sees your information</h2>
            <p>
              We do not sell your personal information, and we do not share it for advertising. It
              is shared only with the service providers listed above, each of which acts on our
              instructions or under its own published terms, and with anyone we are legally required
              to disclose it to.
            </p>

            <h2 className="display-md">Where your information goes</h2>
            <p>
              Some of the providers named above are based in the United States. Where your
              information is transferred outside the European Economic Area, that transfer relies on
              the safeguards those providers have put in place, including the EU Standard
              Contractual Clauses and, where applicable, the EU–US Data Privacy Framework.
            </p>

            <h2 className="display-md">Your rights</h2>
            <p>Under GDPR you have the right to:</p>
            <ul>
              <li>ask what personal information we hold about you, and get a copy of it;</li>
              <li>have inaccurate information corrected;</li>
              <li>have your information deleted;</li>
              <li>restrict or object to how we use it;</li>
              <li>receive it in a portable format;</li>
              <li>withdraw consent at any time, where we relied on consent.</li>
            </ul>
            <p>
              To exercise any of these, email{" "}
              <a href="mailto:kenn.joyce@aiadvisers.io" className="link-underline">
                kenn.joyce@aiadvisers.io
              </a>
              . We will respond within one month.
            </p>
            <p>
              If you are not satisfied with our response, you have the right to complain to the
              Irish Data Protection Commission at{" "}
              <a
                href="https://www.dataprotection.ie"
                className="link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                dataprotection.ie
              </a>
              , or to the supervisory authority in your own EU country.
            </p>

            <h2 className="display-md">Children</h2>
            <p>
              This site is aimed at business audiences and is not intended for children. We do not
              knowingly collect information from anyone under 16.
            </p>

            <h2 className="display-md">Changes to this policy</h2>
            <p>
              If we change this policy we will update the date at the top of this page. Material
              changes will be noted here.
            </p>
            <p>© 2026 AI Advisers. Dublin, Ireland.</p>
          </Prose>

          <p className="mt-10 border-t border-[var(--border)] pt-5 text-sm text-[var(--muted-foreground)]">
            iMe is a separate product. See its{" "}
            <a
              href="https://ime.ceo/privacy.html"
              className="link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </SectionShell>
    </>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="company-policy"
      className="space-y-6 text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)] [&_a]:text-[var(--foreground)] [&_h2]:text-[var(--foreground)] [&_li]:ml-5 [&_li]:list-disc [&_p]:max-w-[62ch] [&_strong]:text-[var(--foreground)] [&_ul]:space-y-2"
    >
      {children}
    </div>
  );
}
