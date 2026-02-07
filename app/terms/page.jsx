'use client';

import { useTranslations } from '../lib/translations';

export default function TermsPage() {
  const t = useTranslations('termsPage');

  const renderList = (items) => {
    if (!items) return null;
    const itemList = typeof items === 'string' ? items.split('|') : items;
    return (
      <ul className="list-disc list-inside text-gray-400 space-y-2">
        {itemList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-8">{t('title')}</h1>
        <p className="text-gray-400 mb-8">{t('lastUpdated')}</p>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.acceptance.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('sections.acceptance.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.description.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('sections.description.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.registration.title')}</h2>
            <p className="text-gray-400 leading-relaxed mb-4">{t('sections.registration.content')}</p>
            {renderList(t('sections.registration.items'))}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.acceptable.title')}</h2>
            <p className="text-gray-400 leading-relaxed mb-4">{t('sections.acceptable.content')}</p>
            {renderList(t('sections.acceptable.items'))}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.payment.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('sections.payment.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.ip.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('sections.ip.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.liability.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('sections.liability.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.termination.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('sections.termination.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.changes.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('sections.changes.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.contact.title')}</h2>
            <p className="text-gray-400 leading-relaxed">
              {t('sections.contact.content')}{' '}
              <a href="mailto:legal@wellplan.io" className="text-[#214CE5] hover:underline">
                legal@wellplan.io
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
