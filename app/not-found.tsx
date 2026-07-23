import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative text-[var(--ink)] min-h-[80vh] flex items-center noise-overlay overflow-hidden">
      <div className="gradient-top-strip gradient-brand z-10" />
      <div className="container-x max-w-2xl text-center relative">
        <p className="font-display text-[clamp(6rem,16vw,12rem)] leading-none gradient-brand-text">
          404
        </p>
        <h1 className="display-l text-[var(--ink)] mt-4 mb-6">
          This page took a wrong turn.
        </h1>
        <p className="text-[var(--text-muted-dark)] text-lg mb-10">
          Head home and we&apos;ll get you back on track.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            Back to home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
