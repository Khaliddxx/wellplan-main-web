'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function ScrollWithinStatic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-200px' });

  const steps = [
    {
      number: '1',
      title: 'Capture Leads',
      desc: 'Deploy forms across web, social, and messaging apps. AI-powered qualification starts immediately.',
      details: ['Multi-channel forms', 'AI pre-qualification', 'Instant notifications', 'Lead enrichment'],
    },
    {
      number: '2',
      title: 'Qualify & Score',
      desc: 'Intelligent lead scoring and qualification. WellPlan learns what makes a good lead for your business.',
      details: ['AI scoring model', 'Behavioral signals', 'Engagement tracking', 'Smart segmentation'],
    },
    {
      number: '3',
      title: 'Nurture & Engage',
      desc: 'Automated multi-channel sequences. Email, SMS, WhatsApp, or in-app - whatever converts best.',
      details: ['Automated sequences', 'Personalization', 'A/B testing', 'Dynamic content'],
    },
    {
      number: '4',
      title: 'Close & Convert',
      desc: 'Hand off hot leads to sales at the perfect moment. CRM sync keeps everyone aligned.',
      details: ['CRM integration', 'Sales alerts', 'Handoff workflows', 'Performance tracking'],
    },
  ];

  return (
    <section ref={ref} className="py-32 px-4 bg-gradient-to-b from-slate-950 to-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            From Lead to
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Paying Customer
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A complete customer journey in one platform
          </p>
        </div>

        {/* Scroll-within-static layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Fixed Left Side */}
          <div
            className="sticky top-32"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            <h3 className="text-4xl font-black mb-6">The Complete Process</h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              WellPlan handles every step of the customer journey. From the moment someone shows interest to the day they pay, we've got you covered.
            </p>
            <div className="flex gap-4 mb-8">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition">
                See it in action
              </button>
              <button className="px-6 py-3 border border-slate-700 rounded-lg font-bold hover:border-blue-500 transition">
                Read case study
              </button>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-4 border border-blue-500/20">
                <div className="text-2xl font-black text-blue-400">3x</div>
                <div className="text-sm text-gray-400">Faster qualification</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/20">
                <div className="text-2xl font-black text-purple-400">10x</div>
                <div className="text-sm text-gray-400">Better conversion</div>
              </div>
            </div>
          </div>

          {/* Scrolling Right Side */}
          <div className="space-y-8 max-h-96 overflow-y-auto pr-4 custom-scrollbar">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateX(0)' : 'translateX(50px)',
                  transition: `all 0.6s ease-out ${idx * 0.1}s`,
                }}
              >
                {/* Step card */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition relative">
                  {/* Step number */}
                  <div className="absolute -left-3 -top-3 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center font-black text-white shadow-lg">
                    {step.number}
                  </div>

                  <h4 className="text-xl font-bold mb-2 pt-2">{step.title}</h4>
                  <p className="text-gray-400 mb-4">{step.desc}</p>

                  {/* Details grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {step.details.map((detail, detailIdx) => (
                      <div key={detailIdx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-sm text-gray-400">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(96, 165, 250, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(96, 165, 250, 0.7);
        }
      `}</style>
    </section>
  );
}
