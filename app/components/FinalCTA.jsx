'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 px-4 bg-slate-950 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="4" seed="2" />
              <feDisplacementMap in="SourceGraphic" scale="80" />
            </filter>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(33, 76, 229, 0.2)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.1)" />
              <stop offset="100%" stopColor="rgba(52, 211, 153, 0.2)" />
            </linearGradient>
          </defs>

          {/* Animated blobs */}
          <g filter="url(#noise)" opacity="0.6">
            <path
              d="M300,200 Q200,100 300,50 Q400,20 500,100 Q450,200 400,250 Z"
              fill="url(#grad1)"
              className="animate-pulse"
            />
            <path
              d="M700,100 Q800,50 900,100 Q950,150 900,250 Q800,300 700,200 Z"
              fill="rgba(96, 165, 250, 0.1)"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <path
              d="M100,400 Q50,300 150,250 Q250,200 300,350 Q200,450 100,400 Z"
              fill="rgba(168, 85, 247, 0.1)"
              className="animate-pulse"
              style={{ animationDelay: '2s' }}
            />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <h2 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Dominate
            </span>
            <br />
            Your Market?
          </h2>

          <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses already capturing, nurturing, and closing leads with WellPlan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition transform hover:scale-105"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out 0.2s',
              }}
            >
              Start 14-Day Free Trial
            </button>
            <button
              className="px-8 py-4 border-2 border-gray-600 text-white font-bold text-lg rounded-lg hover:border-blue-500 hover:text-blue-400 transition"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out 0.3s',
              }}
            >
              Schedule Demo
            </button>
          </div>

          {/* Trust line */}
          <p className="text-gray-400 text-sm mb-12">
            ✓ No credit card required • ✓ Setup in minutes • ✓ Cancel anytime
          </p>

          {/* Social proof */}
          <div
            className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-xl p-6 border border-slate-700/50 backdrop-blur-xl"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.4s',
            }}
          >
            <p className="text-sm text-gray-300 mb-3">
              "We replaced 7 tools with WellPlan and saved $50K/year. The support is incredible."
            </p>
            <p className="text-sm font-bold text-gray-200">
              — Sarah Chen, CEO GrowthCo Digital
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
