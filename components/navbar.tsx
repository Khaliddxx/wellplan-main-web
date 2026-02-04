'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { objectives } from '@/lib/data'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const navItems = [
    {
      label: 'Features',
      items: objectives.map(obj => ({
        title: obj.title,
        description: obj.description.substring(0, 50) + '...',
        href: `/objectives/${obj.slug}`,
        icon: obj.icon
      }))
    },
    {
      label: 'Solutions',
      items: [
        { title: 'For Individuals', description: 'Personal growth and optimization', href: '/solutions/individuals', icon: '👤' },
        { title: 'For Teams', description: 'Collaborative planning tools', href: '/solutions/teams', icon: '👥' },
        { title: 'Enterprise', description: 'Scale across organizations', href: '/solutions/enterprise', icon: '🏢' }
      ]
    },
    {
      label: 'Resources',
      items: [
        { title: 'Blog', description: 'Tips and insights', href: '/blog', icon: '📝' },
        { title: 'Case Studies', description: 'Success stories', href: '/case-studies', icon: '📊' },
        { title: 'Help Center', description: 'Get support', href: '/help', icon: '❓' }
      ]
    },
    {
      label: 'About',
      items: [
        { title: 'Our Story', description: 'Mission and vision', href: '/about', icon: '🎯' },
        { title: 'Team', description: 'Meet the people', href: '/team', icon: '👨‍💼' },
        { title: 'Careers', description: 'Join us', href: '/careers', icon: '💼' }
      ]
    }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl bg-[#0a0a0a]/95 border-b border-white/5 shadow-2xl'
          : 'backdrop-blur-md bg-[#0a0a0a]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center shadow-lg shadow-primary/20"
            >
              <span className="text-xl">🧠</span>
            </motion.div>
            <span className="text-xl font-bold text-white">WellPlan</span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all text-sm font-medium flex items-center gap-1">
                  {item.label}
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 rounded-xl backdrop-blur-xl bg-[#1a1a1a]/95 border border-white/10 shadow-2xl overflow-hidden"
                    >
                      <div className="p-2">
                        {item.items.map((subItem, idx) => (
                          <Link
                            key={idx}
                            href={subItem.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all group"
                          >
                            <div className="text-2xl mt-1">{subItem.icon}</div>
                            <div className="flex-1">
                              <div className="text-white font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                                {subItem.title}
                              </div>
                              <div className="text-white/50 text-xs leading-relaxed">
                                {subItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              href="/pricing"
              className="px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent-purple text-white font-medium text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
            >
              ✨ Try WellPlan - It's Free
            </motion.button>
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
