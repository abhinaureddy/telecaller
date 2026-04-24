import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { legalDocs } from "@/lib/legal-content";

export function generateStaticParams() {
  return Object.keys(legalDocs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = legalDocs[slug];
  if (!doc) return { title: "Legal" };
  return {
    title: `${doc.title} — telecaller.ai`,
    description: doc.subtitle,
  };
}

const siblings = [
  { slug: "privacy", label: "Privacy policy" },
  { slug: "terms", label: "Terms of service" },
  { slug: "dpdp", label: "DPDP compliance" },
  { slug: "refund", label: "Refund policy" },
];

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = legalDocs[slug];
  if (!doc) notFound();

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[var(--bg-dark)] text-white section-pad noise-overlay overflow-hidden">
        <div className="gradient-top-strip gradient-brand" />
        <div className="container-x max-w-4xl anim-fade-up">
          <p className="eyebrow text-[var(--text-muted-dark)] mb-6">Legal</p>
          <h1 className="display-l text-white mb-6">{doc.title}</h1>
          <p className="text-lg text-[var(--text-muted-dark)] leading-relaxed max-w-3xl mb-6">
            {doc.subtitle}
          </p>
          <p className="font-mono text-xs text-[var(--text-muted-dark)] tracking-wider uppercase">
            Effective · {doc.effectiveDate}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-[var(--bg-light)] section-pad">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-16">
            {/* TOC / sibling nav */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow text-[var(--text-muted)] mb-5">All legal</p>
              <ul className="space-y-3 mb-10">
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/legal/${s.slug}`}
                      className={
                        "text-sm transition-colors " +
                        (s.slug === doc.slug
                          ? "text-[var(--accent)] font-medium"
                          : "text-[var(--text-muted)] hover:text-[var(--text-primary)]")
                      }
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="eyebrow text-[var(--text-muted)] mb-4">On this page</p>
              <ol className="space-y-2 text-sm">
                {doc.sections.map((section, i) => (
                  <li key={i}>
                    <a
                      href={`#s-${i}`}
                      className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors leading-snug block"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            {/* Body */}
            <article className="max-w-3xl">
              <div className="mb-10 p-5 rounded-xl border border-[var(--border-light)] bg-white text-sm text-[var(--text-muted)] leading-relaxed">
                This document is provided for transparency and should be read alongside
                your signed service order and Data Processing Agreement. If anything here
                conflicts with a signed contract, the signed contract prevails. For legal
                questions, email{" "}
                <a
                  href="mailto:abhinav@telecaller.ai"
                  className="text-[var(--accent)] underline underline-offset-4"
                >
                  abhinav@telecaller.ai
                </a>
                .
              </div>

              <div className="space-y-12">
                {doc.sections.map((section, i) => (
                  <section key={i} id={`s-${i}`} className="scroll-mt-28">
                    <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-5 tracking-tight">
                      {section.heading}
                    </h2>
                    <div className="space-y-4 text-[1.0625rem] text-[var(--text-primary)] leading-relaxed">
                      {section.body.map((p, pi) => (
                        <p key={pi}>{p}</p>
                      ))}
                      {section.list && (
                        <ul className="space-y-2.5 pl-5 list-disc marker:text-[var(--accent)]">
                          {section.list.map((item, li) => (
                            <li key={li} className="text-[var(--text-muted)] leading-relaxed">
                              <span className="text-[var(--text-primary)]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-[var(--border-light)] flex flex-wrap items-center justify-between gap-4">
                <Button asChild variant="secondary" size="sm">
                  <Link href="/">
                    <ArrowLeft className="w-4 h-4" />
                    Back home
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/book-demo">
                    Book a demo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
