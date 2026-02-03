'use client';

import Link from 'next/link';
import { industries } from '@/app/lib/industries';

export default function IndustryDetail({ params }) {
  const industry = industries.find(i => i.slug === params.slug);

  if (!industry) {
    return (
      <div className="bg-slate-950 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Industry Not Found</h1>
          <Link href="/industries" className="text-blue-400 hover:text-blue-300">
            ← Back to industries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/industries" className="text-blue-400 hover:text-blue-300 mb-12 inline-flex items-center gap-2">
          ← Back to industries
        </Link>

        <div className="mb-20">
          <div className="text-7xl mb-6">{industry.icon}</div>
          <h1 className="text-6xl font-black mb-4">{industry.name}</h1>
          <p className="text-2xl text-gray-300">{industry.description}</p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-black mb-8">Key Benefits for {industry.name}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">✓</div>
                  <p className="text-lg font-semibold">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-12 border border-slate-700/50 text-center">
          <h3 className="text-3xl font-black mb-4">Ready to grow your {industry.name.toLowerCase()}?</h3>
          <p className="text-gray-300 mb-8">
            Join companies in {industry.name} using WellPlan to scale their business
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
