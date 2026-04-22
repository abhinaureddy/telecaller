import Link from "next/link";
import {
  PhoneIncoming,
  Zap,
  RefreshCw,
  Languages,
  ShieldCheck,
  Users,
  Lock,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Waveform } from "@/components/Waveform";
import { PricingCard, type PricingTier } from "@/components/PricingCard";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";

const trustBadges = [
  "TRAI-compliant",
  "DLT-registered",
  "10+ Indian languages",
  "Managed service, not software",
];

const problemStats = [
  {
    stat: "35–40%",
    label:
      "Of your inbound calls go unanswered — evenings, Sundays, lunch breaks, or when every telecaller is on another call.",
  },
  {
    stat: "8×",
    label:
      "A lead contacted in under 5 minutes is 8 times more likely to convert than one contacted after 60 minutes. Your team can't hit that speed. AI can.",
  },
  {
    stat: "2.3 vs 8",
    label:
      "Human telecallers attempt each lead 2–3 times before giving up. AI can attempt 6–8 times across voice and WhatsApp — without forgetting.",
  },
];

const agents = [
  {
    icon: PhoneIncoming,
    title: "Inbound Receptionist",
    tagline: "Never miss another inbound call.",
    description:
      "Answers your business number 24×7 — after hours, weekends, lunch breaks. Qualifies the caller, books callbacks, and logs every inquiry to your CRM. Routes urgent calls to your team, handles everything else.",
  },
  {
    icon: Zap,
    title: "Speed-to-Lead Qualifier",
    tagline: "Respond to every lead in 60 seconds.",
    description:
      "The moment a lead fills a form on your website, Meta ad, or any lead portal, our AI calls them within a minute. Qualifies in 90 seconds. Hot leads are warm-transferred to your best closer while the lead is still hot.",
  },
  {
    icon: RefreshCw,
    title: "Follow-Up Manager",
    tagline: "Close the loops your team keeps forgetting.",
    description:
      "Appointment confirmations, no-show recovery, post-meeting feedback, cold lead reactivation. The unglamorous work that makes your pipeline actually move — done automatically, in your customer's language.",
  },
];

const fitYes = [
  "Businesses with 50+ inbound inquiries per day",
  "Teams with 3+ telecallers or sales coordinators",
  "High-volume categories where response speed matters — real estate, coaching and education, healthcare, insurance, financial services, D2C ecommerce",
  "Owners tired of telecaller attrition, training costs, and missed follow-ups",
];

const fitNo = [
  "You make 5–10 high-touch sales calls a day (AI doesn't replace consultative selling)",
  "You cold-call strangers from purchased databases (we don't do this — it's illegal under TRAI)",
  "You need to close ₹50 lakh+ deals on the first call (AI qualifies; humans close)",
];

const whyUs = [
  {
    icon: Languages,
    title: "Truly Indian",
    body:
      "Hindi, English, Telugu, Tamil, Marathi, Bengali — and the code-switching your customers actually use. Not a US tool with a Hindi sticker. Our voices sound like your best telecaller, not a Silicon Valley chatbot.",
  },
  {
    icon: ShieldCheck,
    title: "Compliant by design",
    body:
      "We only call leads who've given consent. TRAI-registered, DLT-compliant, AI-disclosed, DND-scrubbed. Your telecom access is never at risk. One of the few AI calling providers that treats Indian regulation as a feature, not an afterthought.",
  },
  {
    icon: Users,
    title: "Managed, not self-serve",
    body:
      "We build your agents, deploy them, and optimize weekly. You get reports and a dedicated success manager — not a confusing dashboard you never open. We're your team, just with lower payroll.",
  },
  {
    icon: Lock,
    title: "You own everything",
    body:
      "Calls from your number. Leads in your CRM. Recordings you can download anytime. Cancel whenever you want and keep every byte of data. No lock-in, no data hostage.",
  },
];

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "₹19,999",
    priceNote: "/month",
    features: [
      "1,500 AI calling minutes",
      "1 agent (Inbound or Qualifier)",
      "2 languages",
      "Weekly performance reports",
      "WhatsApp support",
    ],
    bestFor: "Best for: Small teams testing AI telecalling",
    ctaLabel: "Start with Starter",
  },
  {
    name: "Growth",
    price: "₹39,999",
    priceNote: "/month",
    features: [
      "4,000 AI calling minutes",
      "2 agents (any combination)",
      "3 languages",
      "Weekly reports + monthly optimization call",
      "Dedicated success manager",
      "WhatsApp Business integration",
    ],
    bestFor: "Best for: 3–5 person sales teams",
    highlighted: true,
    ctaLabel: "Start with Growth",
  },
  {
    name: "Pro",
    price: "₹74,999",
    priceNote: "/month",
    features: [
      "9,000 AI calling minutes",
      "All 3 agents + custom agents",
      "All languages",
      "Weekly reports + bi-weekly strategy calls",
      "Dedicated success manager + priority support",
      "Full CRM integrations",
      "Custom workflows and escalation rules",
    ],
    bestFor: "Best for: 5+ telecaller teams, high-volume operations",
    ctaLabel: "Start with Pro",
  },
];

