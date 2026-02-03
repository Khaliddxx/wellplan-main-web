'use client';

export default function IconCarousel() {
  const integrations = [
    { name: 'Zapier', color: 'from-orange-400 to-orange-500' },
    { name: 'HubSpot', color: 'from-orange-500 to-orange-600' },
    { name: 'Salesforce', color: 'from-blue-600 to-blue-700' },
    { name: 'Slack', color: 'from-purple-400 to-purple-500' },
    { name: 'Gmail', color: 'from-red-500 to-red-600' },
    { name: 'WhatsApp', color: 'from-green-500 to-green-600' },
    { name: 'Facebook', color: 'from-blue-600 to-blue-700' },
    { name: 'Instagram', color: 'from-pink-500 to-orange-500' },
    { name: 'LinkedIn', color: 'from-blue-700 to-blue-800' },
    { name: 'Google Sheets', color: 'from-green-600 to-green-700' },
    { name: 'Stripe', color: 'from-blue-600 to-blue-700' },
    { name: 'Shopify', color: 'from-green-600 to-green-700' },
    { name: 'Twilio', color: 'from-red-600 to-red-700' },
    { name: 'SendGrid', color: 'from-blue-600 to-blue-700' },
    { name: 'Mailchimp', color: 'from-yellow-500 to-orange-500' },
    { name: 'Calendly', color: 'from-blue-500 to-blue-600' },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              200+ Integrations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect WellPlan to your entire tech stack. Automate workflows across all your tools.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-xl p-8">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

          {/* Carousel Content */}
          <div className="flex gap-8 animate-carousel">
            {/* First set */}
            {integrations.map((integration, idx) => (
              <div
                key={`first-${idx}`}
                className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 flex flex-col items-center justify-center gap-3 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer group"
              >
                {/* Colored badge with first letter */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${integration.color} flex items-center justify-center text-2xl font-black text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  {integration.name.charAt(0)}
                </div>
                <p className="text-sm font-semibold text-gray-300 text-center group-hover:text-blue-400 transition">
                  {integration.name}
                </p>
              </div>
            ))}
            
            {/* Second set (duplicate for seamless loop) */}
            {integrations.map((integration, idx) => (
              <div
                key={`second-${idx}`}
                className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 flex flex-col items-center justify-center gap-3 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer group"
              >
                {/* Colored badge with first letter */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${integration.color} flex items-center justify-center text-2xl font-black text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  {integration.name.charAt(0)}
                </div>
                <p className="text-sm font-semibold text-gray-300 text-center group-hover:text-blue-400 transition">
                  {integration.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Below */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition">
            View All Integrations →
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-carousel {
          animation: carousel 60s linear infinite;
        }

        .animate-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
