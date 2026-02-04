'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, FormInput, Layout, MessageSquare, Users, Globe, Target, Sparkles, MousePointer, FileText, BarChart3 } from 'lucide-react';

const BRAND_BLUE = '#214CE5';

const mainFeatures = [
  {
    icon: FormInput,
    title: 'Smart Forms & Surveys',
    description: 'Create beautiful, conversion-optimized forms with conditional logic, multi-step wizards, and instant lead capture.',
    benefits: ['Drag-and-drop builder', 'Conditional logic', 'File uploads', 'Payment collection'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Layout,
    title: 'Landing Page Builder',
    description: 'Build stunning landing pages in minutes with our visual editor. No coding required.',
    benefits: ['100+ templates', 'A/B testing', 'Mobile-optimized', 'Custom domains'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MessageSquare,
    title: 'Website Chat Widget',
    description: 'Engage visitors instantly with a customizable chat widget that captures leads 24/7.',
    benefits: ['Custom branding', 'Auto-responses', 'Lead qualification', 'File sharing'],
    color: 'from-emerald-500 to-teal-500',
  },
];

const moreFeatures = [
  { icon: Globe, title: 'Custom Domains', description: 'Use your own domain for landing pages and forms' },
  { icon: Target, title: 'Popup Builder', description: 'Exit-intent and timed popups to capture leaving visitors' },
  { icon: Sparkles, title: 'AI Form Assistant', description: 'AI helps visitors complete forms with smart suggestions' },
  { icon: MousePointer, title: 'Click Tracking', description: 'See exactly how visitors interact with your pages' },
  { icon: FileText, title: 'Lead Magnets', description: 'Deliver PDFs, videos, and files on form submission' },
  { icon: BarChart3, title: 'Conversion Analytics', description: 'Track conversion rates and optimize your funnels' },
  { icon: Users, title: 'Team Collaboration', description: 'Multiple team members can build and manage forms' },
  { icon: Zap, title: 'Instant Notifications', description: 'Get alerted the moment a new lead comes in' },
];

export default function CapturingPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/30 via-transparent to-cyan-500/10" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#214CE5]/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/30 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#214CE5]/20 border border-[#214CE5]/30 mb-6">
              <span className="text-sm font-bold text-[#214CE5]">STEP 1</span>
              <span className="text-sm text-[#6B8EFF]">of the Customer Journey</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#214CE5] via-blue-400 to-cyan-400 bg-clip-text text-transparent">CAPTURE</span>
              <br />
              <span className="text-white">More Leads</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Turn website visitors into qualified leads with beautiful forms, landing pages, and chat widgets that convert.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://app.wellplan.io" className="inline-flex items-center gap-2 px-8 py-4 bg-[#214CE5] hover:bg-[#1a3db8] text-white font-bold rounded-xl transition shadow-lg shadow-[#214CE5]/30">
                Start Capturing Leads
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lead Capture Tools</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to attract and capture high-quality leads</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mainFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#214CE5]/50 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <Check className="w-4 h-4 text-[#214CE5]" />
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
            <h2 className="text-3xl font-bold mb-4">View 8 More Capture Features</h2>
            <p className="text-gray-400">Advanced tools to maximize your lead generation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#214CE5]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#214CE5]/20 flex items-center justify-center mb-4 group-hover:bg-[#214CE5]/30 transition">
                  <feature.icon className="w-5 h-5 text-[#6B8EFF]" />
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
            <p className="text-gray-400">Capture is just the beginning. See what comes next.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#214CE5]/20 border border-[#214CE5]/40">
              <span className="text-xs font-bold text-[#214CE5] uppercase tracking-wider">Step 1 • Current</span>
              <h3 className="text-xl font-bold mt-2 text-white">Capture</h3>
              <p className="text-sm text-gray-400 mt-1">Attract & collect leads</p>
            </div>
            
            <Link href="/features/nurturing" className="group p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-purple-500/50 transition-all">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Step 2 • Next</span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-purple-400 transition">Nurture →</h3>
              <p className="text-sm text-gray-400 mt-1">Engage & build trust</p>
            </Link>
            
            <Link href="/features/closing" className="group p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-emerald-500/50 transition-all">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Step 3</span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-emerald-400 transition">Close →</h3>
              <p className="text-sm text-gray-400 mt-1">Convert & get paid</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-[#214CE5] to-cyan-600 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to capture more leads?</h2>
            <p className="text-white/80 mb-8">Start your free trial and see results in days, not months.</p>
            <Link href="https://app.wellplan.io" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#214CE5] font-bold rounded-xl hover:bg-gray-100 transition">
              <Zap className="w-5 h-5" />
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
