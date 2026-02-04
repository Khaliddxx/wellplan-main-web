import { integrations } from '@/app/lib/integrations';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function IntegrationDetailPage({ params }) {
  const integration = integrations.find(i => i.slug === params.slug);

  if (!integration) {
    notFound();
  }

  const relatedIntegrations = integrations
    .filter(i => i.category === integration.category && i.slug !== integration.slug)
    .slice(0, 3);

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-400">
          <Link href="/integrations" className="hover:text-white transition">
            Integrations
          </Link>
          {' '}/{' '}
          <span className="text-white">{integration.name}</span>
        </div>

        {/* Header */}
        <div className="flex items-start gap-6 mb-12">
          <div className={`w-20 h-20 rounded-2xl ${integration.color} flex items-center justify-center text-4xl shadow-xl`}>
            {integration.icon}
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-black mb-4">{integration.name}</h1>
            <p className="text-xl text-gray-300 mb-6">{integration.description}</p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition">
                Connect {integration.name}
              </button>
              <button className="px-8 py-3 border border-slate-700 rounded-lg font-bold hover:border-blue-500 transition">
                View Documentation
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        {integration.features && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {integration.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl"
                >
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Use Cases</h2>
          <div className="space-y-4">
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Sales & Lead Generation</h3>
              <p className="text-gray-300">
                Capture leads from {integration.name} and automatically sync them to your CRM. 
                Respond instantly with AI-powered chatbots.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Customer Support</h3>
              <p className="text-gray-300">
                Provide 24/7 support through {integration.name}. Route conversations to the right team 
                members and track response times.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Marketing Campaigns</h3>
              <p className="text-gray-300">
                Send targeted broadcasts, automate follow-ups, and measure campaign performance 
                directly from {integration.name}.
              </p>
            </div>
          </div>
        </div>

        {/* Related Integrations */}
        {relatedIntegrations.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Related Integrations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedIntegrations.map((related) => (
                <Link
                  key={related.slug}
                  href={`/integrations/${related.slug}`}
                  className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-blue-500/50 hover:bg-slate-800 transition group"
                >
                  <div className={`w-12 h-12 rounded-lg ${related.color} flex items-center justify-center text-2xl mb-4`}>
                    {related.icon}
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-blue-400 transition">
                    {related.name}
                  </h3>
                  <p className="text-sm text-gray-400">{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-12 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 text-center">
          <h3 className="text-3xl font-black mb-4">Ready to connect {integration.name}?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started in minutes. No credit card required.
          </p>
          <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return integrations.map((integration) => ({
    slug: integration.slug,
  }));
}
