'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Mail, MessageCircle, GitBranch, Users, Clock, Heart, Target, BarChart3 } from 'lucide-react';
import { useTranslations } from '../../lib/translations';

const featureIcons = {
  email: Mail,
  sms: MessageCircle,
  automation: GitBranch,
};

const featureColors = {
  email: 'from-purple-500 to-pink-500',
  sms: 'from-emerald-500 to-teal-500',
  automation: 'from-orange-500 to-red-500',
};

const moreFeatureIcons = {
  segmentation: Users,
  scheduling: Clock,
  engagement: Heart,
  targeting: Target,
  analytics: BarChart3,
};

export default function NurturingPage() {
  const t = useTranslations('nurturePage');
  const tn = useTranslations('nav');

  const mainFeatureKeys = ['email', 'sms', 'automation'];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-pink-500/10" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500/30 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <span className="text-sm font-bold text-purple-400">{t('badge')}</span>
              <span className="text-sm text-purple-300">{t('badgeSub')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">{t('headline')}</span>
              <br />
              <span className="text-white">{t('headlineSub')}</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              {t('description')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl transition shadow-lg shadow-purple-500/30">
                {t('cta')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition">
                {t('ctaDemo')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('toolsTitle')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t('toolsSubtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mainFeatureKeys.map((key, idx) => {
              const Icon = featureIcons[key];
              const color = featureColors[key];
              const feature = t(`features.${key}`);
              
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-purple-500/50 transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{typeof feature === 'object' ? feature.title : feature}</h3>
                  <p className="text-gray-400 mb-6">{typeof feature === 'object' ? feature.description : ''}</p>
                  
                  <ul className="space-y-2">
                    {(typeof feature === 'object' && feature.benefits ? feature.benefits : []).map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <Check className="w-4 h-4 text-purple-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Navigation */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/features/capturing" className="group p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#214CE5]/50 transition-all">
              <span className="text-xs font-bold text-[#6B8EFF] uppercase tracking-wider">{tn('step1')} • {t('previous')}</span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-[#6B8EFF] transition">← {tn('capture')}</h3>
              <p className="text-sm text-gray-400 mt-1">{tn('captureDesc')}</p>
            </Link>
            
            <div className="p-6 rounded-2xl bg-purple-500/20 border border-purple-500/40">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">{tn('step2')} • {t('current')}</span>
              <h3 className="text-xl font-bold mt-2 text-white">{tn('nurture')}</h3>
              <p className="text-sm text-gray-400 mt-1">{tn('nurtureDesc')}</p>
            </div>
            
            <Link href="/features/closing" className="group p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-emerald-500/50 transition-all">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{tn('step3')} • Next</span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-emerald-400 transition">{tn('close')} →</h3>
              <p className="text-sm text-gray-400 mt-1">{tn('closeDesc')}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-600 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('ctaTitle')}</h2>
            <p className="text-white/80 mb-8">{t('ctaSubtitle')}</p>
            <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition">
              <Zap className="w-5 h-5" />
              {t('cta')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
