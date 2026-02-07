'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, Mail, MessageSquare, Image, Sparkles,
  ArrowRight, CheckCircle, Zap, PenTool, BookOpen
} from 'lucide-react';

const features = [
  { icon: Mail, title: 'Email Copy', description: 'Generate high-converting email campaigns, sequences, and newsletters in seconds.' },
  { icon: MessageSquare, title: 'SMS Templates', description: 'Create compelling SMS messages that get responses. Perfect for follow-ups and reminders.' },
  { icon: Image, title: 'Social Posts', description: 'Write engaging social media content for Facebook, Instagram, LinkedIn, and Twitter.' },
  { icon: BookOpen, title: 'Blog Articles', description: 'Generate SEO-optimized blog posts, guides, and articles for your website.' },
  { icon: PenTool, title: 'Ad Copy', description: 'Create high-performing ad copy for Google, Facebook, and Instagram campaigns.' },
  { icon: Sparkles, title: 'Brand Voice', description: 'Train AI on your brand voice to maintain consistency across all content.' },
];

const contentTypes = [
  { type: 'Email Subject Lines', example: '"Don\'t miss out — your exclusive offer expires tonight"' },
  { type: 'SMS Follow-up', example: '"Hi {name}, just checking in! Ready to schedule your free consultation?"' },
  { type: 'Social Caption', example: '"3 secrets to doubling your leads (without spending more on ads) 🚀"' },
  { type: 'Blog Intro', example: '"If you\'re struggling to convert website visitors into paying customers..."' },
];

export default function ContentAIPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-[#214CE5]/10 to-transparent" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <Link href="/features/ai" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6">← Back to AI Suite</Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/30 mb-6">
              <FileText className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-semibold text-pink-400">Content AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              Write Anything in{' '}
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Seconds</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Generate emails, SMS, social posts, and blog content with AI. Train it on your brand voice for consistent messaging.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-pink-500/30 transition">
                Try Content AI <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">10x</div>
                <div className="text-xs sm:text-sm text-gray-500">Faster Writing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">6+</div>
                <div className="text-xs sm:text-sm text-gray-500">Content Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">∞</div>
                <div className="text-xs sm:text-sm text-gray-500">Variations</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
                className="p-6 sm:p-8 bg-[#111111] border border-white/5 rounded-2xl hover:border-pink-500/30 transition group">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16 sm:py-24 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">AI-Generated <span className="text-pink-400">Examples</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {contentTypes.map((ct, idx) => (
              <div key={idx} className="bg-[#111111] border border-white/10 rounded-xl p-6">
                <p className="text-xs text-pink-400 mb-2">{ct.type}</p>
                <p className="text-gray-300 italic">{ct.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500" />
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">Stop Staring at Blank Pages</h3>
              <p className="text-lg sm:text-xl text-white/80 mb-8">Generate content in seconds, not hours.</p>
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pink-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-lg">
                Book a Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
