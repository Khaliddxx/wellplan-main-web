import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Database,
  Users,
  Workflow,
  Mail,
  Plug,
  ShieldCheck,
  Rocket,
  ClipboardList,
  AlertTriangle,
  LifeBuoy,
  ArrowRightLeft,
} from 'lucide-react';
import { breadcrumbJsonLd, SITE_URL } from '@/app/lib/seo';

const PATH = '/guides/migrate-to-wellplan';

const checklist = [
  'Export contacts, companies, and opportunities/deals from your current CRM as CSV files.',
  'Document every active automation, sequence, or workflow with its trigger, conditions, and actions.',
  'Audit your saved segments, lists, and views — keep only what you actively use.',
  'List every integration your current CRM connects to (calendar, payments, support, ads, analytics).',
  'Archive email templates, signatures, and brand assets in one shared folder.',
  'Inventory every form, landing page, and booking link in production.',
  'Mark which custom fields are mission-critical versus legacy clutter.',
  'Snapshot pipeline stages, stage probabilities, and stage-specific required fields.',
];

const steps = [
  {
    icon: Database,
    title: 'Export your CRM data',
    body:
      "From your current CRM, export contacts, companies, opportunities/deals, notes, and activities as CSVs. Include every custom field, even legacy ones — you can always discard them later, but you can't reconstruct them from a partial export. Store everything in one cloud folder with the export date in the filename. If your CRM doesn't have a native export, use its API or a backup tool to pull a clean snapshot before you start.",
  },
  {
    icon: Rocket,
    title: 'Set up your WellPlan workspace',
    body:
      "Create your WellPlan workspace, brand it (logo, sender domain, business hours), and add team members with the right roles. Then recreate your field schema as custom fields in WellPlan. Map data types deliberately: dropdowns to dropdowns, multi-selects to multi-checkboxes, dates to dates. Set up business locations, calendars, and payment gateways so imported data lands in a fully configured environment.",
  },
  {
    icon: Users,
    title: 'Import contacts and custom fields',
    body:
      "Use WellPlan's CSV importer to load contacts. Map every column to a matching custom field — never leave columns unmapped or you'll lose data silently. Import in cohorts (customers, prospects, leads) so each can be validated independently. Tag every batch with its source (for example, 'legacy-crm-import-2026-05') so you can trace records or roll back a batch if needed.",
  },
  {
    icon: Workflow,
    title: 'Recreate pipelines and opportunities',
    body:
      "Build WellPlan Opportunity pipelines that mirror your existing deal pipelines stage-for-stage. Set stage probabilities, required fields, and any stage-entry automation. Then import deals/opportunities, mapping the source's pipeline and stage columns to WellPlan's. Spot-check a sample of records to confirm owner, amount, and close date imported correctly.",
  },
  {
    icon: Workflow,
    title: 'Rebuild automations and workflows',
    body:
      "Don't try to copy automation configs across tools — rebuild them. Use your documented workflow inventory as the source of truth and recreate each one in the WellPlan workflow builder. Start with revenue-critical flows (lead nurture, deal handoff, onboarding, win-back) and only port the long tail if those workflows still earn their keep. WellPlan supports multi-channel triggers and actions across email, SMS, WhatsApp, voice, and AI agents — so you can simplify flows that previously needed multiple tools.",
  },
  {
    icon: Mail,
    title: 'Migrate email templates and campaigns',
    body:
      "Rebuild your top-performing email templates in WellPlan's email builder. Copy subject lines, preview text, and body content from your exports. Configure SPF, DKIM, and DMARC on your sender domain inside WellPlan before sending anything to real recipients. Recreate audience segments as Smart Lists, then send a test campaign to an internal seed list to verify rendering and deliverability before resuming customer sends.",
  },
  {
    icon: Plug,
    title: 'Connect integrations and webhooks',
    body:
      "Reconnect everything: calendars (Google, Microsoft 365), payments (Stripe), conferencing (Zoom), ad platforms, analytics, and support tools. WellPlan ships with 200+ native integrations, plus webhooks and an open API for anything else. For each integration, document which events flow in and out so you don't end up with two systems writing conflicting data to the same contact.",
  },
  {
    icon: ShieldCheck,
    title: 'Test in parallel before cutover',
    body:
      "Run a parallel period of one to two weeks. Submit test forms, fire test workflows, push real deals through every stage, and send tests to internal lists. Confirm dashboards, reports, and notifications match the data your old CRM showed. Have your team work both systems briefly so they catch broken mappings before customers do.",
  },
  {
    icon: ClipboardList,
    title: 'Cutover and decommission',
    body:
      "Pick a cutover date. Freeze writes to your old CRM, run one final delta export of anything modified since the last import, then bring those records into WellPlan. Update forms on your website, switch ad tracking endpoints, replace calendar booking links, and update your team's bookmarks. Keep the old CRM read-only for 30 to 90 days as a fallback — don't cancel on day one.",
  },
];

