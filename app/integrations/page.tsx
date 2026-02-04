'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GlassmorphicCard, staggerContainer } from '@/components/animations'
import { integrations, categories } from '@/src/data/integrationsData'

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredIntegrations = selectedCategory === 'All'
    ? integrations
    : integrations.filter(i => i.category === selectedCategory)

  return (
    <main className="bg-navy text-white overflow-hidden min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent-purple/10 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Connect Everything
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Integrate WellPlan with 50+ platforms to automate your wellness business and reach clients everywhere.
            </p>
            
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent-purple text-white font-semibold hover:shadow-glow-lg transition-all"
              >
                View All Integrations
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg border border-white/20 text-white font-semibold backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all"
              >
                Request Integration
              </motion.button>
            </div>
          </motion.div>

          {/* Featured Integration - WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <Link href="/integrations/whatsapp">
              <GlassmorphicCard hoverable className="p-8 bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="text-7xl">💬</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-3xl font-bold text-white">WhatsApp Business</h2>
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                        FEATURED
                      </span>
                    </div>
                    <p className="text-white/70 mb-4">
                      Connect your WhatsApp Business account for seamless client communication. Send reminders, automate responses, and manage conversations at scale.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">Two-way messaging</span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">Auto-replies</span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">Group management</span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">Analytics</span>
                    </div>
                  </div>
                  <div className="text-primary font-semibold">
                    Learn More →
                  </div>
                </div>
              </GlassmorphicCard>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-primary to-accent-purple text-white shadow-lg'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="relative py-12 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filteredIntegrations.map((integration) => (
              <motion.div key={integration.slug}>
                <Link href={`/integrations/${integration.slug}`}>
                  <GlassmorphicCard hoverable className="h-full relative">
                    {integration.comingSoon && (
                      <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-accent-orange/20 text-accent-orange text-xs font-semibold">
                        Soon
                      </div>
                    )}
                    <div className="text-5xl mb-3">{integration.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {integration.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-3 line-clamp-2">
                      {integration.description}
                    </p>
                    <div className="text-xs text-white/40">{integration.category}</div>
                  </GlassmorphicCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">No integrations found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
