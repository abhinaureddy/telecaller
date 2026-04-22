import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

const productLinks = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Compliance", href: "/compliance" },
  { label: "Book a demo", href: "/book-demo" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/book-demo" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "DPDP compliance", href: "/legal/dpdp" },
  { label: "Refund policy", href: "/legal/refund" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-[var(--text-on-dark)] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--border-dark)]" />
      <div className="container-x pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div>
            <h4 className="eyebrow text-[var(--text-muted-dark)] mb-5">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-[var(--text-muted-dark)] mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-[var(--text-muted-dark)] mb-5">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-[var(--text-muted-dark)] mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp us
                </a>
              </li>
              <li className="text-[var(--text-muted-dark)]">
                {siteConfig.contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border-dark)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Image
              src="/logo.png"
              alt="telecaller.ai"
              width={820}
              height={300}
              className="h-7 w-auto"
            />
          </div>
          <p className="text-xs text-[var(--text-muted-dark)] tracking-wide">
            © 2026 telecaller.ai · Made in India · TRAI-compliant voice AI for Indian businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
