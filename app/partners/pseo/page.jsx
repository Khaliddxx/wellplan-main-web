'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle, Zap, Users, TrendingUp,
  Calendar, CreditCard, Rocket, Globe, MessageSquare,
  BarChart3, Shield, Headphones
} from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';

const benefitIcons = {
  inbox: MessageSquare,
  ai: Zap,
  marketing: BarChart3,
  funnels: Globe,
  crm: Users,
  analytics: TrendingUp,
};

const benefitKeys = ['inbox', 'ai', 'marketing', 'funnels', 'crm', 'analytics'];
const faqKeys = ['setup', 'onboarding', 'cancel'];

export default function PSEOPartnerPage() {
  const t = useTranslations('pseoPartnerPage');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.wellplan.io/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://link.wellplan.io/js/form_embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const features = (t('features') || '').split('|');

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
            {/* Partner Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#214CE5]/20 border border-[#214CE5]/30 mb-6">
              <span className="text-sm font-bold text-[#214CE5]">{t('badge.partner')}</span>
              <span className="text-sm text-gray-400">{t('badge.divider')}</span>
              <span className="text-sm font-bold text-[#6B8EFF]">{t('badge.platform')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              {t('headline')}{' '}
              <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">
                {t('headlineHighlight')}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a 
                href="#book-call"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#214CE5]/30 transition"
              >
                <Calendar className="w-5 h-5" />
                {t('cta.bookCall')}
              </a>
              <a 
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                <CreditCard className="w-5 h-5" />
                {t('cta.viewPricing')}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>{t('trust.verified')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-[#6B8EFF]" />
                <span>{t('trust.support')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-purple-400" />
                <span>{t('trust.onboarding')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              {t('benefitsTitle')}{' '}
              <span className="text-[#6B8EFF]">{t('benefitsHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('benefitsSubtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitKeys.map((key, idx) => {
              const Icon = benefitIcons[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 sm:p-8 bg-[#111111] border border-white/5 rounded-2xl hover:border-[#214CE5]/30 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#214CE5]/10 flex items-center justify-center mb-4 group-hover:bg-[#214CE5]/20 transition">
                    <Icon className="w-6 h-6 text-[#6B8EFF]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t(`benefits.${key}.title`)}</h3>
                  <p className="text-gray-400">{t(`benefits.${key}.description`)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 border-t border-white/5 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              {t('pricingTitle')} <span className="text-[#6B8EFF]">{t('pricingHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-400">
              {t('pricingSubtitle')}
            </p>
          </div>

          {/* Main Offer Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#214CE5] to-purple-500 rounded-3xl blur opacity-20" />
            <div className="relative bg-[#111111] border border-[#214CE5]/30 rounded-2xl p-8 sm:p-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-[#6B8EFF] font-semibold mb-1">{t('plan.label')}</p>
                  <h3 className="text-2xl font-black">{t('plan.name')}</h3>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black">{t('plan.price')}</span>
                    <span className="text-gray-400">{t('plan.period')}</span>
                  </div>
                  <p className="text-sm text-gray-500">{t('plan.setup')}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <a 
                  href="#book-call"
                  className="block w-full text-center py-4 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#214CE5]/30 transition"
                >
                  {t('plan.cta')}
                </a>
                <p className="text-center text-sm text-gray-500">
                  {t('plan.guarantee')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              {t('calendarTitle')} <span className="text-[#6B8EFF]">{t('calendarHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('calendarSubtitle')}
            </p>
          </div>

          {/* Calendar Widget */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-4 sm:p-6 overflow-hidden">
            <iframe
              src="https://link.wellplan.io/widget/booking/42vv4cmCu0QRd0setfWK"
              style={{
                width: '100%',
                minHeight: '650px',
                border: 'none',
                overflow: 'hidden',
              }}
              scrolling="no"
              id="pseo-booking-calendar"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              {t('faqTitle')} <span className="text-[#6B8EFF]">{t('faqHighlight')}</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqKeys.map((key) => (
              <div key={key} className="bg-[#111111] border border-white/5 rounded-xl p-6">
                <h3 className="font-bold mb-2">{t(`faq.${key}.q`)}</h3>
                <p className="text-gray-400">{t(`faq.${key}.a`)}</p>
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
              <h3 className="text-3xl sm:text-4xl font-black mb-4">
                {t('finalCta.title')}
              </h3>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                {t('finalCta.subtitle')}
              </p>
              
              <a 
                href="#book-call" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#214CE5] font-bold rounded-xl hover:bg-gray-100 transition shadow-lg"
              >
                {t('finalCta.button')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
