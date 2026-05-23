import Link from 'next/link';
import { ArrowRight, Check, X } from 'lucide-react';
import { breadcrumbJsonLd } from '@/app/lib/seo';

const stackProblems = [
  {
    title: 'A standalone CRM',
    detail: 'Pipelines, contacts, deals — usually $50–$150 per seat, per month.',
  },
  {
    title: 'A separate email marketing tool',
    detail: 'Per-contact pricing that punishes you for having a bigger list.',
  },
  {
    title: 'A dedicated SMS provider',
    detail: 'Per-segment fees, separate sender numbers, separate compliance.',
  },
  {
    title: 'A WhatsApp Business Solution Provider',
    detail: 'Another vendor, another approval process, another inbox to monitor.',
  },
  {
    title: 'A funnel and landing page builder',
    detail: 'Another subscription, plus form data that lives in yet another silo.',
  },
  {
    title: 'A calendar / booking tool',
    detail: 'Webhooks into the CRM that break every other month.',
  },
  {
    title: 'A review management tool',
    detail: 'A separate dashboard nobody actually logs into.',
  },
  {
    title: 'An automation "glue" layer',
    detail: 'Zaps, scripts, and a part-time ops person keeping it all alive.',
  },
];

const stackVsWellplan = {
  stack: [
    'CRM subscription',
    'Email marketing tool',
    'SMS provider',
    'WhatsApp BSP',
    'Funnel / landing page builder',
    'Calendar / booking tool',
    'Review management tool',
    'AI chatbot vendor',
    'AI voice agent vendor',
    'Course / membership platform',
    'Automation / integration layer',
    'Reporting / dashboard add-on',
  ],
  wellplan: [
    'CRM with pipelines and lead scoring',
    'Email and SMS marketing, built-in',
    'WhatsApp Business API, native',
    'Landing page and funnel builder',
    'Calendar booking, native',
    'Review and reputation management',
    'AI chatbot and AI voice agent',
    'Memberships and courses',
    'Workflow automation engine',
    'Unified inbox across every channel',
    '200+ integrations',
    'One dashboard, one bill, one login',
  ],
};

const featureGroups = [
  {
    label: 'Capture',
    items: [
      'Drag-and-drop landing pages and funnels',
      'Forms and surveys with conditional logic',
      'AI chatbot for websites and social',
      'Web chat widget',
      'QR codes and trackable links',
    ],
  },
  {
    label: 'Nurture',
    items: [
      'Email marketing with templates and segments',
      'SMS broadcasts and 2-way SMS',
      'WhatsApp Business API messaging',
      'Drip workflows across every channel',
      'Audience segmentation and lead scoring',
    ],
  },
  {
    label: 'Close',
    items: [
      'CRM with custom pipelines',
      'Calendar booking with round-robin',
      'Quotes, invoices, and payment links',
      'Pipeline forecasting and reporting',
      'Mobile app for reps on the go',
    ],
  },
  {
    label: 'Retain',
    items: [
      'Review requests over SMS and email',
      'Reputation management dashboard',
      'AI voice agent for inbound and outbound calls',
      'Memberships and online courses',
      'Loyalty and re-engagement automations',
    ],
  },
  {
    label: 'Scale',
    items: [
      'Visual workflow automation builder',
      'AI content, AI chatbot, AI voice',
      'White-label and sub-accounts (Agency plan)',
      '200+ native integrations',
      'Open API and webhooks',
    ],
  },
];

const segments = [
  {
    title: 'Marketing agencies',
    body:
      'Running campaigns for clients across email, SMS, WhatsApp, ads, and funnels — and tired of buying a tool per channel, per client. White-label and sub-accounts let you operate every client from one parent workspace.',
  },
  {
    title: 'Coaches and consultants',
    body:
      'Capturing leads, booking discovery calls, selling courses, and following up — without paying for five different SaaS tools that barely talk to each other.',
  },
  {
    title: 'SMBs outgrowing their first stack',
    body:
      'You bootstrapped with a free CRM, a separate email tool, and a calendar link. Now leads are slipping through the cracks and your team is logging into six dashboards. Time to consolidate.',
  },
];

