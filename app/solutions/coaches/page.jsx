'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Target, CheckCircle, ArrowRight, Zap, Calendar, MessageSquare, Users, TrendingUp, Clock, Bot, Star, Play } from 'lucide-react';
import { useTranslations } from '../../lib/translations';

export default function CoachesPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  const t = useTranslations('coachesPage');
  const tc = useTranslations('common');
  
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
            <span className="text-sm font-medium text-purple-400">{t('badge')}</span>
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
              href="#pricing"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              {t('viewPricing')}
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-white/5">
            <div className="text-center">
              <div className="text-3xl font-black text-purple-400">{t('stats.coaches')}</div>
              <div className="text-sm text-gray-500">{t('stats.coachesLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-pink-400">{t('stats.roi')}</div>
              <div className="text-sm text-gray-500">{t('stats.roiLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-purple-400">{t('stats.support')}</div>
              <div className="text-sm text-gray-500">{t('stats.supportLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-pink-400">{t('stats.rating')}</div>
              <div className="text-sm text-gray-500">{t('stats.ratingLabel')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PainPointsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const t = useTranslations('coachesPage');

  const painPoints = [
    { icon: Clock, key: 'admin' },
    { icon: Users, key: 'leads' },
    { icon: MessageSquare, key: 'cold' },
    { icon: TrendingUp, key: 'scale' }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-transparent to-purple-500/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t('painTitle')} <span className="text-purple-400">{t('painTitleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {t('painSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-red-500/30 hover:bg-red-500/5 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition">
                  <point.icon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{t(`painPoints.${point.key}.title`)}</h3>
                  <p className="text-gray-400">{t(`painPoints.${point.key}.description`)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-2xl font-bold text-white">
            {t('painCta')} <span className="text-purple-400">{t('painCtaHighlight')}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const t = useTranslations('coachesPage');

  const features = [
    { icon: Calendar, key: 'calendar', color: 'purple' },
    { icon: Bot, key: 'ai', color: 'pink' },
    { icon: MessageSquare, key: 'messaging', color: 'purple' },
    { icon: Users, key: 'community', color: 'pink' },
    { icon: TrendingUp, key: 'progress', color: 'purple' },
    { icon: Zap, key: 'followups', color: 'pink' }
  ];

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t('featuresTitle')}
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('featuresTitleHighlight')}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
              className={`p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-${feature.color}-500/30 transition-all group`}
            >
              <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{t(`features.${feature.key}.title`)}</h3>
              <p className="text-gray-400">{t(`features.${feature.key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const t = useTranslations('coachesPage');

  const tiers = [
    { key: 'selfSetup', setupFee: 0, monthlyFee: 97, popular: false, color: 'gray' },
    { key: 'doneWithYou', setupFee: 497, monthlyFee: 147, popular: true, color: 'purple' },
    { key: 'doneForYou', setupFee: 997, monthlyFee: 197, popular: false, color: 'pink' }
  ];

  const aiAddon = { setupFee: 297, monthlyFee: 397 };

  return (
    <section ref={ref} id="pricing" className="py-24 px-6 bg-gradient-to-b from-purple-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t('pricingTitle')} <span className="text-purple-400">{t('pricingTitleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('pricingSubtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, idx) => {
            const features = t(`pricing.${tier.key}.features`);
            const featureList = typeof features === 'string' ? features.split('|') : [];
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 rounded-2xl border ${
                  tier.popular 
                    ? 'bg-gradient-to-b from-purple-500/10 to-pink-500/10 border-purple-500/50' 
                    : 'bg-white/[0.02] border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold">
                    {t('pricing.mostPopular')}
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white">{t(`pricing.${tier.key}.name`)}</h3>
                  <p className="text-gray-500 text-sm">{t(`pricing.${tier.key}.subtitle`)}</p>
                </div>

                <div className="text-center mb-6">
                  {tier.setupFee > 0 && (
                    <div className="text-sm text-gray-500 mb-1">
                      ${tier.setupFee} {t('pricing.setupFee')}
                    </div>
                  )}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black text-white">${tier.monthlyFee}</span>
                    <span className="text-gray-500">/mo</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm text-center mb-6">
                  {t(`pricing.${tier.key}.description`)}
                </p>

                <ul className="space-y-3 mb-8">
                  {featureList.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                        tier.popular ? 'text-purple-400' : 'text-gray-500'
                      }`} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/demo"
                  className={`block w-full py-3 rounded-xl font-bold text-center transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  {t(`pricing.${tier.key}.cta`)}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* AI Add-on */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    {t('pricing.aiAddon.name')}
                    <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs font-bold rounded">{t('pricing.addon')}</span>
                  </h3>
                  <p className="text-gray-400 text-sm">{t('pricing.aiAddon.description')}</p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {t('pricing.aiAddon.features').split('|').map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="text-sm text-gray-500 mb-1">
                ${aiAddon.setupFee} {t('pricing.setup')}
              </div>
              <div className="flex items-baseline justify-center lg:justify-end gap-1 mb-4">
                <span className="text-4xl font-black text-white">+${aiAddon.monthlyFee}</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <Link
                href="/demo"
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                {t('pricing.addToAnyPlan')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const t = useTranslations('coachesPage');

  const testimonials = [
    { avatar: 'SO', key: 'sami' },
    { avatar: 'FG', key: 'federico' },
    { avatar: 'OA', key: 'omar' }
  ];

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t('testimonialsTitle')} <span className="text-purple-400">{t('testimonialsTitleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{t(`testimonials.${testimonial.key}.quote`)}"</p>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{t(`testimonials.${testimonial.key}.author`)}</div>
                  <div className="text-sm text-gray-500">{t(`testimonials.${testimonial.key}.title`)}</div>
                </div>
              </div>
              
              <div className="px-3 py-2 bg-purple-500/10 rounded-lg">
                <div className="text-xs text-purple-400 font-semibold">{t(`testimonials.${testimonial.key}.result`)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(null);
  const t = useTranslations('coachesPage');

  const faqKeys = ['setup', 'technical', 'switch', 'integrations', 'cancel'];

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-transparent to-purple-500/5">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t('faqTitle')} <span className="text-purple-400">{t('faqTitleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqKeys.map((key, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition"
              >
                <span className="font-semibold text-white">{t(`faq.${key}.question`)}</span>
                <ArrowRight className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === idx ? 'rotate-90' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400">{t(`faq.${key}.answer`)}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const t = useTranslations('coachesPage');
  
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-12 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 border border-purple-500/30 rounded-3xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t('ctaTitle')}
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('ctaTitleHighlight')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('ctaSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
            >
              {t('ctaButton')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            {t('ctaNote')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
