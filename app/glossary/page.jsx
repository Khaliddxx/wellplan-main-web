import Link from 'next/link';
import { ArrowRight, BookOpen, MessageSquare, Users, Workflow, Megaphone, Mail, Sparkles } from 'lucide-react';
import { glossaryCategories, glossaryTerms, getTermsByCategory } from '@/app/lib/glossary';
import { breadcrumbJsonLd } from '@/app/lib/seo';

const categoryIcons = {
  Messaging: MessageSquare,
  'CRM & Sales': Users,
  'Marketing Automation': Workflow,
  'Lead Generation': Megaphone,
  'Email & SMS': Mail,
  AI: Sparkles,
};

export default function GlossaryIndexPage() {
  const grouped = getTermsByCategory();
  const breadcrumb = breadcrumbJsonLd('/glossary', { glossary: 'Glossary' });

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <Link href="/" className="text-sm text-gray-400 hover:text-white">
            ← Back to home
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#214CE5]/15 border border-[#214CE5]/30 mt-6 mb-5">
            <BookOpen className="w-4 h-4 text-[#6B8EFF]" />
            <span className="text-xs font-semibold text-[#6B8EFF] uppercase tracking-wider">
              Glossary
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight">
            WellPlan Glossary — CRM, Marketing & Lead Generation Terms
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
            Plain-language definitions of {glossaryTerms.length}+ essential terms across messaging, CRM, marketing automation,
            lead generation, email, SMS, and AI — with concrete examples and how each one ties back to WellPlan.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Use this as a quick reference. Each entry includes a short definition, a worked example, and related pages.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-14">
          {glossaryCategories.map((cat) => {
            const terms = grouped[cat.label] || [];
            if (terms.length === 0) return null;
            const Icon = categoryIcons[cat.label] || BookOpen;
            return (
              <div key={cat.id} id={cat.id}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#214CE5]/15 border border-[#214CE5]/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#6B8EFF]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black">{cat.label}</h2>
                  <span className="text-sm text-gray-500">({terms.length})</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {terms.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/glossary/${t.slug}`}
                      className="group p-5 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#214CE5]/40 transition flex flex-col"
                    >
                      <h3 className="text-lg font-bold mb-2 group-hover:text-[#6B8EFF] transition">
                        {t.term}
                      </h3>
                      <p className="text-sm text-gray-400 line-clamp-3 flex-1">{t.shortDefinition}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B8EFF]">
                        Read definition
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">See these concepts in action</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Book a 30-minute walkthrough — we&apos;ll show you how WellPlan turns these ideas into a working pipeline,
            automation, and conversation flow for your business.
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
              href="/features"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition"
            >
              Browse features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
