'use client';

import Link from 'next/link';
import { caseStudies } from '@/app/lib/caseStudies';

export default function CaseStudyDetail({ params }) {
  const study = caseStudies.find(s => s.slug === params.slug);

  if (!study) {
    return (
      <div className="bg-slate-950 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Case Study Not Found</h1>
          <Link href="/case-studies" className="text-blue-400 hover:text-blue-300">
            ← Back to case studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 mb-12 inline-flex items-center gap-2">
          ← Back to case studies
        </Link>

        <div className="mb-20">
          <div className="text-7xl mb-6">{study.image}</div>
          <h1 className="text-6xl font-black mb-4">{study.company}</h1>
          <div className="flex flex-wrap gap-6 mb-8">
            <div>
              <p className="text-sm text-gray-400 mb-2">Industry</p>
              <p className="text-xl font-bold">{study.industry}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Result</p>
              <p className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {study.metric}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Improvement</p>
              <p className="text-xl font-bold">{study.improvement}</p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="space-y-12 mb-20">
          <section>
            <h2 className="text-3xl font-black mb-4">The Challenge</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {study.challenge}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-4">The Solution</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {study.solution}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-4">The Results</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {study.result}
            </p>
          </section>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30 mb-20">
          <p className="text-2xl font-semibold mb-6 italic">
            {study.testimonial}
          </p>
          <div>
            <p className="font-bold text-lg">{study.author}</p>
            <p className="text-gray-400">{study.title}, {study.company}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-12 border border-slate-700/50">
          <h3 className="text-3xl font-black mb-4">Ready to achieve similar results?</h3>
          <p className="text-gray-300 mb-8">
            Join {study.company} and thousands of other businesses using WellPlan
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
