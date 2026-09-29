import { useEffect, useRef, type ReactNode } from "react";

/** Transform-only enhancement: content is readable before, during and without JS. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          element.dataset["revealed"] = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const Component = Tag as "div";
  return (
    <Component
      ref={ref}
      className={"cabinet-reveal " + className}
      style={{ animationDelay: delay + "ms" }}
    >
      {children}
    </Component>
  );
}
