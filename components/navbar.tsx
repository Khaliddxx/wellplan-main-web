'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { objectives } from '@/lib/data'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg bg-navy/80 border-b border-white/10'
          : 'backdrop-blur-sm bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent"
        >
          <Link href="/">WellPlan</Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {objectives.map((obj) => (
            <motion.div
              key={obj.id}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/objectives/${obj.slug}`}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {obj.shortTitle}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-accent-purple text-white font-medium text-sm hover:shadow-glow-lg transition-shadow"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  )
}
