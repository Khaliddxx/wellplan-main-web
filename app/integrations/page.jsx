'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { integrations } from '@/app/lib/integrations';
import { ArrowRight, Zap, Check, Search, MessageSquare, Share2, Users, Mail, Phone, Workflow, ShoppingCart, CreditCard, FolderOpen, Code } from 'lucide-react';
import { useState } from 'react';
import IntegrationBrandIcon from '@/app/components/IntegrationBrandIcons';

const categoryMeta = {
  Messaging: { icon: MessageSquare, color: '#25D366', description: 'WhatsApp, Telegram, Slack & more' },
  Social: { icon: Share2, color: '#E4405F', description: 'Instagram, Facebook, LinkedIn & more' },
  CRM: { icon: Users, color: '#00A1E0', description: 'Salesforce, HubSpot, Pipedrive & more' },
  Email: { icon: Mail, color: '#EA4335', description: 'Gmail, Outlook, Mailchimp & more' },
  SMS: { icon: Phone, color: '#F22F46', description: 'Twilio, MessageBird & more' },
  Automation: { icon: Workflow, color: '#FF4A00', description: 'Zapier, Make, n8n & more' },
  'E-Commerce': { icon: ShoppingCart, color: '#96BF48', description: 'Shopify, WooCommerce & more' },
  Payments: { icon: CreditCard, color: '#635BFF', description: 'Stripe, PayPal, Square & more' },
  Productivity: { icon: FolderOpen, color: '#4285F4', description: 'Google Workspace, Notion & more' },
  Custom: { icon: Code, color: '#1a1a1a', description: 'Webhooks, API & custom builds' },
};

const featuredSlugs = ['whatsapp', 'instagram', 'hubspot', 'stripe', 'zapier', 'gmail'];

export default function IntegrationsPage() {
  const categories = ['All', ...Object.keys(categoryMeta)];
  const [activeCategory, setActiveCategory] = useState(null); // null = show categorized view
  const [searchQuery, setSearchQuery] = useState('');
  
  const featuredIntegrations = integrations.filter(i => featuredSlugs.includes(i.slug));
  
  const filteredIntegrations = integrations.filter(i => {
    const matchesCategory = !activeCategory || activeCategory === 'All' || i.category === activeCategory;
    const matchesSearch = i.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          i.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isFiltered = activeCategory || searchQuery;

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/20 via-transparent to-purple-500/10" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#214CE5]/30 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12">
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
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              Connect <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">Everything</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Integrate WellPlan with your entire tech stack. Automate workflows, sync data, and manage all your channels from one platform.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#111111] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#214CE5]/50 transition"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="sticky top-16 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => { setActiveCategory(null); setSearchQuery(''); }}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                !activeCategory && !searchQuery
                  ? 'bg-[#214CE5] text-white' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              Browse All
            </button>
            {Object.keys(categoryMeta).map((category) => {
              const count = integrations.filter(i => i.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition flex items-center gap-2 ${
                    activeCategory === category 
                      ? 'bg-[#214CE5] text-white' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category}
                  <span className="text-xs opacity-60">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
        {/* Categorized View (Default) */}
        {!isFiltered && (
          <>
            {/* Featured Integrations */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">Popular Integrations</h2>
                  <p className="text-sm text-gray-500">Most used by WellPlan customers</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
                {featuredIntegrations.map((integration, idx) => (
                  <IntegrationCard key={integration.slug} integration={integration} idx={idx} featured />
                ))}
              </div>
            </section>

            {/* Category Sections */}
            {Object.entries(categoryMeta).map(([category, meta]) => {
              const categoryIntegrations = integrations.filter(i => i.category === category);
              const Icon = meta.icon;
              
              return (
                <section key={category} className="mb-12">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${meta.color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: meta.color }} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white">{category}</h2>
                        <p className="text-sm text-gray-500">{meta.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveCategory(category)}
                      className="text-sm text-[#6B8EFF] hover:text-white transition flex items-center gap-1"
                    >
                      View all ({categoryIntegrations.length})
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                    {categoryIntegrations.slice(0, 6).map((integration, idx) => (
                      <IntegrationCard key={integration.slug} integration={integration} idx={idx} />
                    ))}
                  </div>
                </section>
              );
            })}
          </>
        )}

        {/* Filtered/Search View */}
        {isFiltered && (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {searchQuery ? `Results for "${searchQuery}"` : activeCategory}
                </h2>
                <p className="text-sm text-gray-500">{filteredIntegrations.length} integrations found</p>
              </div>
              <button
                onClick={() => { setActiveCategory(null); setSearchQuery(''); }}
                className="text-sm text-[#6B8EFF] hover:text-white transition"
              >
                ← Back to all categories
              </button>
            </div>
            
            <motion.div 
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
            >
              {filteredIntegrations.map((integration, idx) => (
                <IntegrationCard key={integration.slug} integration={integration} idx={idx} />
              ))}
            </motion.div>

            {filteredIntegrations.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400 mb-4">No integrations found matching "{searchQuery}"</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory(null); }}
                  className="text-[#214CE5] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#214CE5] to-purple-600" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          
          <div className="relative p-8 sm:p-12 md:p-16 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">Don't see your tool?</h3>
            <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We support 5000+ additional integrations via Zapier and custom webhooks. Plus, our REST API lets you build anything.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 text-sm sm:text-base">
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
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#214CE5] font-bold rounded-xl hover:bg-gray-100 transition shadow-lg">
                Talk to Sales
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="https://marketplace.gohighlevel.com/docs/" target="_blank" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition">
                View API Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntegrationCard({ integration, idx, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: idx * 0.02 }}
    >
      <Link
        href={`/integrations/${integration.slug}`}
        className={`group relative flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#111111] border border-white/5 hover:border-white/20 transition-all hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1 ${featured ? 'ring-1 ring-[#214CE5]/20' : ''}`}
      >
        {/* Brand Icon */}
        <div 
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
          style={{ backgroundColor: `${integration.brandColor}20` }}
        >
          <IntegrationBrandIcon slug={integration.slug} size={28} />
        </div>
        
        {/* Name */}
        <p className="font-semibold text-white text-sm text-center group-hover:text-[#6B8EFF] transition line-clamp-1">
          {integration.name}
        </p>
        
        {/* Hover Arrow */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition">
          <ArrowRight className="w-3 h-3 text-gray-500" />
        </div>
      </Link>
    </motion.div>
  );
}
