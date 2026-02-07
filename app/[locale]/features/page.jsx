'use client';

import Link from 'next/link';
import { features } from '@/app/lib/features';

export default function FeaturesPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to capture, nurture, and close leads at scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Link
              key={feature.slug}
              href={`/features/${feature.slug}`}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/50 transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition">
                {feature.name}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">{feature.tagline}</p>
              <p className="text-gray-300 text-sm line-clamp-2 mb-6">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {feature.use_cases.slice(0, 2).map((use_case, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                    {use_case}
                  </span>
                ))}
              </div>
              <div className="mt-6 text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
