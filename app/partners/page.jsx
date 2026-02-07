'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Handshake, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';

const partnerKeys = ['pseo', 'ffc'];
const partnerColors = { pseo: '#214CE5', ffc: '#6B7280' };
const partnerActive = { pseo: true, ffc: false };

export default function PartnersPage() {
  const t = useTranslations('partnersPage');

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/20 via-purple-500/10 to-emerald-500/5" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#214CE5]/30 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#214CE5]/20 border border-[#214CE5]/30 mb-6">
              <Handshake className="w-4 h-4 text-[#6B8EFF]" />
              <span className="text-sm font-semibold text-[#6B8EFF]">{t('badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              {t('headline')}{' '}
              <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">
                {t('headlineHighlight')}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  <Users className="w-8 h-8 mx-auto text-[#6B8EFF]" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-2">{t('stats.network')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  <TrendingUp className="w-8 h-8 mx-auto text-emerald-400" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-2">{t('stats.revenue')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  <Handshake className="w-8 h-8 mx-auto text-purple-400" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-2">{t('stats.whiteLabel')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">{t('gridTitle')}</h2>
            <p className="text-gray-400">{t('gridSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partnerKeys.map((key, idx) => {
              const color = partnerColors[key];
              const active = partnerActive[key];
              const benefits = (t(`partners.${key}.benefits`) || '').split('|').filter(Boolean);

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {active ? (
                    <Link
                      href={`/partners/${key}`}
                      className="block h-full p-8 bg-[#111111] border border-white/5 rounded-2xl hover:border-[#214CE5]/30 transition group"
                    >
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-black mb-4"
                        style={{ backgroundColor: `${color}20`, color }}
                      >
                        {key.toUpperCase()}
                      </div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-[#6B8EFF] transition">{t(`partners.${key}.name`)}</h3>
                      <p className="text-sm text-gray-500 mb-3">{t(`partners.${key}.tagline`)}</p>
                      <p className="text-gray-400 mb-4">{t(`partners.${key}.description`)}</p>
                      
                      {benefits.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {benefits.map((benefit, i) => (
                            <span key={i} className="flex items-center gap-1 px-2 py-1 rounded-md text-xs bg-white/5 text-gray-400">
                              <CheckCircle className="w-3 h-3 text-emerald-400" />
                              {benefit}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#6B8EFF]">
                        {t('learnMore')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </div>
                    </Link>
                  ) : (
                    <div className="block h-full p-8 bg-[#111111] border border-white/5 rounded-2xl opacity-60">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-black mb-4"
                        style={{ backgroundColor: `${color}20`, color }}
                      >
                        {key.toUpperCase()}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{t(`partners.${key}.name`)}</h3>
                      <p className="text-sm text-gray-500 mb-3">{t(`partners.${key}.tagline`)}</p>
                      <p className="text-gray-400">{t(`partners.${key}.description`)}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#214CE5] to-purple-600" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">
                {t('cta.title')}
              </h3>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                {t('cta.subtitle')}
              </p>
              
              <Link 
                href="/demo" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#214CE5] font-bold rounded-xl hover:bg-gray-100 transition shadow-lg"
              >
                {t('cta.button')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
