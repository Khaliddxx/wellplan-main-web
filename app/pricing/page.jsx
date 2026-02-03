'use client';

import { useState } from 'react';

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: annual ? '99' : '129',
      description: 'Perfect for small teams',
      features: [
        'Shared team inbox',
        'Up to 5 team members',
        '5,000 messages/month',
        'Basic automation',
        'Email & WhatsApp',
        'Community support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: annual ? '299' : '399',
      description: 'For growing teams',
      features: [
        'Everything in Starter',
        'Up to 20 team members',
        '50,000 messages/month',
        'Advanced automation',
        'All integrations',
        'All channels',
        'Priority support',
        'Custom branding'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'Unlimited messages',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        '24/7 phone support',
        'Custom contracts'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Start free. Scale as you grow.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={annual ? 'text-gray-400' : 'text-white font-semibold'}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-slate-700 transition"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
                  annual ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={!annual ? 'text-gray-400' : 'text-white font-semibold'}>
              Annual <span className="text-blue-400 text-sm">(save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border transition ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50 transform md:scale-105'
                  : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-slate-600/50'
              }`}
            >
              {plan.popular && (
                <div className="mb-4 inline-block px-3 py-1 bg-blue-500/30 text-blue-400 text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-black">${plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-400">/month</span>}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-bold mb-8 transition ${
                  plan.popular
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'border border-gray-600 hover:border-blue-500 hover:text-blue-400'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can I change plans anytime?',
                a: 'Yes. Upgrade or downgrade your plan anytime. Changes take effect at the next billing cycle.'
              },
              {
                q: 'Do you offer discounts for annual billing?',
                a: 'Yes. Get 20% off when you pay annually.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, bank transfers, and can set up custom payment terms for enterprise customers.'
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes. All plans come with a 14-day free trial. No credit card required.'
              }
            ].map((item, idx) => (
              <details
                key={idx}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-slate-700/50 cursor-pointer"
              >
                <summary className="font-bold text-lg flex items-center justify-between">
                  {item.q}
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-400 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
