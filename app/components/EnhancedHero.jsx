'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Zap, MessageSquare, Mail, Phone } from 'lucide-react';

export default function EnhancedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

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
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#0a0a0a]">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Mouse follow gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(33, 76, 229, 0.15) 0%, transparent 50%)`,
          }}
        />
        
        {/* Floating gradient orbs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#214CE5] rounded-full filter blur-[150px] opacity-20"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full filter blur-[150px] opacity-15"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#214CE5]/10 border border-[#214CE5]/30 rounded-full mb-8"
            >
              <Zap className="w-4 h-4 text-[#214CE5]" />
              <span className="text-sm font-semibold text-[#6B8EFF]">
                The #1 Lead Generation Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-white">Capture. Nurture.</span>
              <br />
              <span className="bg-gradient-to-r from-[#214CE5] via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Close.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed max-w-lg"
            >
              The all-in-one platform that turns visitors into leads, 
              leads into customers, and customers into raving fans.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link 
                href="https://app.wellplan.io"
                target="_blank"
                className="px-8 py-4 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#214CE5]/30 transition flex items-center justify-center gap-2 group"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/demo"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </span>
            </motion.div>
          </div>

          {/* Right: Product Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Main Dashboard Card */}
            <div className="relative bg-[#111111] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="bg-[#0a0a0a] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 flex-1 bg-white/5 rounded-lg px-3 py-1.5 text-xs text-gray-500 flex items-center gap-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  app.wellplan.io
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-4">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Active Leads', value: '2,847', change: '+12%', color: 'text-[#214CE5]' },
                    { label: 'Conversion', value: '34.2%', change: '+8%', color: 'text-purple-400' },
                    { label: 'Revenue', value: '$47.2k', change: '+23%', color: 'text-emerald-400' }
                  ].map((stat, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="bg-white/[0.03] border border-white/5 rounded-xl p-4"
                    >
                      <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                      <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-green-400">{stat.change}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Conversation Preview */}
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#214CE5] to-purple-500 flex items-center justify-center text-white font-bold text-sm">SC</div>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">Sarah Chen</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        WhatsApp • Just now
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded">
                      Hot Lead
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white/5 rounded-lg p-3 text-sm text-gray-300 w-fit">
                      Hi! I'm interested in the enterprise plan 👋
                    </div>
                    <div className="bg-[#214CE5]/20 rounded-lg p-3 text-sm text-white w-fit ml-auto">
                      Great choice! Let me walk you through it...
                    </div>
                  </div>
                </div>

                {/* Channel Icons */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  {[
                    { icon: '💬', label: 'WhatsApp', color: '#25D366' },
                    { icon: '📧', label: 'Email', color: '#EA4335' },
                    { icon: '📱', label: 'SMS', color: '#5865F2' },
                    { icon: '📸', label: 'Instagram', color: '#E4405F' },
                  ].map((channel, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                      style={{ backgroundColor: `${channel.color}20` }}
                      title={channel.label}
                    >
                      {channel.icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-4 shadow-xl shadow-emerald-500/20"
            >
              <div className="text-xs text-white/80 mb-1">New leads today</div>
              <div className="text-3xl font-black text-white">+127</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute -bottom-4 -left-6 bg-gradient-to-br from-[#214CE5] to-purple-600 rounded-2xl p-4 shadow-xl shadow-[#214CE5]/20"
            >
              <div className="text-xs text-white/80 mb-1">AI Response Rate</div>
              <div className="text-3xl font-black text-white">98%</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-12 border-t border-white/5"
        >
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by 10,000+ businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-40">
            {['Shopify', 'HubSpot', 'Stripe', 'Zapier', 'Salesforce', 'Slack'].map((company, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className="text-xl font-bold text-gray-400 hover:text-gray-300 transition"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
