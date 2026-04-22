import type { Metadata } from "next";
import { XCircle } from "lucide-react";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "TRAI, DLT, DPDP Compliance — Built for Indian Regulation",
  description:
    "How telecaller.ai handles TRAI TCCCPR 2018, DLT registration, DND scrubbing, AI disclosure, and DPDP Act 2023 for every client.",
};

const framework = [
  {
    num: "01",
    title: "TRAI Telecom Commercial Communications (TCCCPR 2018, amended 2025)",
    body:
      "We operate as a registered telemarketer under TRAI's framework. All outbound calls are routed through approved number series. All campaigns are registered with Principal Entity binding. DLT template approval is handled for every client workflow.",
  },
  {
    num: "02",
    title: "DND (National Customer Preference Register)",
    body:
      "Every outbound call is scrubbed against the live DND registry within 60 seconds of dialing. Any number registered on DND for our client's category is auto-skipped. We maintain an audit log of every DND check for every call, available for regulatory review.",
  },
  {
    num: "03",
    title: "Consent-based calling only",
    body:
      "We only call leads who have inquired in the last 48 hours — meaning they've explicitly shared their number for a purpose directly related to the call. We do not accept cold databases, purchased contact lists, or scraped phone numbers as call inputs. This is a hard rule, not a preference.",
  },
  {
    num: "04",
    title: "AI disclosure",
    body:
      "Every AI agent discloses its nature in the opening line of every call, in the language the call is conducted in. Callers are informed they're speaking to an AI assistant and offered a path to a human at any time.",
  },
  {
    num: "05",
    title: "DPDP Act 2023 (Digital Personal Data Protection)",
    body:
      "All caller data is stored in India, encrypted at rest and in transit. Data retention follows DPDP principles — we delete personal data upon client request. Clients act as Data Fiduciary; we act as Data Processor under contracted terms. A signed Data Processing Agreement is part of every onboarding.",
  },
  {
    num: "06",
    title: "Call recording consent",
    body:
      "Every call includes explicit recording disclosure. Recordings are accessible only to the client, encrypted, and auto-deleted per the retention policy of the client's plan.",
  },
];

const whatThisMeans = [
  {
    title: "You never face a TRAI complaint from our operations.",
    body:
      "We bear the operational burden of compliance. You sign one DPA, and we handle DLT registration, DND scrubbing, AI disclosure, and recording consent from there.",
  },
  {
    title: "Your data stays in India.",
    body:
      "Caller data is hosted on India-based infrastructure. No cross-border transfer, no foreign subprocessor concerns.",
  },
  {
    title: "Audit trails are real.",
    body:
      "If a regulator asks for a call log, consent record, or DND check history, we produce it within 24 hours. Every call is traceable.",
  },
  {
    title: "If regulation changes, we adapt — you don't.",
    body:
      "TRAI updates happen often. We track every amendment and update our framework within 30 days of notification. Your operation keeps running without compliance firefighting.",
  },
];

const refusals = [
  "Call numbers on the DND registry for commercial purposes, even if the client insists",
  "Call cold databases or scraped lists, regardless of claimed consent",
  "Hide the AI from callers by pretending to be human",
  "Share caller data with third parties beyond our contracted processors",
  "Retain data beyond the retention period specified in the client's plan",
  "Operate without a signed DPA with every client",
];

export default function CompliancePage() {
  return (
    <>
      <section className="relative bg-[var(--bg-dark)] text-white section-pad noise-overlay overflow-hidden">
        <div className="gradient-top-strip gradient-brand" />
        <div className="container-x max-w-4xl anim-fade-up">
          <p className="eyebrow text-[var(--text-muted-dark)] mb-6">Compliance</p>
          <h1 className="display-xl text-white mb-7">
            Built for{" "}
            <span className="gradient-brand-text italic">Indian</span> regulation. Not
            American regulation with an India sticker.
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted-dark)] leading-relaxed max-w-3xl">
            TRAI, DLT, DPDP, DND — we&apos;ve built compliance into every layer of
            telecaller.ai. Here&apos;s exactly how.
          </p>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="bg-[var(--bg-light)] section-pad">
        <div className="container-x max-w-3xl">
          <p className="eyebrow text-[var(--accent)] mb-5">Why this matters</p>
          <div className="prose-custom space-y-6 text-lg text-[var(--text-primary)] leading-relaxed">
            <p>
              Indian AI calling regulation tightened significantly in 2025. Non-compliant
              vendors have had their telecom access suspended, their principal entity
              registrations blocked, and their customers caught in the fallout. If your AI
              calling provider isn&apos;t deeply compliant,{" "}
              <em className="text-[var(--accent)]">your</em> telecom access is at risk — not
              just theirs.
            </p>
            <p>
              We&apos;ve built telecaller.ai with Indian compliance as a foundational
              requirement, not a checkbox. Here&apos;s what we do.
            </p>
          </div>
        </div>
      </section>

      {/* 6-ITEM FRAMEWORK */}
      <section className="bg-[var(--bg-light)] section-pad border-t border-[var(--border-light)]">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow text-[var(--accent)] mb-5">The framework</p>
            <h2 className="display-l text-[var(--text-primary)]">
              Six layers of compliance, configured for every client.
            </h2>
          </div>

          <div className="space-y-8">
            {framework.map((item) => (
              <div
                key={item.num}
                className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 pb-8 border-b border-[var(--border-light)] last:border-0 last:pb-0"
              >
                <div className="shrink-0">
                  <div className="number-circle">{item.num}</div>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed text-[1.0625rem]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THIS MEANS */}
      <section className="bg-[var(--bg-light)] section-pad border-t border-[var(--border-light)]">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow text-[var(--accent)] mb-5">For you</p>
            <h2 className="display-l text-[var(--text-primary)]">
              What this means for you.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {whatThisMeans.map((w) => (
              <div
                key={w.title}
                className="bg-white rounded-2xl p-8 lg:p-10 border border-[var(--border-light)] shadow-sm"
              >
                <h3 className="font-display text-[1.625rem] text-[var(--text-primary)] mb-3 tracking-tight">
                  {w.title}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE REFUSE */}
      <section className="relative bg-[var(--bg-dark)] text-white section-pad noise-overlay overflow-hidden">
        <div className="gradient-top-strip gradient-brand" />
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow text-[var(--text-muted-dark)] mb-5">Hard lines</p>
            <h2 className="display-l text-white">
              What we will not do, under any circumstances.
            </h2>
          </div>

          <ul className="space-y-4 max-w-3xl">
            {refusals.map((r) => (
              <li
                key={r}
                className="flex items-start gap-4 p-5 rounded-xl border border-[var(--border-dark)] bg-white/[0.02]"
              >
                <XCircle className="w-6 h-6 text-[var(--accent)] shrink-0 mt-0.5" />
                <span className="text-[var(--text-muted-dark)] leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        variant="light"
        heading="Want our full compliance documentation?"
        sub="We'll send our DPA template, DLT registration certificate, and DPDP data flow diagram before you sign anything. Ask during your demo."
        buttonLabel="Book a demo"
      />
    </>
  );
}
