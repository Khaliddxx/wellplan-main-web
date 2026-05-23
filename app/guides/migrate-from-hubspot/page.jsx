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
} from 'lucide-react';
import { breadcrumbJsonLd, SITE_URL } from '@/app/lib/seo';

const PATH = '/guides/migrate-from-hubspot';

const replacementMap = [
  {
    hubspot: 'HubSpot CRM (contacts, companies, deals)',
    wellplan: 'WellPlan CRM with contacts, companies, opportunities, and unlimited pipelines.',
  },
  {
    hubspot: 'Marketing Hub email campaigns',
    wellplan: 'WellPlan email builder with drag-and-drop templates, segmentation, and scheduled or trigger-based sends.',
  },
  {
    hubspot: 'HubSpot workflows and sequences',
    wellplan: 'WellPlan workflow automation with multi-step branching, wait timers, conditional logic, and AI-driven actions.',
  },
  {
    hubspot: 'Meetings (HubSpot scheduler)',
    wellplan: 'Native calendar booking with round-robin, group, and class calendars — synced to Google and Microsoft 365.',
  },
  {
    hubspot: 'Forms and landing pages',
    wellplan: 'WellPlan forms, surveys, funnels, and landing pages with built-in CRM capture.',
  },
  {
    hubspot: 'Live chat and conversations inbox',
    wellplan: 'Unified inbox covering web chat, SMS, email, WhatsApp Business API, Instagram DM, and Facebook Messenger.',
  },
  {
    hubspot: 'Lists and segmentation',
    wellplan: 'Smart Lists with dynamic filters across contact properties, behavior, and engagement data.',
  },
  {
    hubspot: 'Reporting dashboards',
    wellplan: 'Custom dashboards, pipeline reports, attribution, and conversion tracking.',
  },
  {
    hubspot: 'Operations Hub / data sync',
    wellplan: '200+ native integrations plus webhooks and an open API to keep your stack in sync.',
  },
  {
    hubspot: 'HubSpot AI add-ons',
    wellplan: 'AI chatbot, AI voice agent, AI review responder, AI content, AI funnel, and AI workflow builder — included natively.',
  },
];

const checklist = [
  'Export all contacts, companies, and deals from HubSpot as CSV files.',
  'Document every active workflow with its trigger, conditions, delays, and actions.',
  'Audit your static and active lists — keep only what you still use.',
  'List every integration HubSpot is connected to (calendar, payments, webinar, ads, support).',
  'Capture email templates, snippets, signatures, and brand assets in a shared folder.',
  'Note every form, landing page, and meeting link still in production.',
  'Identify which custom properties are mission-critical versus legacy clutter.',
  'Pull a snapshot of pipeline stages and deal probabilities for reference.',
];

