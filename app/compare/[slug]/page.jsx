import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, X, ArrowRight } from 'lucide-react';
import { comparisons } from '@/app/lib/comparisons';
import { buildMetadata, breadcrumbJsonLd, SITE_URL } from '@/app/lib/seo';

const slugToKey = {
  'wellplan-vs-hubspot': 'hubspot',
  'wellplan-vs-gohighlevel': 'gohighlevel',
  'wellplan-vs-activecampaign': 'activecampaign',
};

export async function generateStaticParams() {
  return Object.keys(slugToKey).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const key = slugToKey[params.slug];
  if (!key) {
    return buildMetadata({
      path: `/compare/${params.slug}`,
      title: 'Comparison Not Found',
      description: 'Comparison not found.',
      noindex: true,
    });
  }
  const c = comparisons[key];
  return buildMetadata({
    path: `/compare/${params.slug}`,
    title: `WellPlan vs ${c.competitorName} — Side-by-Side Comparison`,
    description: `Comparing WellPlan and ${c.competitorName}? See pricing, features, integrations, and when each is the right fit. Side-by-side breakdown.`,
  });
}

export default function ComparePage({ params }) {
  const key = slugToKey[params.slug];
  if (!key) notFound();
  const c = comparisons[key];

  const breadcrumb = breadcrumbJsonLd(`/compare/${params.slug}`, {
    compare: 'Compare',
    [params.slug]: `WellPlan vs ${c.competitorName}`,
  });

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Is WellPlan a good ${c.competitorName} alternative?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. WellPlan is built specifically to offer the all-in-one CRM and marketing automation that ${c.competitorName} users need — at a more accessible price and with native WhatsApp, Instagram DM, SMS, and AI built in.`,
        },
      },
      {
        '@type': 'Question',
        name: `How does WellPlan pricing compare to ${c.competitorName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `WellPlan starts at $97/month with all features included and unlimited contacts. Compare that to ${c.competitorName}'s pricing tiers — see the full table on this page.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can I migrate from ${c.competitorName} to WellPlan?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. We provide free migration support for contacts, automations, and pipelines from ${c.competitorName} as part of onboarding.`,
        },
      },
    ],
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <Link href="/" className="text-sm text-gray-400 hover:text-white">← Back to home</Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mt-6 mb-4 leading-tight">
            WellPlan vs {c.competitorName}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mb-6">{c.heroPitch}</p>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl">{c.summary}</p>
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

      {/* Comparison Table */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-2">Side-by-side comparison</h2>
          <p className="text-gray-400 mb-10">Feature-by-feature breakdown.</p>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-sm">Feature</th>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-sm text-[#6B8EFF]">WellPlan</th>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-sm">{c.competitorName}</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((row, i) => (
                  <tr key={i} className="border-t border-white/5">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">{row.feature}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white">{row.wellplan}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-400">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to choose which */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-10">Which one is right for you?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#214CE5]/20 to-purple-500/10 border border-[#214CE5]/30">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" /> Choose WellPlan if…
              </h3>
              <ul className="space-y-3">
                {c.whenToChoose.map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm sm:text-base flex gap-2">
                    <span className="text-[#6B8EFF] shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                Choose {c.competitorName} if…
              </h3>
              <ul className="space-y-3">
                {c.whenToChooseCompetitor.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm sm:text-base flex gap-2">
                    <span className="text-gray-500 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">See WellPlan in action</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Book a 30-minute personalized demo. We&apos;ll show you exactly how WellPlan compares for your use case.
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
