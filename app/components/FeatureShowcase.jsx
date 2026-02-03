'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function FeatureShowcase() {
  const features = [
    {
      title: 'Lead Capture from Every Channel',
      desc: 'Forms, landing pages, chatbots, social - capture leads from anywhere. Multi-channel forms adapt to each platform automatically.',
      icon: '📥',
      color: 'from-blue-500 to-cyan-500',
      graphic: (
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Background */}
          <rect width="400" height="300" fill="rgba(15, 23, 42, 0.5)" rx="16" />
          
          {/* Phone mockup */}
          <rect x="50" y="40" width="120" height="220" fill="#1e293b" stroke="#64748b" strokeWidth="2" rx="8" />
          <rect x="55" y="50" width="110" height="180" fill="#0f172a" rx="4" />
          
          {/* Form fields */}
          <rect x="65" y="65" width="90" height="12" fill="#60a5fa" rx="2" opacity="0.7" />
          <rect x="65" y="85" width="90" height="12" fill="#60a5fa" rx="2" opacity="0.5" />
          <rect x="65" y="105" width="90" height="12" fill="#60a5fa" rx="2" opacity="0.3" />
          <rect x="65" y="135" width="90" height="20" fill="#3b82f6" rx="2" />
          
          {/* Website mockup */}
          <rect x="230" y="40" width="140" height="220" fill="#1e293b" stroke="#64748b" strokeWidth="2" rx="8" />
          <rect x="240" y="55" width="120" height="15" fill="#60a5fa" rx="2" />
          <rect x="240" y="80" width="120" height="8" fill="#64748b" />
          <rect x="240" y="95" width="120" height="50" fill="#60a5fa" opacity="0.3" rx="4" />
          <rect x="240" y="155" width="120" height="30" fill="#3b82f6" rx="2" />
          
          {/* Connection lines */}
          <line x1="170" y1="150" x2="230" y2="150" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
          <circle cx="200" cy="150" r="8" fill="#3b82f6" />
        </svg>
      ),
    },
    {
      title: 'Automated Lead Nurturing',
      desc: 'Intelligent email, SMS, and multi-channel sequences. AI automatically personalizes messages and optimizes send times for each lead.',
      icon: '💬',
      color: 'from-purple-500 to-pink-500',
      graphic: (
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Background */}
          <rect width="400" height="300" fill="rgba(15, 23, 42, 0.5)" rx="16" />
          
          {/* Timeline */}
          <line x1="80" y1="150" x2="320" y2="150" stroke="#64748b" strokeWidth="2" />
          
          {/* Nodes */}
          <circle cx="100" cy="150" r="12" fill="#60a5fa" />
          <text x="100" y="180" textAnchor="middle" fontSize="12" fill="#e2e8f0">Welcome</text>
          
          <circle cx="170" cy="150" r="12" fill="#a78bfa" />
          <text x="170" y="180" textAnchor="middle" fontSize="12" fill="#e2e8f0">Day 1</text>
          
          <circle cx="240" cy="150" r="12" fill="#f472b6" />
          <text x="240" y="180" textAnchor="middle" fontSize="12" fill="#e2e8f0">Day 3</text>
          
          <circle cx="310" cy="150" r="12" fill="#34d399" />
          <text x="310" y="180" textAnchor="middle" fontSize="12" fill="#e2e8f0">Follow-up</text>
          
          {/* Message icons */}
          <text x="100" y="110" fontSize="20" textAnchor="middle">📧</text>
          <text x="170" y="110" fontSize="20" textAnchor="middle">💬</text>
          <text x="240" y="110" fontSize="20" textAnchor="middle">📱</text>
          <text x="310" y="110" fontSize="20" textAnchor="middle">☎️</text>
          
          {/* Actions */}
          <rect x="50" y="230" width="140" height="50" fill="rgba(96, 165, 250, 0.1)" stroke="#60a5fa" strokeWidth="1" rx="4" />
          <text x="120" y="255" textAnchor="middle" fontSize="12" fill="#60a5fa" fontWeight="bold">If clicked: Continue</text>
          <text x="120" y="270" textAnchor="middle" fontSize="11" fill="#94a3b8">If ignored: Resend</text>
          
          <rect x="210" y="230" width="140" height="50" fill="rgba(168, 85, 247, 0.1)" stroke="#a78bfa" strokeWidth="1" rx="4" />
          <text x="280" y="255" textAnchor="middle" fontSize="12" fill="#a78bfa" fontWeight="bold">AI Optimize</text>
          <text x="280" y="270" textAnchor="middle" fontSize="11" fill="#94a3b8">Best send time</text>
        </svg>
      ),
    },
    {
      title: 'Sales Pipeline Intelligence',
      desc: 'Real-time lead scoring, AI qualification, and CRM sync. Know exactly which leads to focus on and when they\'re sales-ready.',
      icon: '🎯',
      color: 'from-orange-500 to-red-500',
      graphic: (
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Background */}
          <rect width="400" height="300" fill="rgba(15, 23, 42, 0.5)" rx="16" />
          
          {/* Pipeline stages */}
          <g>
            {/* Stage 1 */}
            <rect x="30" y="80" width="70" height="140" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" strokeWidth="1" rx="4" />
            <text x="65" y="100" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#60a5fa">NEW</text>
            <circle cx="50" cy="150" r="8" fill="#60a5fa" opacity="0.8" />
            <circle cx="75" cy="165" r="8" fill="#60a5fa" opacity="0.6" />
            <circle cx="55" cy="185" r="8" fill="#60a5fa" opacity="0.4" />
            
            {/* Arrow */}
            <path d="M 105 150 L 130 150" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
            
            {/* Stage 2 */}
            <rect x="135" y="80" width="70" height="140" fill="rgba(168, 85, 247, 0.2)" stroke="#a78bfa" strokeWidth="1" rx="4" />
            <text x="170" y="100" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#a78bfa">QUALIFIED</text>
            <circle cx="150" cy="150" r="8" fill="#a78bfa" opacity="0.8" />
            <circle cx="180" cy="165" r="8" fill="#a78bfa" opacity="0.6" />
            
            {/* Arrow */}
            <path d="M 210 150 L 235 150" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
            
            {/* Stage 3 */}
            <rect x="240" y="80" width="70" height="140" fill="rgba(52, 211, 153, 0.2)" stroke="#34d399" strokeWidth="1" rx="4" />
            <text x="275" y="100" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#34d399">HOT</text>
            <circle cx="255" cy="150" r="8" fill="#34d399" opacity="0.8" />
            <circle cx="285" cy="165" r="8" fill="#34d399" opacity="0.6" />
            
            {/* Arrow */}
            <path d="M 315 150 L 340 150" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
            
            {/* Stage 4 */}
            <rect x="345" y="80" width="40" height="140" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="1" rx="4" />
            <text x="365" y="100" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#22c55e">WIN</text>
            <circle cx="360" cy="150" r="6" fill="#22c55e" opacity="0.8" />
          </g>
          
          {/* Score indicator */}
          <rect x="30" y="250" width="100" height="35" fill="rgba(60, 165, 250, 0.1)" stroke="#60a5fa" strokeWidth="1" rx="4" />
          <text x="80" y="268" textAnchor="middle" fontSize="11" fill="#60a5fa" fontWeight="bold">AI Score: 92/100</text>
          <text x="80" y="280" textAnchor="middle" fontSize="9" fill="#94a3b8">Sales ready</text>
          
          {/* Marker definition */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
            </marker>
          </defs>
        </svg>
      ),
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Powerful Features,
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Beautiful Design
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every feature is built for conversion. From lead capture to closing, WellPlan handles the entire customer journey.
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? 'md:[direction:rtl]' : ''
              }`}
            >
              {/* Content */}
              <div
                className="md:[direction:ltr]"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateX(0)' : 'translateX(-50px)',
                  transition: 'all 0.8s ease-out',
                }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-3xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">{feature.desc}</p>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition">
                  Learn More →
                </button>
              </div>

              {/* Graphic */}
              <div
                className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-xl h-96 flex items-center justify-center hover:border-slate-600 transition"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'scale(1)' : 'scale(0.95)',
                  transition: 'all 0.8s ease-out 0.2s',
                }}
              >
                <div className="w-full h-full">
                  {feature.graphic}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
