import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About telecaller.ai — Built in India for Indian Businesses",
  description:
    "Why we built telecaller.ai for Indian SMBs — Hindi-first voices, TRAI compliance, and managed-service delivery.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-[var(--bg-dark)] text-white section-pad noise-overlay overflow-hidden">
        <div className="gradient-top-strip gradient-brand" />
        <div className="container-x max-w-4xl anim-fade-up">
          <p className="eyebrow text-[var(--text-muted-dark)] mb-6">About</p>
          <h1 className="display-xl text-white mb-7">
            A team that&apos;s lived{" "}
            <span className="gradient-brand-text italic">Indian</span> telecalling.
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted-dark)] leading-relaxed max-w-3xl">
            We built telecaller.ai because we&apos;ve seen the pain firsthand — missed
            calls, high-attrition telecallers, leads decaying while your team is at lunch.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-[var(--bg-light)] section-pad">
        <div className="container-x max-w-3xl">
          <p className="eyebrow text-[var(--accent)] mb-5">Our story</p>
          <h2 className="display-l text-[var(--text-primary)] mb-10">
            Built for the way Indian businesses actually sell.
          </h2>
          <div className="space-y-6 text-lg text-[var(--text-primary)] leading-relaxed">
            <p>
              telecaller.ai was built to solve a specific problem: Indian businesses losing
              leads because telecalling — the critical first-touch of every sales motion —
              is still powered by a system that breaks every weekend.
            </p>
            <p>
              We looked at the global voice AI space in 2025 and saw a gap. Platforms built
              in the US were being sold to Indian businesses with no Hindi support, no TRAI
              compliance, no understanding of how Indian customers actually speak —
              switching between English, Hindi, and regional languages mid-conversation.
              Meanwhile, Indian businesses were paying for tools that didn&apos;t work and
              telecaller teams that couldn&apos;t scale.
            </p>
            <p>
              telecaller.ai is the alternative. Built in India, for Indian businesses, with
              compliance and Indic-language fluency as foundational features — not
              afterthoughts.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER NOTE */}
      <section className="bg-[var(--bg-light)] section-pad border-t border-[var(--border-light)]">
        <div className="container-x">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
            <div className="shrink-0 mx-auto md:mx-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full gradient-brand blur-2xl opacity-30" aria-hidden />
                <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full p-[3px] gradient-brand">
                  <div className="w-full h-full rounded-full bg-[var(--bg-dark)] flex items-center justify-center">
                    <span className="font-display text-7xl lg:text-8xl gradient-brand-text">
                      A
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow text-[var(--accent)] mb-4">Founder note</p>
              <h3 className="font-display text-3xl md:text-4xl text-[var(--text-primary)] mb-6 tracking-tight">
                A note from the founder
              </h3>
              <div className="space-y-5 text-[var(--text-primary)] leading-relaxed text-[1.0625rem]">
                <p>
                  I started telecaller.ai after years in Indian SaaS and domain-specific
                  technology. I&apos;ve watched Indian SMB owners struggle with telecalling
                  operations for as long as I&apos;ve been in this ecosystem. The pattern
                  is always the same — they hire, they train, they lose people, they hire
                  again.
                </p>
                <p>
                  AI genuinely changes this. Not by replacing the best of your team, but by
                  removing the grunt work that burns out your team in the first place.
                </p>
                <p>
                  I run telecaller.ai personally. Every client onboarding starts with a
                  call with me. Every major product decision is one I make. If something
                  goes wrong at 9 PM on a Sunday, I&apos;m the one who picks up.
                </p>
              </div>

              <p className="mt-7 italic text-[var(--text-muted)]">— Abhinav, founder</p>

              <div className="mt-8 pt-8 border-t border-[var(--border-light)]">
                <p className="text-[var(--text-primary)] leading-relaxed">
                  Reach me directly at{" "}
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="text-[var(--accent)] font-medium hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>{" "}
                  or{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[var(--accent)] font-medium hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[var(--bg-dark)] text-white section-pad noise-overlay overflow-hidden">
        <div className="gradient-top-strip gradient-brand" />
        <div className="container-x text-center max-w-3xl">
          <h2 className="display-l mb-6">Want to talk directly?</h2>
          <p className="text-lg md:text-xl text-[var(--text-muted-dark)] leading-relaxed mb-10">
            Book 15 minutes on my calendar. Founder-to-founder, or founder-to-owner.
            Whatever fits.
          </p>
          <Button asChild size="lg">
            <Link href="/book-demo">
              Book a 15-minute call with me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
