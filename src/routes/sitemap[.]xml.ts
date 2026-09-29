import { createFileRoute } from "@tanstack/react-router";

/**
 * Generated sitemap. One place to add a route — adding the path here is the
 * only step required when a new page ships.
 */
const ROUTES: ReadonlyArray<{ path: string; changefreq: string; priority: string }> = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/live-trainer", changefreq: "monthly", priority: "0.9" },
  { path: "/eu-ai-act", changefreq: "weekly", priority: "0.9" },
  { path: "/ime", changefreq: "monthly", priority: "0.7" },
  { path: "/ime/executive", changefreq: "monthly", priority: "0.7" },
  { path: "/onboarding", changefreq: "monthly", priority: "0.8" },
  { path: "/team-training", changefreq: "monthly", priority: "0.8" },
  { path: "/advisory", changefreq: "monthly", priority: "0.7" },
  { path: "/private-ai", changefreq: "monthly", priority: "0.6" },
  { path: "/studio", changefreq: "monthly", priority: "0.5" },
  { path: "/founder", changefreq: "yearly", priority: "0.5" },
  { path: "/about", changefreq: "yearly", priority: "0.5" },
  { path: "/contact", changefreq: "yearly", priority: "0.8" },
  { path: "/privacy", changefreq: "yearly", priority: "0.2" },
];

const ORIGIN = "https://aiadvisers.io";

function xmlEscape(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${xmlEscape(ORIGIN + r.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
).join("\n")}
</urlset>
`;
        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
