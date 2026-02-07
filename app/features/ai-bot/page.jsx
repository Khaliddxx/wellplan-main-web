'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Bot, MessageSquare, Calendar, Clock, Brain, Zap, 
  Globe, Users, TrendingUp, CheckCircle, ArrowRight,
  Sparkles, Shield, BarChart3, Headphones, Settings,
  Phone, Star, FileText, Workflow, PlayCircle, Mic,
  PenTool, ThumbsUp, MessageCircle, Target
} from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';

// GHL AI Employee Suite
const aiSuite = [
  { icon: MessageCircle, name: 'Conversation AI', desc: 'Text-based chat automation' },
  { icon: Mic, name: 'Voice AI', desc: 'AI phone agents' },
  { icon: Star, name: 'Reviews AI', desc: 'Automated review responses' },
  { icon: FileText, name: 'Content AI', desc: 'Generate marketing content' },
  { icon: PenTool, name: 'Funnel AI', desc: 'Build pages with AI' },
  { icon: Workflow, name: 'Workflow AI', desc: 'Smart automations' },
];

const features = [
  {
    icon: Brain,
    title: '24/7 Lead Qualification',
    description: 'AI instantly engages every lead, asks qualifying questions, and scores them based on intent and fit. Uses conversation history to maintain context across replies.',
  },
  {
    icon: Calendar,
    title: 'Smart Appointment Booking',
    description: 'Automatically checks your calendar availability and books meetings. AI pauses after booking to ensure smooth handoff to follow-up processes.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Conversations',
    description: 'Guided form conversations with varied phrasing to avoid repetition. Adjusts tone based on user inputs and gently refocuses off-topic replies.',
  },
  {
    icon: Target,
    title: 'Intent Detection',
    description: 'Two modes: General Support for Q&A queries, and Appointment Booking for scheduling. Dynamically switches intent based on contact state.',
  },
  {
    icon: Zap,
    title: 'Three Operating Modes',
    description: 'OFF for testing, SUGGESTIVE for human-approved responses, or AUTO-PILOT for fully automated conversations. Full control over your AI.',
  },
  {
    icon: Users,
    title: 'Seamless Handoff',
    description: 'Set maximum message count before handoff. Transfer to human agents or another AI bot with full conversation context.',
  },
];

const channels = [
  { name: 'SMS', color: '#F22F46' },
  { name: 'WhatsApp', color: '#25D366' },
  { name: 'Facebook', color: '#1877F2' },
  { name: 'Instagram', color: '#E4405F' },
  { name: 'Web Chat', color: '#214CE5' },
  { name: 'Live Chat', color: '#10B981' },
  { name: 'Google Business', color: '#4285F4' },
];

const trainingMethods = [
  {
    icon: Globe,
    title: 'Website URLs',
    description: 'Point AI to your website, FAQs, or any public URL. It learns your business instantly.',
  },
  {
    icon: MessageSquare,
    title: 'Q&A Pairs',
    description: 'Add custom question-answer pairs for specific scenarios and edge cases.',
  },
  {
    icon: ThumbsUp,
    title: 'Feedback Loop',
    description: 'Use thumbs up/down on responses to fine-tune AI behavior over time.',
  },
];

