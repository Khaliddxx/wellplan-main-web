'use client';

import Link from 'next/link';
import { caseStudies } from '@/app/lib/caseStudies';

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how companies across industries achieved extraordinary results with WellPlan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/50 transition"
            >
              <div className="text-6xl mb-4">{study.image}</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition">
                {study.company}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">{study.industry}</p>
              <div className="mb-6">
                <p className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {study.metric}
                </p>
                <p className="text-sm text-gray-400 mt-1">{study.improvement}</p>
              </div>
              <p className="text-gray-300 text-sm line-clamp-2">
                {study.challenge}
              </p>
              <div className="mt-6 text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition">
                Read case study →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
