'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Calendar, Clock, Brain, Zap, 
  Globe, Users, TrendingUp, CheckCircle, ArrowRight,
  Sparkles, Shield, BarChart3, Headphones, Settings,
  Workflow, PlayCircle, ThumbsUp, MessageCircle
} from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';

const channels = [
  { name: 'WhatsApp', color: '#25D366', primary: true },
  { name: 'Telegram', color: '#0088CC', primary: true },
  { name: 'Instagram', color: '#E4405F' },
  { name: 'Facebook', color: '#1877F2' },
  { name: 'SMS', color: '#F22F46' },
  { name: 'Web Chat', color: '#214CE5' },
  { name: 'Google Business', color: '#4285F4' },
];

export default function AIBotPage() {
  const t = useTranslations('aiBotPage');
  const tc = useTranslations('common');

  const keyBenefits = [
    { icon: MessageCircle, key: 'whatsapp' },
    { icon: Calendar, key: 'calendar' },
    { icon: Clock, key: 'booking' },
    { icon: Zap, key: 'instant' },
  ];

  const features = [
    { icon: Calendar, key: 'calendar' },
    { icon: Brain, key: 'qualification' },
    { icon: MessageSquare, key: 'conversations' },
    { icon: Clock, key: 'timezone' },
    { icon: Zap, key: 'confirmations' },
    { icon: Users, key: 'team' },
  ];

  const trainingMethods = [
    { icon: Globe, key: 'urls' },
    { icon: MessageSquare, key: 'qa' },
    { icon: ThumbsUp, key: 'feedback' },
  ];

  const useCases = [
    { key: 'consultants' },
    { key: 'salons' },
    { key: 'realestate' },
    { key: 'healthcare' },
  ];

  const exampleFeatures = t('example.features') ? t('example.features').split('|') : [];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/20 via-purple-500/10 to-emerald-500/5" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#214CE5]/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#214CE5]/20 to-purple-500/20 border border-[#214CE5]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#6B8EFF]" />
              <span className="text-sm font-semibold text-[#6B8EFF]">{t('badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              {t('headline')}{' '}
              <span className="bg-gradient-to-r from-[#25D366] via-[#214CE5] to-purple-400 bg-clip-text text-transparent">
                {t('headlineHighlight')}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link 
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#214CE5]/30 transition"
              >
                {t('ctaButton')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                {t('viewPricing')}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">&lt;1s</div>
                <div className="text-xs sm:text-sm text-gray-500">{t('stats.responseTime')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">80%</div>
                <div className="text-xs sm:text-sm text-gray-500">{t('stats.bookingRate')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-500">{t('stats.availability')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 border-y border-white/5 bg-gradient-to-r from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {keyBenefits.map((benefit) => (
              <div 
                key={benefit.key}
                className="flex flex-col items-center gap-2 p-6 bg-white/5 rounded-xl border border-white/5"
              >
                <benefit.icon className="w-8 h-8 text-[#6B8EFF]" />
                <span className="font-bold text-white">{t(`benefits.${benefit.key}.title`)}</span>
                <span className="text-sm text-gray-500 text-center">{t(`benefits.${benefit.key}.desc`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-gray-500 mb-6">{t('channelsTitle')}</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {channels.map((channel) => (
              <div 
                key={channel.name}
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  channel.primary 
                    ? 'bg-white/10 border border-white/20' 
                    : 'bg-white/5'
                }`}
              >
                <span 
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: channel.color }}
                />
                <span className={`text-sm ${channel.primary ? 'text-white font-semibold' : 'text-gray-400'}`}>
                  {channel.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              {t('featuresTitle')}{' '}
              <span className="text-[#6B8EFF]">{t('featuresHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('featuresSubtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 bg-[#111111] border border-white/5 rounded-2xl hover:border-[#214CE5]/30 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#214CE5]/10 flex items-center justify-center mb-4 group-hover:bg-[#214CE5]/20 transition">
                  <feature.icon className="w-6 h-6 text-[#6B8EFF]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t(`features.${feature.key}.title`)}</h3>
                <p className="text-gray-400">{t(`features.${feature.key}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <span className="text-xs font-semibold text-emerald-400">{t('training.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              {t('training.title')} <span className="text-[#6B8EFF]">{t('training.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('training.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {trainingMethods.map((method, idx) => (
              <motion.div
                key={method.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#111111] border border-white/5 rounded-2xl text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#214CE5]/10 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-[#6B8EFF]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t(`training.${method.key}.title`)}</h3>
                <p className="text-sm text-gray-400">{t(`training.${method.key}.description`)}</p>
              </motion.div>
            ))}
          </div>

          {/* Bot Trial Callout */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#214CE5]/10 to-purple-500/10 border border-[#214CE5]/20 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#214CE5]/20 flex items-center justify-center">
                <PlayCircle className="w-6 h-6 text-[#6B8EFF]" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{t('training.trial.title')}</h3>
                <p className="text-sm text-gray-400">{t('training.trial.description')}</p>
              </div>
            </div>
            <Link 
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#214CE5] rounded-xl font-semibold hover:bg-[#1a3db8] transition whitespace-nowrap"
            >
              {t('training.tryCta')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              {t('steps.title')} <span className="text-[#6B8EFF]">{t('steps.titleHighlight')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {['step1', 'step2', 'step3'].map((step, idx) => (
              <div key={step} className="relative">
                <div className="text-7xl font-black text-[#214CE5]/10 absolute -top-4 -left-2">0{idx + 1}</div>
                <div className="relative pt-12 pl-4">
                  <h3 className="text-xl font-bold mb-2">{t(`steps.${step}.title`)}</h3>
                  <p className="text-gray-400">{t(`steps.${step}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Booking Works */}
      <section className="py-16 sm:py-24 border-y border-white/5 bg-gradient-to-r from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 mb-4">
                <MessageCircle className="w-3 h-3 text-[#25D366]" />
                <span className="text-xs font-semibold text-[#25D366]">{t('example.badge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                {t('example.title')}
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                {t('example.subtitle')}
              </p>
              <ul className="space-y-3 mb-8">
                {(Array.isArray(exampleFeatures) ? exampleFeatures : []).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/20 to-[#214CE5]/20 rounded-3xl blur-3xl" />
              <div className="relative bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-xs text-gray-500">Your Business</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="p-3 bg-[#25D366]/20 rounded-2xl rounded-tr-sm max-w-[80%]">
                      <p className="text-sm">{t('example.chat.user1')}</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-2xl rounded-tl-sm max-w-[80%]">
                    <p className="text-sm">{t('example.chat.bot1')}</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="p-3 bg-[#25D366]/20 rounded-2xl rounded-tr-sm max-w-[80%]">
                      <p className="text-sm">{t('example.chat.user2')}</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-2xl rounded-tl-sm max-w-[80%]">
                    <p className="text-sm">{t('example.chat.bot2')}<br/><br/>{t('example.chat.slots').split('|').join('\n')}<br/><br/>{t('example.chat.bot2end')}</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="p-3 bg-[#25D366]/20 rounded-2xl rounded-tr-sm max-w-[80%]">
                      <p className="text-sm">{t('example.chat.user3')}</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-2xl rounded-tl-sm max-w-[80%]">
                    <p className="text-sm">{t('example.chat.bot3')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              {t('useCases.title')} <span className="text-[#6B8EFF]">{t('useCases.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-400">{t('useCases.subtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={useCase.key}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/5 rounded-2xl"
              >
                <h3 className="text-lg font-bold mb-2">{t(`useCases.${useCase.key}.title`)}</h3>
                <p className="text-sm text-gray-400 mb-4">{t(`useCases.${useCase.key}.description`)}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-400">{t(`useCases.${useCase.key}.metrics`)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Integration */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Workflow className="w-5 h-5 text-[#6B8EFF]" />
                  <span className="font-semibold">Workflow Builder</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-400">1</div>
                    <span className="text-sm">Trigger: New lead from web form</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#214CE5]/10 rounded-lg border border-[#214CE5]/20">
                    <div className="w-8 h-8 rounded bg-[#214CE5]/20 flex items-center justify-center text-xs font-bold text-[#6B8EFF]">AI</div>
                    <span className="text-sm">Conversation AI: Qualify lead</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-xs font-bold text-purple-400">2</div>
                    <span className="text-sm">If qualified → Book appointment</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-xs font-bold text-orange-400">3</div>
                    <span className="text-sm">Else → Add to nurture sequence</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#214CE5]/10 border border-[#214CE5]/20 mb-4">
                <Settings className="w-3 h-3 text-[#6B8EFF]" />
                <span className="text-xs font-semibold text-[#6B8EFF]">{t('workflow.badge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                {t('workflow.title')}
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                {t('workflow.subtitle')}
              </p>
              <ul className="space-y-3">
                {(t('workflow.features') || '').split('|').map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, key: 'gdpr' },
              { icon: Headphones, key: 'support' },
              { icon: BarChart3, key: 'analytics' },
              { icon: Zap, key: 'uptime' },
            ].map((item) => (
              <div key={item.key} className="p-6">
                <item.icon className="w-8 h-8 text-[#6B8EFF] mx-auto mb-3" />
                <h3 className="font-bold mb-1">{t(`trust.${item.key}.title`)}</h3>
                <p className="text-sm text-gray-500">{t(`trust.${item.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#214CE5] to-purple-600" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                {t('cta.title')}
              </h3>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                {t('cta.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/demo" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#214CE5] font-bold rounded-xl hover:bg-gray-100 transition shadow-lg"
                >
                  {t('cta.demo')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/pricing" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 font-bold rounded-xl hover:bg-white/20 transition"
                >
                  {t('cta.pricing')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