const useCases = [
  { title: 'Lead Generation', description: 'Capture and qualify visitors 24/7', metrics: '3x more qualified leads' },
  { title: 'Appointment Setting', description: 'Let AI handle scheduling', metrics: '80% booking rate' },
  { title: 'Customer Support', description: 'Answer FAQs instantly', metrics: '90% auto-resolved' },
  { title: 'E-commerce', description: 'Product recommendations', metrics: '25% higher AOV' },
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
              <span className="text-sm font-semibold text-[#6B8EFF]">AI Employee Suite</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              Your AI Employee That{' '}
              <span className="bg-gradient-to-r from-[#214CE5] via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Never Sleeps
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Deploy Conversation AI that qualifies leads, books appointments, and handles support 24/7. 
              Works across SMS, WhatsApp, Instagram, Facebook, and web chat.
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
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">6+</div>
                <div className="text-xs sm:text-sm text-gray-500">AI Tools</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Suite Section */}
      <section className="py-12 border-y border-white/5 bg-gradient-to-r from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-gray-500 mb-8">Complete AI Employee Suite</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {aiSuite.map((ai) => (
              <div 
                key={ai.name}
                className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#214CE5]/30 transition"
              >
                <ai.icon className="w-6 h-6 text-[#6B8EFF]" />
                <span className="text-sm font-semibold text-white">{ai.name}</span>
                <span className="text-xs text-gray-500 text-center">{ai.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-gray-500 mb-6">Works on all your channels</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
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
              Conversation AI{' '}
              <span className="text-[#6B8EFF]">Features</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade AI that solves complex problems with safer, more accurate answers than any chatbot on the market.
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

      {/* Training Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <span className="text-xs font-semibold text-emerald-400">FREE TO TRAIN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Train Your AI in <span className="text-[#6B8EFF]">Minutes</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              No coding required. Multiple ways to teach your AI about your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {trainingMethods.map((method, idx) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#111111] border border-white/5 rounded-2xl text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#214CE5]/10 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-[#6B8EFF]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                <p className="text-sm text-gray-400">{method.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Bot Trial Callout */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#214CE5]/10 to-purple-500/10 border border-[#214CE5]/20 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#214CE5]/20 flex items-center justify-center">
                <PlayCircle className="w-6 h-6 text-[#6B8EFF]" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Free Bot Trial</h3>
                <p className="text-sm text-gray-400">Test your AI in a sandbox before going live. No charges.</p>
              </div>
            </div>
            <Link 
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#214CE5] rounded-xl font-semibold hover:bg-[#1a3db8] transition whitespace-nowrap"
            >
              Try It Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Set Up in <span className="text-[#6B8EFF]">3 Simple Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Connect Channels', desc: 'Link SMS, WhatsApp, Instagram, Facebook, or website chat. Select which channels AI responds on.' },
              { step: '02', title: 'Train Your AI', desc: 'Add your website URLs, FAQs, and Q&A pairs. AI learns your business instantly. Training is free!' },
              { step: '03', title: 'Choose Your Mode', desc: 'Start with Suggestive mode to approve responses, then switch to Auto-Pilot for full automation.' },
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

      {/* Voice AI Section */}
      <section className="py-16 sm:py-24 border-y border-white/5 bg-gradient-to-r from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                <Phone className="w-3 h-3 text-purple-400" />
                <span className="text-xs font-semibold text-purple-400">VOICE AI</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                AI Phone Agents
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                Deploy AI agents that handle inbound and outbound calls. Natural voice conversations that qualify leads, book appointments, and provide support — all without human intervention.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Natural-sounding voice conversations',
                  'Inbound & outbound call handling',
                  'Call transcription & summaries',
                  'Seamless transfer to human agents',
                  'Works with your existing phone numbers',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/demo"
                className="inline-flex items-center gap-2 text-[#6B8EFF] font-semibold hover:underline"
              >
                Learn more about Voice AI
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-[#214CE5]/20 rounded-3xl blur-3xl" />
              <div className="relative bg-[#111111] border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-[#214CE5] flex items-center justify-center">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">AI Voice Agent</p>
                    <p className="text-sm text-gray-500">Active • Handling calls</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Incoming call</p>
                    <p className="text-sm">"Hi, I'd like to schedule an appointment..."</p>
                  </div>
                  <div className="p-3 bg-[#214CE5]/10 rounded-lg border border-[#214CE5]/20">
                    <p className="text-xs text-[#6B8EFF] mb-1">AI Response</p>
                    <p className="text-sm">"Of course! I can help you with that. What day works best for you?"</p>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Workflow Integration */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Workflow className="w-5 h-5 text-[#6B8EFF]" />
                  <span className="font-semibold">Workflow Builder</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-400">1</div>
                    <span className="text-sm">Trigger: New lead from web form</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#214CE5]/10 rounded-lg border border-[#214CE5]/20">
                    <div className="w-8 h-8 rounded bg-[#214CE5]/20 flex items-center justify-center text-xs font-bold text-[#6B8EFF]">AI</div>
                    <span className="text-sm">Conversation AI: Qualify lead</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-xs font-bold text-purple-400">2</div>
                    <span className="text-sm">If qualified → Book appointment</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-xs font-bold text-orange-400">3</div>
                    <span className="text-sm">Else → Add to nurture sequence</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#214CE5]/10 border border-[#214CE5]/20 mb-4">
                <Settings className="w-3 h-3 text-[#6B8EFF]" />
                <span className="text-xs font-semibold text-[#6B8EFF]">WORKFLOW INTEGRATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                AI-Powered Automations
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                Integrate Conversation AI directly into your workflows. Customize prompts, create conditional branches based on AI responses, and automate complex multi-step processes.
              </p>
              <ul className="space-y-3">
                {[
                  'Custom AI prompts per workflow step',
                  'Conditional logic based on AI analysis',
                  'Ask specific questions, branch on responses',
                  'Combine with email, SMS, and CRM actions',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                Start with a free trial. Train your AI in minutes. Convert leads 24/7.
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
