import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  heading: string;
  sub?: string;
  buttonLabel?: string;
  footnote?: string;
  variant?: "dark" | "light";
}

export function CTASection({
  heading,
  sub,
  buttonLabel = "Book my demo",
  footnote,
  variant = "dark",
}: CTASectionProps) {
  const isDark = variant === "dark";
  return (
    <section
      className={
        isDark
          ? "relative bg-[var(--bg-dark)] text-white section-pad noise-overlay overflow-hidden"
          : "relative bg-[var(--bg-light)] section-pad"
      }
    >
      {isDark && <div className="gradient-top-strip gradient-brand" />}
      <div className="container-x text-center max-w-3xl">
        <h2 className="display-l mb-6">{heading}</h2>
        {sub && (
          <p
            className={
              "text-lg md:text-xl leading-relaxed mb-10 " +
              (isDark ? "text-[var(--text-muted-dark)]" : "text-[var(--text-muted)]")
            }
          >
            {sub}
          </p>
        )}
        <Button asChild size="lg">
          <Link href="/book-demo">
            {buttonLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        {footnote && (
          <p
            className={
              "mt-6 text-sm " +
              (isDark ? "text-[var(--text-muted-dark)]" : "text-[var(--text-muted)]")
            }
          >
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
