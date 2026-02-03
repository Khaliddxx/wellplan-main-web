import { siteData } from '../../lib/data';

export async function generateStaticParams() {
  return siteData.objectives.map((obj) => ({
    slug: obj.slug,
  }));
}

export default function ObjectivePage({ params }) {
  const objective = siteData.objectives.find(o => o.slug === params.slug);

  if (!objective) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black">Not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute top-20 right-20 w-96 h-96 bg-gradient-to-br ${objective.color} rounded-full mix-blend-multiply filter blur-3xl`}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-7xl mb-6">{objective.icon}</div>
          <h1 className="text-6xl font-black mb-4">{objective.title}</h1>
          <p className="text-2xl text-gray-300">{objective.description}</p>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            <span className={`bg-gradient-to-r ${objective.color} bg-clip-text text-transparent`}>
              {objective.tools.length}+ Integrated Tools
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {objective.tools.map((tool, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all group cursor-pointer">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition">{tool.name}</h3>
                <p className="text-gray-400">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">Results Our Users See</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {objective.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${objective.color} flex items-center justify-center text-xl flex-shrink-0`}>
                  📈
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{benefit}</h3>
                  <p className="text-gray-400 mt-2">Measurable impact on your business</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">Powerful Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objective.features.map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-lg mb-3">
                  ✓
                </div>
                <h3 className="text-lg font-bold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 border border-slate-700">
          <h2 className="text-4xl font-black mb-4">Ready to get started?</h2>
          <p className="text-gray-300 mb-8">
            Join thousands of businesses using WellPlan for {objective.title.toLowerCase()}.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 cursor-pointer">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}
