import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/app/lib/seo';
import { comparisons } from '@/app/lib/comparisons';

export const metadata = buildMetadata({
  path: '/compare',
  title: 'WellPlan vs HubSpot, GoHighLevel & ActiveCampaign — Compare',
  description: 'Comparing WellPlan to other CRM and marketing automation platforms? Side-by-side breakdowns of pricing, features, and best-fit use cases.',
});

const slugs = {
  'wellplan-vs-hubspot': 'hubspot',
  'wellplan-vs-gohighlevel': 'gohighlevel',
  'wellplan-vs-activecampaign': 'activecampaign',
};

export default function CompareIndex() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
            How does WellPlan compare?
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Honest side-by-side breakdowns against the platforms WellPlan customers most often consider.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(slugs).map(([slug, key]) => {
              const c = comparisons[key];
              return (
                <Link
                  key={slug}
                  href={`/compare/${slug}`}
                  className="group p-8 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#214CE5]/40 transition"
                >
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-[#6B8EFF] transition">
                    WellPlan vs {c.competitorName}
                  </h2>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3">{c.competitorTagline}</p>
                  <span className="inline-flex items-center gap-2 text-[#6B8EFF] text-sm font-semibold">
                    See comparison <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