const steps = [
  {
    icon: Database,
    title: 'Export your HubSpot data',
    body:
      "Start in HubSpot's Settings → Account → Import & Export. Export Contacts, Companies, Deals, and Engagements as CSVs. For each export, include every custom property — even ones you think you'll deprecate. If you have Marketing Hub, also export email assets, list memberships, and form submissions. Store the files in one cloud folder with the export date in the filename so nothing gets reused accidentally later.",
  },
  {
    icon: Rocket,
    title: 'Set up your WellPlan account and custom fields',
    body:
      "Create your WellPlan workspace and configure brand settings (logo, sender domain, business hours). Before importing data, mirror your HubSpot property schema as custom fields in WellPlan. Map field types carefully: HubSpot single-select properties become dropdowns, multi-select become multi-checkboxes, and date properties stay as dates. Set up users, roles, and team permissions in this step so imported records get the right ownership.",
  },
  {
    icon: Users,
    title: 'Import contacts and properties',
    body:
      "Use WellPlan's CSV import to load contacts. Map every column to the matching custom field — never skip mapping or you'll lose data. Import in batches (Customers first, then Prospects, then Unqualified) so you can verify each one before continuing. Tag each import batch with the source (e.g. 'hubspot-import-2026-05') for easy auditing and rollback if needed.",
  },
  {
    icon: Workflow,
    title: 'Recreate deal pipelines',
    body:
      "In WellPlan, create Opportunity pipelines that match your HubSpot deal pipelines stage-for-stage. Recreate stage probabilities, required fields, and any stage-specific automation. Then import your deals CSV, mapping HubSpot's pipeline and stage columns to WellPlan's equivalents. Spot-check a handful of records to confirm owners, amounts, and close dates landed correctly.",
  },
  {
    icon: Workflow,
    title: 'Rebuild automation workflows',
    body:
      "Don't try to import workflows — rebuild them. Use your documented workflow inventory and recreate each one in the WellPlan workflow builder. WellPlan's triggers, branches, and wait conditions cover the same ground as HubSpot workflows, plus channels HubSpot doesn't (WhatsApp, SMS, voice). Start with your highest-value workflows (lead nurture, deal handoff, onboarding) and only migrate seldom-used ones if they still earn their keep.",
  },
  {
    icon: Mail,
    title: 'Migrate email templates and campaigns',
    body:
      "Rebuild your most-used email templates inside WellPlan's email builder. Copy subject lines, preview text, and body content from HubSpot exports. Confirm sender authentication (SPF, DKIM, DMARC) for your sending domain inside WellPlan before sending. Recreate audience segments using Smart Lists, then test a small send to an internal seed list before resuming customer campaigns.",
  },
  {
    icon: Plug,
    title: 'Connect integrations and webhooks',
    body:
      "Reconnect every tool you depend on: Google Calendar, Microsoft 365, Stripe, Zoom, your ad platforms, support tools, and any analytics. WellPlan ships with 200+ native integrations, plus webhooks and an open API for anything else. For each integration, audit which events flow in and out so you don't end up with two systems writing to the same contact record.",
  },
  {
    icon: ShieldCheck,
    title: 'Test before cutover',
    body:
      "Run a parallel period of at least one to two weeks. Submit test forms, fire test workflows, push real deals through every stage, and send test emails to an internal list. Verify reports, dashboards, and notifications match what HubSpot used to show. Have your team work both systems briefly so they catch field mismatches and broken automations before customers do.",
  },
  {
    icon: ClipboardList,
    title: 'Cutover and decommission',
    body:
      "Pick a cutover date, freeze writes to HubSpot, and run one final delta export of any records modified since your last import. Update forms on your website, switch ad tracking, swap calendar links, and update your team's bookmarks. Keep HubSpot read-only for 30 to 90 days for audit and rollback. Once you've confirmed everything is clean, downgrade HubSpot to a free or paused state — don't cancel on day one.",
  },
];

const gotchas = [
  'Custom property mapping: HubSpot allows property types and options that don\'t always map 1:1. Audit dropdown values and date formats before import to avoid silent data loss.',
  'Workflow trigger differences: HubSpot triggers like "form submission" and "list membership" behave slightly differently than WellPlan\'s event-based triggers. Rebuild from intent, not from a copy of the trigger config.',
  'List segmentation differences: HubSpot Active Lists evaluate continuously; WellPlan Smart Lists evaluate on view and on automation entry. Test segment counts in both tools before relying on a workflow.',
  'Deal stage probabilities: probabilities transfer as numbers, but stage-specific required fields and rotting rules need to be rebuilt manually.',
  'Email engagement history: opens, clicks, and bounces from HubSpot don\'t transfer. Preserve a CSV snapshot for your records so analytics teams still have the history.',
  'Tracked email and shared inbox: forwarding rules and inbox connections must be reauthenticated. Don\'t assume IMAP/SMTP credentials carry over.',
  'Subscription and consent states: GDPR consent records and subscription types should be exported separately and mapped explicitly so you don\'t accidentally re-mail people who unsubscribed.',
];

const faqs = [
  {
    q: 'How long does a typical HubSpot to WellPlan migration take?',
    a: 'Most migrations take two to four weeks depending on data volume and workflow complexity. Simple lists of contacts and a handful of workflows can move in days; multi-pipeline setups with dozens of automations and integrations take longer. Our migration team scopes the timeline before you start.',
  },
  {
    q: 'Will I lose my contact engagement history?',
    a: 'Profile data, custom properties, lifecycle stage, and lead source transfer cleanly. Engagement history — opens, clicks, page views — is HubSpot-proprietary and stays in HubSpot. We recommend exporting an engagement snapshot for reference and starting fresh tracking in WellPlan from cutover day.',
  },
  {
    q: 'Can I keep using HubSpot during the migration?',
    a: 'Yes. We recommend running both systems in parallel for one to two weeks so you can verify imports and workflows before cutting over. Freeze new writes to HubSpot only on cutover day, then keep it read-only for 30 to 90 days as a fallback.',
  },
  {
    q: 'Do I need technical help to migrate from HubSpot?',
    a: 'No. WellPlan migration support covers the heavy lifting — data mapping, workflow rebuilding, integration reconnection, and email authentication. If you have engineering resources, we can also work alongside your team via the WellPlan API.',
  },
  {
    q: 'Will my email deliverability suffer when I switch?',
    a: 'Not if you warm up the new sending domain correctly. We help you set up SPF, DKIM, and DMARC on your sender domain, run a controlled warm-up schedule, and stagger your first sends so deliverability stays clean.',
  },
  {
    q: 'How does WellPlan pricing compare to HubSpot Marketing Hub?',
    a: 'WellPlan plans start at $97/month with all features included and unlimited contacts. HubSpot Marketing Hub Pro starts around $890/month and is priced by contact count, with a separate onboarding fee on Pro and Enterprise tiers. Most teams switching from HubSpot Pro see a substantial monthly reduction plus consolidation across CRM, marketing, sales, and support.',
  },
];

