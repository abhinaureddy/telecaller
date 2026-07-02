import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/lib/config";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  stripHtml,
  CLUSTER_LABELS,
} from "@/lib/blog";

const PUBLISHED_DATE = "2026-07-02";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.titleTag,
    description: post.metaDescription,
    openGraph: {
      type: "article",
      title: post.titleTag,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

function jsonLdScript(data: object) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${siteConfig.url}/blog/${post.slug}`;
  const related = getRelatedPosts(post);

  const graph: object[] = [
    {
      "@type": "Article",
      headline: post.heading,
      description: post.metaDescription,
      url,
      datePublished: PUBLISHED_DATE,
      dateModified: PUBLISHED_DATE,
      author: {
        "@type": "Person",
        name: "Abhinav",
        jobTitle: "Founder",
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
  ];

  if (post.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: stripHtml(f.a),
        },
      })),
    });
  }

  if (post.schema.includes("HowTo") && post.howToSteps.length > 0) {
    graph.push({
      "@type": "HowTo",
      name: post.heading,
      step: post.howToSteps.map((s) => ({
        "@type": "HowToStep",
        name: s.name,
        text: s.text,
      })),
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript({
          "@context": "https://schema.org",
          "@graph": graph,
        })}
      />

      {/* HERO */}
      <section className="relative bg-[var(--bg-dark)] text-white section-pad noise-overlay overflow-hidden">
        <div className="gradient-top-strip gradient-brand" />
        <div className="container-x max-w-4xl anim-fade-up">
          <p className="eyebrow text-[var(--text-muted-dark)] mb-6">
            {CLUSTER_LABELS[post.cluster]}
          </p>
          <h1 className="display-l text-white mb-8">{post.heading}</h1>

          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-full p-[2px] gradient-brand">
                <div className="w-full h-full rounded-full bg-[var(--bg-dark)] flex items-center justify-center">
                  <span className="font-display text-lg gradient-brand-text">A</span>
                </div>
              </div>
            </div>
            <div className="text-sm text-[var(--text-muted-dark)]">
              <span className="text-white font-medium">Abhinav</span>, Founder ·
              telecaller.ai
              <span className="mx-2">·</span>
              <span>July 2, 2026</span>
              <span className="mx-2">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTimeMinutes} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-[var(--bg-light)] section-pad">
        <div className="container-x max-w-3xl">
          <div
            className="article-prose"
            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
          />
        </div>
      </section>

      {/* FAQ */}
      {post.faqs.length > 0 && (
        <section className="bg-[var(--bg-light)] section-pad border-t border-[var(--border-light)]">
          <div className="container-x max-w-3xl">
            <p className="eyebrow text-[var(--accent)] mb-5">FAQ</p>
            <h2 className="display-m text-[var(--text-primary)] mb-8">
              Common questions
            </h2>
            <FAQAccordion items={post.faqs} idPrefix={`${post.slug}-faq`} html />
          </div>
        </section>
      )}

      {/* KEEP READING */}
      {related.length > 0 && (
        <section className="bg-[var(--bg-light)] section-pad border-t border-[var(--border-light)]">
          <div className="container-x max-w-3xl">
            <p className="eyebrow text-[var(--accent)] mb-8">Keep reading</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group bg-white rounded-2xl p-7 border border-[var(--border-light)] shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-display text-xl text-[var(--text-primary)] mb-3 tracking-tight leading-snug">
                    {r.heading}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] group-hover:gap-2.5 transition-all">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="container-x max-w-3xl py-10">
        <Button asChild variant="secondary" size="sm">
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4" />
            All articles
          </Link>
        </Button>
      </div>

      <CTASection
        heading="See it work on your own calls."
        sub="Book a 15-minute demo — we'll show you a live multilingual agent on your actual use case, not a canned script."
        footnote="No credit card · No sales pressure"
      />
    </>
  );
}
