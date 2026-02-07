'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Zap, Star, Building2, Sparkles } from 'lucide-react';
import { useTranslations } from '../lib/translations';

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  
  // Get translations with fallbacks
  let t, tc;
  try {
    t = useTranslations('pricing');
    tc = useTranslations('common');
  } catch {
    t = (key) => key;
    tc = (key) => key;
  }

  const plans = [
    {
      name: 'Starter',
      price: annual ? 77 : 97,
      description: 'Perfect for small businesses getting started',
      icon: Zap,
      color: 'blue',
      features: [
        'Up to 1,000 contacts',
        'Email marketing',
        'Basic automations',
        'Landing pages',
        'Forms & surveys',
        'Community support'
      ]
    },
    {
      name: 'Professional',
      price: annual ? 157 : 197,
      description: 'For growing businesses that need more power',
      icon: Star,
      color: 'purple',
      popular: true,
      features: [
        'Up to 10,000 contacts',
        'Everything in Starter',
        'WhatsApp Business API',
        'Advanced automations',
        'Pipeline management',
        'Priority support'
      ]
    },
    {
      name: 'Enterprise',
      price: annual ? 397 : 497,
      description: 'For large teams with advanced needs',
      icon: Building2,
      color: 'emerald',
      features: [
        'Unlimited contacts',
        'Everything in Professional',
        'AI Lead Bot',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee'
      ]
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'from-[#214CE5]/20 to-[#214CE5]/5',
      border: 'border-[#214CE5]/30 hover:border-[#214CE5]/60',
      icon: 'bg-[#214CE5]/30 text-[#6B8EFF]',
      check: 'text-[#6B8EFF]',
      button: 'bg-[#214CE5]/20 text-[#6B8EFF] hover:bg-[#214CE5]/30'
    },
    purple: {
      bg: 'from-purple-500/20 to-purple-500/5',
      border: 'border-purple-500/30 hover:border-purple-500/60',
      icon: 'bg-purple-500/30 text-purple-400',
      check: 'text-purple-400',
      button: 'bg-purple-500 text-white hover:bg-purple-600'
    },
    emerald: {
      bg: 'from-emerald-500/20 to-emerald-500/5',
      border: 'border-emerald-500/30 hover:border-emerald-500/60',
      icon: 'bg-emerald-500/30 text-emerald-400',
      check: 'text-emerald-400',
      button: 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Simple, <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Start free, upgrade as you grow. No hidden fees, no surprises.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-[#214CE5]' : 'bg-white/10'}`}
            >
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${annual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>
              Annually <span className="text-[#214CE5] font-semibold">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {plans.map((plan) => {
            const colors = colorClasses[plan.color];
            const Icon = plan.icon;
            
            return (
              <div
                key={plan.name}
                className={`relative p-8 bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-3xl transition-all hover:shadow-xl ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-purple-500 text-white text-xs font-bold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-black text-white">${plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                
                <Link
                  href="/demo"
                  className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition ${colors.button}`}
                >
                  Get Started
                </Link>
                
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colors.check}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* All Plans Include */}
        <div className="text-center mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">All plans include</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {['Free onboarding', 'Mobile app access', 'API access', '99.9% uptime', 'SSL security', 'GDPR compliant'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                <Check className="w-4 h-4 text-[#214CE5]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* AI Add-on */}
        <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-[#214CE5]/10 via-purple-500/10 to-emerald-500/10 border border-white/10 rounded-3xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#214CE5] to-purple-500 flex items-center justify-center shadow-lg shadow-[#214CE5]/30">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white">AI Lead Bot Add-on</h3>
                <span className="px-2 py-0.5 bg-[#214CE5]/20 text-[#6B8EFF] text-xs font-bold rounded">NEW</span>
              </div>
              <p className="text-gray-400 mb-4">
                24/7 AI that qualifies leads, books appointments, and helps close deals automatically.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="text-3xl font-black text-white">+$397</span>
                <span className="text-gray-500">/month</span>
                <Link href="/features/ai-bot" className="text-[#6B8EFF] hover:text-white text-sm font-semibold transition">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which plan is right for you?</h2>
          <p className="text-gray-400 mb-8">Book a free consultation and we'll help you choose.</p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#214CE5] hover:bg-[#1a3db8] text-white font-semibold rounded-xl transition shadow-lg shadow-[#214CE5]/30"
          >
            <Zap className="w-5 h-5" />
            Book a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
