'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { industries } from '@/app/lib/industries';
import { useTranslations } from '@/app/lib/translations';

export default function IndustriesPage() {
  const t = useTranslations('industriesPage');

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <motion.div key={industry.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}>
              <Link href={`/industries/${industry.slug}`} className="group block bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-[#214CE5]/30 transition h-full">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#6B8EFF] transition">{industry.name}</h3>
                <p className="text-gray-400 mb-6 text-sm min-h-12">{industry.description}</p>
                <div className="flex items-center gap-2 text-[#6B8EFF] font-semibold group-hover:gap-3 transition">
                  {t('explore')} →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
