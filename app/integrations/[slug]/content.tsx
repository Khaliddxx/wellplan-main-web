'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GlassmorphicCard, staggerContainer } from '@/components/animations'
import { Integration, integrations } from '@/src/data/integrationsData'

interface IntegrationDetailContentProps {
  integration: Integration
}

export const IntegrationDetailContent = ({ integration }: IntegrationDetailContentProps) => {
  const relatedIntegrations = integrations
    .filter(i => i.category === integration.category && i.slug !== integration.slug)
    .slice(0, 3)

  return (
    <main className="bg-navy text-white overflow-hidden min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent-purple/10 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link href="/integrations" className="hover:text-white transition-colors">
                Integrations
              </Link>
              <span>/</span>
              <span className="text-white">{integration.name}</span>
            </div>

            <div className="flex items-start gap-6 mb-8">
              <div className="text-7xl">{integration.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-5xl font-bold text-white">{integration.name}</h1>
                  {integration.comingSoon && (
                    <span className="px-3 py-1 rounded-full bg-accent-orange/20 text-accent-orange text-sm font-semibold">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-xl text-white/70 mb-4">{integration.description}</p>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                  {integration.category}
                </span>
              </div>
            </div>

            {!integration.comingSoon && (
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent-purple text-white font-semibold hover:shadow-glow-lg transition-all"
                >
                  Connect {integration.name}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg border border-white/20 text-white font-semibold backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all"
                >
                  View Documentation
                </motion.button>
              </div>
            )}

            {integration.comingSoon && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg border border-accent-orange/30 text-accent-orange font-semibold backdrop-blur-md bg-accent-orange/5 hover:bg-accent-orange/10 transition-all"
              >
                Notify Me When Available
              </motion.button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      {integration.features && integration.features.length > 0 && (
        <section className="relative py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Features
                </span>
              </h2>
              <p className="text-white/60 text-lg">
                Everything you need to get the most out of {integration.name}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {integration.features.map((feature, idx) => (
                <GlassmorphicCard key={idx} delay={idx * 0.05}>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent-purple mt-2"></div>
                    <span className="text-white/80 flex-1">{feature}</span>
                  </div>
                </GlassmorphicCard>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      {integration.useCases && integration.useCases.length > 0 && (
        <section className="relative py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Use Cases
                </span>
              </h2>
              <p className="text-white/60 text-lg">
                Real-world applications for wellness businesses
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              {integration.useCases.map((useCase, idx) => (
                <GlassmorphicCard key={idx} delay={idx * 0.05} hoverable>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center text-white font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-white/80 text-lg">{useCase}</p>
                  </div>
                </GlassmorphicCard>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {integration.pricing && (
        <section className="relative py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integration.pricing.free && (
                <GlassmorphicCard hoverable>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">Free Plan</div>
                    <p className="text-white/60 mb-6">{integration.pricing.free}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 rounded-lg border border-white/20 text-white font-semibold backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all"
                    >
                      Get Started Free
                    </motion.button>
                  </div>
                </GlassmorphicCard>
              )}

              {integration.pricing.paid && (
                <GlassmorphicCard hoverable className="border-primary/30">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">Pro Plan</div>
                    <p className="text-white/60 mb-6">{integration.pricing.paid}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent-purple text-white font-semibold hover:shadow-glow-lg transition-all"
                    >
                      Upgrade to Pro
                    </motion.button>
                  </div>
                </GlassmorphicCard>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related Integrations */}
      {relatedIntegrations.length > 0 && (
        <section className="relative py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Related Integrations
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedIntegrations.map((related) => (
                <Link key={related.slug} href={`/integrations/${related.slug}`}>
                  <GlassmorphicCard hoverable>
                    <div className="text-5xl mb-3">{related.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {related.name}
                    </h3>
                    <p className="text-white/60 text-sm line-clamp-2">
                      {related.description}
                    </p>
                  </GlassmorphicCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent-purple/20 to-accent-orange/20 blur-xl" />

            <div className="relative z-10 backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Connect {integration.name}?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Get started in minutes and unlock powerful automation for your wellness business.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 rounded-lg bg-gradient-to-r from-primary to-accent-purple text-white font-bold text-lg hover:shadow-glow-lg transition-all"
              >
                {integration.comingSoon ? 'Join Waitlist' : 'Start Free Trial'}
              </motion.button>

              <p className="text-white/50 text-sm mt-6">No credit card required • Setup in under 5 minutes</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
