'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle, Zap, Users, TrendingUp,
  Calendar, CreditCard, Rocket, Globe, MessageSquare,
  BarChart3, Shield, Headphones
} from 'lucide-react';

const benefits = [
  {
    icon: MessageSquare,
    title: 'Omnichannel Inbox',
    description: 'Manage WhatsApp, Instagram, Facebook, and email from one unified inbox.',
  },
  {
    icon: Zap,
    title: 'AI Automation',
    description: '24/7 AI that qualifies leads, books appointments, and handles customer support.',
  },
  {
    icon: BarChart3,
    title: 'Marketing Automation',
    description: 'Email, SMS, and WhatsApp sequences that nurture leads on autopilot.',
  },
  {
    icon: Globe,
    title: 'Landing Pages & Funnels',
    description: 'Build high-converting pages and funnels without any coding.',
  },
  {
    icon: Users,
    title: 'CRM & Pipeline',
    description: 'Track every lead from first touch to closed deal with visual pipelines.',
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Reporting',
    description: 'See what\'s working with real-time dashboards and conversion tracking.',
  },
];

const includedFeatures = [
  'Dedicated account setup',
  'PSEO-optimized snapshot',
  'Onboarding support',
  'WhatsApp Business API',
  'AI Lead Bot included',
  'Email & SMS marketing',
  'Landing page builder',
  'CRM & pipeline management',
  'Calendar & booking system',
  'Workflow automation',
  'Analytics dashboard',
  'Priority support',
];

export default function PSEOPartnerPage() {
  useEffect(() => {
    // Load the form embed script for calendar
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
              <span className="text-sm font-bold text-[#214CE5]">PSEO</span>
              <span className="text-sm text-gray-400">×</span>
              <span className="text-sm font-bold text-[#6B8EFF]">WellPlan</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              Scale Your SEO Agency with{' '}
              <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">
                Marketing Automation
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              As a PSEO partner, you get exclusive access to WellPlan's all-in-one marketing platform with a dedicated snapshot optimized for SEO agencies.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a 
                href="#book-call"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#214CE5]/30 transition"
              >
                <Calendar className="w-5 h-5" />
                Book a Strategy Call
              </a>
              <a 
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                <CreditCard className="w-5 h-5" />
                View Pricing
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>PSEO Verified Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-[#6B8EFF]" />
                <span>Priority Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-purple-400" />
                <span>Fast Onboarding</span>
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
              Everything You Need to{' '}
              <span className="text-[#6B8EFF]">Convert SEO Traffic</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Drive traffic with PSEO. Convert that traffic with WellPlan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 bg-[#111111] border border-white/5 rounded-2xl hover:border-[#214CE5]/30 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#214CE5]/10 flex items-center justify-center mb-4 group-hover:bg-[#214CE5]/20 transition">
                  <benefit.icon className="w-6 h-6 text-[#6B8EFF]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 border-t border-white/5 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Exclusive PSEO Partner <span className="text-[#6B8EFF]">Pricing</span>
            </h2>
            <p className="text-lg text-gray-400">
              Special rates for PSEO partners. Get started today.
            </p>
          </div>

          {/* Main Offer Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#214CE5] to-purple-500 rounded-3xl blur opacity-20" />
            <div className="relative bg-[#111111] border border-[#214CE5]/30 rounded-2xl p-8 sm:p-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-[#6B8EFF] font-semibold mb-1">PSEO PARTNER PLAN</p>
                  <h3 className="text-2xl font-black">WellPlan Pro</h3>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black">$197</span>
                    <span className="text-gray-400">/mo</span>
                  </div>
                  <p className="text-sm text-gray-500">+ $497 one-time setup</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {includedFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA - Will become checkout button when SaaS is active */}
              <div className="space-y-4">
                <a 
                  href="#book-call"
                  className="block w-full text-center py-4 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#214CE5]/30 transition"
                >
                  Get Started — Book Your Setup Call
                </a>
                <p className="text-center text-sm text-gray-500">
                  14-day money-back guarantee • Cancel anytime
                </p>
              </div>

              {/* Future checkout placeholder - uncomment when SaaS mode is active */}
              {/* 
              <div className="space-y-4">
                <button 
                  className="block w-full text-center py-4 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#214CE5]/30 transition"
                  onClick={() => {
                    // Redirect to SaaS checkout
                    window.location.href = 'https://link.wellplan.io/v2/preview/CHECKOUT_LINK_HERE';
                  }}
                >
                  Subscribe Now — $197/mo
                </button>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Book Your <span className="text-[#6B8EFF]">Strategy Call</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Schedule a call to discuss your needs and get your dedicated WellPlan account set up.
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

      {/* FAQ or Additional Info */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Questions? <span className="text-[#6B8EFF]">We've Got Answers</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "What's included in the setup fee?", 
                a: "The $497 setup fee covers your dedicated snapshot configuration, custom fields, pipelines, automations, and a 1-on-1 onboarding session to ensure everything is set up for your specific needs." 
              },
              { 
                q: "How long does onboarding take?", 
                a: "Most partners are fully set up within 48-72 hours. We'll schedule your onboarding call right after payment, and you'll have access to your account immediately." 
              },
              { 
                q: "Can I white-label WellPlan for my clients?", 
                a: "Yes! WellPlan supports custom domains and branding. You can offer WellPlan as your own platform to your SEO clients." 
              },
              { 
                q: "Is there a contract or can I cancel anytime?", 
                a: "No long-term contracts. You can cancel anytime. We also offer a 14-day money-back guarantee if you're not satisfied." 
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#111111] border border-white/5 rounded-xl p-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
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
                Ready to Scale Your Agency?
              </h3>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join other PSEO partners already using WellPlan to convert their SEO traffic.
              </p>
              
              <a 
                href="#book-call" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#214CE5] font-bold rounded-xl hover:bg-gray-100 transition shadow-lg"
              >
                Book Your Setup Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
