import type { Metadata } from "next";
import Script from "next/script";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Book a 15-Minute Demo",
  description:
    "See AI telecallers in your business context. No slide deck, no sales pressure. Calendly booking — 15 minutes with the founder.",
};

const steps = [
  {
    num: "01",
    title: "Book a 15-minute slot",
    body: "Pick a time from the calendar below.",
  },
  {
    num: "02",
    title: "We jump on a quick call",
    body:
      "5 minutes on your business, 10 minutes demoing the AI live on a sample scenario from your industry.",
  },
  {
    num: "03",
    title: "You decide if it's worth a free 7-day pilot",
    body: "If yes, we set up. If no, we shake hands and part ways.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "Will you try to hard-sell me on the call?",
    a: "No. If we're not a fit, we'll say so in minute 8. If we are a fit, we'll explain the free pilot and let you decide. This is a 15-minute conversation, not a sales funnel.",
  },
  {
    q: "Do I need to prepare anything?",
    a: "Ideally, come with: rough number of inbound inquiries per day, current telecaller team size, and 1–2 common objections your sales team hears. If you don't have these, no problem — we'll figure it out together.",
  },
  {
    q: "Who's on the call from your side?",
    a: "Me — Abhinav, founder. No BDRs, no junior salespeople. Straight conversation with the person running the company.",
  },
  {
    q: "What if my business is too small or too large?",
    a: "We'll tell you honestly. Too small (under 20 inquiries/day): AI might not be worth the setup for you yet. Too large (5,000+ inquiries/day): you probably need a custom enterprise engagement, and we'll recommend the right path.",
  },
];

export default function BookDemoPage() {
  return (
    <>
      <section className="relative bg-[var(--bg-dark)] text-white section-pad noise-overlay overflow-hidden">
        <div className="gradient-top-strip gradient-brand" />
        <div className="container-x max-w-4xl anim-fade-up">
          <p className="eyebrow text-[var(--text-muted-dark)] mb-6">Book a demo</p>
          <h1 className="display-xl text-white mb-7">
            See telecaller.ai in{" "}
            <span className="gradient-brand-text italic">your</span> business, not ours.
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted-dark)] leading-relaxed max-w-3xl">
            In 15 minutes, we&apos;ll show you exactly how our AI would handle your actual
            inquiries — your scripts, your objections, your customers&apos; language. No
            slide deck. No sales pressure.
          </p>
        </div>
      </section>

      {/* 3-STEP */}
      <section className="bg-[var(--bg-light)] section-pad">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-5 md:flex-col md:gap-4">
                <div className="number-circle shrink-0">{s.num}</div>
                <div>
                  <h3 className="font-display text-2xl text-[var(--text-primary)] mb-2 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDLY + CONTACT */}
      <section className="bg-[var(--bg-light)] section-pad border-t border-[var(--border-light)]">
        <div className="container-x">
          <div className="max-w-2xl mx-auto mb-10 text-center">
            <p className="eyebrow text-[var(--accent)] mb-5">Calendar</p>
            <h2 className="display-l text-[var(--text-primary)]">
              Pick a time that works.
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-[var(--border-light)] p-4 md:p-6 shadow-sm overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url={siteConfig.calendly.url}
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />

          {/* ALT CONTACT */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="hairline-light mb-12" />
            <p className="text-center eyebrow text-[var(--text-muted)] mb-10">
              Prefer another way?
            </p>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group bg-white rounded-2xl p-7 border border-[var(--border-light)] hover:border-[var(--accent)] transition-colors shadow-sm"
              >
                <Mail className="w-6 h-6 text-[var(--accent)] mb-4" />
                <h3 className="font-display text-xl text-[var(--text-primary)] mb-2 tracking-tight">
                  Email
                </h3>
                <p className="text-[var(--accent)] font-medium mb-1.5">
                  {siteConfig.contact.email}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  We respond within 4 business hours.
                </p>
              </a>

              <a
                href={siteConfig.contact.phoneHref}
                className="group bg-white rounded-2xl p-7 border border-[var(--border-light)] hover:border-[var(--accent)] transition-colors shadow-sm"
              >
                <Phone className="w-6 h-6 text-[var(--accent)] mb-4" />
                <h3 className="font-display text-xl text-[var(--text-primary)] mb-2 tracking-tight">
                  Phone
                </h3>
                <p className="text-[var(--accent)] font-medium mb-1.5">
                  {siteConfig.contact.phone}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  Direct to founder, Mon–Sat, 10 AM – 8 PM IST.
                </p>
              </a>

              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-7 border border-[var(--border-light)] hover:border-[var(--accent)] transition-colors shadow-sm"
              >
                <MessageCircle className="w-6 h-6 text-[var(--accent)] mb-4" />
                <h3 className="font-display text-xl text-[var(--text-primary)] mb-2 tracking-tight">
                  WhatsApp
                </h3>
                <p className="text-[var(--accent)] font-medium mb-1.5">Message us</p>
                <p className="text-sm text-[var(--text-muted)]">
                  Fastest response — usually within 1 hour.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-CALL FAQ */}
      <section className="bg-[var(--bg-light)] section-pad border-t border-[var(--border-light)]">
        <div className="container-x max-w-4xl">
          <div className="mb-10">
            <p className="eyebrow text-[var(--accent)] mb-5">Pre-call FAQ</p>
            <h2 className="display-l text-[var(--text-primary)]">
              What to expect on the call.
            </h2>
          </div>
          <FAQAccordion items={faqs} idPrefix="demo-faq" />
        </div>
      </section>
    </>
  );
}