export default function MigrateFromHubspotPage() {
  const breadcrumb = breadcrumbJsonLd(PATH, {
    guides: 'Guides',
    'migrate-from-hubspot': 'Migrate from HubSpot',
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
    name: 'How to migrate from HubSpot to WellPlan',
    description:
      'Step-by-step guide to migrating contacts, deals, automations, email campaigns, and integrations from HubSpot to WellPlan.',
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
            Migrating from HubSpot to WellPlan: The Complete Guide
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mb-5">
            A practical, step-by-step playbook for moving your contacts, pipelines, automations, and campaigns to WellPlan — without losing data or downtime.
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl">
            Teams switch from HubSpot to WellPlan for three reasons: cost (HubSpot Marketing Hub Pro starts around $890/month and scales with contact count), tool consolidation (one platform replaces CRM, marketing automation, SMS, WhatsApp, calendars, funnels, payments, and memberships), and omnichannel needs (native WhatsApp Business API, SMS, voice, and AI agents that HubSpot doesn&apos;t ship by default). This guide walks you through every step.
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
              href="/compare/wellplan-vs-hubspot"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition"
            >
              Compare WellPlan vs HubSpot
            </Link>
          </div>
        </div>
      </section>

      {/* What WellPlan replaces */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-3">What WellPlan replaces from your HubSpot stack</h2>
          <p className="text-gray-400 mb-10 max-w-3xl">
            HubSpot is a multi-hub suite — Marketing, Sales, Service, CMS, and Operations. WellPlan covers the same core territory inside one workspace, plus channels HubSpot treats as add-ons.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-sm">In HubSpot</th>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-sm text-[#6B8EFF]">In WellPlan</th>
                </tr>
              </thead>
              <tbody>
                {replacementMap.map((row, i) => (
                  <tr key={i} className="border-t border-white/5">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-300 align-top w-1/3">{row.hubspot}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white">{row.wellplan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            Run through this before you touch the import tool. A clean inventory is the difference between a one-week migration and a six-week firefight.
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

      {/* Step-by-step migration */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-3">Step-by-step migration</h2>
          <p className="text-gray-400 mb-12 max-w-3xl">
            Nine ordered steps. Don&apos;t skip — each one assumes the previous step is clean.
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

      {/* Common gotchas */}
      <section className="py-16 sm:py-20 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-7 h-7 text-amber-400" />
            <h2 className="text-3xl sm:text-4xl font-black">Common gotchas</h2>
          </div>
          <p className="text-gray-400 mb-10 max-w-3xl">
            Real things that bite teams during HubSpot migrations. Plan for them up front.
          </p>
          <ul className="space-y-4">
            {gotchas.map((g, i) => (
              <li key={i} className="flex items-start gap-3 p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200 text-sm sm:text-base leading-relaxed">{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Free migration support */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#214CE5]/20 to-purple-500/10 border border-[#214CE5]/30">
            <div className="flex items-start gap-4 mb-4">
              <LifeBuoy className="w-8 h-8 text-[#6B8EFF] flex-shrink-0" />
              <h2 className="text-3xl sm:text-4xl font-black">Free migration support</h2>
            </div>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-3xl">
              Every WellPlan customer gets free migration support as part of onboarding. Our team will help you map fields, rebuild your highest-value workflows, reconnect your integrations, and validate everything in a parallel test environment before cutover. You don&apos;t have to figure this out alone — we&apos;ve moved teams off HubSpot of every size, from solo operators to multi-brand agencies, and we&apos;ll do the same for you.
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
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Ready to move off HubSpot?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Book a 30-minute migration call. We&apos;ll review your HubSpot setup, scope a timeline, and show you exactly how WellPlan replaces what you&apos;re using today.
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
