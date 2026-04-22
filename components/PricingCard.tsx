import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface PricingTier {
  name: string;
  price: string;
  priceNote?: string;
  features: string[];
  bestFor: string;
  highlighted?: boolean;
  ctaLabel: string;
}

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-8 lg:p-10 flex flex-col h-full transition-all duration-300",
        tier.highlighted
          ? "bg-white shadow-[0_20px_60px_-20px_rgba(91,63,160,0.35)] border-2 border-[var(--accent)]"
          : "bg-white border border-[var(--border-light)] shadow-sm hover:shadow-md"
      )}
    >
      {tier.highlighted && (
        <>
          <div className="absolute -top-px left-6 right-6 h-[3px] gradient-brand rounded-b-full" />
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white text-xs font-medium px-3 py-1 rounded-full tracking-wide">
            Most chosen
          </span>
        </>
      )}

      <div className="mb-8">
        <h3 className="eyebrow text-[var(--text-muted)] mb-4">{tier.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="font-display text-5xl lg:text-6xl text-[var(--text-primary)] tracking-tight">
            {tier.price}
          </span>
          {tier.priceNote && (
            <span className="text-sm text-[var(--text-muted)]">
              {tier.priceNote}
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-3.5 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-3 text-[0.95rem] text-[var(--text-primary)]">
            <Check className="w-5 h-5 shrink-0 mt-0.5 text-[var(--accent)]" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <p className="text-sm italic text-[var(--text-muted)] mb-6">
        {tier.bestFor}
      </p>

      <Button
        asChild
        variant={tier.highlighted ? "primary" : "secondary"}
        size="md"
        className="w-full"
      >
        <Link href="/book-demo">{tier.ctaLabel}</Link>
      </Button>
    </div>
  );
}
