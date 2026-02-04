'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { integrations } from '@/app/lib/integrations';
import { ArrowRight, Zap, Check, Search } from 'lucide-react';
import { useState } from 'react';

export default function IntegrationsPage() {
  const categories = ['All', 'Messaging', 'Social', 'CRM', 'Email', 'SMS', 'Automation', 'E-Commerce', 'Payments', 'Productivity', 'Custom'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredIntegrations = integrations.filter(i => {
    const matchesCategory = activeCategory === 'All' || i.category === activeCategory;
    const matchesSearch = i.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          i.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/20 via-transparent to-purple-500/10" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#214CE5]/30 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#214CE5]/20 border border-[#214CE5]/30 mb-6">
              <Zap className="w-4 h-4 text-[#214CE5]" />
              <span className="text-sm font-semibold text-[#6B8EFF]">50+ Native Integrations</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Connect <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">Everything</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Integrate WellPlan with your entire tech stack. Automate workflows, sync data, and manage all your channels from one platform.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#111111] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#214CE5]/50 transition"
              />
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-white">53</div>
                <div className="text-sm text-gray-500">Native Apps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">5000+</div>
                <div className="text-sm text-gray-500">Via Zapier</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">2-way</div>
                <div className="text-sm text-gray-500">Data Sync</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-16 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  activeCategory === category 
                    ? 'bg-[#214CE5] text-white' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Integration Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {filteredIntegrations.map((integration, idx) => (
            <motion.div
              key={integration.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
            >
              <Link
                href={`/integrations/${integration.slug}`}
                className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-white/20 transition-all hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1"
              >
                {/* Icon with Brand Color Background */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${integration.brandColor}20` }}
                >
                  {integration.icon}
                </div>
                
                {/* Name & Color Indicator */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: integration.brandColor }}
                    />
                    <p className="font-semibold text-white group-hover:text-[#6B8EFF] transition">
                      {integration.name}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{integration.category}</p>
                </div>
                
                {/* Features Badge */}
                {integration.features && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#214CE5]/20 text-[#6B8EFF]">
                      {integration.features.length} features
                    </span>
                  </div>
                )}
                
                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition">
                  <ArrowRight className="w-4 h-4 text-gray-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredIntegrations.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 mb-4">No integrations found matching "{searchQuery}"</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="text-[#214CE5] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#214CE5] to-purple-600" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          
          <div className="relative p-12 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-black mb-4">Don't see your tool?</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We support 5000+ additional integrations via Zapier and custom webhooks. Plus, our REST API lets you build anything.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Zapier Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Custom Webhooks</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Full REST API</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#214CE5] font-bold rounded-xl hover:bg-gray-100 transition shadow-lg">
                Talk to Sales
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="https://marketplace.gohighlevel.com/docs/" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition">
                View API Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
