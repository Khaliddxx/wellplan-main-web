'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  PenTool, Layout, Layers, Smartphone, Zap, Palette,
  ArrowRight, CheckCircle, Copy, Wand2
} from 'lucide-react';

const features = [
  { icon: Wand2, title: 'AI Page Builder', description: 'Describe your page and AI generates a complete, conversion-optimized layout instantly.' },
  { icon: Layout, title: 'Landing Pages', description: 'Create stunning landing pages for campaigns, products, and lead magnets in seconds.' },
  { icon: Layers, title: 'Sales Funnels', description: 'Build complete multi-step funnels with upsells, downsells, and order bumps.' },
  { icon: Copy, title: 'A/B Variants', description: 'Generate multiple design variants to test which converts best.' },
  { icon: Smartphone, title: 'Mobile-First', description: 'Every page is automatically optimized for mobile devices.' },
  { icon: Palette, title: 'Brand Matching', description: 'AI matches your brand colors, fonts, and style automatically.' },
];

export default function FunnelAIPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-[#214CE5]/10 to-transparent" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <Link href="/features/ai" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6">← Back to AI Suite</Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
              <PenTool className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400">Funnel AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              Build Pages with{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Just Words</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Describe what you need and AI builds your landing page or funnel. No design skills required.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition">
                Try Funnel AI <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">60s</div>
                <div className="text-xs sm:text-sm text-gray-500">Page Generation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">100+</div>
                <div className="text-xs sm:text-sm text-gray-500">Templates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">0</div>
                <div className="text-xs sm:text-sm text-gray-500">Code Required</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo */}
      <section className="py-16 sm:py-24 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">See The <span className="text-cyan-400">Magic</span></h2>
          </div>
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Your prompt:</p>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-gray-300">"Create a landing page for a fitness coaching business offering a free consultation. Include testimonials, pricing section, and a booking form."</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Wand2 className="w-5 h-5 text-cyan-400" />
              <span className="text-sm text-cyan-400">AI generates in 60 seconds...</span>
            </div>
            <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 flex items-center justify-center">
              <div className="text-center">
                <Layout className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <p className="text-gray-400">Complete landing page with all sections</p>
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
                className="p-6 sm:p-8 bg-[#111111] border border-white/5 rounded-2xl hover:border-cyan-500/30 transition group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500" />
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">Build Your First Page in 60 Seconds</h3>
              <p className="text-lg sm:text-xl text-white/80 mb-8">No design skills. No coding. Just describe what you need.</p>
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-lg">
                Book a Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
