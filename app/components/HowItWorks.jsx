'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Capture',
    subtitle: 'Attract & Convert Visitors',
    description: 'High-converting landing pages, smart forms, and AI chatbots work 24/7 to turn visitors into qualified leads.',
    icon: Target,
    color: '#214CE5',
    features: ['Landing Pages', 'Smart Forms', 'AI Chat Widget', 'Pop-ups & CTAs'],
  },
  {
    number: '02',
    title: 'Nurture',
    subtitle: 'Build Relationships at Scale',
    description: 'Automated email, SMS, and WhatsApp sequences keep leads engaged with personalized content at the perfect time.',
    icon: MessageSquare,
    color: '#a855f7',
    features: ['Email Sequences', 'SMS Campaigns', 'WhatsApp Automation', 'Social Retargeting'],
  },
  {
    number: '03',
    title: 'Close',
    subtitle: 'Convert & Get Paid',
    description: 'Smart CRM, AI-powered lead scoring, and seamless payments help you close deals faster than ever.',
    icon: TrendingUp,
    color: '#10b981',
    features: ['Pipeline CRM', 'Lead Scoring', 'Calendar Booking', 'Payments & Invoicing'],
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });

  return (
    <section ref={containerRef} className="py-16 sm:py-32 px-4 sm:px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-400">Simple 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-white">
            How WellPlan Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From first touch to closed deal — one seamless journey
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-[#214CE5] via-purple-500 to-emerald-500 hidden lg:block" style={{ transform: 'translateY(-50%)' }} />
          
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => (
              <StepCard key={idx} step={step} index={idx} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="https://app.wellplan.io"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#214CE5] to-purple-600 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-[#214CE5]/30 transition group"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ step, index, isInView }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      className="relative group"
    >
      {/* Card */}
      <div 
        className="relative bg-[#111111] border border-white/10 rounded-3xl p-8 h-full hover:border-white/20 transition-all duration-300"
        style={{ 
          '--step-color': step.color,
        }}
      >
        {/* Step Number Badge */}
        <div 
          className="absolute -top-4 left-8 px-4 py-2 rounded-full text-sm font-black text-white"
          style={{ backgroundColor: step.color }}
        >
          STEP {step.number}
        </div>

        {/* Icon */}
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform"
          style={{ backgroundColor: `${step.color}20` }}
        >
          <Icon className="w-8 h-8" style={{ color: step.color }} />
        </div>

        {/* Content */}
        <h3 className="text-3xl font-black text-white mb-2">{step.title}</h3>
        <p className="text-lg font-semibold mb-4" style={{ color: step.color }}>{step.subtitle}</p>
        <p className="text-gray-400 mb-6 leading-relaxed">{step.description}</p>

        {/* Features */}
        <div className="space-y-2">
          {step.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: step.color }}
              />
              {feature}
            </div>
          ))}
        </div>

        {/* Decorative gradient */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: step.color }}
        />
      </div>

      {/* Arrow connector (visible on lg screens) */}
      {index < 2 && (
        <div className="absolute top-1/2 -right-4 w-8 h-8 hidden lg:flex items-center justify-center z-10">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: step.color }}
          >
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      )}
    </motion.div>
  );
}
