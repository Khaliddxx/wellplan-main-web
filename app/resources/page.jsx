import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  MessageSquare,
  Newspaper,
  GitCompareArrows,
  LayoutGrid,
  ScrollText,
  Plug,
  BarChart3,
  Zap,
  ArrowRightLeft,
  Sparkles,
} from 'lucide-react';

const guides = [
  {
    href: '/resources/whatsapp-crm',
    icon: MessageSquare,
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
    title: 'WhatsApp CRM Guide',
    description:
      'A complete pillar guide to running sales and support on WhatsApp with a real CRM behind it.',
  },
  {
    href: '/guides/migrate-from-hubspot',
    icon: ArrowRightLeft,
    iconBg: 'bg-[#214CE5]/15',
    iconColor: 'text-[#6B8EFF]',
    title: 'Migrate from HubSpot to WellPlan',
    description:
      'Step-by-step playbook to move contacts, pipelines, and automations off HubSpot without losing data.',
  },
  {
    href: '/guides/migrate-to-wellplan',
    icon: Sparkles,
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
    title: 'Generic Migration Guide',
    description:
      'How to migrate from any CRM or marketing tool to WellPlan with minimal downtime.',
  },
  {
    href: '/blog',
    icon: Newspaper,
    iconBg: 'bg-pink-500/15',
    iconColor: 'text-pink-400',
    title: 'WellPlan Blog',
    description:
      'Tactics, teardowns, and product updates on CRM, automation, and growth.',
  },
];

const comparisons = [
  {
    href: '/compare',
    icon: LayoutGrid,
    iconBg: 'bg-[#214CE5]/15',
    iconColor: 'text-[#6B8EFF]',
    title: 'All Comparisons',
    description:
      'Browse every WellPlan vs. alternative breakdown in one place.',
  },
  {
    href: '/compare/wellplan-vs-hubspot',
    icon: GitCompareArrows,
    iconBg: 'bg-orange-500/15',
    iconColor: 'text-orange-400',
    title: 'WellPlan vs HubSpot',
    description:
      'Pricing, features, and fit compared head-to-head with HubSpot.',
  },
  {
    href: '/compare/wellplan-vs-gohighlevel',
    icon: GitCompareArrows,
    iconBg: 'bg-cyan-500/15',
    iconColor: 'text-cyan-400',
    title: 'WellPlan vs Go High Level',
    description:
      'How WellPlan stacks up as an all-in-one agency and SMB platform.',
  },
  {
    href: '/compare/wellplan-vs-activecampaign',
    icon: GitCompareArrows,
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    title: 'WellPlan vs ActiveCampaign',
    description:
      'Compare automation depth, channels, and total cost of ownership.',
  },
  {
    href: '/alternatives/all-in-one-marketing-platform',
    icon: Sparkles,
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
    title: 'All-in-One Marketing Platform',
    description:
      'Why teams replace 5+ tools with a single all-in-one platform.',
  },
];

const reference = [
  {
    href: '/glossary',
    icon: ScrollText,
    iconBg: 'bg-[#214CE5]/15',
    iconColor: 'text-[#6B8EFF]',
    title: 'CRM & Marketing Glossary',
    description:
      'Plain-language definitions for every term across CRM, automation, and lead gen.',
  },
  {
    href: '/integrations',
    icon: Plug,
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
    title: 'Integrations',
    description:
      'Connect WhatsApp, Instagram, Stripe, Google, Zapier, and more.',
  },
  {
    href: '/case-studies',
    icon: BarChart3,
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
    title: 'Case Studies',
    description:
      'See how real teams capture, nurture, and close with WellPlan.',
  },
];

function ResourceCard({ item }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className="group block p-5 sm:p-6 bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#214CE5]/40 rounded-2xl transition-all"
    >
      <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
        <Icon className={`w-5 h-5 ${item.iconColor}`} />
      </div>
      <h3 className="font-semibold text-white text-base mb-2 group-hover:text-[#6B8EFF] transition">
        {item.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {item.description}
      </p>
      <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#6B8EFF] group-hover:text-white transition">
        Read more
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
      </div>
    </Link>
  );
}

function Section({ title, eyebrow, items, columns = 'sm:grid-cols-2 lg:grid-cols-3' }) {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="mb-6 sm:mb-8">
        {eyebrow ? (
          <span className="inline-block px-3 py-1 rounded-full bg-[#214CE5]/15 text-[#6B8EFF] text-[10px] font-bold uppercase tracking-wider mb-3">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
      </div>
      <div className={`grid grid-cols-1 ${columns} gap-4 sm:gap-5`}>
        {items.map((item) => (
          <ResourceCard key={item.href} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#214CE5]/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#214CE5]/15 border border-[#214CE5]/30 text-[#6B8EFF] text-[11px] font-bold uppercase tracking-wider mb-5">
              <BookOpen className="w-3.5 h-3.5" />
              Resources
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              WellPlan Resources — Guides, Comparisons &amp; Industry Insights
            </h1>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              Everything you need to evaluate, migrate to, and get more out of WellPlan.
              Dive into in-depth guides, side-by-side comparisons, and a complete glossary
              of CRM and marketing automation terms.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <Section
          eyebrow="Guides"
          title="In-depth guides"
          items={guides}
          columns="sm:grid-cols-2 lg:grid-cols-4"
        />

        <Section
          eyebrow="Comparisons"
          title="Compare WellPlan to alternatives"
          items={comparisons}
          columns="sm:grid-cols-2 lg:grid-cols-3"
        />

        <Section
          eyebrow="Reference"
          title="Reference &amp; insights"
          items={reference}
          columns="sm:grid-cols-2 lg:grid-cols-3"
        />

        {/* Final CTA */}
        <section className="mt-4">
          <div className="relative overflow-hidden p-8 sm:p-12 bg-gradient-to-br from-[#214CE5]/20 via-purple-500/10 to-emerald-500/10 border border-[#214CE5]/30 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 pointer-events-none" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Ready to see WellPlan in action?
                </h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  Book a personalized demo and we&apos;ll map your current workflow to
                  WellPlan&apos;s CRM, automation, and AI features.
                </p>
              </div>
              <div className="flex flex-shrink-0">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] hover:from-[#1a3db8] hover:to-[#14308f] text-white text-sm sm:text-base font-semibold rounded-xl transition shadow-lg shadow-[#214CE5]/30"
                >
                  <Zap className="w-4 h-4" />
                  Book a demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
