import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowLeft, BookOpen, Lightbulb, Sparkles, Link2 } from 'lucide-react';
import { glossaryTerms, getTermBySlug } from '@/app/lib/glossary';
import { buildMetadata, breadcrumbJsonLd, SITE_URL } from '@/app/lib/seo';

export async function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const t = getTermBySlug(params.slug);
  if (!t) {
    return buildMetadata({
      path: `/glossary/${params.slug}`,
      title: 'Glossary Term Not Found',
      description: 'The glossary term you are looking for could not be found.',
      noindex: true,
    });
  }
  return buildMetadata({
    path: `/glossary/${t.slug}`,
    title: `${t.term} — Definition, Example & Use Cases | WellPlan Glossary`,
    description: t.shortDefinition,
  });
}

// Light markdown-style renderer that turns [label](href) into <Link>
function renderInlineLinks(text) {
  if (!text) return null;
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    parts.push(
      <Link
        key={`lnk-${key++}`}
        href={href}
        className="text-[#6B8EFF] hover:text-white underline underline-offset-4 decoration-[#214CE5]/40 hover:decoration-white transition"
      >
        {label}
      </Link>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

export default function GlossaryTermPage({ params }) {
  const term = getTermBySlug(params.slug);
  if (!term) notFound();

  const breadcrumb = breadcrumbJsonLd(`/glossary/${term.slug}`, {
    glossary: 'Glossary',
    [term.slug]: term.term,
  });

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is ${term.term}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: term.shortDefinition,
        },
      },
      {
        '@type': 'Question',
        name: `How is ${term.term} used in practice?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: term.example,
        },
      },
    ],
  };

  const definitionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.term,
    description: term.shortDefinition,
    inDefinedTermSet: `${SITE_URL}/glossary`,
    url: `${SITE_URL}/glossary/${term.slug}`,
  };

  const related = (term.relatedTerms || [])
    .map((slug) => glossaryTerms.find((t) => t.slug === slug))
    .filter(Boolean);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definitionJsonLd) }}
      />

      {/* Header */}
      <section className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="/glossary" className="hover:text-white transition">
              Glossary
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-300">{term.term}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#214CE5]/15 border border-[#214CE5]/30 mb-5">
            <BookOpen className="w-3.5 h-3.5 text-[#6B8EFF]" />
            <span className="text-xs font-semibold text-[#6B8EFF] uppercase tracking-wider">
              {term.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            {term.term}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
            {term.shortDefinition}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Full definition */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Definition</h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{term.definition}</p>
          </div>

          {/* Example */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <h2 className="text-lg sm:text-xl font-bold">Example</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">{term.example}</p>
          </div>

          {/* How it relates to WellPlan */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#214CE5]/15 to-purple-500/5 border border-[#214CE5]/30">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#6B8EFF]" />
              <h2 className="text-lg sm:text-xl font-bold">How it relates to WellPlan</h2>
            </div>
            <p className="text-gray-200 leading-relaxed">{renderInlineLinks(term.relatedToWellPlan)}</p>
          </div>

          {/* Related pages */}
          {term.relatedPages && term.relatedPages.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Link2 className="w-5 h-5 text-[#6B8EFF]" />
                <h2 className="text-lg sm:text-xl font-bold">Related pages</h2>
              </div>
              <ul className="space-y-2">
                {term.relatedPages.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-2 text-[#6B8EFF] hover:text-white transition group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related terms */}
          {related.length > 0 && (
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-4">Related terms</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/glossary/${r.slug}`}
                    className="group p-4 rounded-xl bg-[#111111] border border-white/10 hover:border-[#214CE5]/40 transition"
                  >
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      {r.category}
                    </div>
                    <div className="font-semibold group-hover:text-[#6B8EFF] transition">
                      {r.term}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to glossary */}
          <div className="pt-4">
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to glossary
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">See {term.term} in WellPlan</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Book a quick demo and we&apos;ll show you how WellPlan implements this in a real workflow.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#214CE5] hover:bg-[#1a3db8] rounded-xl font-semibold transition"
            >
              Book a free demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
