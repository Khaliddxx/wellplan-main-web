'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function MegaNav() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5" style={{"--navbar-height": "4rem"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between" style={{height: "var(--navbar-height)"}}>
          {/* Mobile Menu Button */}
          <button
            className="flex lg:hidden items-center justify-center w-6 h-6 mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <span className="flex flex-col items-center justify-center w-full h-full">
              <span className={`block h-px w-6 bg-white transition-transform duration-150 ${mobileMenuOpen ? 'translate-y-px rotate-45' : '-translate-y-1'}`}></span>
              <span className={`block h-px w-6 bg-white transition-transform duration-150 ${mobileMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1'}`}></span>
            </span>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-xl">💬</span>
            </div>
            <span className="hidden sm:block text-xl font-bold text-white">WellPlan</span>
          </Link>

          {/* Desktop Nav Items */}
          <ul className="hidden lg:flex items-center gap-1">
            <NavItem
              label="Product"
              active={activeDropdown === 'product'}
              onMouseEnter={() => setActiveDropdown('product')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <ProductDropdown />
            </NavItem>

            <NavItem
              label="Solutions"
              active={activeDropdown === 'solutions'}
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <SolutionsDropdown />
            </NavItem>

            <NavItem
              label="Resources"
              active={activeDropdown === 'resources'}
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <ResourcesDropdown />
            </NavItem>

            <li className="flex items-center h-full">
              <Link
                href="/pricing"
                className="flex items-center h-full px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Pricing
              </Link>
            </li>

            <li className="flex items-center h-full">
              <Link
                href="/contact"
                className="flex items-center h-full px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Side CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <span>✨</span>
              <span className="hidden lg:inline">Try Free</span>
            </button>
            <Link
              href="/login"
              className="px-4 py-2 border border-white/20 text-white text-sm font-bold rounded-lg hover:border-blue-500 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-2">
              <Link href="/pricing" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg">
                Pricing
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg">
                Contact
              </Link>
              <Link href="/integrations" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg">
                Integrations
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavItem({ label, active, children, onMouseEnter, onMouseLeave }) {
  return (
    <li
      className="flex items-center h-full relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="flex items-center gap-1 h-full px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
        {label}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function ProductDropdown() {
  return (
    <div className="w-[1000px] bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
      <div className="grid grid-cols-3 gap-6">
        {/* Left: Feature Cards */}
        <div className="col-span-2 space-y-4">
          {[
            {
              icon: '💬',
              title: 'Shared Inbox',
              desc: 'Manage all conversations in one place',
              href: '/features/shared-inbox'
            },
            {
              icon: '🤖',
              title: 'AI Bot',
              desc: 'Automate responses with AI',
              href: '/features/ai-bot'
            },
            {
              icon: '📢',
              title: 'Broadcasts',
              desc: 'Send bulk messages instantly',
              href: '/features/broadcasts'
            },
          ].map((feature, idx) => (
            <Link
              key={idx}
              href={feature.href}
              className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition group"
            >
              <div className="text-4xl">{feature.icon}</div>
              <div>
                <div className="text-white font-bold text-sm mb-1 group-hover:text-blue-400 transition">
                  {feature.title}
                </div>
                <div className="text-white/60 text-sm">{feature.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right: Integrations */}
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-wide text-white/50 mb-3">Integrations</div>
          <Link href="/integrations" className="block p-3 rounded-lg hover:bg-white/5 transition">
            <div className="text-sm font-medium text-white mb-1">View all integrations</div>
            <div className="text-xs text-white/60">50+ connections available</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function SolutionsDropdown() {
  return (
    <div className="w-[400px] bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
      <div className="space-y-2">
        {[
          { title: 'For Small Business', desc: 'Grow with automation', href: '/solutions/small-business' },
          { title: 'For Enterprise', desc: 'Scale your operations', href: '/solutions/enterprise' },
          { title: 'For Agencies', desc: 'Manage client communications', href: '/solutions/agencies' }
        ].map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="block p-3 rounded-lg hover:bg-white/5 transition"
          >
            <div className="text-sm font-medium text-white">{item.title}</div>
            <div className="text-xs text-white/60 mt-1">{item.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ResourcesDropdown() {
  return (
    <div className="w-[300px] bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
      <div className="space-y-2">
        {[
          { title: 'Blog', href: '/blog' },
          { title: 'Documentation', href: '/docs' },
          { title: 'Help Center', href: '/help' },
          { title: 'API Reference', href: '/api' }
        ].map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="block p-3 rounded-lg hover:bg-white/5 transition text-sm font-medium text-white"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
