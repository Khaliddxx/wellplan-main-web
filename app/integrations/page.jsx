'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { integrations } from '@/app/lib/integrations';
import { ArrowRight, Zap, Check, Search } from 'lucide-react';
import { useState } from 'react';
import IntegrationBrandIcon from '@/app/components/IntegrationBrandIcons';
import { useTranslations } from '@/app/lib/translations';

const categoryColors = {
  All: { bg: '#214CE5', text: '#fff' },
  Messaging: { bg: '#25D366', text: '#fff' },
  Social: { bg: '#E4405F', text: '#fff' },
  CRM: { bg: '#00A1E0', text: '#fff' },
  Email: { bg: '#EA4335', text: '#fff' },
  SMS: { bg: '#F22F46', text: '#fff' },
  Automation: { bg: '#FF4A00', text: '#fff' },
  'E-Commerce': { bg: '#96BF48', text: '#fff' },
  Payments: { bg: '#635BFF', text: '#fff' },
  Productivity: { bg: '#4285F4', text: '#fff' },
  Custom: { bg: '#6B7280', text: '#fff' },
};

export default function IntegrationsPage() {
  const t = useTranslations('integrationsPage');
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#214CE5]/20 border border-[#214CE5]/30 mb-6">
              <Zap className="w-4 h-4 text-[#214CE5]" />
              <span className="text-sm font-semibold text-[#6B8EFF]">{t('badge')}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              {t('title')} <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">{t('titleHighlight')}</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#111111] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#214CE5]/50 transition"
              />
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white">53</div>
                <div className="text-xs sm:text-sm text-gray-500">{t('nativeApps')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white">5000+</div>
                <div className="text-xs sm:text-sm text-gray-500">Via Zapier</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white">{t('apiWebhooks')}</div>
                <div className="text-xs sm:text-sm text-gray-500">REST API</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-[72px] sm:top-[80px] z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const colors = categoryColors[category];
              const count = category === 'All' 
                ? integrations.length 
                : integrations.filter(i => i.category === category).length;
              const displayName = category === 'All' ? t('categoryAll') : category;
              
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 sm:gap-2 ${
                    isActive 
                      ? 'shadow-lg scale-105' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                  style={isActive ? { 
                    backgroundColor: colors.bg, 
                    color: colors.text,
                    boxShadow: `0 4px 14px ${colors.bg}40`
                  } : {}}
                >
                  {!isActive && (
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: colors.bg }}
                    />
                  )}
                  {displayName}
                  <span className={`text-xs ${isActive ? 'opacity-80' : 'opacity-50'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Integration Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
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
                className="group relative flex flex-col items-center gap-3 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#111111] border border-white/5 hover:border-white/20 transition-all hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1"
              >
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${integration.brandColor}15` }}
                >
                  <IntegrationBrandIcon slug={integration.slug} size={28} />
                </div>
                
                <div className="text-center">
                  <p className="font-semibold text-white text-sm group-hover:text-[#6B8EFF] transition">
                    {integration.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
                    <span 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: categoryColors[integration.category]?.bg || '#6B7280' }}
                    />
                    {integration.category}
                  </p>
                </div>
                
                {integration.features && (
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#214CE5]/20 text-[#6B8EFF]">
                      {integration.features.length}+
                    </span>
                  </div>
                )}
                
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#214CE5] to-purple-600" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          
          <div className="relative p-8 sm:p-12 md:p-16 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">{t('cta.title')}</h3>
            <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Zapier</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Webhooks</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>REST API</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#214CE5] font-bold rounded-xl hover:bg-gray-100 transition shadow-lg">
                {t('cta.button')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
