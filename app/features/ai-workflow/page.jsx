'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Workflow, GitBranch, Zap, Brain, MessageSquare,
  ArrowRight, CheckCircle, Settings, Target
} from 'lucide-react';

const features = [
  { icon: Brain, title: 'AI Decision Making', description: 'Let AI analyze data and make smart decisions within your workflows automatically.' },
  { icon: GitBranch, title: 'Smart Branching', description: 'Create conditional paths based on AI analysis of customer intent, sentiment, and behavior.' },
  { icon: MessageSquare, title: 'AI Conversations', description: 'Add AI-powered chat steps that can ask questions and act on responses.' },
  { icon: Target, title: 'Intent Detection', description: 'AI understands what customers want and routes them accordingly.' },
  { icon: Zap, title: 'Auto-Triggers', description: 'Automatically trigger workflows based on AI-detected events and patterns.' },
  { icon: Settings, title: 'CRM Integration', description: 'AI updates contact records, scores leads, and enriches data automatically.' },
];

export default function WorkflowAIPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-[#214CE5]/10 to-transparent" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <Link href="/features/ai" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6">← Back to AI Suite</Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6">
              <Workflow className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-400">Workflow AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              Automations That{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Think</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Build intelligent automation flows with AI-powered decision making. Your workflows get smarter over time.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/30 transition">
                See Workflow AI <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Workflow */}
      <section className="py-16 sm:py-24 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">AI-Powered <span className="text-emerald-400">Workflow</span></h2>
          </div>
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400">1</div>
                <div>
                  <p className="font-semibold">Trigger: New lead submits form</p>
                  <p className="text-sm text-gray-500">Webhook received from website</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold text-emerald-400">AI Step: Analyze & Score Lead</p>
                  <p className="text-sm text-gray-500">AI evaluates lead quality based on form data</p>
                </div>
              </div>
              <div className="ml-8 flex items-start gap-4">
                <div className="w-px h-20 bg-white/10"></div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <GitBranch className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">If score &gt; 80 → <span className="text-purple-400">Send to Sales</span></span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <GitBranch className="w-4 h-4 text-amber-400" />
                    <span className="text-sm">If score 50-80 → <span className="text-amber-400">Nurture Sequence</span></span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-500/10 rounded-lg border border-gray-500/20">
                    <GitBranch className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">If score &lt; 50 → <span className="text-gray-400">Add to Newsletter</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
                className="p-6 sm:p-8 bg-[#111111] border border-white/5 rounded-2xl hover:border-emerald-500/30 transition group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">Build Smarter Automations</h3>
              <p className="text-lg sm:text-xl text-white/80 mb-8">Let AI make decisions in your workflows.</p>
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-lg">
                Book a Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
