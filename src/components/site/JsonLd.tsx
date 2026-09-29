/**
 * Emits a JSON-LD <script> tag. Content is serialised with `<` escaped so a
 * string containing markup can never close the tag early.
 */
export function JsonLd({ data }: { data: unknown }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
