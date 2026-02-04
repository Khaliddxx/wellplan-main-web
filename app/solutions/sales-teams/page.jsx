'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { TrendingUp, CheckCircle, ArrowRight, Zap, Users, BarChart3, Phone, Target, Bot, Star, Clock, DollarSign } from 'lucide-react';

export default function SalesTeamsPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <MetricsSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">Built for Sales Teams</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Close More Deals
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              In Less Time
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop losing deals to slow follow-ups. WellPlan gives your sales team AI-powered 
            tools to engage leads instantly and close faster than ever.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/demo"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center gap-2"
            >
              Book Sales Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="https://app.wellplan.io"
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
    { problem: "Leads going cold before first call", solution: "AI responds in under 60 seconds" },
    { problem: "Reps wasting time on unqualified leads", solution: "AI pre-qualifies before handoff" },
    { problem: "Deals dying in pipeline", solution: "Automated follow-up sequences" },
    { problem: "No visibility into team activity", solution: "Real-time dashboards & leaderboards" },
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
            Your Sales Team's <span className="text-emerald-400">Biggest Problems</span>
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
                  <div className="flex items-center gap-2 text-emerald-400">
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
      icon: Bot,
      title: 'AI Speed-to-Lead',
      description: 'AI engages new leads in under 60 seconds, 24/7. Never miss a hot lead.',
      color: '#10b981',
    },
    {
      icon: Target,
      title: 'Smart Lead Scoring',
      description: 'AI ranks leads by likelihood to close. Focus on what matters.',
      color: '#06b6d4',
    },
    {
      icon: Phone,
      title: 'Power Dialer',
      description: 'Click-to-call, voicemail drops, and call recording built in.',
      color: '#8b5cf6',
    },
    {
      icon: BarChart3,
      title: 'Pipeline Management',
      description: 'Visual pipeline with drag-and-drop. See every deal at a glance.',
      color: '#f59e0b',
    },
    {
      icon: Clock,
      title: 'Automated Follow-ups',
      description: 'Never forget a follow-up. Sequences run while you sleep.',
      color: '#ef4444',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Assign leads, share notes, and track team performance.',
      color: '#214CE5',
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
            Built to <span className="text-emerald-400">Close Deals</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every feature designed to help your team sell more, faster
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

function MetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    { value: '3x', label: 'Faster Response Time', color: '#10b981' },
    { value: '40%', label: 'More Deals Closed', color: '#06b6d4' },
    { value: '50%', label: 'Less Admin Work', color: '#8b5cf6' },
    { value: '2x', label: 'Pipeline Velocity', color: '#f59e0b' },
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
            Real <span className="text-emerald-400">Results</span>
          </h2>
          <p className="text-xl text-gray-400">Average improvements reported by sales teams</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 bg-white/[0.02] border border-white/10 rounded-2xl"
            >
              <div className="text-5xl font-black mb-2" style={{ color: metric.color }}>
                {metric.value}
              </div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
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
      name: 'Team Starter',
      monthly: '$197',
      per: '/mo',
      description: 'For small sales teams',
      features: [
        'Up to 5 users',
        'AI Speed-to-Lead',
        'Pipeline CRM',
        'Email & SMS sequences',
        'Basic reporting',
      ],
      color: '#10b981',
    },
    {
      name: 'Team Pro',
      monthly: '$397',
      per: '/mo',
      description: 'For growing teams',
      features: [
        'Up to 15 users',
        'Everything in Starter',
        'Power Dialer',
        'Advanced lead scoring',
        'Team leaderboards',
        'Priority support',
      ],
      popular: true,
      color: '#06b6d4',
    },
    {
      name: 'Enterprise',
      monthly: 'Custom',
      per: '',
      description: 'For large sales orgs',
      features: [
        'Unlimited users',
        'Everything in Pro',
        'Custom integrations',
        'Dedicated success manager',
        'Custom training',
        'SLA guarantee',
      ],
      color: '#8b5cf6',
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
            Sales Team <span className="text-emerald-400">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            ROI positive from month one
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 bg-white/[0.02] border rounded-2xl ${plan.popular ? 'border-emerald-500' : 'border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-black" style={{ color: plan.color }}>{plan.monthly}</span>
                  <span className="text-gray-400">{plan.per}</span>
                </div>
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
                    ? 'bg-emerald-500 hover:bg-emerald-600' 
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
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          
          <div className="relative text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Supercharge Your Sales?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              See how WellPlan can help your team close more deals, faster
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="px-8 py-4 bg-white text-emerald-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition flex items-center gap-2"
              >
                Book Sales Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="https://app.wellplan.io"
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
