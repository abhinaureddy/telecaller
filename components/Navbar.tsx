"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Compliance", href: "/compliance" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full bg-black/85 backdrop-blur-md transition-all duration-300 border-b",
          scrolled
            ? "border-[var(--border-dark)] py-3"
            : "border-transparent py-4"
        )}
      >
        <div className="container-x flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="telecaller.ai home">
            <Image
              src="/logo.png"
              alt="telecaller.ai"
              width={820}
              height={300}
              priority
              className="h-8 md:h-9 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--text-muted-dark)] hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href="/book-demo">Book a demo</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border-dark)] text-white"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col anim-fade-up">
          <div className="container-x flex items-center justify-between py-4">
            <Image
              src="/logo.png"
              alt="telecaller.ai"
              width={820}
              height={300}
              className="h-8 w-auto"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border-dark)]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="container-x flex-1 flex flex-col justify-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl text-white hover:text-[var(--text-muted-dark)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6">
              <Button asChild size="lg" className="w-full">
                <Link href="/book-demo" onClick={() => setOpen(false)}>
                  Book a demo
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