const advantages = [
  {
    title: 'A single source of truth for every contact',
    body:
      'Every email open, SMS reply, WhatsApp message, form submission, booked call, and pipeline stage is attached to one contact record. No more reconciling exports across tools.',
  },
  {
    title: 'Cross-channel automation that actually works',
    body:
      'Trigger an email when a deal moves stages, follow up with SMS if it stalls, then escalate to WhatsApp — all from one workflow builder, no Zapier in the middle.',
  },
  {
    title: 'One bill, one login, one support team',
    body:
      'Stop reconciling a dozen invoices and chasing different vendors when something breaks. One subscription, one place to call when you need help.',
  },
  {
    title: 'Faster setup, faster time to value',
    body:
      'Templates for funnels, automations, pipelines, and review requests come pre-built. Most teams are sending their first campaign within a week.',
  },
  {
    title: 'No per-contact or per-channel taxes',
    body:
      'Your costs do not balloon because your list grew or because you added SMS to the mix. Predictable pricing, all features included.',
  },
];

const faqs = [
  {
    q: 'How does migration from my existing tools work?',
    a: 'We provide free onboarding migration for contacts, pipelines, email lists, and automations. Most teams move over in one to two weeks. CSV imports, native integrations, and API access are all available, and our team helps map your old workflows into WellPlan.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No. WellPlan is month-to-month on every plan. You can upgrade, downgrade, or cancel at any time. Annual plans are available at a discount if you prefer to lock in pricing.',
  },
  {
    q: 'What is the learning curve like for my team?',
    a: 'Most users are comfortable inside the CRM, inbox, and campaign builder within a day. Workflow automation and the funnel builder take a bit longer to master, which is why every plan includes onboarding, a template library, and access to our help center and live support.',
  },
  {
    q: 'Do you offer white-label for agencies?',
    a: 'Yes. The Agency plan includes full white-label: your domain, your branding, your client logins, and your own sub-accounts. You can resell WellPlan as your own platform and bill clients directly.',
  },
  {
    q: 'Can I manage multiple businesses or clients from one account?',
    a: 'Yes. Sub-accounts let you operate any number of separate workspaces from a single parent login, each with its own contacts, pipelines, numbers, and automations. Agencies use this to run every client from one place.',
  },
  {
    q: 'What integrations are available?',
    a: 'WellPlan has 200+ native integrations covering payments (Stripe, PayPal), calendars (Google, Outlook), ads (Meta, Google), accounting, e-commerce, and more. Anything not native can be connected through Zapier, webhooks, or our open API.',
  },
];

