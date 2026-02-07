'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Bot, MessageSquare, Calendar, Clock, Brain, Zap, 
  Globe, Users, TrendingUp, CheckCircle, ArrowRight,
  Sparkles, Shield, BarChart3, Headphones
} from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';

const features = [
  {
    icon: Brain,
    title: '24/7 Lead Qualification',
    description: 'AI instantly engages every lead, asks qualifying questions, and scores them based on intent and fit.',
  },
  {
    icon: Calendar,
    title: 'Smart Appointment Booking',
    description: 'Automatically checks your calendar availability and books meetings without back-and-forth.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Conversations',
    description: 'Human-like responses powered by GPT-4. Your leads won\'t know they\'re talking to a bot.',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Engage leads in 50+ languages. AI automatically detects and responds in their language.',
  },
  {
    icon: Zap,
    title: 'Instant Response',
    description: 'Respond to leads in under 1 second, 24/7. Never lose a lead to slow response times again.',
  },
  {
    icon: Users,
    title: 'Seamless Handoff',
    description: 'When a lead needs human help, AI smoothly transfers the conversation with full context.',
  },
];

const useCases = [
  {
    title: 'Lead Generation',
    description: 'Capture and qualify website visitors automatically',
    metrics: '3x more qualified leads',
  },
  {
    title: 'Appointment Setting',
    description: 'Let AI handle the back-and-forth of scheduling',
    metrics: '80% booking rate',
  },
  {
    title: 'Customer Support',
    description: 'Answer FAQs and resolve issues instantly',
    metrics: '90% auto-resolved',
  },
  {
    title: 'E-commerce',
    description: 'Product recommendations and order support',
    metrics: '25% higher AOV',
  },
];

const channels = [
  { name: 'WhatsApp', color: '#25D366' },
  { name: 'Instagram', color: '#E4405F' },
  { name: 'Facebook', color: '#1877F2' },
  { name: 'Website Chat', color: '#214CE5' },
  { name: 'SMS', color: '#F22F46' },
  { name: 'Google Business', color: '#4285F4' },
];

export default function AIBotPage() {
  const t = useTranslations('common');

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/20 via-purple-500/10 to-emerald-500/5" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#214CE5]/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#214CE5]/20 to-purple-500/20 border border-[#214CE5]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#6B8EFF]" />
              <span className="text-sm font-semibold text-[#6B8EFF]">NEW: Powered by GPT-4</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              Your AI Employee That{' '}
              <span className="bg-gradient-to-r from-[#214CE5] via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Never Sleeps
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Deploy an AI assistant that qualifies leads, books appointments, and closes deals 24/7. 
              Works across WhatsApp, Instagram, Facebook, and more.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link 
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#214CE5]/30 transition"
              >
                See AI Bot Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                View Pricing
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">&lt;1s</div>
                <div className="text-xs sm:text-sm text-gray-500">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-500">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-500">Languages</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-12 border-y border-white/5 bg-[#0a0a0a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-gray-500 mb-6">Works on all your favorite channels</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {channels.map((channel) => (
              <div 
                key={channel.name}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full"
              >
                <span 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: channel.color }}
                />
                <span className="text-sm text-gray-300">{channel.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Everything Your AI Needs to{' '}
              <span className="text-[#6B8EFF]">Convert Leads</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              No coding required. Set up in minutes, start converting leads immediately.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 bg-[#111111] border border-white/5 rounded-2xl hover:border-[#214CE5]/30 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#214CE5]/10 flex items-center justify-center mb-4 group-hover:bg-[#214CE5]/20 transition">
                  <feature.icon className="w-6 h-6 text-[#6B8EFF]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Set Up in <span className="text-[#6B8EFF]">3 Simple Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Connect Channels', desc: 'Link WhatsApp, Instagram, Facebook, or website chat in one click.' },
              { step: '02', title: 'Train Your AI', desc: 'Upload your FAQs, product info, and brand voice. AI learns instantly.' },
              { step: '03', title: 'Go Live', desc: 'Start converting leads 24/7. Monitor performance in real-time.' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-7xl font-black text-[#214CE5]/10 absolute -top-4 -left-2">{item.step}</div>
                <div className="relative pt-12 pl-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Built for <span className="text-[#6B8EFF]">Every Industry</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/5 rounded-2xl"
              >
                <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{useCase.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-400">{useCase.metrics}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, title: 'GDPR Compliant', desc: 'Enterprise-grade data protection' },
              { icon: Headphones, title: '24/7 Support', desc: 'Human help when you need it' },
              { icon: BarChart3, title: 'Real-time Analytics', desc: 'Track every conversation' },
              { icon: Zap, title: '99.9% Uptime', desc: 'Always available for leads' },
            ].map((item, idx) => (
              <div key={idx} className="p-6">
                <item.icon className="w-8 h-8 text-[#6B8EFF] mx-auto mb-3" />
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
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
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                Ready to Hire Your AI Employee?
              </h3>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Start converting leads 24/7. No credit card required for your free trial.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/demo" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#214CE5] font-bold rounded-xl hover:bg-gray-100 transition shadow-lg"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/pricing" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 font-bold rounded-xl hover:bg-white/20 transition"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
