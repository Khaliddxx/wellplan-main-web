'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function ComparisonMatrix() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const competitors = [
    { name: 'WellPlan', icon: '⭐', primary: true },
    { name: 'HubSpot', icon: '🎯', primary: false },
    { name: 'Salesforce', icon: '☁️', primary: false },
    { name: 'Pipedrive', icon: '🔄', primary: false },
  ];

  const features = [
    { name: 'Multi-channel Lead Capture', wellplan: true, hubspot: true, salesforce: true, pipedrive: false },
    { name: 'AI Lead Scoring', wellplan: true, hubspot: true, salesforce: false, pipedrive: false },
    { name: 'Automated Nurturing', wellplan: true, hubspot: true, salesforce: true, pipedrive: false },
    { name: 'WhatsApp Integration', wellplan: true, hubspot: false, salesforce: false, pipedrive: false },
    { name: 'SMS Automation', wellplan: true, hubspot: true, salesforce: false, pipedrive: true },
    { name: 'Real-time Analytics', wellplan: true, hubspot: true, salesforce: true, pipedrive: true },
    { name: 'AI Chatbots', wellplan: true, hubspot: false, salesforce: false, pipedrive: false },
    { name: 'Zapier Integration', wellplan: true, hubspot: true, salesforce: true, pipedrive: true },
    { name: 'Custom Workflows', wellplan: true, hubspot: true, salesforce: true, pipedrive: true },
    { name: 'API Access', wellplan: true, hubspot: true, salesforce: true, pipedrive: true },
    { name: 'Affordable Pricing', wellplan: true, hubspot: false, salesforce: false, pipedrive: true },
  ];

  return (
    <section ref={ref} className="py-32 px-4 bg-gradient-to-b from-slate-900/50 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              WellPlan Wins
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how WellPlan stacks up against the competition. Better features, better price, better support.
          </p>
        </div>

        {/* Comparison Table */}
        <div 
          className="overflow-x-auto rounded-2xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-xl"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <table className="w-full">
            {/* Header */}
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="px-6 py-4 text-left text-gray-300 font-semibold bg-slate-800/30">Feature</th>
                {competitors.map((comp) => (
                  <th
                    key={comp.name}
                    className={`px-6 py-4 text-center font-semibold transition ${
                      comp.primary
                        ? 'bg-gradient-to-b from-blue-500/20 to-transparent text-blue-300'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">{comp.icon}</div>
                    <div className="text-sm font-bold">{comp.name}</div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-700/30 hover:bg-slate-800/30 transition"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.6s ease-out ${idx * 0.05}s`,
                  }}
                >
                  <td className="px-6 py-4 font-medium text-gray-300">{feature.name}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-2xl">
                      {feature.wellplan ? '✓' : '✗'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-2xl text-gray-500">
                      {feature.hubspot ? '✓' : '✗'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-2xl text-gray-500">
                      {feature.salesforce ? '✓' : '✗'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-2xl text-gray-500">
                      {feature.pipedrive ? '✓' : '✗'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Ready to see the difference?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition">
            Start Free Trial - No Credit Card
          </button>
        </div>
      </div>
    </section>
  );
}
