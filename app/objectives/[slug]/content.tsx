'use client'

import { motion } from 'framer-motion'
import { Objective } from '@/lib/data'
import { 
  GlassmorphicCard, 
  FloatingElement, 
  staggerContainer, 
  staggerItem 
} from '@/components/animations'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

interface DetailPageContentProps {
  objective: Objective
}

export const DetailPageContent = ({ objective }: DetailPageContentProps) => {
  return (
    <main className="bg-navy text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${objective.gradient} opacity-20`}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement delay={0} duration={8} offset={30}>
            <div className={`absolute top-20 right-20 w-72 h-72 bg-gradient-to-br ${objective.gradient} rounded-full blur-3xl`} />
          </FloatingElement>
          <FloatingElement delay={0.5} duration={10} offset={40}>
            <div className={`absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-br ${objective.gradient} rounded-full blur-3xl opacity-50`} />
          </FloatingElement>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-3xl"
          >
            <motion.div variants={staggerItem} className="mb-6">
              <span className="text-5xl">{objective.icon}</span>
            </motion.div>

            <motion.h1 variants={staggerItem} className="text-6xl md:text-7xl font-bold mb-6">
              {objective.title}
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-xl text-white/70 mb-8"
            >
              {objective.description}
            </motion.p>

            <motion.button
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent-purple text-white font-semibold hover:shadow-glow-lg transition-all"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Key Benefits
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {objective.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                <GlassmorphicCard hoverable>
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60">{benefit.desc}</p>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Features & Tools
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {objective.features.map((feature, idx) => (
              <GlassmorphicCard key={idx} delay={idx * 0.05} hoverable>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent-purple"></div>
                  <span className="text-white/80">{feature}</span>
                </div>
              </GlassmorphicCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {objective.caseStudies.map((study, idx) => (
              <GlassmorphicCard key={idx} delay={idx * 0.1} hoverable>
                <div className="mb-4">
                  <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-primary to-accent-orange bg-clip-text text-transparent mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.2 + 0.5, duration: 1 }}
                    viewport={{ once: true }}
                  >
                    {study.metric}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-white/50 text-sm">Before</span>
                    <p className="text-white/80">{study.before}</p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                  <div>
                    <span className="text-white/50 text-sm">After</span>
                    <p className="text-white/80">{study.after}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-primary text-sm font-semibold">{study.timeframe}</span>
                </div>
              </GlassmorphicCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${objective.gradient} blur-xl opacity-30`} />

            <div className="relative z-10 backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Start your {objective.shortTitle.toLowerCase()} optimization journey today with WellPlan's powerful tools and AI-driven insights.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 rounded-lg bg-gradient-to-r from-primary to-accent-purple text-white font-bold text-lg hover:shadow-glow-lg transition-all"
              >
                Start Free Trial
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
