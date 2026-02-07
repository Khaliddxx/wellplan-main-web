'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Zap, Globe, Users, Target, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/10 via-transparent to-purple-500/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#214CE5]/20 rounded-full blur-[120px] -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              About <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">WellPlan</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're on a mission to help businesses grow by making powerful marketing 
              automation accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-6">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                We believe every business deserves access to enterprise-grade marketing tools. 
                WellPlan combines CRM, automation, and AI into one platform that's powerful 
                enough for agencies yet simple enough for solopreneurs.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Founded in 2024, we've helped thousands of businesses capture more leads, 
                nurture relationships at scale, and close deals faster than ever before.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '10,000+', label: 'Active Users' },
                { value: '50+', label: 'Integrations' },
                { value: '99.9%', label: 'Uptime' },
                { value: '24/7', label: 'Support' },
              ].map((stat, idx) => (
                <div key={idx} className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl text-center">
                  <div className="text-3xl font-black text-[#214CE5] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-[#0f0f15]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-4">Our Values</h2>
            <p className="text-gray-400 text-lg">What drives everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: 'Customer First',
                description: 'Every feature we build starts with a real customer need. Your success is our success.',
                color: '#ef4444',
              },
              {
                icon: Zap,
                title: 'Simplicity',
                description: 'Powerful doesn\'t have to mean complicated. We make complex things feel easy.',
                color: '#214CE5',
              },
              {
                icon: Globe,
                title: 'Accessibility',
                description: 'Enterprise tools at startup prices. Great marketing shouldn\'t be a luxury.',
                color: '#10b981',
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl"
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <value.icon className="w-7 h-7" style={{ color: value.color }} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#214CE5] to-purple-600" />
            <div className="relative">
              <h2 className="text-4xl font-black mb-4">Ready to Grow?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of businesses already using WellPlan
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#214CE5] rounded-xl font-bold hover:bg-gray-100 transition"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
