'use client';

import Link from 'next/link';
import IntegrationBrandIcon from '@/app/components/IntegrationBrandIcons';
import { useTranslations } from '@/app/lib/translations';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { getIntegrationContent } from '@/app/lib/integrationContent';

export default function IntegrationDetailClient({ integration, relatedIntegrations }) {
  const t = useTranslations('integrationsPage');
  const enriched = getIntegrationContent(integration.slug);

  // Get translated description and features (fallback to original if not translated)
  const translatedDescription = t(`items.${integration.slug}.description`) || integration.description;
  const translatedFeaturesStr = t(`items.${integration.slug}.features`) || '';
  const translatedFeatures = translatedFeaturesStr
    ? translatedFeaturesStr.split('|').filter(f => f.trim())
    : (integration.features || []);

  // FAQ JSON-LD when we have enriched content
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

      {/* Hero Header */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/10 via-transparent to-purple-500/5" />
        <div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
          style={{ backgroundColor: integration.brandColor }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16">
          {/* Breadcrumb */}
          <div className="mb-6 sm:mb-8 text-sm text-gray-400">
            <Link href="/integrations" className="hover:text-white transition">
              {t('detail.breadcrumb')}
            </Link>
            {' '}/{' '}
            <span className="text-white">{integration.name}</span>
          </div>

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#111111] border-2 flex items-center justify-center shadow-xl flex-shrink-0"
              style={{ borderColor: integration.brandColor }}
            >
              <IntegrationBrandIcon slug={integration.slug} size={48} />
            </div>

            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-black mb-3 sm:mb-4">
                {integration.name} CRM Integration
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 mb-6 max-w-2xl">{translatedDescription}</p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] rounded-xl font-bold hover:shadow-lg hover:shadow-[#214CE5]/30 transition"
                >
                  {t('detail.connect')} {integration.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition"
                >
                  See pricing
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Long description (enriched only) */}
        {enriched?.longDescription && (
          <div className="mb-12 sm:mb-16 prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed">{enriched.longDescription}</p>
          </div>
        )}

        {/* Features */}
        {translatedFeatures && translatedFeatures.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{t('detail.features')}</h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {translatedFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-[#111111] border border-white/10 rounded-xl"
                >
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                    style={{ backgroundColor: `${integration.brandColor}20`, color: integration.brandColor }}
                  >
                    ✓
                  </span>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Use cases (enriched only) */}
        {enriched?.useCases?.length ? (
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Common use cases</h2>
            <div className="space-y-4">
              {enriched.useCases.map((uc, i) => (
                <div key={i} className="p-5 sm:p-6 bg-[#111111] border border-white/10 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">{uc.title}</h3>
                  <p className="text-gray-400">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Fallback to the existing translated three-block use cases
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{t('detail.useCases')}</h2>
            <div className="space-y-4">
              <div className="p-5 sm:p-6 bg-[#111111] border border-white/10 rounded-xl">
                <h3 className="font-bold text-lg mb-2">{t('detail.salesTitle')}</h3>
                <p className="text-gray-400">{t('detail.salesDesc').replace('{name}', integration.name)}</p>
              </div>
              <div className="p-5 sm:p-6 bg-[#111111] border border-white/10 rounded-xl">
                <h3 className="font-bold text-lg mb-2">{t('detail.supportTitle')}</h3>
                <p className="text-gray-400">{t('detail.supportDesc').replace('{name}', integration.name)}</p>
              </div>
              <div className="p-5 sm:p-6 bg-[#111111] border border-white/10 rounded-xl">
                <h3 className="font-bold text-lg mb-2">{t('detail.marketingTitle')}</h3>
                <p className="text-gray-400">{t('detail.marketingDesc').replace('{name}', integration.name)}</p>
              </div>
            </div>
          </div>
        )}

        {/* Setup steps (enriched only) */}
        {enriched?.setupSteps?.length ? (
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">How setup works</h2>
            <ol className="space-y-3">
              {enriched.setupSteps.map((step, i) => (
                <li key={i} className="flex gap-4 p-5 bg-[#111111] border border-white/10 rounded-xl">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#214CE5]/20 text-[#6B8EFF] flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <span className="text-gray-300 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {/* FAQ (enriched only) */}
        {enriched?.faqs?.length ? (
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Frequently asked questions</h2>
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
        ) : null}

        {/* Related Integrations */}
        {relatedIntegrations.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{t('detail.related')}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {relatedIntegrations.map((related) => {
                const relatedDesc = t(`items.${related.slug}.description`) || related.description;
                return (
                  <Link
                    key={related.slug}
                    href={`/integrations/${related.slug}`}
                    className="p-5 sm:p-6 bg-[#111111] border border-white/10 rounded-xl hover:border-white/20 transition group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl bg-[#0a0a0a] border flex items-center justify-center mb-4"
                      style={{ borderColor: `${related.brandColor}50` }}
                    >
                      <IntegrationBrandIcon slug={related.slug} size={24} />
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-[#6B8EFF] transition">
                      {related.name}
                    </h3>
                    <p className="text-sm text-gray-500">{relatedDesc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="p-8 sm:p-12 bg-gradient-to-r from-[#214CE5]/10 to-purple-500/10 border border-[#214CE5]/20 rounded-2xl sm:rounded-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-black mb-4">{t('detail.readyToConnect').replace('{name}', integration.name)}</h3>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t('detail.getStarted')}
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#214CE5]/30 transition"
          >
            {t('detail.startTrial')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
