/**
 * A content panel where a photograph would go.
 *
 * This replaced MediaPlaceholder, which rendered an empty hairline box captioned
 * with an internal production note. An empty frame reads as "unfinished"; this
 * reads as "we have said what matters here". Deliberately not an <img>.
 */
export function CapabilityCard({
  title,
  detail,
  tall = false,
}: {
  title: string;
  detail: string;
  tall?: boolean;
}) {
  return (
    <div className="bezel h-full">
      <div
        className={`bezel-inner flex h-full flex-col justify-between p-7 ${tall ? "min-h-[19rem]" : "min-h-[11rem]"}`}
      >
        <div>
          <span aria-hidden="true" className="block h-px w-10 bg-[var(--terracotta)]" />
          <h3
            className="mt-6 font-display"
            style={{ fontSize: "1.3125rem", fontVariationSettings: '"opsz" 36' }}
          >
            {title}
          </h3>
        </div>
        <p className="mt-8 max-w-[34ch] text-[0.9375rem] leading-relaxed text-[var(--muted-foreground)]">
          {detail}
        </p>
      </div>
    </div>
  );
}
