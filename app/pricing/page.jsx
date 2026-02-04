export const metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for WellPlan. Start free, upgrade as you grow. Plans from $97/month with all features included.',
  openGraph: {
    title: 'Pricing | WellPlan',
    description: 'Simple, transparent pricing. Start free, upgrade as you grow.',
  },
};

export default function PricingPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Simple, <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start free, upgrade as you grow. No hidden fees, no surprises.
          </p>
        </div>
        
        {/* Pricing cards will go here */}
        <div className="text-center py-20">
          <p className="text-gray-500">Pricing plans coming soon</p>
        </div>
      </div>
    </div>
  );
}
