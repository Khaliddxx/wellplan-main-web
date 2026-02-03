import { motion } from 'framer-motion';
import { siteData } from '../../lib/data';

export async function generateStaticParams() {
  return siteData.objectives.map((obj) => ({
    slug: obj.slug,
  }));
}

export default function ObjectivePage({ params }) {
  const objective = siteData.objectives.find(o => o.slug === params.slug);

  if (!objective) {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center"><h1>Not found</h1></div>;
  }

  return (
    <div className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute top-20 right-20 w-96 h-96 bg-gradient-to-br ${objective.color} rounded-full mix-blend-multiply filter blur-3xl`}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl mb-6"
          >
            {objective.icon}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-black mb-4"
          >
            {objective.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-gray-300"
          >
            {objective.description}
          </motion.p>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-black mb-12"
          >
            <span className={`bg-gradient-to-r ${objective.color} bg-clip-text text-transparent`}>
              {objective.tools.length}+ Integrated Tools
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {objective.tools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 backdrop-blur-xl cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-gray-400">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {objective.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="flex items-start gap-4"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${objective.color} flex items-center justify-center text-xl flex-shrink-0`}>
                  📈
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{benefit}</h3>
                  <p className="text-gray-400 mt-2">Measurable business impact</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {objective.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 backdrop-blur-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-lg mb-3">
                  ✓
                </div>
                <h3 className="text-lg font-bold">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-12 border border-slate-700 backdrop-blur-xl"
        >
          <h2 className="text-4xl font-black mb-4">Ready to get started?</h2>
          <p className="text-gray-300 mb-8">
            Join thousands of businesses using WellPlan for {objective.title.toLowerCase()}.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold cursor-pointer"
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
