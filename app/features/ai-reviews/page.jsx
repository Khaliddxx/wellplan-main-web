'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, MessageSquare, ThumbsUp, ThumbsDown, TrendingUp,
  ArrowRight, CheckCircle, Zap, Globe, Clock, BarChart3
} from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';

const featureIcons = {
  google: Star,
  facebook: MessageSquare,
  positive: ThumbsUp,
  negative: ThumbsDown,
  sentiment: TrendingUp,
  analytics: BarChart3,
};

export default function ReviewsAIPage() {
  const t = useTranslations('aiReviewsPage');

  const features = ['google', 'facebook', 'positive', 'negative', 'sentiment', 'analytics'];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-[#214CE5]/10 to-transparent" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-amber-500/30 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <Link href="/features/ai" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6">← {t('backLink')}</Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-400">{t('badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              {t('headline')}{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{t('headlineHighlight')}</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-amber-500/30 transition">
                {t('cta')} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">&lt;5min</div>
                <div className="text-xs sm:text-sm text-gray-500">{t('stats.responseTime')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-500">{t('stats.responseRate')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">4.8★</div>
                <div className="text-xs sm:text-sm text-gray-500">{t('stats.ratingLift')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((key, idx) => {
              const Icon = featureIcons[key];
              return (
                <motion.div key={key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
                  className="p-6 sm:p-8 bg-[#111111] border border-white/5 rounded-2xl hover:border-amber-500/30 transition group">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t(`features.${key}.title`)}</h3>
                  <p className="text-gray-400">{t(`features.${key}.description`)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="py-16 sm:py-24 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">{t('exampleTitle')} <span className="text-amber-400">{t('exampleHighlight')}</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                <span className="text-sm text-gray-500">{t('example.positive.rating')}</span>
              </div>
              <p className="text-gray-300 mb-4">"{t('example.positive.text')}"</p>
              <p className="text-sm text-gray-500">— {t('example.positive.author')}</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-amber-400 mb-2">AI Response</p>
                <p className="text-sm text-gray-400">"{t('example.positive.response')}"</p>
              </div>
            </div>
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">{[1,2].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}{[3,4,5].map(i => <Star key={i} className="w-4 h-4 text-gray-600" />)}</div>
                <span className="text-sm text-gray-500">{t('example.negative.rating')}</span>
              </div>
              <p className="text-gray-300 mb-4">"{t('example.negative.text')}"</p>
              <p className="text-sm text-gray-500">— {t('example.negative.author')}</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-amber-400 mb-2">AI Response</p>
                <p className="text-sm text-gray-400">"{t('example.negative.response')}"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500" />
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">{t('cta2.title')}</h3>
              <p className="text-lg sm:text-xl text-white/80 mb-8">{t('cta2.subtitle')}</p>
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-lg">
                {t('cta2.button')} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
