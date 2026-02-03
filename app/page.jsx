'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import EnhancedHero from './components/EnhancedHero';
import IconCarousel from './components/IconCarousel';
import FeatureShowcase from './components/FeatureShowcase';
import ComparisonMatrix from './components/ComparisonMatrix';
import TestimonialCarousel from './components/TestimonialCarousel';
import ScrollWithinStatic from './components/ScrollWithinStatic';
import AnimatedMetrics from './components/AnimatedMetrics';
import FinalCTA from './components/FinalCTA';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      {/* Enhanced Hero - Best of Both Worlds */}
      <EnhancedHero />
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(33, 76, 229, 0.3) 0%, transparent 50%)`,
            }}
          />
          
          {/* Floating gradient orbs */}
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20"
            animate={{
              x: Math.cos(Date.now() / 5000) * 100,
              y: Math.sin(Date.now() / 5000) * 100,
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20"
            animate={{
              x: Math.cos(Date.now() / 6000 + Math.PI) * 100,
              y: Math.sin(Date.now() / 6000 + Math.PI) * 100,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl opacity-20"
            animate={{
              x: Math.cos(Date.now() / 7000 + Math.PI * 2) * 100,
              y: Math.sin(Date.now() / 7000 + Math.PI * 2) * 100,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 backdrop-blur-md"
          >
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              The Enterprise Lead Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-8xl font-black mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
              Lead Generation
            </span>
            <br />
            <span className="text-white">Reimagined</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Capture, nurture, and close leads at scale. One platform. Infinite possibilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 justify-center flex-wrap mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(33, 76, 229, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold text-lg cursor-pointer"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#214CE5' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-600 rounded-lg font-bold text-lg cursor-pointer transition-colors hover:text-blue-400"
            >
              Book Demo
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-gray-400"
          >
            ✓ No credit card • ✓ 14 days free • ✓ Cancel anytime
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Objectives Section */}
      <ObjectivesSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Icon Carousel */}
      <IconCarousel />

      {/* Feature Showcase with Graphics */}
      <FeatureShowcase />

      {/* Comparison Matrix */}
      <ComparisonMatrix />

      {/* Testimonial Carousel */}
      <TestimonialCarousel />

      {/* Scroll Within Static */}
      <ScrollWithinStatic />

      {/* Animated Metrics */}
      <AnimatedMetrics />

      {/* Case Studies */}
      <CaseStudiesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA with gradient mesh */}
      <FinalCTA />

      {/* Legacy CTA Section */}
      <CTASection />
    </div>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const stats = [
    { value: 50000, label: 'Active Users', icon: '👥' },
    { value: 500, label: 'Million Messages', icon: '💬' },
    { value: 25, label: 'Integrations', icon: '🔗' },
    { value: 99.9, label: '% Uptime', icon: '⚡' }
  ];

  return (
    <section ref={ref} className="py-20 px-4 border-y border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <motion.div
                className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: idx * 0.1 + 0.3 }}
              >
                {isInView ? <Counter end={stat.value} /> : 0}{stat.label === 'Million Messages' ? 'M' : stat.label === '% Uptime' ? '%' : '+'}
              </motion.div>
              <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
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

function ObjectivesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const objectives = [
    { icon: '📥', title: 'Lead Capturing', desc: 'Convert visitors into leads', color: 'from-blue-500 to-cyan-500' },
    { icon: '💬', title: 'Lead Nurturing', desc: 'Engage and qualify leads', color: 'from-purple-500 to-pink-500' },
    { icon: '🎯', title: 'Lead Closing', desc: 'Convert leads into customers', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section ref={ref} className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Three Stages.<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              One Platform.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {objectives.map((obj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 20px 50px rgba(33, 76, 229, 0.2)' }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 group-hover:border-blue-500/50 transition-all duration-300"></div>
              <motion.div
                className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 group-hover:border-slate-600 backdrop-blur-xl"
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="text-6xl mb-6">{obj.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{obj.title}</h3>
                <p className="text-gray-400 mb-6">{obj.desc}</p>
                <motion.a
                  href={`/objectives/${obj.title.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center text-blue-400 font-semibold group/link cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  Learn more
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const features = [
    { icon: '🌐', title: 'Landing Pages', desc: 'High-converting pages' },
    { icon: '📋', title: 'Forms', desc: 'Smart capture forms' },
    { icon: '🤖', title: 'AI Chatbots', desc: '24/7 engagement' },
    { icon: '📧', title: 'Email Sequences', desc: 'Automated nurturing' },
    { icon: '💬', title: 'SMS Automation', desc: 'Text workflows' },
    { icon: '📊', title: 'Analytics', desc: 'Complete reporting' }
  ];

  return (
    <section ref={ref} className="py-32 px-4 bg-gradient-to-b from-slate-900/50 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-5xl font-black mb-16 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            50+ Enterprise Features
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 backdrop-blur-xl cursor-pointer transition-all"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-bold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const cases = [
    { title: '3x Lead Growth', company: 'GrowthCo Digital', metric: '50 → 200 leads/month', icon: '📈' },
    { title: '40% Faster Sales', company: 'CloudTech Inc', metric: '60 → 36 days cycle', icon: '⚡' },
    { title: '10x Revenue', company: 'Elite Coaching', metric: '$50k → $500k/year', icon: '💰' }
  ];

  return (
    <section ref={ref} className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-5xl font-black mb-16 text-center"
        >
          Real Results
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-xl"
            >
              <div className="text-5xl mb-4">{c.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
              <p className="text-gray-400 mb-4">{c.company}</p>
              <p className="text-blue-400 font-semibold text-lg">{c.metric}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const testimonials = [
    { text: 'Game-changing platform. Replaced 7 tools.', author: 'Sarah Chen', title: 'Agency Owner' },
    { text: 'Best ROI decision we made this year.', author: 'Marcus Johnson', title: 'VP Sales' },
    { text: 'Enterprise-grade, startup-friendly pricing.', author: 'Emma Rodriguez', title: 'CEO' }
  ];

  return (
    <section ref={ref} className="py-32 px-4 bg-gradient-to-b from-slate-950 to-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-5xl font-black mb-16 text-center"
        >
          Loved by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Enterprise Teams</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 backdrop-blur-xl"
            >
              <p className="text-gray-300 mb-4 italic">"{t.text}"</p>
              <div className="font-bold">{t.author}</div>
              <div className="text-sm text-gray-400">{t.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-16 border border-blue-500/30 backdrop-blur-xl"
      >
        <h2 className="text-5xl font-black mb-6">Ready to scale?</h2>
        <p className="text-xl text-gray-300 mb-8">Join 50,000+ businesses generating leads at scale.</p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold text-lg cursor-pointer"
        >
          Start Free Trial
        </motion.button>
      </motion.div>
    </section>
  );
}
