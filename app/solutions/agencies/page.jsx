'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Building2, CheckCircle, ArrowRight, Zap, Users, BarChart3, Globe, Layers, Bot, Star, Rocket, Shield } from 'lucide-react';

export default function AgenciesPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/10 via-transparent to-cyan-500/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#214CE5]/20 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#214CE5]/10 border border-[#214CE5]/30 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-[#214CE5]" />
            <span className="text-sm font-medium text-[#6B8EFF]">Built for Marketing Agencies</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Scale Your Agency
            <br />
            <span className="bg-gradient-to-r from-[#214CE5] via-cyan-400 to-[#214CE5] bg-clip-text text-transparent">
              Without More Overhead
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Manage unlimited clients, automate fulfillment, and grow your MRR with white-label 
            solutions your clients will love. One platform, infinite scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/demo"
              className="px-8 py-4 bg-gradient-to-r from-[#214CE5] to-cyan-500 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#214CE5]/30 transition-all flex items-center gap-2"
            >
              Book Agency Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/demo"
              target="_blank"
              className="px-8 py-4 border border-white/20 rounded-xl font-bold text-lg hover:bg-white/5 transition flex items-center gap-2"
            >
              Start Free Trial
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PainPointsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const painPoints = [
    { problem: "Tool sprawl eating profits", solution: "One platform replaces 10+ tools" },
    { problem: "Can't scale without hiring", solution: "Automate 80% of fulfillment" },
    { problem: "Clients churning to competitors", solution: "Sticky white-label solutions" },
    { problem: "No recurring revenue", solution: "Built-in SaaS billing for clients" },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Sound <span className="text-[#214CE5]">Familiar?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="text-red-400 text-2xl">✗</div>
                <div className="flex-1">
                  <p className="text-gray-400 line-through mb-2">{point.problem}</p>
                  <div className="flex items-center gap-2 text-[#214CE5]">
                    <CheckCircle className="w-5 h-5" />
                    <p className="font-semibold">{point.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Layers,
      title: 'White-Label Everything',
      description: 'Your brand, your domain, your app. Clients never see WellPlan.',
      color: '#214CE5',
    },
    {
      icon: Users,
      title: 'Unlimited Sub-Accounts',
      description: 'Add clients without per-seat costs. Scale without limits.',
      color: '#06b6d4',
    },
    {
      icon: Bot,
      title: 'Done-For-You Fulfillment',
      description: 'Snapshots, automations, and funnels ready to deploy.',
      color: '#8b5cf6',
    },
    {
      icon: BarChart3,
      title: 'Agency Dashboard',
      description: 'Bird\'s eye view of all clients, MRR, and performance.',
      color: '#10b981',
    },
    {
      icon: Shield,
      title: 'SaaS Mode',
      description: 'Bill clients monthly. Automated provisioning and billing.',
      color: '#f59e0b',
    },
    {
      icon: Rocket,
      title: 'Reseller Program',
      description: 'Earn recurring revenue on every client. Up to 40% margins.',
      color: '#ef4444',
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f15]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Built for <span className="text-[#214CE5]">Agency Scale</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to run a profitable, scalable agency
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-white/20 transition group"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition"
                style={{ backgroundColor: `${feature.color}20` }}
              >
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

function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const plans = [
    {
      name: 'Agency Starter',
      setup: '$497',
      monthly: '$297',
      description: 'Perfect for new agencies',
      features: [
        'Up to 10 sub-accounts',
        'White-label branding',
        'All core features',
        'Email support',
        'Community access',
      ],
      color: '#214CE5',
    },
    {
      name: 'Agency Pro',
      setup: '$997',
      monthly: '$497',
      description: 'For growing agencies',
      features: [
        'Unlimited sub-accounts',
        'Custom domain',
        'Priority support',
        'API access',
        'Dedicated onboarding',
        'SaaS mode enabled',
      ],
      popular: true,
      color: '#8b5cf6',
    },
    {
      name: 'Agency Enterprise',
      setup: 'Custom',
      monthly: 'Custom',
      description: 'For large agencies',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'Dedicated account manager',
        'Custom training',
        'SLA guarantee',
        'Volume discounts',
      ],
      color: '#10b981',
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Agency <span className="text-[#214CE5]">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Invest in growth, not overhead
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 bg-white/[0.02] border rounded-2xl ${plan.popular ? 'border-[#214CE5]' : 'border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#214CE5] rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-black" style={{ color: plan.color }}>{plan.monthly}</span>
                  {plan.monthly !== 'Custom' && <span className="text-gray-400">/mo</span>}
                </div>
                {plan.setup !== 'Custom' && (
                  <p className="text-sm text-gray-500 mt-1">{plan.setup} setup</p>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                className={`block w-full py-3 text-center font-bold rounded-xl transition ${
                  plan.popular 
                    ? 'bg-[#214CE5] hover:bg-[#1a3db8]' 
                    : 'border border-white/20 hover:bg-white/5'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#214CE5] to-cyan-500" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          
          <div className="relative text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Scale Your Agency?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join 500+ agencies already using WellPlan to grow their business
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="px-8 py-4 bg-white text-[#214CE5] rounded-xl font-bold text-lg hover:bg-gray-100 transition flex items-center gap-2"
              >
                Book Agency Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                target="_blank"
                className="px-8 py-4 border-2 border-white rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
