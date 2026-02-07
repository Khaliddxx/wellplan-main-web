'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Target, CheckCircle, ArrowRight, Zap, Calendar, MessageSquare, Users, TrendingUp, Clock, Bot, Star, Play, ChevronDown } from 'lucide-react';
import { useTranslations } from '../../lib/translations';

export default function CoachesPage() {
  const t = useTranslations('coachesPage');
  
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <HeroSection t={t} />
      <FeaturesSection t={t} />
      <CTASection t={t} />
    </div>
  );
}

function HeroSection({ t }) {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <Target className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">{t('badge')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            {t('headline1')}
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              {t('headline2')}
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('description')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/demo"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
            >
              {t('cta')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/demo"
              className="px-8 py-4 border border-white/20 rounded-xl font-bold text-lg hover:bg-white/5 transition flex items-center gap-2"
            >
              {t('ctaTrial')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection({ t }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    { icon: Calendar, title: 'Calendar & Booking', description: 'Let clients book sessions directly. Sync with Google, Outlook, and more.', color: '#a855f7' },
    { icon: MessageSquare, title: 'Client Messaging', description: 'WhatsApp, SMS, email - all in one inbox. Never miss a client message.', color: '#ec4899' },
    { icon: Users, title: 'Community & Courses', description: 'Host group programs, courses, and communities. Scale your impact.', color: '#06b6d4' },
    { icon: Bot, title: 'AI Assistant', description: 'AI handles FAQs, qualifies leads, and books sessions 24/7.', color: '#8b5cf6' },
    { icon: TrendingUp, title: 'Progress Tracking', description: 'Track client progress, set goals, and celebrate wins together.', color: '#10b981' },
    { icon: Clock, title: 'Automated Follow-ups', description: 'Never lose a client. Automated sequences keep engagement high.', color: '#f59e0b' },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f15]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t('featuresTitle')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('featuresSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-purple-500/30 transition group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition" style={{ backgroundColor: `${feature.color}20` }}>
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ t }) {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div className="relative text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">{t('ctaTitle')}</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">{t('ctaSubtitle')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo" className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition flex items-center gap-2">
                {t('cta')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/demo" className="px-8 py-4 border-2 border-white rounded-xl font-bold text-lg hover:bg-white/10 transition">
                {t('ctaTrial')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
