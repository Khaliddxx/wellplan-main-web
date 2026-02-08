'use client';

import Link from 'next/link';
import { Bot, Building2, Target, Briefcase, ArrowRight } from 'lucide-react';
import { useTranslations } from '../lib/translations';
import { usePathname } from 'next/navigation';

function useLocalePath() {
  const pathname = usePathname();
  const isLocaleRoute = pathname?.startsWith('/en') || pathname?.startsWith('/nl');
  const currentLocale = isLocaleRoute ? (pathname?.startsWith('/nl') ? 'nl' : 'en') : null;
  
  return (path) => {
    if (currentLocale && path.startsWith('/') && !path.startsWith('/http')) {
      return `/${currentLocale}${path}`;
    }
    return path;
  };
}

export default function DiscoverPlatform() {
  const t = useTranslations('discover');
  const localePath = useLocalePath();
  
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#214CE5]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#214CE5]/10 border border-[#214CE5]/30 text-[#214CE5] text-sm font-semibold mb-4">
            {t('badge') || 'Explore the Platform'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title') || 'Everything You Need to Grow'}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('subtitle') || 'From AI employees to industry solutions — discover what WellPlan can do for your business.'}
          </p>
        </div>
        
        {/* AI Employee Card + 3 Solution Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* AI Employee Suite - Large card */}
          <Link 
            href={localePath('/features/ai')}
            className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#214CE5]/20 via-purple-500/10 to-[#214CE5]/5 border border-[#214CE5]/30 hover:border-[#214CE5]/60 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#214CE5]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#214CE5] to-purple-500 flex items-center justify-center">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">NEW</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#214CE5] transition-colors">
                {t('aiSuiteTitle') || 'AI Employee Suite'}
              </h3>
              <p className="text-gray-400 mb-6">
                {t('aiSuiteDesc') || '6 AI-powered tools that work 24/7 — from conversation bots to voice agents, content writers, and more.'}
              </p>
              <div className="flex flex-wrap gap-2">
                {['Conversation Bot', 'Voice Agent', 'Content Writer', 'Reviews', 'Funnels', 'Workflows'].map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-[#214CE5] font-semibold group-hover:gap-3 transition-all">
                {t('explore') || 'Explore AI Suite'} <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
          
          {/* 3 Solution Cards - Stacked */}
          <div className="grid grid-cols-1 gap-4">
            <Link 
              href={localePath('/solutions/agencies')}
              className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/50 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                <Building2 className="w-7 h-7 text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{t('agencies') || 'For Agencies'}</h4>
                <p className="text-sm text-gray-500 mt-1">{t('agenciesDesc') || 'Scale client management'}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </Link>
            
            <Link 
              href={localePath('/solutions/coaches')}
              className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/50 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                <Target className="w-7 h-7 text-purple-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white group-hover:text-purple-400 transition-colors">{t('coaches') || 'For Coaches'}</h4>
                <p className="text-sm text-gray-500 mt-1">{t('coachesDesc') || 'Automate client booking'}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
            </Link>
            
            <Link 
              href={localePath('/solutions/sales-teams')}
              className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/50 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                <Briefcase className="w-7 h-7 text-emerald-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors">{t('salesTeams') || 'For Sales Teams'}</h4>
                <p className="text-sm text-gray-500 mt-1">{t('salesTeamsDesc') || 'Close deals faster'}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
