'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { features } from '@/app/lib/features';
import { useTranslations } from '@/app/lib/translations';

export default function FeaturesPage() {
  const t = useTranslations('featuresPage');

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">
              {t('headline')}
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div key={feature.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}>
              <Link href={`/features/${feature.slug}`} className="group block bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-[#214CE5]/30 transition h-full">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#6B8EFF] transition">{feature.name}</h3>
                <p className="text-gray-500 mb-4 text-sm">{feature.tagline}</p>
                <p className="text-gray-400 text-sm line-clamp-2 mb-6">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.use_cases.slice(0, 2).map((use_case, i) => (
                    <span key={i} className="px-3 py-1 bg-[#214CE5]/20 text-[#6B8EFF] text-xs rounded-full">{use_case}</span>
                  ))}
                </div>
                <div className="mt-6 text-[#6B8EFF] font-semibold flex items-center gap-2 group-hover:gap-3 transition">
                  {t('learnMore')} →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
