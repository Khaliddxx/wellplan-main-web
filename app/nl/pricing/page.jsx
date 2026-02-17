'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Zap, Star, Building2, Sparkles } from 'lucide-react';

export default function PricingPageNL() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Agency',
      price: annual ? 77 : 97,
      description: 'Volledige WellPlan Software Toegang',
      icon: Zap,
      color: 'blue',
      features: [
        'Alle gesprekken (WhatsApp, Instagram, SMS, E-mail, Web Chat, GMB, FB)',
        'Social media beheer (Instagram, Facebook, TikTok, Google)',
        'Volledig CRM, betalingen & pipeline',
        'Marketing suite (e-mail, funnels, blogs, campagnes)',
        'Automatisering & workflows',
        'Websites, lidmaatschappen & communities',
        'Alle rapportages & tools',
        'Tot 10.000 contacten',
        'E-mail support'
      ]
    },
    {
      name: 'Business',
      price: annual ? 157 : 197,
      description: 'Voor groeiende bedrijven zonder limieten',
      icon: Star,
      color: 'purple',
      popular: true,
      features: [
        'Alles in Agency',
        'Onbeperkte contacten',
        'Prioriteit support'
      ]
    },
    {
      name: 'Enterprise',
      price: null,
      description: 'Maatwerkoplossingen voor grote organisaties',
      icon: Building2,
      color: 'emerald',
      contactPricing: true,
      features: [
        'Alles in Business',
        'Dedicated klantportaal',
        'Maatwerk ontwikkeling',
        'Dedicated account manager'
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
            Eenvoudige, <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">Transparante</span> Prijzen
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Eén prijs. Alle functies. Geen verborgen kosten, geen verrassingen.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Maandelijks</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-[#214CE5]' : 'bg-white/10'}`}
            >
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${annual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>
              Jaarlijks <span className="text-[#214CE5] font-semibold">(Bespaar 20%)</span>
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
                      MEEST POPULAIR
                    </span>
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{plan.description}</p>
                <div className="mb-4" />
                
                <div className="mb-6">
                  {plan.contactPricing ? (
                    <span className="text-3xl font-black text-white">Neem contact op</span>
                  ) : (
                    <>
                      <span className="text-5xl font-black text-white">${plan.price}</span>
                      <span className="text-gray-500">/maand</span>
                    </>
                  )}
                </div>
                
                <Link
                  href={plan.contactPricing ? '/nl/contact' : '/nl/demo'}
                  className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition ${colors.button}`}
                >
                  {plan.contactPricing ? 'Neem Contact Op' : 'Start Nu'}
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
          <h2 className="text-2xl font-bold text-white mb-8">Alle plannen bevatten</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {['Gratis onboarding', 'Mobiele app toegang', 'API toegang', '99.9% uptime', 'WhatsApp & Instagram inbegrepen', 'Alle kanalen inbegrepen'].map((item) => (
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
                <h3 className="text-2xl font-bold text-white">AI Medewerker Add-on</h3>
                <span className="px-2 py-0.5 bg-[#214CE5]/20 text-[#6B8EFF] text-xs font-bold rounded">NIEUW</span>
              </div>
              <p className="text-gray-400 mb-4">
                Jouw virtuele receptionist — beantwoordt elk telefoontje 24/7, plant afspraken en beantwoordt veelgestelde vragen automatisch.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="text-3xl font-black text-white">+$397</span>
                <span className="text-gray-500">/maand</span>
                <Link href="/nl/features/ai-bot" className="text-[#6B8EFF] hover:text-white text-sm font-semibold transition">
                  Meer info →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-white mb-4">Niet zeker welk plan bij je past?</h2>
          <p className="text-gray-400 mb-8">Boek een gratis adviesgesprek en we helpen je kiezen.</p>
          <Link
            href="/nl/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#214CE5] hover:bg-[#1a3db8] text-white font-semibold rounded-xl transition shadow-lg shadow-[#214CE5]/30"
          >
            <Zap className="w-5 h-5" />
            Boek een Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
