'use client';

import Link from 'next/link';
import { industries } from '@/app/lib/industries';
import { getIndustryContent } from '@/app/lib/industryContent';
import { Check, ArrowRight } from 'lucide-react';

export default function IndustryDetail({ params }) {
  const industry = industries.find(i => i.slug === params.slug);

  if (!industry) {
    return (
      <div className="bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Industry Not Found</h1>
          <Link href="/industries" className="text-[#6B8EFF] hover:text-white">
            ← Back to industries
          </Link>
        </div>
      </div>
    );
  }

  const enriched = getIndustryContent(industry.slug);

  const faqJsonLd = enriched?.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: enriched.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <Link href="/industries" className="text-sm text-gray-400 hover:text-white inline-flex items-center gap-1">
            ← Back to industries
          </Link>
          <div className="mt-8 flex flex-col sm:flex-row items-start gap-6">
            <div className="text-6xl sm:text-7xl">{industry.icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
                {industry.name} CRM &amp; Marketing Automation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">{industry.description}</p>
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
          </div>
        </div>
      </section>

      {/* Long description */}
      {enriched?.longDescription && (
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-lg text-gray-300 leading-relaxed">{enriched.longDescription}</p>
          </div>
        </section>
      )}

      {/* Pain points */}
      {enriched?.painPoints?.length ? (
        <section className="py-12 sm:py-16 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-black mb-8">Common challenges in {industry.name.toLowerCase()}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {enriched.painPoints.map((p, i) => (
                <div key={i} className="p-5 bg-[#111111] border border-white/10 rounded-xl">
                  <p className="text-gray-300">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Solutions */}
      {enriched?.solutions?.length ? (
        <section className="py-12 sm:py-16 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-black mb-8">How WellPlan solves them</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {enriched.solutions.map((s, i) => (
                <div key={i} className="p-6 bg-[#111111] border border-white/10 rounded-xl">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-400" />
                    {s.title}
                  </h3>
                  <p className="text-gray-400">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        // Fallback to original benefits list
        <section className="py-12 sm:py-16 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-black mb-8">Key benefits for {industry.name}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {industry.benefits.map((benefit, idx) => (
                <div key={idx} className="p-6 bg-[#111111] border border-white/10 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 mt-1" />
                    <p className="font-semibold">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Workflow examples */}
      {enriched?.workflowExamples?.length ? (
        <section className="py-12 sm:py-16 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-black mb-8">Workflow examples</h2>
            <div className="space-y-6">
              {enriched.workflowExamples.map((wf, i) => (
                <div key={i} className="p-6 sm:p-8 bg-[#111111] border border-white/10 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">{wf.name}</h3>
                  <p className="text-sm text-[#6B8EFF] mb-4">Trigger: {wf.trigger}</p>
                  <ol className="space-y-2">
                    {wf.steps.map((step, j) => (
                      <li key={j} className="flex gap-3 text-gray-300">
                        <span className="w-6 h-6 shrink-0 rounded-full bg-[#214CE5]/20 text-[#6B8EFF] flex items-center justify-center text-xs font-bold">
                          {j + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQs */}
      {enriched?.faqs?.length ? (
        <section className="py-12 sm:py-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-black mb-8">Frequently asked questions</h2>
            <div className="space-y-3">
              {enriched.faqs.map((f, i) => (
                <details key={i} className="group p-5 bg-[#111111] border border-white/10 rounded-xl">
                  <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                    {f.q}
                    <span className="text-[#6B8EFF] group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="mt-3 text-gray-400 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Ready to grow your {industry.name.toLowerCase()}?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            See how WellPlan can help you capture more leads, nurture relationships, and close deals — built around your industry.
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
