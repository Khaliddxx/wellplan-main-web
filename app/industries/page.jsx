'use client';

import Link from 'next/link';
import { industries } from '@/app/lib/industries';

export default function IndustriesPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Industry Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            WellPlan is built for every industry. See how your peers are winning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/50 transition h-full"
            >
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition">
                {industry.name}
              </h3>
              <p className="text-gray-400 mb-6 text-sm min-h-12">
                {industry.description}
              </p>
              <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
