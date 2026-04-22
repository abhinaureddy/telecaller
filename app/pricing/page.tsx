import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing — Simple, Predictable AI Telecalling Plans",
  description:
    "Starter ₹19,999, Growth ₹39,999, Pro ₹74,999. No seat fees, no per-call charges. TRAI-compliant plans for Indian businesses.",
};

type CellValue = string | boolean;

interface Row {
  label: string;
  values: [CellValue, CellValue, CellValue];
  isHeader?: boolean;
}

const rows: Row[] = [
  { label: "Monthly price", values: ["₹19,999", "₹39,999", "₹74,999"], isHeader: true },
  { label: "Included calling minutes", values: ["1,500", "4,000", "9,000"] },
  { label: "Overage rate", values: ["₹12/min", "₹10/min", "₹8/min"] },
  { label: "Number of AI agents", values: ["1", "2", "3+ custom"] },
  {
    label: "Agent types available",
    values: ["Inbound OR Qualifier", "Any 2 of 3", "All 3 + custom"],
  },
  { label: "Languages", values: ["2", "3", "All supported"] },
  { label: "Concurrent calls", values: ["3", "8", "20+"] },
  { label: "Phone numbers", values: ["1", "2", "Unlimited"] },
  { label: "Call recordings", values: ["30 days", "90 days", "365 days"] },
  {
    label: "CRM integration",
    values: ["Google Sheets", "Zoho, HubSpot, Sheets", "Any CRM + custom API"],
  },
  { label: "WhatsApp integration", values: [false, true, true] },
  { label: "Weekly reports", values: [true, true, true] },
  { label: "Optimization calls", values: ["Monthly", "Bi-weekly", "Weekly"] },
  { label: "Dedicated success manager", values: [false, true, true] },
  {
    label: "Priority support",
    values: ["Email, 24hr", "WhatsApp, 4hr", "WhatsApp, 1hr"],
  },
  { label: "Setup fee", values: ["₹15,000", "₹15,000", "₹25,000"] },
  { label: "Minimum commitment", values: ["3 months", "3 months", "3 months"] },
];

const plans = [
  { name: "Starter", cta: "Start with Starter" },
  { name: "Growth", cta: "Start with Growth", highlighted: true },
  { name: "Pro", cta: "Start with Pro" },
];

const alwaysIncluded = [
  "TRAI/DLT compliance management",
  "DND scrubbing before every outbound call",
  "AI disclosure configured on every agent",
  "Indian-language voices (Hindi, English, regional)",
  "Call recording and transcription",
  "Lead data export anytime",
  "No lock-in after 3-month initial term",
];

const faqs: FAQItem[] = [
  {
    q: "What if I use more minutes than my plan includes?",
    a: "Overage is billed at the per-minute rate for your plan (₹12, ₹10, or ₹8/min). We alert you at 80% usage so you can decide whether to upgrade or cap spending.",
  },
  {
    q: "Can I start small and upgrade later?",
    a: "Yes. Most clients start on Starter or Growth, then upgrade to Pro within 2–3 months as they expand to more use cases.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — 7-day free pilot on your first 100 inbound inquiries. No credit card required.",
  },
  {
    q: "What happens if I cancel?",
    a: "After the 3-month minimum, you can cancel any time with 30 days' notice. You keep all call recordings, lead data, and transcripts.",
  },
  {
    q: "Do you offer discounts for annual plans?",
    a: "Yes — 15% off for annual upfront payment. Ask your success manager during onboarding.",
  },
  {
    q: "Is GST included?",
    a: "Prices shown are exclusive of 18% GST, billed separately per Indian tax regulations.",
  },
];

