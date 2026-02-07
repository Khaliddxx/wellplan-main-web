'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mic, Phone, PhoneIncoming, PhoneOutgoing, FileText,
  ArrowRight, CheckCircle, Zap, Globe, Clock, Users,
  BarChart3, Shield, Headphones, MessageSquare
} from 'lucide-react';

const features = [
  { icon: PhoneIncoming, title: 'Inbound Calls', description: 'AI answers calls instantly, qualifies callers, and routes to the right team or books appointments automatically.' },
  { icon: PhoneOutgoing, title: 'Outbound Calls', description: 'AI makes calls for appointment reminders, follow-ups, and lead qualification at scale.' },
  { icon: MessageSquare, title: 'Natural Conversations', description: 'Human-like voice with natural pauses, interruption handling, and context awareness.' },
  { icon: FileText, title: 'Call Transcription', description: 'Every call is transcribed and summarized. Search through call history instantly.' },
  { icon: Users, title: 'Smart Routing', description: 'Route calls based on caller intent, availability, or custom rules. Seamless handoff to humans.' },
  { icon: Globe, title: 'Multi-Language', description: 'Support callers in 20+ languages with natural accents and regional dialects.' },
];

const useCases = [
  { title: 'Appointment Reminders', description: 'Reduce no-shows by 50% with automated reminder calls', metrics: '50% less no-shows' },
  { title: 'Lead Qualification', description: 'Call and qualify leads instantly after form submission', metrics: '3x faster response' },
  { title: 'After-Hours Support', description: 'Handle calls 24/7 without hiring night staff', metrics: '24/7 coverage' },
  { title: 'Outbound Campaigns', description: 'Scale outreach with personalized AI calls', metrics: '10x more calls' },
];

export default function VoiceAIPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-[#214CE5]/10 to-transparent" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Link href="/features/ai" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6">
              ← Back to AI Suite
            </Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <Mic className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-400">Voice AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              AI Phone Agents That{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sound Human
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Deploy AI agents that handle inbound and outbound calls with natural voice conversations. Qualify leads, book appointments, and provide support — 24/7.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition">
                Hear Voice AI Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition">
                View Pricing
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">$0.15</div>
                <div className="text-xs sm:text-sm text-gray-500">/minute</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">20+</div>
                <div className="text-xs sm:text-sm text-gray-500">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-500">Availability</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Voice AI <span className="text-purple-400">Features</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 bg-[#111111] border border-white/5 rounded-2xl hover:border-purple-500/30 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Conversation */}
      <section className="py-16 sm:py-24 border-y border-white/5 bg-gradient-to-r from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Hear It In <span className="text-purple-400">Action</span>
            </h2>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold">Voice AI Agent</p>
                <p className="text-sm text-gray-500">Incoming call • 0:45</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <p className="text-xs text-purple-400 mb-1">AI Agent</p>
                <p>"Hi! Thanks for calling WellPlan. I'm here to help you schedule a consultation. What type of service are you interested in?"</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Caller</p>
                <p>"I'd like to book a strategy session for next week."</p>
              </div>
              <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <p className="text-xs text-purple-400 mb-1">AI Agent</p>
                <p>"Perfect! I have availability on Tuesday at 2pm or Thursday at 10am. Which works better for you?"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Perfect For <span className="text-purple-400">Every Use Case</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, idx) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/5 rounded-2xl"
              >
                <h3 className="text-lg font-bold mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{uc.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 rounded-full">
                  <Zap className="w-3 h-3 text-purple-400" />
                  <span className="text-xs font-semibold text-purple-400">{uc.metrics}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">
                Ready to Deploy Voice AI?
              </h3>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Start with a free trial. Set up in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-lg">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
