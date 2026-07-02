import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface FAQItem {
  q: string;
  a: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export type Cluster =
  | "Head"
  | "Compliance"
  | "Comparison"
  | "Vertical"
  | "Differentiator";

export interface BlogPost {
  slug: string;
  titleTag: string;
  metaDescription: string;
  primaryKeyword: string;
  internalLinks: string[];
  schema: string[];
  cluster: Cluster;
  heading: string;
  bodyHtml: string;
  faqs: FAQItem[];
  howToSteps: HowToStep[];
  readingTimeMinutes: number;
}

// Mirrors the "Cluster structure" section of the original publishing plan.
const CLUSTERS: Record<string, Cluster> = {
  "what-is-an-ai-telecaller": "Head",
  "trai-rules-ai-calling-india": "Compliance",
  "dlt-registration-guide": "Compliance",
  "dpdp-act-call-recordings": "Compliance",
  "ai-telecaller-vs-human-telecaller-cost": "Comparison",
  "ai-telecaller-vs-ivr": "Comparison",
  "best-ai-calling-platforms-india": "Comparison",
  "how-to-choose-ai-telecalling-service": "Comparison",
  "ai-telecaller-for-clinics-hospitals": "Vertical",
  "ai-telecaller-for-coaching-institutes": "Vertical",
  "ai-telecaller-for-ecommerce-d2c": "Vertical",
  "hindi-multilingual-ai-calling": "Differentiator",
};

export const CLUSTER_ORDER: Cluster[] = [
  "Head",
  "Compliance",
  "Comparison",
  "Vertical",
  "Differentiator",
];

export const CLUSTER_LABELS: Record<Cluster, string> = {
  Head: "Start here",
  Compliance: "Compliance",
  Comparison: "Comparisons & buying guides",
  Vertical: "By industry",
  Differentiator: "What makes us different",
};

function stripSlashBlog(slug: string): string {
  return slug.replace(/^\/blog\//, "");
}

function wordCount(text: string): number {
  return text
    .replace(/[#*_>`[\]()-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function parseFaqSection(raw: string): FAQItem[] {
  const faqHeadingIndex = raw.indexOf("## FAQ");
  if (faqHeadingIndex === -1) return [];

  let faqBlock = raw.slice(faqHeadingIndex + "## FAQ".length).trim();
  // Drop the trailing "---\n\n*closing blurb*" that follows the FAQ pairs.
  faqBlock = faqBlock.split(/\n\s*---\s*\n/)[0].trim();

  const pairs = faqBlock.split(/\n\s*\n/).filter(Boolean);
  const faqs: FAQItem[] = [];
  for (const pair of pairs) {
    const lines = pair.trim().split("\n");
    const questionMatch = lines[0].match(/^\*\*(.+?)\*\*\s*$/);
    if (!questionMatch) continue;
    const answerRaw = lines.slice(1).join(" ").trim();
    if (!answerRaw) continue;
    faqs.push({
      q: questionMatch[1],
      a: marked.parseInline(answerRaw) as string,
    });
  }
  return faqs;
}

function stripMarkdown(text: string): string {
  return text
    .replace(/\[(.+?)\]\(.+?\)/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1");
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "");
}

function parseHowToSteps(raw: string): HowToStep[] {
  const steps: HowToStep[] = [];
  const stepRegex = /\*\*Step \d+\s*—\s*(.+?)\.\*\*\s*(.+?)(?=\n\n|\n\*\*Step \d+|\n##|$)/gs;
  let match;
  while ((match = stepRegex.exec(raw)) !== null) {
    steps.push({
      name: stripMarkdown(match[1].trim()),
      text: stripMarkdown(match[2].replace(/\n/g, " ").trim()),
    });
  }
  return steps;
}

function loadPost(filename: string): BlogPost {
  const filePath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const slug = stripSlashBlog(data.slug as string);
  const trimmed = content.trim();

  const faqHeadingIndex = trimmed.indexOf("## FAQ");
  const mainRaw =
    faqHeadingIndex === -1 ? trimmed : trimmed.slice(0, faqHeadingIndex).trim();

  const headingMatch = mainRaw.match(/^#\s+(.+)$/m);
  const heading = headingMatch ? headingMatch[1].trim() : (data.title_tag as string);
  const bodyMarkdown = mainRaw.replace(/^#\s+.+\n+/, "");

  const schema: string[] = data.schema ?? [];
  const howToSteps = schema.includes("HowTo") ? parseHowToSteps(trimmed) : [];

  return {
    slug,
    titleTag: data.title_tag,
    metaDescription: data.meta_description,
    primaryKeyword: data.primary_keyword,
    internalLinks: data.internal_links ?? [],
    schema,
    cluster: CLUSTERS[slug] ?? "Head",
    heading,
    bodyHtml: marked.parse(bodyMarkdown) as string,
    faqs: parseFaqSection(trimmed),
    howToSteps,
    readingTimeMinutes: Math.max(1, Math.round(wordCount(mainRaw) / 200)),
  };
}

let cachedPosts: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (cachedPosts) return cachedPosts;
  const filenames = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort();
  cachedPosts = filenames.map(loadPost);
  return cachedPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, count = 2): BlogPost[] {
  const all = getAllPosts().filter((p) => p.slug !== post.slug);
  const sameCluster = all.filter((p) => p.cluster === post.cluster);
  const rest = all.filter((p) => p.cluster !== post.cluster);
  return [...sameCluster, ...rest].slice(0, count);
}
