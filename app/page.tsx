'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { objectives, features, stats, testimonials, partners, complianceFeatures } from '@/lib/data'
import { 
  GlassmorphicCard, 
  FloatingElement, 
  TextReveal, 
  staggerContainer, 
  staggerItem
} from '@/components/animations'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      setMousePosition({
        x: (clientX / innerWidth) * 100,
        y: (clientY / innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-20">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(33, 76, 229, 0.15) 0%, rgba(124, 58, 237, 0.08) 35%, rgba(15, 23, 42, 1) 100%)`,
          }}
          transition={{ type: 'tween', duration: 0.1 }}
          className="absolute inset-0"
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0} duration={8} offset={30}>
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={0.5} duration={10} offset={40}>
          <div className="absolute bottom-40 left-10 w-96 h-96 bg-accent-purple/15 rounded-full blur-3xl" />
        </FloatingElement>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="mb-8">
            <div className="inline-block px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20">
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
                🚀 The Future of Life Planning
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1 variants={staggerItem} className="text-6xl md:text-7xl font-bold mb-6">
            <TextReveal text="Transform Your Life Across All Dimensions" delay={0.3} />
            <div className="mt-4">
              <span className="bg-gradient-to-r from-primary via-accent-purple to-accent-orange bg-clip-text text-transparent">
                Health • Career • Relationships
              </span>
            </div>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12"
          >
            WellPlan is your AI-powered companion for comprehensive life optimization. Balance health, career, and relationships with precision and ease.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent-purple text-white font-semibold hover:shadow-glow-lg transition-all"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg border border-white/20 text-white font-semibold backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const StatsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => (
            <GlassmorphicCard key={idx} delay={idx * 0.1} className="text-center">
              <motion.div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.5, duration: 1 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </GlassmorphicCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const ObjectivesSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Three Pillars of Success
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A comprehensive approach to life planning that addresses what matters most
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {objectives.map((obj) => (
            <motion.a
              key={obj.id}
              href={`/objectives/${obj.slug}`}
              variants={staggerItem}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <GlassmorphicCard hoverable className="h-full">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${obj.gradient}`} />

                <div className="relative z-20">
                  <div className="text-5xl mb-4">{obj.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{obj.title}</h3>
                  <p className="text-white/60 mb-6">{obj.description}</p>

                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                    Explore
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </GlassmorphicCard>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const FeaturesSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Powerful Features
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
          {features.map((feature, idx) => (
            <GlassmorphicCard key={idx} delay={idx * 0.05}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </GlassmorphicCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Trusted by Leaders
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, idx) => (
            <GlassmorphicCard key={idx} delay={idx * 0.05}>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-xs text-white/50">{testimonial.title}</div>
                </div>
              </div>
              <p className="text-white/70 italic mb-4">"{testimonial.quote}"</p>
              <div className="text-primary text-sm font-semibold">{testimonial.metric}</div>
            </GlassmorphicCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const PartnersSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Seamless Integrations
            </span>
          </h2>
          <p className="text-white/60">Works with your favorite tools and platforms</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {partners.map((partner, idx) => (
            <GlassmorphicCard key={idx} delay={idx * 0.03} hoverable className="flex items-center justify-center min-h-[100px]">
              <div className="text-center">
                <div className="text-4xl mb-2">{partner.logo}</div>
                <div className="text-xs text-white/60">{partner.name}</div>
              </div>
            </GlassmorphicCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const ComplianceSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-2">Enterprise Grade Security</h3>
          <p className="text-white/60">Your data is protected with industry-leading standards</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {complianceFeatures.map((feature, idx) => (
            <GlassmorphicCard key={idx} delay={idx * 0.1}>
              <div className="text-3xl mb-2">{feature.badge}</div>
              <div className="text-sm font-semibold text-white">{feature.label}</div>
            </GlassmorphicCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const CTASection = () => {
  return (
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent-purple/20 to-accent-orange/20 blur-xl" />

          <div className="relative z-10 backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Life?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of users optimizing their health, career, and relationships with WellPlan.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-lg bg-gradient-to-r from-primary to-accent-purple text-white font-bold text-lg hover:shadow-glow-lg transition-all"
            >
              Start Free Trial
            </motion.button>

            <p className="text-white/50 text-sm mt-6">No credit card required • 30-day free trial</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="bg-navy text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ObjectivesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PartnersSection />
      <ComplianceSection />
      <CTASection />
      <Footer />
    </main>
  )
}