const faqs: FAQItem[] = [
  {
    q: "Will the AI sound like a robot?",
    a: "No. Our voices are trained on Indian accents and speak Hindi, English, Telugu, Tamil, and other Indian languages fluently — including code-switching. Most of our demo listeners don't realize they're hearing AI until we tell them. Book a demo and listen yourself.",
  },
  {
    q: "Is this legal? What about TRAI and DND?",
    a: "Yes, fully legal when done right. We only call leads who have inquired in the last 48 hours (consented contact). We don't touch cold databases. We're DLT-registered, scrub against DND before every call, and disclose AI identity at the start of each call. Our compliance page details every safeguard.",
  },
  {
    q: "Will this replace my entire telecaller team?",
    a: "No, and that's not what we recommend. AI handles the repetitive 80% — qualification, follow-ups, after-hours coverage. Your human closers focus on the 20% of conversations that actually close deals. Most clients keep their best 1–2 closers and redeploy the rest.",
  },
  {
    q: "How long does setup take?",
    a: "48 hours from contract signed to agent live. We customize the agent for your business — your scripts, your objections, your tone. First week is monitored closely. By day 7, you have a fully operational agent.",
  },
  {
    q: "What if it doesn't work for us?",
    a: "We offer a 7-day free pilot on your first 100 inquiries. If we don't outperform your current team on qualified leads per 100 inquiries, you walk away owing nothing. No credit card, no hidden commitment.",
  },
  {
    q: "Who owns the call recordings and lead data?",
    a: "You do. Every call, every transcript, every contact — yours. Downloadable anytime. If you ever cancel, you keep all of it.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[var(--bg-dark)] text-white overflow-hidden noise-overlay">
        <div className="gradient-top-strip gradient-brand" />
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 30%, rgba(128,32,144,0.28), transparent 70%), radial-gradient(50% 60% at 10% 80%, rgba(0,112,176,0.25), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="container-x section-pad relative">
          <div className="grid lg:grid-cols-[6fr_4fr] gap-12 lg:gap-16 items-center">
            <div className="anim-fade-up">
              <p className="eyebrow text-[var(--text-muted-dark)] mb-6">
                <span className="inline-block w-8 h-px bg-[var(--text-muted-dark)] align-middle mr-3" />
                AI telecalling · Built in India
              </p>
              <h1 className="display-xl text-white mb-7">
                AI telecallers that work{" "}
                <span className="gradient-brand-text italic">24×7</span>
                {" "}— in Hindi, English, and your customer's language.
              </h1>
              <p className="text-lg md:text-xl text-[var(--text-muted-dark)] leading-relaxed mb-10 max-w-2xl">
                Stop losing leads after office hours. Stop chasing unqualified inquiries.
                Our AI telecallers answer every call, qualify every lead, and hand the hot
                ones to your sales team — instantly.
              </p>

              <div className="flex flex-wrap items-center gap-5 mb-12">
                <Button asChild size="lg">
                  <Link href="/book-demo">
                    Book a 15-minute demo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {trustBadges.map((b) => (
                  <span key={b} className="pill">
                    <Check className="w-3.5 h-3.5 text-[var(--success)]" />
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative anim-scale-in delay-200">
              <div className="relative rounded-3xl border border-[var(--border-dark)] bg-gradient-to-br from-white/[0.04] to-transparent p-8 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--success)]" />
                    </span>
                    <span className="font-mono text-xs text-white tracking-wider uppercase">
                      Live call
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[var(--text-muted-dark)]">
                    00:47
                  </span>
                </div>

                <Waveform className="w-full h-auto mb-6" />

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-[var(--text-muted-dark)] pt-1 shrink-0">
                      AI
                    </span>
                    <p className="text-white/90 leading-snug">
                      Namaste, main Priya bol rahi hoon telecaller.ai se. Aapne hamari
                      property ke baare mein inquiry ki thi?
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-[var(--text-muted-dark)] pt-1 shrink-0">
                      USR
                    </span>
                    <p className="text-[var(--text-muted-dark)] leading-snug">
                      Haan, actually I'm looking for a 3BHK in HSR Layout.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-[var(--text-muted-dark)] pt-1 shrink-0">
                      AI
                    </span>
                    <p className="text-white/90 leading-snug">
                      Perfect. Budget range kitna rehega, aur when are you looking to move?
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full gradient-brand opacity-40 blur-2xl" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-[var(--bg-light)] section-pad">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow text-[var(--accent)] mb-5">The problem</p>
            <h2 className="display-l text-[var(--text-primary)] mb-8">
              Your telecalling team is losing you money — and you already know it.
            </h2>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              Every Indian business with an inbound sales team knows the same pain. Leads
              decay in minutes. Telecallers are expensive, inconsistent, and hard to retain.
              Evenings, weekends, and lunch hours are black holes where inquiries vanish.
              Here&apos;s the math most owners don&apos;t put on paper:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {problemStats.map((s, i) => (
              <div
                key={s.stat}
                className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-[var(--border-light)] relative overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <p className="eyebrow text-[var(--text-muted)] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="stat-numeric gradient-brand-text mb-6">{s.stat}</p>
                <p className="text-[var(--text-primary)] leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-16 text-center text-xl md:text-2xl font-medium text-[var(--text-primary)] max-w-3xl mx-auto leading-snug">
            You don&apos;t need more telecallers. You need a system that doesn&apos;t sleep,
            doesn&apos;t forget, and doesn&apos;t quit.
          </p>
        </div>
      </section>

      {/* AGENTS */}
      <section className="bg-[var(--bg-light)] section-pad border-t border-[var(--border-light)]">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow text-[var(--accent)] mb-5">What we deploy</p>
            <h2 className="display-l text-[var(--text-primary)]">
              Three AI telecallers. Three jobs. One outcome: no lead left behind.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {agents.map((a) => {
              const Icon = a.icon;
              return (
                <article
                  key={a.title}
                  className="bg-white rounded-2xl p-8 border border-[var(--border-light)] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent-light)] text-[var(--accent)] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl md:text-[1.75rem] text-[var(--text-primary)] mb-2 tracking-tight">
                    {a.title}
                  </h3>
                  <p className="italic text-[var(--accent)] mb-5 text-[0.95rem]">
                    {a.tagline}
                  </p>
                  <p className="text-[var(--text-muted)] leading-relaxed">{a.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Button asChild variant="ghost" size="md">
              <Link href="/book-demo">
                See how these work in your business
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FIT */}
      <section className="bg-[var(--bg-light)] section-pad border-t border-[var(--border-light)]">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow text-[var(--accent)] mb-5">Qualification</p>
            <h2 className="display-l text-[var(--text-primary)]">
              Is this a fit for your business?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="font-sans font-semibold text-lg text-[var(--success)] mb-6 tracking-tight">
                This works well for:
              </h3>
              <ul className="space-y-4">
                {fitYes.map((i) => (
                  <li key={i} className="flex gap-3 text-[var(--text-primary)]">
                    <Check className="w-5 h-5 shrink-0 mt-1 text-[var(--success)]" />
                    <span className="leading-relaxed">{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-lg text-[var(--text-muted)] mb-6 tracking-tight">
                This isn&apos;t a fit if:
              </h3>
              <ul className="space-y-4">
                {fitNo.map((i) => (
                  <li key={i} className="flex gap-3 text-[var(--text-muted)]">
                    <X className="w-5 h-5 shrink-0 mt-1" />
                    <span className="leading-relaxed">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-14 text-center text-[var(--text-muted)] italic max-w-2xl mx-auto">
            Not sure? Book a 15-minute demo. We&apos;ll tell you honestly if we&apos;re a fit.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[var(--bg-light)] section-pad border-t border-[var(--border-light)]">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow text-[var(--accent)] mb-5">Why us</p>
            <h2 className="display-l text-[var(--text-primary)]">
              Why businesses choose telecaller.ai over building it themselves.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {whyUs.map((w) => {
              const Icon = w.icon;
              return (
                <div
                  key={w.title}
                  className="bg-white rounded-2xl p-8 lg:p-10 border border-[var(--border-light)] shadow-sm"
                >
                  <div className="flex items-start gap-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent-light)] text-[var(--accent)] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl md:text-[1.625rem] text-[var(--text-primary)] mb-3 tracking-tight">
                        {w.title}
                      </h3>
                      <p className="text-[var(--text-muted)] leading-relaxed">{w.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="bg-[var(--bg-light)] section-pad">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="eyebrow text-[var(--accent)] mb-5">Pricing</p>
            <h2 className="display-l text-[var(--text-primary)]">
              Simple pricing. No seat fees. No per-call charges.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {tiers.map((t) => (
              <PricingCard key={t.name} tier={t} />
            ))}
          </div>

          <p className="mt-12 text-center text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
            All plans include: TRAI/DLT compliance, DND scrubbing, call recordings,
            onboarding, Indian-language voices, and 3-month minimum. Setup fee: ₹15,000
            (waived for your first 90 days).
          </p>

          <div className="mt-8 text-center">
            <Button asChild variant="link" className="text-[var(--accent)]">
              <Link href="/pricing">See full pricing details →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--bg-light)] section-pad border-t border-[var(--border-light)]">
        <div className="container-x">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">
            <div>
              <p className="eyebrow text-[var(--accent)] mb-5">FAQ</p>
              <h2 className="display-l text-[var(--text-primary)] mb-6">
                The questions we get asked most.
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Didn&apos;t find yours? Book a demo — we answer everything honestly on the
                call, including the awkward questions.
              </p>
            </div>
            <FAQAccordion items={faqs} idPrefix="home-faq" />
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to stop losing leads?"
        sub="Book a 15-minute demo. We'll show you the AI in your actual business context — your scripts, your objections, your language. If it's not a fit, we'll say so."
        footnote="No credit card · No sales pressure · 15 minutes, not 45"
      />
    </>
  );
}