const mapping = [
  { from: 'Contacts', to: 'Contacts' },
  { from: 'Properties / fields', to: 'Custom fields' },
  { from: 'Lists / saved segments', to: 'Smart Lists' },
  { from: 'Workflows / sequences', to: 'Workflows' },
  { from: 'Deals', to: 'Opportunities' },
  { from: 'Pipelines', to: 'Pipelines' },
  { from: 'Meetings / calendar links', to: 'Calendars' },
  { from: 'Forms', to: 'Forms & Surveys' },
  { from: 'Email templates', to: 'Email templates' },
  { from: 'Live chat', to: 'Unified inbox (web chat, SMS, WhatsApp, Instagram, Messenger)' },
];

const pitfalls = [
  'Field type mismatches: a single-select in your old CRM may have allowed values your new dropdown rejects. Audit allowed values before importing.',
  'Date formats: US, EU, and ISO date formats silently break imports. Normalize all dates to ISO 8601 in your CSVs.',
  'Owner mapping: contact and deal owners must already exist as users in WellPlan before import, or ownership will fall back to a default.',
  'Subscription and consent state: GDPR/CAN-SPAM consent records must be exported separately and mapped explicitly so unsubscribes are preserved.',
  'Email engagement history doesn\'t transfer: opens, clicks, and bounces are proprietary to each platform. Snapshot a CSV for reference and start fresh tracking in WellPlan.',
  'Webhook secrets: any third-party tool calling into your old CRM needs new endpoint URLs and new secrets after cutover.',
  'Duplicate detection: if two systems are live in parallel, set clear write rules so a contact only updates from one source at a time.',
];

const faqs = [
  {
    q: 'How long does a CRM migration to WellPlan take?',
    a: 'Most migrations finish in two to four weeks. Smaller setups with a few thousand contacts and a handful of workflows can move in days. Larger setups with many integrations and complex pipelines may take a few weeks of planning, parallel testing, and phased cutover.',
  },
  {
    q: 'Do I lose data when I migrate?',
    a: 'Profile data, custom fields, ownership, pipeline data, and notes all transfer cleanly. What stays behind is platform-proprietary data like specific engagement timestamps from your old email tool. Snapshot those exports for reference; everything operationally important comes with you.',
  },
  {
    q: 'Can I run both CRMs in parallel during migration?',
    a: 'Yes — and we recommend it. Run both systems for one to two weeks so your team can verify imports, workflows, and integrations. Freeze writes to the old system on cutover day and keep it read-only for 30 to 90 days as a safety net.',
  },
  {
    q: 'Does WellPlan offer migration support?',
    a: 'Yes, free migration support is included with every plan. Our team helps with data mapping, workflow rebuilding, integration reconnection, email authentication, and parallel testing so you don\'t have to figure it out alone.',
  },
  {
    q: 'How much does WellPlan cost compared to other CRMs?',
    a: 'WellPlan plans start at $97/month with all features included and unlimited contacts. Most teams switching from contact-tier-priced CRMs reduce their monthly cost significantly while consolidating CRM, marketing automation, SMS, WhatsApp, calendars, funnels, payments, and AI into one platform.',
  },
];

