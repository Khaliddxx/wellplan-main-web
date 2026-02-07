'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Workflow, GitBranch, Zap, Brain, MessageSquare,
  ArrowRight, CheckCircle, Settings, Target
} from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';

const featureIcons = {
  decisions: Brain,
  branching: GitBranch,
  conversations: MessageSquare,
  intent: Target,
  triggers: Zap,
  crm: Settings,
};

export default function WorkflowAIPage() {
  const t = useTranslations('aiWorkflowPage');

  const features = ['decisions', 'branching', 'conversations', 'intent', 'triggers', 'crm'];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-[#214CE5]/10 to-transparent" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <Link href="/features/ai" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6">← {t('backLink')}</Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6">
              <Workflow className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-400">{t('badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              {t('headline')}{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{t('headlineHighlight')}</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>

            <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/30 transition">
              {t('cta')} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Visual Workflow */}
      <section className="py-16 sm:py-24 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">{t('featuresTitle')} <span className="text-emerald-400">{t('featuresHighlight')}</span></h2>
          </div>
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Workflow className="w-5 h-5 text-[#6B8EFF]" />
              <span className="font-semibold">{t('demo.title')}</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400">1</div>
                <div>
                  <p className="font-semibold">{t('demo.trigger')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold text-emerald-400">{t('demo.aiStep')}</p>
                  <p className="text-sm text-gray-500">{t('demo.aiDesc')}</p>
                </div>
              </div>
              <div className="ml-8 flex items-start gap-4">
                <div className="w-px h-28 bg-white/10"></div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <GitBranch className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">{t('demo.branch1')} <span className="text-purple-400">{t('demo.branch1Action')}</span></span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <GitBranch className="w-4 h-4 text-amber-400" />
                    <span className="text-sm">{t('demo.branch2')} <span className="text-amber-400">{t('demo.branch2Action')}</span></span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-500/10 rounded-lg border border-gray-500/20">
                    <GitBranch className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">{t('demo.branch3')} <span className="text-gray-400">{t('demo.branch3Action')}</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  className="p-6 sm:p-8 bg-[#111111] border border-white/5 rounded-2xl hover:border-emerald-500/30 transition group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t(`features.${key}.title`)}</h3>
                  <p className="text-gray-400">{t(`features.${key}.description`)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">{t('cta2.title')}</h3>
              <p className="text-lg sm:text-xl text-white/80 mb-8">{t('cta2.subtitle')}</p>
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-lg">
                {t('cta2.button')} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
