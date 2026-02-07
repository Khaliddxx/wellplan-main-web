'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Mail, MessageSquare, Workflow, Bot, Send, Clock, Users, Sparkles, Target, BarChart3, Bell, Calendar } from 'lucide-react';

const mainFeatures = [
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Create beautiful email campaigns with our drag-and-drop builder. Automate sequences that convert.',
    benefits: ['Visual email builder', 'A/B testing', 'Segmentation', 'Analytics'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MessageSquare,
    title: 'SMS & WhatsApp Campaigns',
    description: 'Reach leads where they are with personalized text messages and WhatsApp broadcasts.',
    benefits: ['Two-way messaging', 'Templates', 'Scheduling', 'Opt-out management'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Workflow,
    title: 'Automation Workflows',
    description: 'Build powerful multi-channel sequences that nurture leads on autopilot.',
    benefits: ['Visual builder', 'Triggers & actions', 'Branching logic', 'Time delays'],
    color: 'from-orange-500 to-red-500',
  },
];

const moreFeatures = [
  { icon: Bot, title: 'AI Content Writer', description: 'Generate email and SMS copy with AI assistance' },
  { icon: Send, title: 'Broadcast Campaigns', description: 'Send one-time campaigns to segments or all contacts' },
  { icon: Clock, title: 'Drip Sequences', description: 'Automated email series based on time or behavior' },
  { icon: Target, title: 'Lead Scoring', description: 'Automatically score leads based on engagement' },
  { icon: Sparkles, title: 'Personalization', description: 'Dynamic content based on contact data' },
  { icon: BarChart3, title: 'Campaign Analytics', description: 'Track opens, clicks, and conversions' },
  { icon: Bell, title: 'Smart Notifications', description: 'Alert sales when leads are hot' },
  { icon: Calendar, title: 'Send Time Optimization', description: 'AI picks the best time to send messages' },
];

export default function NurturingPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-pink-500/10" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500/30 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <span className="text-sm font-bold text-purple-400">STEP 2</span>
              <span className="text-sm text-purple-300">of the Customer Journey</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">NURTURE</span>
              <br />
              <span className="text-white">Build Relationships</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Engage leads with personalized email, SMS, and WhatsApp campaigns that build trust and move them toward a purchase.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl transition shadow-lg shadow-purple-500/30">
                Start Nurturing Leads
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition">
                See Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engagement Tools</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Multi-channel communication to keep leads engaged</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mainFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <Check className="w-4 h-4 text-purple-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Features Grid */}
      <section className="py-24 px-6 bg-[#111111]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">View 8 More Nurturing Features</h2>
            <p className="text-gray-400">Advanced tools to maximize engagement</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-purple-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition">
                  <feature.icon className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Navigation */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Continue the Customer Journey</h2>
            <p className="text-gray-400">Nurture is the bridge between capture and close.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/features/capturing" className="group p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#214CE5]/50 transition-all">
              <span className="text-xs font-bold text-[#214CE5] uppercase tracking-wider">Step 1 • Previous</span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-[#214CE5] transition">← Capture</h3>
              <p className="text-sm text-gray-400 mt-1">Attract & collect leads</p>
            </Link>
            
            <div className="p-6 rounded-2xl bg-purple-500/20 border border-purple-500/40">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Step 2 • Current</span>
              <h3 className="text-xl font-bold mt-2 text-white">Nurture</h3>
              <p className="text-sm text-gray-400 mt-1">Engage & build trust</p>
            </div>
            
            <Link href="/features/closing" className="group p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-emerald-500/50 transition-all">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Step 3 • Next</span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-emerald-400 transition">Close →</h3>
              <p className="text-sm text-gray-400 mt-1">Convert & get paid</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-600 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to nurture your leads?</h2>
            <p className="text-white/80 mb-8">Start your free trial and automate your follow-up today.</p>
            <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition">
              <Zap className="w-5 h-5" />
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
