import type { Metadata } from "next";
import {
  PhoneCall,
  MessageCircle,
  ClipboardCheck,
  GitBranch,
  TrendingUp,
  Settings2,
  FileCheck,
  Link2,
  BarChart3,
  XCircle,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How It Works — AI Telecalling in 48 Hours",
  description:
    "From call to close in 5 steps. See how our AI telecallers qualify leads, route hot prospects, and integrate with your CRM.",
};

const steps = [
  {
    icon: PhoneCall,
    title: "Call or lead comes in",
    body:
      "A customer calls your business number, or fills a form on your website, Facebook ad, or lead portal. Within 60 seconds, our AI is on it.",
  },
  {
    icon: MessageCircle,
    title: "AI engages in the customer's language",
    body:
      "The agent greets in Hindi, English, or whichever language the customer speaks. Natural conversation, not IVR menus. Switches languages mid-conversation if needed.",
  },
  {
    icon: ClipboardCheck,
    title: "Qualify in 90 seconds",
    body:
      "The agent asks 4–5 qualifying questions specific to your business — budget, timeline, need, decision-maker status. Gets to a clear yes/no/maybe in under 2 minutes.",
  },
  {
    icon: GitBranch,
    title: "Route the lead intelligently",
    body:
      "Hot leads are warm-transferred to your human closer while the customer is still on the line. Warm leads get a WhatsApp follow-up and a scheduled callback. Cold leads are logged and nurtured automatically.",
  },
  {
    icon: TrendingUp,
    title: "You get the data, your team closes",
    body:
      "Every call is transcribed, logged, and sent to your CRM. Your closers wake up to a clean list of pre-qualified hot leads. No time wasted on tire-kickers.",
  },
];

const buildItems = [
  {
    icon: Settings2,
    title: "Custom agents for your business",
    body:
      "We don't hand you a template. We spend 4–6 hours understanding your business — scripts, FAQs, objections, competitor pricing — and build agents that sound like your best employee.",
  },
  {
    icon: FileCheck,
    title: "Phone number + compliance setup",
    body:
      "We register your agents on DLT, configure DND scrubbing, set up call recording, and handle AI disclosure. You never touch a regulator.",
  },
  {
    icon: Link2,
    title: "CRM, WhatsApp, and calendar integrations",
    body:
      "Calls log to your CRM (Zoho, HubSpot, Salesforce, or Google Sheets). Follow-ups trigger WhatsApp messages. Appointments auto-book on your team's calendar.",
  },
  {
    icon: BarChart3,
    title: "Weekly reports + ongoing optimization",
    body:
      "Every Monday: a performance report with connect rates, qualification rates, cost per qualified lead, and recommended script changes. We optimize your agents weekly based on real call data.",
  },
];

const refusals = [
  {
    title: "We don't call cold databases.",
    body:
      "If you've bought a list of phone numbers and want us to dial them, we'll decline. That's illegal under TRAI, risks your telecom access, and damages trust in the whole AI calling industry. We only call leads who have inquired in the last 48 hours.",
  },
  {
    title: "We don't hide the AI.",
    body:
      "Every agent discloses it's an AI-powered assistant in the opening line. Tricking customers is short-term thinking that burns your brand. Honest AI outperforms deceptive AI anyway — customers who know they're talking to AI are 40% more forgiving of minor errors.",
  },
  {
    title: "We don't lock you in.",
    body:
      "No annual contracts after the first 3 months. No data hostage if you cancel. No penalty for leaving. If we're not delivering, you should leave — and we should earn your business back with better results.",
  },
  {
    title: "We don't replace your closers.",
    body:
      "AI is not going to close your big-ticket deals. It's not meant to. AI handles qualification and follow-up; humans handle persuasion and closing. Any vendor telling you AI will \u201creplace your entire sales team\u201d is selling you a fantasy.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative bg-[var(--bg-dark)] text-white section-pad noise-overlay overflow-hidden">
        <div className="gradient-top-strip gradient-brand" />
        <div className="container-x max-w-4xl anim-fade-up">
          <p className="eyebrow text-[var(--text-muted-dark)] mb-6">How it works</p>
          <h1 className="display-xl text-white mb-7">
            How telecaller.ai <span className="gradient-brand-text italic">actually</span>{" "}
            works.
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted-dark)] leading-relaxed max-w-3xl">
            No magic, no black box. Here&apos;s exactly what happens from the moment a call
            comes in to the moment your team closes the deal.
          </p>
        </div>
      </section>

      {/* 5-STEP FLOW */}
      <section className="bg-[var(--bg-light)] section-pad">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow text-[var(--accent)] mb-5">The 5-step flow</p>
            <h2 className="display-l text-[var(--text-primary)]">
              Call in. Lead qualified. Hot one on your closer&apos;s phone.
            </h2>
          </div>

          <ol className="relative space-y-10 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-6">
            <div
              className="hidden lg:block absolute left-0 right-0 top-[22px] h-px bg-gradient-to-r from-transparent via-[var(--border-light)] to-transparent"
              aria-hidden
            />
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="relative flex lg:flex-col gap-5 lg:gap-5">
                  <div className="flex flex-col items-center shrink-0 lg:items-start">
                    <div className="number-circle relative z-10 shadow-[0_8px_20px_-4px_rgba(91,63,160,0.4)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="lg:hidden w-px flex-1 bg-[var(--border-light)] mt-3" />
                  </div>
                  <div className="lg:pt-2 pb-4">
                    <Icon className="w-5 h-5 text-[var(--accent)] mb-4" />
                    <h3 className="font-display text-2xl text-[var(--text-primary)] mb-3 tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="bg-[var(--bg-light)] section-pad border-t border-[var(--border-light)]">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow text-[var(--accent)] mb-5">What you get</p>
            <h2 className="display-l text-[var(--text-primary)]">
              A full telecalling operation, deployed in 48 hours.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {buildItems.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-white rounded-2xl p-8 lg:p-10 border border-[var(--border-light)] shadow-sm"
                >
                  <div className="flex items-start gap-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent-light)] text-[var(--accent)] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-[1.625rem] text-[var(--text-primary)] mb-3 tracking-tight">
                        {b.title}
                      </h3>
                      <p className="text-[var(--text-muted)] leading-relaxed">{b.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE DON'T DO */}
      <section className="relative bg-[var(--bg-dark)] text-white section-pad noise-overlay overflow-hidden">
        <div className="gradient-top-strip gradient-brand" />
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow text-[var(--text-muted-dark)] mb-5">The confession</p>
            <h2 className="display-l text-white">
              What we refuse to do — and why you should care.
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl">
            {refusals.map((r) => (
              <div
                key={r.title}
                className="flex items-start gap-5 p-7 lg:p-8 rounded-2xl border border-[var(--border-dark)] bg-white/[0.02]"
              >
                <XCircle className="w-7 h-7 text-[var(--accent)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-2xl text-white mb-2 tracking-tight">
                    {r.title}
                  </h3>
                  <p className="text-[var(--text-muted-dark)] leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="light"
        heading="Still have questions about the mechanics?"
        sub="15-minute demo, no sales pitch. We'll walk through how this would work in your specific business."
      />
    </>
  );
}