function CellContent({ value }: { value: CellValue }) {
  if (value === true) return <Check className="w-5 h-5 text-[var(--accent)]" />;
  if (value === false) return <Minus className="w-5 h-5 text-[var(--border-light)]" />;
  return <span>{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <section className="relative bg-[var(--bg-dark)] text-white section-pad noise-overlay overflow-hidden">
        <div className="gradient-top-strip gradient-brand" />
        <div className="container-x max-w-4xl anim-fade-up">
          <p className="eyebrow text-[var(--text-muted-dark)] mb-6">Pricing</p>
          <h1 className="display-xl text-white mb-7">
            Simple, <span className="gradient-brand-text italic">predictable</span>{" "}
            pricing.
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted-dark)] leading-relaxed max-w-3xl">
            One monthly price. Everything included. No seat fees, no per-call charges, no
            surprise add-ons.
          </p>
        </div>
      </section>

      {/* DESKTOP TABLE */}
      <section className="bg-[var(--bg-light)] section-pad">
        <div className="container-x">
          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden border border-[var(--border-light)] bg-white shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border-light)]">
                    <th
                      scope="col"
                      className="text-left p-6 font-sans font-medium text-sm text-[var(--text-muted)] tracking-wide"
                    >
                      Feature
                    </th>
                    {plans.map((p) => (
                      <th
                        key={p.name}
                        scope="col"
                        className={cn(
                          "relative text-left p-6 font-display text-3xl tracking-tight text-[var(--text-primary)]",
                          p.highlighted && "bg-[var(--accent-light)]"
                        )}
                      >
                        {p.highlighted && (
                          <div className="absolute top-0 left-0 right-0 h-[3px] gradient-brand" />
                        )}
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.label}
                      className={cn(
                        "border-b border-[var(--border-light)] last:border-0",
                        row.isHeader && "bg-[var(--bg-light)]"
                      )}
                    >
                      <td
                        className={cn(
                          "p-5 text-sm text-[var(--text-muted)]",
                          row.isHeader && "font-medium text-[var(--text-primary)]"
                        )}
                      >
                        {row.label}
                      </td>
                      {row.values.map((v, i) => (
                        <td
                          key={i}
                          className={cn(
                            "p-5 text-[var(--text-primary)]",
                            row.isHeader && "font-display text-3xl tracking-tight",
                            plans[i].highlighted && "bg-[var(--accent-light)]/50"
                          )}
                        >
                          <CellContent value={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="p-6" />
                    {plans.map((p) => (
                      <td
                        key={p.name}
                        className={cn(
                          "p-6",
                          p.highlighted && "bg-[var(--accent-light)]/50"
                        )}
                      >
                        <Button
                          asChild
                          variant={p.highlighted ? "primary" : "secondary"}
                          size="md"
                        >
                          <Link href="/book-demo">{p.cta}</Link>
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* MOBILE CARDS */}
          <div className="lg:hidden space-y-8">
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-2xl border bg-white p-7 shadow-sm",
                  plan.highlighted
                    ? "border-[var(--accent)] border-2"
                    : "border-[var(--border-light)]"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-px left-6 right-6 h-[3px] gradient-brand rounded-b-full" />
                )}
                <div className="mb-6">
                  <p className="eyebrow text-[var(--text-muted)] mb-2">{plan.name}</p>
                  <p className="font-display text-5xl text-[var(--text-primary)] tracking-tight">
                    {rows[0].values[idx]}
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  {rows.slice(1).map((row) => {
                    const v = row.values[idx];
                    if (v === false) return null;
                    return (
                      <li key={row.label} className="flex justify-between gap-4 text-sm">
                        <span className="text-[var(--text-muted)]">{row.label}</span>
                        <span className="text-[var(--text-primary)] font-medium text-right">
                          {v === true ? <Check className="w-4 h-4 text-[var(--accent)]" /> : v}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <Button
                  asChild
                  variant={plan.highlighted ? "primary" : "secondary"}
                  size="md"
                  className="w-full"
                >
                  <Link href="/book-demo">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALWAYS INCLUDED */}
      <section className="bg-[var(--bg-light)] section-pad border-t border-[var(--border-light)]">
        <div className="container-x max-w-4xl">
          <div className="mb-10">
            <p className="eyebrow text-[var(--accent)] mb-5">Always included</p>
            <h2 className="display-l text-[var(--text-primary)]">
              Every plan, every client.
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {alwaysIncluded.map((i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--text-primary)]">
                <Check className="w-5 h-5 shrink-0 mt-0.5 text-[var(--success)]" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--bg-light)] section-pad border-t border-[var(--border-light)]">
        <div className="container-x max-w-4xl">
          <div className="mb-10">
            <p className="eyebrow text-[var(--accent)] mb-5">Pricing FAQ</p>
            <h2 className="display-l text-[var(--text-primary)]">
              The fine print, made plain.
            </h2>
          </div>
          <FAQAccordion items={faqs} idPrefix="pricing-faq" />
        </div>
      </section>

      <CTASection
        heading="Not sure which plan fits your business?"
        sub="Book a 15-minute demo — we'll recommend the right plan based on your inbound volume and team size."
        buttonLabel="Book a demo"
      />
    </>
  );
}
