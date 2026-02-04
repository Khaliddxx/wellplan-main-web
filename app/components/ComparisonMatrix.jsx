'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const competitors = [
  { name: 'WellPlan', primary: true },
  { name: 'HubSpot', primary: false },
  { name: 'Salesforce', primary: false },
  { name: 'ActiveCampaign', primary: false },
];

const features = [
  { name: 'All-in-one Platform', wellplan: true, hubspot: true, salesforce: false, activecampaign: false },
  { name: 'WhatsApp Business API', wellplan: true, hubspot: false, salesforce: false, activecampaign: false },
  { name: 'AI Lead Qualification', wellplan: true, hubspot: true, salesforce: true, activecampaign: false },
  { name: 'Automated Nurturing', wellplan: true, hubspot: true, salesforce: true, activecampaign: true },
  { name: 'Built-in CRM', wellplan: true, hubspot: true, salesforce: true, activecampaign: true },
  { name: 'Landing Page Builder', wellplan: true, hubspot: true, salesforce: false, activecampaign: true },
  { name: 'AI Chatbots', wellplan: true, hubspot: false, salesforce: false, activecampaign: false },
  { name: 'SMS Marketing', wellplan: true, hubspot: true, salesforce: false, activecampaign: true },
  { name: 'Pipeline Management', wellplan: true, hubspot: true, salesforce: true, activecampaign: true },
  { name: 'Affordable Pricing', wellplan: true, hubspot: false, salesforce: false, activecampaign: true },
];

export default function ComparisonMatrix() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const getFeatureValue = (feature, competitor) => {
    const key = competitor.toLowerCase().replace('campaign', 'campaign');
    return feature[key];
  };

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">Why Teams Choose</span>{' '}
            <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">WellPlan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            More features, better value, simpler pricing
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[800px] bg-[#111111] border border-white/10 rounded-2xl overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-5 border-b border-white/10">
              <div className="p-6 bg-white/[0.02]">
                <span className="text-sm font-medium text-gray-500">Feature</span>
              </div>
              {competitors.map((comp, idx) => (
                <div 
                  key={idx}
                  className={`p-6 text-center ${comp.primary ? 'bg-[#214CE5]/10' : 'bg-white/[0.02]'}`}
                >
                  <span className={`font-bold ${comp.primary ? 'text-[#214CE5]' : 'text-gray-400'}`}>
                    {comp.name}
                  </span>
                  {comp.primary && (
                    <div className="mt-1 text-xs text-[#6B8EFF]">Recommended</div>
                  )}
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + idx * 0.03 }}
                className={`grid grid-cols-5 border-b border-white/5 hover:bg-white/[0.02] transition ${
                  idx === features.length - 1 ? 'border-b-0' : ''
                }`}
              >
                <div className="p-4 flex items-center">
                  <span className="text-sm text-gray-300">{feature.name}</span>
                </div>
                {competitors.map((comp, compIdx) => {
                  const hasFeature = feature[comp.name.toLowerCase().replace('campaign', 'campaign')];
                  return (
                    <div 
                      key={compIdx}
                      className={`p-4 flex items-center justify-center ${
                        comp.primary ? 'bg-[#214CE5]/5' : ''
                      }`}
                    >
                      {hasFeature ? (
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          comp.primary ? 'bg-[#214CE5]' : 'bg-emerald-500/20'
                        }`}>
                          <Check className={`w-4 h-4 ${comp.primary ? 'text-white' : 'text-emerald-400'}`} />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                          <X className="w-4 h-4 text-gray-600" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            ))}

            {/* Pricing Row */}
            <div className="grid grid-cols-5 bg-white/[0.02] border-t border-white/10">
              <div className="p-6 flex items-center">
                <span className="text-sm font-semibold text-white">Starting Price</span>
              </div>
              <div className="p-6 text-center bg-[#214CE5]/10">
                <div className="text-2xl font-black text-[#214CE5]">$97</div>
                <div className="text-xs text-gray-500">/month</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-2xl font-bold text-gray-400">$800</div>
                <div className="text-xs text-gray-500">/month</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-2xl font-bold text-gray-400">$1,500</div>
                <div className="text-xs text-gray-500">/month</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-2xl font-bold text-gray-400">$149</div>
                <div className="text-xs text-gray-500">/month</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-6">Get all features at a fraction of the cost</p>
          <Link
            href="https://app.wellplan.io"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] rounded-xl font-bold text-white hover:shadow-lg hover:shadow-[#214CE5]/30 transition group"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
