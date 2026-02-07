'use client';

import { useTranslations } from '../lib/translations';

export default function PrivacyPage() {
  const t = useTranslations('privacyPage');

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
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.intro.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('sections.intro.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.collect.title')}</h2>
            <p className="text-gray-400 leading-relaxed mb-4">{t('sections.collect.content')}</p>
            {renderList(t('sections.collect.items'))}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.use.title')}</h2>
            <p className="text-gray-400 leading-relaxed mb-4">{t('sections.use.content')}</p>
            {renderList(t('sections.use.items'))}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.sharing.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('sections.sharing.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.security.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('sections.security.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.rights.title')}</h2>
            <p className="text-gray-400 leading-relaxed mb-4">{t('sections.rights.content')}</p>
            {renderList(t('sections.rights.items'))}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.cookies.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('sections.cookies.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.changes.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('sections.changes.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">{t('sections.contact.title')}</h2>
            <p className="text-gray-400 leading-relaxed">
              {t('sections.contact.content')}{' '}
              <a href="mailto:privacy@wellplan.io" className="text-[#214CE5] hover:underline">
                privacy@wellplan.io
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