export default function AllInOneMarketingPlatformPage() {
  const breadcrumb = breadcrumbJsonLd('/alternatives/all-in-one-marketing-platform', {
    alternatives: 'Alternatives',
    'all-in-one-marketing-platform': 'All-in-One Marketing Platform',
  });

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <Link href="/" className="text-sm text-gray-400 hover:text-white">← Back to home</Link>
          <p className="mt-6 inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#6B8EFF] bg-[#214CE5]/10 border border-[#214CE5]/30 rounded-full px-3 py-1">
            All-in-one marketing platform
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mt-6 mb-6 leading-tight">
            Replace 7+ Marketing Tools with One Unified Platform
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mb-6">
            CRM, email, SMS, WhatsApp, funnels, calendar, reviews, AI, and automation — under one
            login, one bill, and one team. WellPlan is the all-in-one marketing platform built for
            agencies, coaches, and growing SMBs.
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl">
            Stop wiring together a dozen subscriptions just to follow up with a lead. Run capture,
            nurture, and close from a single source of truth — starting at $97/mo with every
            feature included.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#214CE5] hover:bg-[#1a3db8] rounded-xl font-semibold transition"
            >
              Book a free demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Problem: marketing stack chaos */}
      <section className="py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">The marketing stack chaos problem</h2>
          <p className="text-gray-400 max-w-3xl mb-10">
            Most growing teams end up running eight to twelve separate tools just to manage one
            lead from first click to repeat customer. Every tool is a subscription, a login, a data
            silo, and a thing that can break.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {stackProblems.map((p, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white/5 border border-white/10 flex gap-3 items-start"
              >
                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{p.title}</p>
                  <p className="text-sm text-gray-400 mt-1">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-red-500/20">
            <p className="text-lg font-semibold mb-2">The real cost of the stitched stack</p>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li className="flex gap-2"><span className="text-red-400 shrink-0">›</span> Five-figure monthly SaaS bills once you add up every tool, per seat, per contact.</li>
              <li className="flex gap-2"><span className="text-red-400 shrink-0">›</span> Broken contact data — the same person exists three times across three tools.</li>
              <li className="flex gap-2"><span className="text-red-400 shrink-0">›</span> Integration debt — every Zap, webhook, and custom script is a future outage.</li>
              <li className="flex gap-2"><span className="text-red-400 shrink-0">›</span> Slower campaigns — every cross-channel workflow requires three vendors to cooperate.</li>
              <li className="flex gap-2"><span className="text-red-400 shrink-0">›</span> No single view of the customer, so reporting is mostly guesswork.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What WellPlan replaces */}
      <section className="py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">What WellPlan replaces</h2>
          <p className="text-gray-400 max-w-3xl mb-10">
            One platform, one team, one bill. Here is what consolidates the day you switch.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Your current stack
              </p>
              <ul className="space-y-3">
                {stackVsWellplan.stack.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-gray-300">
                    <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#214CE5]/20 to-purple-500/10 border border-[#214CE5]/30">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#6B8EFF] mb-4">
                WellPlan — one platform
              </p>
              <ul className="space-y-3">
                {stackVsWellplan.wellplan.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-gray-100">
                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature parity */}
      <section className="py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Every feature your stack does — in one place</h2>
          <p className="text-gray-400 max-w-3xl mb-10">
            Capture, nurture, close, retain, scale. WellPlan covers the full lifecycle natively.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureGroups.map((group, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-[#6B8EFF] mb-3">
                  {group.label}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex gap-2 items-start text-gray-300 text-sm sm:text-base">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-lg font-semibold mb-2">Plus a truly unified inbox</p>
            <p className="text-gray-300 text-sm sm:text-base">
              WhatsApp, Instagram DM, SMS, email, web chat, Facebook Messenger, and Google Business
              Messages — every conversation lands in one inbox, attached to one contact, with full
              history. No more switching tabs to answer a lead.
            </p>
          </div>
        </div>
      </section>

      {/* Who switches */}
      <section className="py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Who switches to WellPlan</h2>
          <p className="text-gray-400 max-w-3xl mb-10">
            Teams that have outgrown a piecemeal stack and want one platform that actually fits.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {segments.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">What you get with WellPlan that a stitched stack can&apos;t give you</h2>
          <p className="text-gray-400 max-w-3xl mb-10">
            These are the things that disappear the day you consolidate.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {advantages.map((a, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex items-start gap-3 mb-2">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <h3 className="text-lg font-bold">{a.title}</h3>
                </div>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed pl-8">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing position */}
      <section className="py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Honest, predictable pricing</h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            From <span className="text-white font-bold">$97/mo</span> with every feature included.
            No per-contact fees. No per-channel fees. No per-seat surprise charges. Pick the plan
            that fits your team size — everything else is in the box.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#214CE5] hover:bg-[#1a3db8] rounded-xl font-semibold transition"
            >
              See full pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-10">Questions teams ask before switching</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="text-lg font-bold mb-2">{f.q}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">See WellPlan run your whole stack</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Book a 30-minute walkthrough. We&apos;ll show you exactly how WellPlan replaces the tools
            you&apos;re already paying for — and what that looks like for your team.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#214CE5] hover:bg-[#1a3db8] rounded-xl font-semibold transition"
            >
              Book a free demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition"
            >
              See comparison pages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
