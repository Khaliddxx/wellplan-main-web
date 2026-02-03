'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
    <section className="relative min-h-screen flex items-center px-4 py-20 overflow-hidden bg-slate-950">
      {/* Animated Background with Mouse Spotlight */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(33, 76, 229, 0.3) 0%, transparent 50%)`,
          }}
        />
        
        {/* Floating gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-1/3 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 backdrop-blur-md"
          >
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Trusted by 10,000+ businesses
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl lg:text-7xl font-black mb-6 leading-tight text-white"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Lead Generation
            </span>
            <br />
            Reimagined
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Centralize WhatsApp, Instagram, Facebook, SMS, and email. 
            Qualify leads with AI. Convert 3x faster with one platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 text-white font-bold rounded-lg hover:border-blue-500 hover:text-blue-400 transition">
              Book Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-8 text-sm text-gray-400 mb-12"
          >
            <span className="flex items-center gap-2">✓ No credit card</span>
            <span className="flex items-center gap-2">✓ 14 days free</span>
            <span className="flex items-center gap-2">✓ Cancel anytime</span>
          </motion.div>

          {/* Customer Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-8 border-t border-slate-800"
          >
            <p className="text-sm text-gray-500 mb-4">Trusted by teams at</p>
            <div className="flex flex-wrap gap-6 items-center opacity-60">
              {['Shopify', 'HubSpot', 'Salesforce', 'Stripe', 'Zapier'].map((company, idx) => (
                <div key={idx} className="px-6 py-3 bg-slate-800/50 rounded-lg font-bold text-gray-400">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Product Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          {/* Dashboard mockup */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 flex-1 bg-slate-900 rounded px-3 py-1 text-xs text-gray-500">
                🔒 app.wellplan.io
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 space-y-4">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Active Leads', value: '247', trend: '+12%' },
                  { label: 'Conversion', value: '32%', trend: '+8%' },
                  { label: 'Response Time', value: '2.4m', trend: '-15%' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-xs text-green-400">{stat.trend}</div>
                  </div>
                ))}
              </div>

              {/* Conversation preview */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                  <div>
                    <div className="font-bold text-sm text-white">Sarah Chen</div>
                    <div className="text-xs text-gray-500">WhatsApp • 2m ago</div>
                  </div>
                  <div className="ml-auto">
                    <div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Hot Lead</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-slate-900 rounded-lg p-3 text-sm text-gray-300">
                    Hi! Interested in your enterprise plan...
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-3 text-sm ml-auto w-fit text-white">
                    Great! Let me schedule a demo for you.
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 transition">
                  Assign to Sales
                </button>
                <button className="px-4 py-2 border border-slate-600 text-sm font-semibold rounded text-gray-300 hover:border-slate-500 transition">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>

          {/* Floating stats */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500/90 to-emerald-500/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl"
          >
            <div className="text-xs text-white/80 mb-1">Today's conversions</div>
            <div className="text-3xl font-black text-white">+47</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500/90 to-purple-500/90 backdrop-blur-xl rounded-xl p-4 shadow-2xl"
          >
            <div className="text-xs text-white/80 mb-1">AI Qualified</div>
            <div className="text-3xl font-black text-white">92%</div>
          </motion.div>
        </motion.div>
      </div>

      {/* WhatsApp Official Partner Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 right-8"
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full shadow-lg hover:shadow-green-500/50 transition">
          <span className="text-xl">💬</span>
          <span className="text-sm font-semibold">Official WhatsApp Partner</span>
        </div>
      </motion.div>
    </section>
  );
}
