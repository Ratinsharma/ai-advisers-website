/**
 * HTTP and source-preservation checks for the approved Cabinet brief.
 * This script DOES NOT run TypeScript, lint, build, browser UI or delivery tests.
 * Run those separately and record their actual results in docs/VALIDATION.md.
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = process.env.BASE_URL ?? "http://127.0.0.1:8083";
const ROUTES = [
  "/",
  "/ime",
  "/live-trainer",
  "/eu-ai-act",
  "/onboarding",
  "/team-training",
  "/ime/executive",
  "/advisory",
  "/private-ai",
  "/studio",
  "/about",
  "/founder",
  "/contact",
  "/privacy",
];
const source = (path) => readFileSync(join(ROOT, path), "utf8");
const pages = {};
let failures = 0,
  checks = 0;
function check(name, ok) {
  checks++;
  if (!ok) failures++;
  console.log((ok ? "PASS " : "FAIL ") + name);
}
function visibleHtml(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
}
function plain(html) {
  return visibleHtml(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,;:!?])/g, "$1")
    .trim();
}
for (const route of ROUTES) {
  try {
    const response = await fetch(BASE + route);
    const html = await response.text();
    pages[route] = html;
    const visible = visibleHtml(html);
    check(
      route + " direct HTTP/SSR",
      response.status === 200 &&
        !/This page didn.t load|Something went wrong on our end/.test(visible),
    );
    check(route + " one H1", (visible.match(/<h1\b/g) ?? []).length === 1);
    const canonical = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)].map((m) => m[0]);
    check(
      route + " one matching canonical",
      canonical.length === 1 &&
        canonical[0].includes("https://aiadvisers.io" + (route === "/" ? '"' : route + '"')),
    );
    check(
      route + " no embedded video/third-party tracker",
      !/<iframe\b|hubspot|hsforms|google-analytics|googletagmanager|__lovableEvents|__lovableReportRuntimeError/i.test(
        visible,
      ),
    );
  } catch (error) {
    check(route + " reachable: " + String(error), false);
  }
}
const trainer = plain(pages["/live-trainer"] ?? "");
for (const price of ["€6,500", "€499", "€4,000", "€24,000"])
  check("Published trainer price " + price, trainer.includes(price));
check(
  "Faculty annual scope and quoted booths",
  /up to four tutors.*all inclusive/i.test(trainer) &&
    /annual review with your compliance lead/i.test(trainer) &&
    /on-floor.*quoted separately/i.test(trainer),
);
check("Existing trial promise", /owe us nothing and you keep the meeting/.test(trainer));
const schema = [
  ...(pages["/live-trainer"] ?? "").matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ),
].flatMap((m) => JSON.parse(m[1])["@graph"] ?? []);
const product = schema.find((n) => n["@type"] === "Product");
check(
  "Visible published prices match product schema",
  [6500, 499, 4000, 24000].every((p) =>
    product?.offers?.some((o) => Number(o.price) === p && o.priceCurrency === "EUR"),
  ),
);
const contact = visibleHtml(pages["/contact"] ?? "");
check(
  "Company form is mailto, not a server endpoint",
  /<form\b[^>]*action="mailto:kenn.joyce@aiadvisers.io"/.test(contact) &&
    !source("src/routes/contact.tsx").includes("submitEnquiry") &&
    !/fetch\(|createServerFn|web3forms/i.test(source("src/lib/enquiry.ts")),
);
const fields = [...contact.matchAll(/<(?:input|textarea)\b[^>]*>/g)].map((match) => match[0]);
const field = (name) => fields.find((tag) => tag.includes('name="' + name + '"')) ?? "";
const required = (name) => /\srequired(?:=|\s|>)/.test(field(name));
for (const name of ["name", "company", "title", "email"])
  check("Company required field " + name, Boolean(field(name)) && required(name));
check(
  "Company phone and message optional",
  Boolean(field("phone")) &&
    Boolean(field("message")) &&
    !required("phone") &&
    !required("message"),
);
check(
  "Truthful email handoff",
  /Nothing is sent until you press Send/.test(plain(contact)) &&
    !/Enquiry sent|Kenn has it/.test(plain(contact)),
);
const snapshot = source("tests/fixtures/company-privacy.txt");
const expected = snapshot
  .slice(snapshot.indexOf("### Who we are"))
  .replace(/^#{1,6}\s+/gm, "")
  .replace(/^[-*]\s+/gm, "")
  .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
  .replace(/\s+/g, " ")
  .replace(/\s+([.,;:!?])/g, "$1")
  .trim();
const policyBody =
  (pages["/privacy"] ?? "").match(/<div[^>]*id="company-policy"[^>]*>([\s\S]*?)<\/div>/)?.[1] ?? "";
check("Company policy exact text (normalised whitespace)", plain(policyBody) === expected);
check(
  "Company policy original date",
  plain(pages["/privacy"] ?? "").includes("Last updated 7 September 2026"),
);
check(
  "Product privacy link preserved and working path",
  pages["/live-trainer"]?.includes("https://ime.ceo/privacy.html"),
);
check(
  "Skip link and focusable main",
  /class="skip-link"/.test(pages["/"] ?? "") && /<main[^>]*tabindex="-1"/.test(pages["/"] ?? ""),
);
check(
  "No active external error reporting import",
  !source("src/routes/__root.tsx").includes("reportLovableError"),
);
check(
  "Visible content without reveal opacity/filter",
  !/opacity:|filter:/.test(source("src/components/site/Reveal.tsx")),
);
check(
  "Real local product artwork",
  ["corporate-library.jpg", "academy-trainer-female.jpg"].every((n) =>
    existsSync(join(ROOT, "public/avatars", n)),
  ),
);
const sitemapResponse = await fetch(BASE + "/sitemap.xml");
const sitemap = await sitemapResponse.text();
check(
  "All public routes in sitemap",
  sitemapResponse.ok &&
    ROUTES.every((r) => sitemap.includes("https://aiadvisers.io" + r + "</loc>")),
);
console.log(
  "\n" +
    checks +
    " HTTP/source checks; " +
    failures +
    " failed. Typecheck, lint, build, browser and delivery were NOT run by this script.",
);
process.exitCode = failures ? 1 : 0;
