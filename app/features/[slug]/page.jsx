'use client';

import Link from 'next/link';
import { features } from '@/app/lib/features';

export default function FeatureDetail({ params }) {
  const feature = features.find(f => f.slug === params.slug);

  if (!feature) {
    return (
      <div className="bg-slate-950 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Feature Not Found</h1>
          <Link href="/features" className="text-blue-400 hover:text-blue-300">
            ← Back to features
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/features" className="text-blue-400 hover:text-blue-300 mb-12 inline-flex items-center gap-2">
          ← Back to features
        </Link>

        {/* Hero */}
        <div className="mb-20">
          <div className="text-7xl mb-6">{feature.icon}</div>
          <h1 className="text-6xl font-black mb-4">{feature.name}</h1>
          <p className="text-2xl text-gray-300 mb-8">{feature.description}</p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition">
            Start Free Trial
          </button>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-black mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {feature.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">✓</div>
                  <p className="text-lg font-semibold">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-black mb-8">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {feature.use_cases.map((use_case, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-500/30 text-center">
                <p className="text-xl font-bold">{use_case}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="mb-20">
          <h2 className="text-3xl font-black mb-8">Works With</h2>
          <div className="flex flex-wrap gap-3">
            {feature.integrations.map((integration, idx) => (
              <span key={idx} className="px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg">
                {integration}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-12 border border-slate-700/50 text-center">
          <h3 className="text-3xl font-black mb-4">Ready to use {feature.name}?</h3>
          <p className="text-gray-300 mb-8">
            Get started in minutes. No credit card required.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
