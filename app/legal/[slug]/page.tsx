import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const titles: Record<string, string> = {
  privacy: "Privacy policy",
  terms: "Terms of service",
  dpdp: "DPDP compliance",
  refund: "Refund policy",
};

export function generateStaticParams() {
  return Object.keys(titles).map((slug) => ({ slug }));
}

export default async function LegalStub({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = titles[slug] ?? "Legal";

  return (
    <section className="bg-[var(--bg-light)] min-h-[70vh] section-pad">
      <div className="container-x max-w-2xl text-center">
        <p className="eyebrow text-[var(--accent)] mb-5">Legal</p>
        <h1 className="display-l text-[var(--text-primary)] mb-6">{title}</h1>
        <p className="text-[var(--text-muted)] text-lg mb-10">
          Coming soon. For immediate questions about{" "}
          {title.toLowerCase()}, email{" "}
          <a
            href="mailto:abhinav@telecaller.ai"
            className="text-[var(--accent)] underline underline-offset-4"
          >
            abhinav@telecaller.ai
          </a>
          .
        </p>
        <Button asChild variant="secondary">
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Back home
          </Link>
        </Button>
      </div>
    </section>
  );
}
