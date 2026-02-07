'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Zap, Globe, ArrowRight } from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';

export default function AboutPage() {
  const t = useTranslations('aboutPage');

  const stats = [
    { value: '10,000+', labelKey: 'activeUsers' },
    { value: '50+', labelKey: 'integrations' },
    { value: '99.9%', labelKey: 'uptime' },
    { value: '24/7', labelKey: 'support' },
  ];

  const values = [
    { icon: Heart, key: 'customerFirst', color: '#ef4444' },
    { icon: Zap, key: 'simplicity', color: '#214CE5' },
    { icon: Globe, key: 'accessibility', color: '#10b981' },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/10 via-transparent to-purple-500/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#214CE5]/20 rounded-full blur-[120px] -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              {t('headline')} <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">WellPlan</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-black mb-6">{t('missionTitle')}</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">{t('missionP1')}</p>
              <p className="text-gray-400 text-lg leading-relaxed">{t('missionP2')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl text-center">
                  <div className="text-3xl font-black text-[#214CE5] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{t(`stats.${stat.labelKey}`)}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-[#0f0f15]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">{t('valuesTitle')}</h2>
            <p className="text-gray-400 text-lg">{t('valuesSubtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${value.color}20` }}>
                  <value.icon className="w-7 h-7" style={{ color: value.color }} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t(`values.${value.key}.title`)}</h3>
                <p className="text-gray-400">{t(`values.${value.key}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#214CE5] to-purple-600" />
            <div className="relative">
              <h2 className="text-4xl font-black mb-4">{t('cta.title')}</h2>
              <p className="text-xl text-white/80 mb-8">{t('cta.subtitle')}</p>
              <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#214CE5] rounded-xl font-bold hover:bg-gray-100 transition">
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
