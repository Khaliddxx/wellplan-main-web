'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Mic, Star, FileText, PenTool, Workflow,
  ArrowRight, Sparkles, CheckCircle, Zap, Bot
} from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';

const aiTools = [
  {
    slug: 'ai-bot',
    icon: MessageCircle,
    name: 'Conversation AI',
    tagline: 'Chat that books appointments',
    description: 'AI assistant in WhatsApp & Telegram that qualifies leads and books appointments 24/7, synced with your calendar.',
    color: '#25D366',
    features: ['WhatsApp & Telegram', 'Calendar sync', '24/7 booking', 'Lead qualification'],
    highlight: true,
  },
  {
    slug: 'ai-voice',
    icon: Mic,
    name: 'Voice AI',
    tagline: 'AI phone agents',
    description: 'Deploy AI agents that handle inbound and outbound calls with natural voice conversations.',
    color: '#8B5CF6',
    features: ['Inbound & outbound', 'Natural voice', 'Call transcription', 'Smart routing'],
  },
  {
    slug: 'ai-reviews',
    icon: Star,
    name: 'Reviews AI',
    tagline: 'Automated review responses',
    description: 'Respond to Google and Facebook reviews automatically with personalized, on-brand replies.',
    color: '#F59E0B',
    features: ['Google reviews', 'Facebook reviews', 'Auto-responses', 'Sentiment analysis'],
  },
  {
    slug: 'ai-content',
    icon: FileText,
    name: 'Content AI',
    tagline: 'Generate marketing content',
    description: 'Create emails, SMS, social posts, and blog content in seconds with AI-powered writing.',
    color: '#EC4899',
    features: ['Email copy', 'SMS templates', 'Social posts', 'Blog articles'],
  },
  {
    slug: 'ai-funnel',
    icon: PenTool,
    name: 'Funnel AI',
    tagline: 'Build pages with AI',
    description: 'Generate high-converting landing pages and funnels with AI. Just describe what you need.',
    color: '#06B6D4',
    features: ['Landing pages', 'Sales funnels', 'A/B variants', 'Mobile-optimized'],
  },
  {
    slug: 'ai-workflow',
    icon: Workflow,
    name: 'Workflow AI',
    tagline: 'Smart automations',
    description: 'Build intelligent automation flows with AI-powered decision making and branching.',
    color: '#10B981',
    features: ['AI decisions', 'Smart branching', 'Auto-triggers', 'CRM integration'],
  },
];

export default function AIOverviewPage() {
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
              <Bot className="w-4 h-4 text-[#6B8EFF]" />
              <span className="text-sm font-semibold text-[#6B8EFF]">AI Employee Suite</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              Meet Your{' '}
              <span className="bg-gradient-to-r from-[#214CE5] via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                AI Team
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              6 powerful AI tools that work 24/7 to capture leads, engage customers, and grow your business on autopilot.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">6</div>
                <div className="text-xs sm:text-sm text-gray-500">AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-500">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">$397</div>
                <div className="text-xs sm:text-sm text-gray-500">/mo Unlimited</div>
              </div>
            </div>

            <Link 
              href="/demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#214CE5]/30 transition"
            >
              See AI Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Choose Your <span className="text-[#6B8EFF]">AI Employee</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Each AI tool is specialized for a specific task. Use them individually or combine for maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, idx) => (
              <motion.div
                key={tool.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/features/${tool.slug}`}
                  className={`block h-full p-6 sm:p-8 rounded-2xl border transition group hover:-translate-y-1 hover:shadow-xl ${
                    tool.highlight 
                      ? 'bg-gradient-to-br from-[#214CE5]/10 to-purple-500/10 border-[#214CE5]/30 hover:border-[#214CE5]/50' 
                      : 'bg-[#111111] border-white/5 hover:border-white/20'
                  }`}
                >
                  {tool.highlight && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#214CE5]/20 text-[10px] font-bold text-[#6B8EFF] mb-4">
                      <Sparkles className="w-3 h-3" />
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition group-hover:scale-110"
                    style={{ backgroundColor: `${tool.color}20` }}
                  >
                    <tool.icon className="w-7 h-7" style={{ color: tool.color }} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1 group-hover:text-[#6B8EFF] transition">{tool.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{tool.tagline}</p>
                  <p className="text-gray-400 mb-4">{tool.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 rounded-md text-xs bg-white/5 text-gray-400"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#6B8EFF]">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Simple <span className="text-[#6B8EFF]">Pricing</span>
            </h2>
            <p className="text-lg text-gray-400">
              Pay per use or go unlimited for one flat monthly fee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Pay Per Use */}
            <div className="p-8 bg-[#111111] border border-white/5 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Pay Per Use</h3>
              <p className="text-gray-400 mb-6">Only pay for what you use</p>
              <ul className="space-y-3 mb-6">
                {[
                  'Conversation AI: $0.02/message',
                  'Voice AI: $0.15/minute',
                  'Reviews AI: $0.05/response',
                  'Content AI: $0.01/generation',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="/pricing"
                className="block text-center py-3 border border-white/10 rounded-xl font-semibold hover:bg-white/5 transition"
              >
                View Full Pricing
              </Link>
            </div>

            {/* Unlimited */}
            <div className="p-8 bg-gradient-to-br from-[#214CE5]/10 to-purple-500/10 border border-[#214CE5]/30 rounded-2xl relative overflow-hidden">
              <div className="absolute top-4 right-4 px-2 py-1 bg-emerald-500/20 rounded text-xs font-bold text-emerald-400">
                BEST VALUE
              </div>
              <h3 className="text-xl font-bold mb-2">Unlimited AI</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-black">$397</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-6">All AI tools, unlimited usage</p>
              <ul className="space-y-3 mb-6">
                {[
                  'Unlimited Conversation AI',
                  'Unlimited Voice AI',
                  'Unlimited Reviews AI',
                  'Unlimited Content AI',
                  'Unlimited Funnel AI',
                  'Unlimited Workflow AI',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="/demo"
                className="block text-center py-3 bg-[#214CE5] rounded-xl font-semibold hover:bg-[#1a3db8] transition"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#214CE5] to-purple-600" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">
                Ready to Build Your AI Team?
              </h3>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Start with a free trial. No credit card required.
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
