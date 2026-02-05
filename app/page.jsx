'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import EnhancedHero from './components/EnhancedHero';
import HowItWorks from './components/HowItWorks';
import IntegrationLogoCarousel from './components/IntegrationLogoCarousel';
import StickyFeatureScroll from './components/StickyFeatureScroll';
import ComparisonMatrix from './components/ComparisonMatrix';
import TestimonialCarousel from './components/TestimonialCarousel';
import AnimatedMetrics from './components/AnimatedMetrics';
import FinalCTA from './components/FinalCTA';

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* Enhanced Hero */}
      <EnhancedHero />
      
      {/* Stats Section */}
      <StatsSection />

      {/* How It Works - 3 Step Process */}
      <HowItWorks />

      {/* Integration Logo Carousel - n8n style */}
      <IntegrationLogoCarousel />

      {/* Sticky Feature Scroll - Capture → Nurture → Close */}
      <StickyFeatureScroll />

      {/* Comparison Matrix */}
      <ComparisonMatrix />

      {/* Testimonial Carousel */}
      <TestimonialCarousel />

      {/* Animated Metrics */}
      <AnimatedMetrics />

      {/* Case Studies */}
      <CaseStudiesSection />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const stats = [
    { value: 450, label: 'Active Users', suffix: '+' },
    { value: 1.74, label: 'Million Messages', suffix: 'M+' },
    { value: 200, label: 'Integrations', suffix: '+' },
    { value: 99.9, label: 'Uptime', suffix: '%' }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 border-y border-white/5 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="text-3xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#214CE5] to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: idx * 0.1 + 0.3 }}
              >
                {isInView ? <Counter end={stat.value} /> : 0}{stat.suffix}
              </motion.div>
              <div className="text-sm text-gray-500 mt-2 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return count.toLocaleString();
}

function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const cases = [
    { 
      title: '3x Lead Growth', 
      company: 'GrowthCo Digital Agency', 
      metric: '50 → 200 leads/month', 
      color: '#214CE5',
      quote: 'WellPlan transformed how we capture and nurture leads.'
    },
    { 
      title: '40% Faster Sales', 
      company: 'CloudTech Inc', 
      metric: '60 → 36 days cycle', 
      color: '#a855f7',
      quote: 'Our sales cycle has never been shorter.'
    },
    { 
      title: '10x Revenue', 
      company: 'Elite Coaching', 
      metric: '$50k → $500k/year', 
      color: '#10b981',
      quote: 'The automation paid for itself in week one.'
    }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-32 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Real <span className="bg-gradient-to-r from-[#214CE5] to-purple-500 bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-gray-400 text-lg">See how businesses are growing with WellPlan</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {cases.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-white/[0.02] border border-white/[0.08] rounded-2xl p-5 sm:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
            >
              <div 
                className="text-2xl sm:text-4xl font-black mb-2"
                style={{ color: c.color }}
              >
                {c.title}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{c.company}</div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{c.metric}</div>
              <p className="text-gray-400 text-sm italic">"{c.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