export default function MigrateToWellplanPage() {
  const breadcrumb = breadcrumbJsonLd(PATH, {
    guides: 'Guides',
    'migrate-to-wellplan': 'Migrate to WellPlan',
  });

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to migrate your CRM to WellPlan',
    description:
      'Step-by-step guide to migrating contacts, opportunities, automations, email campaigns, and integrations from any CRM to WellPlan.',
    totalTime: 'P21D',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.body,
      url: `${SITE_URL}${PATH}#step-${i + 1}`,
    })),
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <Link href="/" className="text-sm text-gray-400 hover:text-white">← Back to home</Link>
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 bg-[#214CE5]/10 border border-[#214CE5]/30 rounded-full text-xs font-semibold text-[#6B8EFF]">
            Migration Guide
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mt-4 mb-5 leading-tight">
            How to Migrate Your CRM to WellPlan
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mb-5">
            A tool-neutral migration playbook for moving contacts, pipelines, automations, and campaigns into WellPlan with zero downtime.
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl">
            Teams migrate to WellPlan to consolidate their stack, lower monthly spend, and unlock channels their current CRM doesn&apos;t cover natively — WhatsApp Business API, SMS, AI chatbots, AI voice agents, and unified inbox messaging. Whether you&apos;re leaving a contact-tier-priced CRM, a generic email marketing tool, or a patchwork of point solutions, the playbook below works the same way.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#214CE5] hover:bg-[#1a3db8] rounded-xl font-semibold transition"
            >
              Talk to a migration specialist
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

      {/* Why teams migrate */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-5">Why teams migrate to WellPlan</h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg max-w-3xl">
            Most CRM migrations are driven by one of three forces. Cost: contact-tier pricing keeps climbing as your database grows, even when usage stays flat. Consolidation: you&apos;re paying for a CRM, an email tool, an SMS tool, a scheduler, a funnel builder, a chat tool, and a Zapier bill on top — and they don&apos;t share data cleanly. Capability: your current CRM doesn&apos;t natively support the channels customers actually use, like WhatsApp, SMS, and AI conversations. WellPlan addresses all three by combining CRM, pipelines, unified inbox, WhatsApp Business API, SMS, email, AI chatbot, AI voice, AI content, landing pages and funnels, forms, calendar booking, payments, memberships, workflow automation, and 200+ integrations into one platform with predictable pricing.
          </p>
        </div>
      </section>

      {/* Pre-migration checklist */}
      <section className="py-16 sm:py-20 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <ClipboardList className="w-7 h-7 text-[#6B8EFF]" />
            <h2 className="text-3xl sm:text-4xl font-black">Pre-migration checklist</h2>
          </div>
          <p className="text-gray-400 mb-10 max-w-3xl">
            Tool-agnostic. Run through this before you touch any importer. A clean inventory is the single biggest predictor of a smooth migration.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {checklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200 text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9-step playbook */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-3">The 9-step migration playbook</h2>
          <p className="text-gray-400 mb-12 max-w-3xl">
            Run these steps in order. Each step assumes the previous one is clean and verified.
          </p>
          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  id={`step-${i + 1}`}
                  className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#214CE5]/40 transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#214CE5]/10 border border-[#214CE5]/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#6B8EFF]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-[#6B8EFF] mb-1">Step {i + 1}</div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{step.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data mapping cheatsheet */}
      <section className="py-16 sm:py-20 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <ArrowRightLeft className="w-7 h-7 text-[#6B8EFF]" />
            <h2 className="text-3xl sm:text-4xl font-black">Data mapping cheatsheet</h2>
          </div>
          <p className="text-gray-400 mb-10 max-w-3xl">
            How concepts from common CRMs map to WellPlan equivalents.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-sm">In your current CRM</th>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-sm text-[#6B8EFF]">In WellPlan</th>
                </tr>
              </thead>
              <tbody>
                {mapping.map((row, i) => (
                  <tr key={i} className="border-t border-white/5">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-300">{row.from}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white">{row.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Common pitfalls */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-7 h-7 text-amber-400" />
            <h2 className="text-3xl sm:text-4xl font-black">Common pitfalls</h2>
          </div>
          <p className="text-gray-400 mb-10 max-w-3xl">
            The mistakes that turn a one-week migration into a two-month firefight.
          </p>
          <ul className="space-y-4">
            {pitfalls.map((p, i) => (
              <li key={i} className="flex items-start gap-3 p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200 text-sm sm:text-base leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Free migration support */}
      <section className="py-16 sm:py-20 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#214CE5]/20 to-purple-500/10 border border-[#214CE5]/30">
            <div className="flex items-start gap-4 mb-4">
              <LifeBuoy className="w-8 h-8 text-[#6B8EFF] flex-shrink-0" />
              <h2 className="text-3xl sm:text-4xl font-black">Free migration support</h2>
            </div>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-3xl">
              Every WellPlan plan includes free migration support. Our specialists will help you map fields, rebuild your key workflows, reconnect integrations, validate everything in a parallel test environment, and stage your cutover. You bring the data and the goals; we handle the hands-on work to get you live without losing momentum.
            </p>
            <div className="mt-6">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#214CE5] hover:bg-[#1a3db8] rounded-xl font-semibold transition"
              >
                Book a migration call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-10 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden">
                <summary className="cursor-pointer p-6 font-semibold text-white flex items-center justify-between hover:bg-white/[0.03]">
                  <span>{f.q}</span>
                  <ArrowRight className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed text-sm sm:text-base">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Ready to plan your migration?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute call. We&apos;ll review your current stack, scope a realistic timeline, and walk you through exactly how WellPlan replaces what you&apos;re using today.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#214CE5] hover:bg-[#1a3db8] rounded-xl font-semibold transition"
          >
            Book a free demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
