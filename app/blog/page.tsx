import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import {
  getAllPosts,
  CLUSTER_ORDER,
  CLUSTER_LABELS,
  type BlogPost,
} from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — AI Telecalling in India",
  description:
    "Guides on AI telecalling, TRAI and DPDP compliance, DLT registration, and how Indian businesses use AI voice agents across healthcare, education, and D2C.",
};

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl p-8 border border-[var(--border-light)] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <h3 className="font-display text-2xl md:text-[1.625rem] text-[var(--text-primary)] mb-3 tracking-tight leading-tight">
        {post.heading}
      </h3>
      <p className="text-[var(--text-muted)] leading-relaxed mb-6 flex-1">
        {post.metaDescription}
      </p>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
          <Clock className="w-3.5 h-3.5" />
          {post.readingTimeMinutes} min read
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] group-hover:gap-2.5 transition-all">
          Read article
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="relative bg-[var(--bg-dark)] text-white section-pad noise-overlay overflow-hidden">
        <div className="gradient-top-strip gradient-brand" />
        <div className="container-x max-w-4xl anim-fade-up">
          <p className="eyebrow text-[var(--text-muted-dark)] mb-6">Blog</p>
          <h1 className="display-xl text-white mb-7">
            AI telecalling, <span className="gradient-brand-text italic">explained</span>.
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted-dark)] leading-relaxed max-w-3xl">
            What AI telecallers can actually do, how to stay TRAI and DPDP compliant, and
            how Indian businesses across healthcare, education, and D2C are putting them to
            work.
          </p>
        </div>
      </section>

      {CLUSTER_ORDER.map((cluster, idx) => {
        const clusterPosts = posts.filter((p) => p.cluster === cluster);
        if (clusterPosts.length === 0) return null;
        return (
          <section
            key={cluster}
            className={
              "bg-[var(--bg-light)] section-pad" +
              (idx > 0 ? " border-t border-[var(--border-light)]" : "")
            }
          >
            <div className="container-x">
              <div className="max-w-3xl mb-10">
                <p className="eyebrow text-[var(--accent)] mb-5">{CLUSTER_LABELS[cluster]}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {clusterPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
