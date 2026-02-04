import Link from 'next/link';
import { integrations } from '@/app/lib/integrations';

export default function IntegrationsPage() {
  const categories = ['Messaging', 'Social', 'CRM', 'Email', 'SMS', 'Automation', 'E-Commerce', 'Payments', 'Productivity', 'Custom'];
  
  return (
    <div className="bg-slate-950 text-white min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              50+ Integrations
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect WellPlan to your entire tech stack. Automate workflows across all your tools.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => {
            const categoryIntegrations = integrations.filter(i => i.category === category);
            if (categoryIntegrations.length === 0) return null;
            
            return (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-6">{category}</h2>
                <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {categoryIntegrations.map((integration) => (
                    <Link
                      key={integration.slug}
                      href={`/integrations/${integration.slug}`}
                      className="flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition cursor-pointer group"
                    >
                      <div className={`w-12 h-12 rounded-lg ${integration.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                        {integration.icon}
                      </div>
                      <p className="font-semibold text-sm text-center group-hover:text-blue-400 transition">
                        {integration.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-12 border border-slate-700/50">
          <h3 className="text-3xl font-black mb-4">Don't see your tool?</h3>
          <p className="text-gray-300 mb-8">
            We support 200+ integrations via Zapier and custom webhooks. Contact us for specifics.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
