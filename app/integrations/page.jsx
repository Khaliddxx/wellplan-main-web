import Link from 'next/link';
import { integrations } from '@/app/lib/integrations';
import { integrationIconMap, DefaultIntegrationIcon } from '@/app/components/IntegrationIcons';
import { ArrowRight, Zap, Check } from 'lucide-react';

const BRAND_BLUE = '#214CE5';

// Category colors for variety while staying on-brand
const categoryColors = {
  'Messaging': { bg: 'bg-[#214CE5]/20', border: 'border-[#214CE5]/30', hover: 'hover:border-[#214CE5]/60', text: 'text-[#6B8EFF]' },
  'Social': { bg: 'bg-pink-500/20', border: 'border-pink-500/30', hover: 'hover:border-pink-500/60', text: 'text-pink-400' },
  'CRM': { bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', hover: 'hover:border-emerald-500/60', text: 'text-emerald-400' },
  'Email': { bg: 'bg-orange-500/20', border: 'border-orange-500/30', hover: 'hover:border-orange-500/60', text: 'text-orange-400' },
  'SMS': { bg: 'bg-purple-500/20', border: 'border-purple-500/30', hover: 'hover:border-purple-500/60', text: 'text-purple-400' },
  'Automation': { bg: 'bg-yellow-500/20', border: 'border-yellow-500/30', hover: 'hover:border-yellow-500/60', text: 'text-yellow-400' },
  'E-Commerce': { bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', hover: 'hover:border-cyan-500/60', text: 'text-cyan-400' },
  'Payments': { bg: 'bg-green-500/20', border: 'border-green-500/30', hover: 'hover:border-green-500/60', text: 'text-green-400' },
  'Productivity': { bg: 'bg-violet-500/20', border: 'border-violet-500/30', hover: 'hover:border-violet-500/60', text: 'text-violet-400' },
  'Custom': { bg: 'bg-slate-500/20', border: 'border-slate-500/30', hover: 'hover:border-slate-500/60', text: 'text-slate-400' },
};

export const metadata = {
  title: 'Integrations | WellPlan - Connect Your Entire Tech Stack',
  description: 'Connect WellPlan to 50+ tools including WhatsApp, Instagram, Facebook, Stripe, Shopify, and more. Automate your workflows across all your favorite apps.',
};

export default function IntegrationsPage() {
  const categories = ['Messaging', 'Social', 'CRM', 'Email', 'SMS', 'Automation', 'E-Commerce', 'Payments', 'Productivity', 'Custom'];
  
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/20 via-transparent to-purple-500/10" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#214CE5]/30 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#214CE5]/20 border border-[#214CE5]/30 mb-6">
              <Zap className="w-4 h-4 text-[#214CE5]" />
              <span className="text-sm font-semibold text-[#6B8EFF]">50+ Native Integrations</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Connect <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">Everything</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Integrate WellPlan with your entire tech stack. Automate workflows, sync data, and manage all your channels from one unified platform.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-black text-white">50+</div>
                <div className="text-sm text-gray-500">Native Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white">5000+</div>
                <div className="text-sm text-gray-500">Via Zapier</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white">2-way</div>
                <div className="text-sm text-gray-500">Data Sync</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://app.wellplan.io" className="inline-flex items-center gap-2 px-6 py-3 bg-[#214CE5] hover:bg-[#1a3db8] text-white font-semibold rounded-xl transition shadow-lg shadow-[#214CE5]/30">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#messaging" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition">
                Browse Integrations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Categories */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {categories.map((category) => {
          const categoryIntegrations = integrations.filter(i => i.category === category);
          if (categoryIntegrations.length === 0) return null;
          
          const colors = categoryColors[category] || categoryColors['Custom'];
          
          return (
            <div key={category} id={category.toLowerCase().replace(' ', '-')} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-3 h-3 rounded-full ${colors.bg.replace('/20', '')}`} />
                <h2 className="text-2xl font-bold text-white">{category}</h2>
                <span className="text-sm text-gray-500">({categoryIntegrations.length})</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {categoryIntegrations.map((integration) => {
                  const IconComponent = integrationIconMap[integration.slug] || DefaultIntegrationIcon;
                  
                  return (
                    <Link
                      key={integration.slug}
                      href={`/integrations/${integration.slug}`}
                      className={`group relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-[#111111] border ${colors.border} ${colors.hover} transition-all hover:shadow-lg hover:shadow-black/50 hover:-translate-y-1`}
                    >
                      {/* Icon Container */}
                      <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent size={28} className="text-white" />
                      </div>
                      
                      {/* Name */}
                      <div className="text-center">
                        <p className="font-semibold text-white group-hover:text-[#6B8EFF] transition">
                          {integration.name}
                        </p>
                        {integration.features && (
                          <p className="text-xs text-gray-500 mt-1">
                            {integration.features.length} features
                          </p>
                        )}
                      </div>
                      
                      {/* Hover Arrow */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                        <ArrowRight className="w-4 h-4 text-gray-500" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* CTA Section */}
        <div className="mt-20 relative overflow-hidden rounded-3xl">
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
