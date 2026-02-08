'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from '../lib/translations';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  
  return isMobile;
}

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
        
        {/* WhatsApp notification */}
        <motion.div 
          className="absolute -right-2 sm:-right-4 top-[15%] bg-[#1a1d24] border border-[#25D366]/50 rounded-xl p-2 sm:p-3 shadow-xl shadow-[#25D366]/20"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-semibold text-white">WhatsApp lead</div>
              <div className="text-[9px] sm:text-[10px] text-gray-500">Hey, I need help!</div>
            </div>
          </div>
        </motion.div>
        
        {/* Instagram notification */}
        <motion.div 
          className="absolute -right-2 sm:-right-4 top-[42%] bg-[#1a1d24] border border-[#E4405F]/50 rounded-xl p-2 sm:p-3 shadow-xl shadow-[#E4405F]/20"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-semibold text-white">Instagram DM</div>
              <div className="text-[9px] sm:text-[10px] text-gray-500">Interested in pricing</div>
            </div>
          </div>
        </motion.div>
        
        {/* Facebook notification */}
        <motion.div 
          className="absolute -right-2 sm:-right-4 top-[69%] bg-[#1a1d24] border border-[#1877F2]/50 rounded-xl p-2 sm:p-3 shadow-xl shadow-[#1877F2]/20"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1877F2] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-semibold text-white">Messenger</div>
              <div className="text-[9px] sm:text-[10px] text-gray-500">Can you call me?</div>
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
  const t = useTranslations('features');
  const tc = useTranslations('common');
  
  // Merge translations with feature config
  const translatedFeatures = features.map(f => ({
    ...f,
    title: t(`${f.id}.title`),
    headline: t(`${f.id}.headline`),
    description: t(`${f.id}.description`),
    stats: [
      { value: t(`${f.id}.stat1Value`), label: t(`${f.id}.stat1Label`) },
      { value: t(`${f.id}.stat2Value`), label: t(`${f.id}.stat2Label`) },
      { value: t(`${f.id}.stat3Value`), label: t(`${f.id}.stat3Label`) },
    ],
  }));

  return (
    <section className="bg-[#0a0a0a]">
      {translatedFeatures.map((feature, index) => (
        <FeatureSection key={feature.id} feature={feature} index={index} learnMore={tc('learnMore')} />
      ))}
    </section>
  );
}

function FeatureSection({ feature, index, learnMore }) {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Reduced parallax on mobile
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [40, -40] : [100, -100]);
  const yVisual = useTransform(scrollYProgress, [0, 1], isMobile ? [-30, 30] : [-80, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <div ref={ref} className="min-h-[70vh] sm:min-h-[80vh] flex items-center py-10 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className={`grid lg:grid-cols-2 gap-8 sm:gap-16 items-center ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
          {/* Content */}
          <motion.div 
            style={{ opacity, y }}
            className="lg:[direction:ltr] relative z-10"
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
              {learnMore}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div 
            style={{ opacity, scale, y: yVisual }}
            className="lg:[direction:ltr] h-[200px] sm:h-[400px] lg:h-[500px] relative"
          >
            {feature.visual}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
