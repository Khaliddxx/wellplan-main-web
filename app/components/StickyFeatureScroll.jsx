'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    id: 'capture',
    step: '01',
    title: 'Capture',
    headline: 'Turn visitors into leads',
    description: 'High-converting landing pages, smart forms, and AI chatbots that capture leads 24/7 across all channels.',
    color: '#214CE5',
    gradient: 'from-[#214CE5] to-blue-400',
    link: '/features/capturing',
    stats: [
      { value: '3x', label: 'Higher conversion' },
      { value: '50+', label: 'Form templates' },
      { value: '24/7', label: 'AI chat support' },
    ],
    visual: (
      <div className="relative w-full h-full">
        {/* Browser Window */}
        <div className="absolute inset-4 bg-[#0f1115] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Browser Header */}
          <div className="h-10 bg-[#1a1d24] border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="flex-1 mx-4">
              <div className="h-5 bg-white/5 rounded-md max-w-xs mx-auto" />
            </div>
          </div>
          {/* Landing Page Content */}
          <div className="p-6 space-y-4">
            <div className="h-8 bg-[#214CE5]/30 rounded w-3/4" />
            <div className="h-4 bg-white/10 rounded w-full" />
            <div className="h-4 bg-white/10 rounded w-5/6" />
            <div className="mt-6 space-y-3">
              <div className="h-10 bg-white/5 rounded-lg border border-white/10" />
              <div className="h-10 bg-white/5 rounded-lg border border-white/10" />
              <div className="h-10 bg-[#214CE5] rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-semibold">Get Started Free</span>
              </div>
            </div>
          </div>
        </div>
        {/* Floating notification */}
        <motion.div 
          className="absolute -right-4 top-1/4 bg-[#1a1d24] border border-[#214CE5]/50 rounded-xl p-3 shadow-xl shadow-[#214CE5]/20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#214CE5]/30 flex items-center justify-center text-sm">✨</div>
            <div>
              <div className="text-xs font-semibold text-white">New lead captured!</div>
              <div className="text-[10px] text-gray-500">john@example.com</div>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 'nurture',
    step: '02',
    title: 'Nurture',
    headline: 'Build lasting relationships',
    description: 'Automated email, SMS, and WhatsApp sequences that engage leads with personalized content at the perfect time.',
    color: '#a855f7',
    gradient: 'from-purple-500 to-pink-500',
    link: '/features/nurturing',
    stats: [
      { value: '85%', label: 'Open rate' },
      { value: '10x', label: 'Engagement' },
      { value: 'AI', label: 'Powered' },
    ],
    visual: (
      <div className="relative w-full h-full">
        {/* Workflow Canvas */}
        <div className="absolute inset-4 bg-[#0f1115] rounded-2xl border border-white/10 overflow-hidden shadow-2xl p-6">
          {/* Workflow nodes */}
          <div className="flex items-center justify-between">
            {/* Trigger */}
            <motion.div 
              className="w-24 h-24 bg-purple-500/20 border border-purple-500/50 rounded-xl flex flex-col items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-2xl">📧</span>
              <span className="text-[10px] text-purple-400 mt-1">Trigger</span>
            </motion.div>
            
            {/* Arrow */}
            <motion.div 
              className="flex-1 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            
            {/* Wait */}
            <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center">
              <span className="text-2xl">⏰</span>
              <span className="text-[10px] text-gray-400 mt-1">Wait 2 days</span>
            </div>
            
            {/* Arrow */}
            <motion.div 
              className="flex-1 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 mx-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
            
            {/* SMS */}
            <motion.div 
              className="w-24 h-24 bg-pink-500/20 border border-pink-500/50 rounded-xl flex flex-col items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <span className="text-2xl">💬</span>
              <span className="text-[10px] text-pink-400 mt-1">Send SMS</span>
            </motion.div>
          </div>
          
          {/* Stats below */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-purple-400">1,234</div>
              <div className="text-[10px] text-gray-500">Active sequences</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-pink-400">89%</div>
              <div className="text-[10px] text-gray-500">Delivery rate</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-orange-400">4.2x</div>
              <div className="text-[10px] text-gray-500">ROI</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'close',
    step: '03',
    title: 'Close',
    headline: 'Convert leads into revenue',
    description: 'Smart CRM, AI-powered lead scoring, and seamless payment processing to close deals faster than ever.',
    color: '#10b981',
    gradient: 'from-emerald-500 to-teal-400',
    link: '/features/closing',
    stats: [
      { value: '40%', label: 'Faster closes' },
      { value: '$2M+', label: 'Revenue tracked' },
      { value: '99%', label: 'Accuracy' },
    ],
    visual: (
      <div className="relative w-full h-full">
        {/* CRM Dashboard */}
        <div className="absolute inset-4 bg-[#0f1115] rounded-2xl border border-white/10 overflow-hidden shadow-2xl p-6">
          {/* Pipeline header */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm font-semibold text-white">Sales Pipeline</div>
            <div className="text-xs text-emerald-400 font-medium">$847,500 total</div>
          </div>
          
          {/* Pipeline stages */}
          <div className="flex gap-3">
            {['New', 'Qualified', 'Proposal', 'Won'].map((stage, i) => (
              <div key={stage} className="flex-1">
                <div className="text-[10px] text-gray-500 mb-2">{stage}</div>
                <div className={`h-2 rounded-full ${
                  i === 3 ? 'bg-emerald-500' : 
                  i === 2 ? 'bg-teal-500/60' : 
                  i === 1 ? 'bg-teal-500/40' : 'bg-teal-500/20'
                }`} />
                <div className="mt-3 space-y-2">
                  {[...Array(4 - i)].map((_, j) => (
                    <motion.div 
                      key={j}
                      className="h-12 bg-white/5 rounded-lg border border-white/10 p-2"
                      animate={i === 2 && j === 0 ? { x: [0, 10, 0], borderColor: ['rgba(255,255,255,0.1)', 'rgba(16,185,129,0.5)', 'rgba(255,255,255,0.1)'] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="h-2 bg-white/20 rounded w-3/4" />
                      <div className="h-2 bg-emerald-500/30 rounded w-1/2 mt-1" />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating deal card */}
        <motion.div 
          className="absolute -left-4 bottom-1/4 bg-[#1a1d24] border border-emerald-500/50 rounded-xl p-3 shadow-xl shadow-emerald-500/20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500/30 flex items-center justify-center text-sm">💰</div>
            <div>
              <div className="text-xs font-semibold text-white">Deal closed!</div>
              <div className="text-[10px] text-emerald-400">+$12,500</div>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
];

export default function StickyFeatureScroll() {
  return (
    <section className="bg-[#0a0a0a]">
      {features.map((feature, index) => (
        <FeatureSection key={feature.id} feature={feature} index={index} />
      ))}
    </section>
  );
}

function FeatureSection({ feature, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const yVisual = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1.05, 1.05, 0.85]);

  return (
    <div ref={ref} className="min-h-screen flex items-center py-16 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className={`grid lg:grid-cols-2 gap-8 sm:gap-16 items-center ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
          {/* Content */}
          <motion.div 
            style={{ opacity, y }}
            className="lg:[direction:ltr]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className={`text-sm font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                STEP {feature.step}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                {feature.title}
              </span>
            </h2>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              {feature.headline}
            </h3>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {feature.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
              {feature.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div 
                    className="text-2xl sm:text-3xl font-black mb-1"
                    style={{ color: feature.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link 
              href={feature.link}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:gap-4"
              style={{ 
                background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                border: `1px solid ${feature.color}40`,
                color: feature.color
              }}
            >
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div 
            style={{ opacity, scale, y: yVisual }}
            className="lg:[direction:ltr] h-[280px] sm:h-[400px] lg:h-[500px] relative"
          >
            {feature.visual}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
