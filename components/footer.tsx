'use client'

import { motion } from 'framer-motion'
import { objectives } from '@/lib/data'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Resources: ['Help Center', 'Community', 'API Docs', 'Status'],
  Legal: ['Privacy', 'Terms', 'Compliance', 'Cookies'],
}

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-navy border-t border-white/10 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent mb-4">
              WellPlan
            </h3>
            <p className="text-white/60 text-sm">
              Comprehensive life planning for health, career, and relationships.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map((category, idx) => (
            <motion.div
              key={category[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4 text-sm">{category[0]}</h4>
              <ul className="space-y-2">
                {category[1].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors text-sm"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2024 WellPlan. All rights reserved.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-white/40 hover:text-white transition-colors text-sm"
                  whileHover={{ scale: 1.2 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Objectives Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {objectives.map((obj) => (
            <motion.a
              key={obj.id}
              href={`/objectives/${obj.slug}`}
              className="p-4 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent-purple group-hover:bg-clip-text transition-all">
                {obj.title}
              </div>
              <p className="text-white/50 text-sm mt-1">{obj.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  )
}
