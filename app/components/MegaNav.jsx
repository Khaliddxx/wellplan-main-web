'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function MegaNav() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-black text-white">
            WellPlan
          </Link>

          {/* Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
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

            <Link href="/pricing" className="text-sm font-semibold text-gray-300 hover:text-white transition">
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
              Try Free
            </button>
            <button className="px-6 py-2 border border-slate-700 text-white font-bold rounded-lg hover:border-blue-500 transition">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ label, active, children, onMouseEnter, onMouseLeave }) {
  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition">
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
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductDropdown() {
  return (
    <div className="w-[1000px] bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
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
              className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition group"
            >
              <div className="text-4xl">{feature.icon}</div>
              <div>
                <div className="text-white font-bold text-sm mb-1 group-hover:text-blue-400 transition">
                  {feature.title}
                </div>
                <div className="text-gray-400 text-sm">{feature.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right: Connections & Links */}
        <div className="space-y-6">
          <div>
            <div className="text-xs uppercase tracking-wide text-gray-500 mb-3">Connections</div>
            <div className="space-y-2">
              {[
                { icon: '🟢', name: 'WhatsApp', desc: 'Official partner' },
                { icon: '🟣', name: 'Instagram', desc: 'Direct messages' },
                { icon: '🔵', name: 'Facebook', desc: 'Messenger sync' },
              ].map((conn, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition"
                >
                  <div className="text-xl">{conn.icon}</div>
                  <div>
                    <div className="text-white text-sm font-semibold">{conn.name}</div>
                    <div className="text-gray-500 text-xs">{conn.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/integrations" className="block mt-3 text-blue-400 text-sm font-semibold hover:text-blue-300 transition">
              View all connections →
            </Link>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-gray-500 mb-3">More Features</div>
            <div className="space-y-2">
              {['Automation', 'Lead Scoring', 'Analytics'].map((feat, idx) => (
                <Link key={idx} href="#" className="block text-gray-300 text-sm hover:text-white transition">
                  {feat}
                </Link>
              ))}
            </div>
            <Link href="/features" className="block mt-3 text-blue-400 text-sm font-semibold hover:text-blue-300 transition">
              See all features →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionsDropdown() {
  return (
    <div className="w-[900px] bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <div className="text-xs uppercase tracking-wide text-gray-500 mb-4">By Role</div>
          <div className="space-y-3">
            {['Sales Teams', 'Marketing Teams', 'Support Teams'].map((role, idx) => (
              <Link key={idx} href="#" className="block text-gray-300 hover:text-white transition">
                {role}
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <div className="text-xs uppercase tracking-wide text-gray-500 mb-4">By Industry</div>
          <div className="space-y-3">
            {['E-commerce', 'Real Estate', 'Healthcare', 'Education'].map((industry, idx) => (
              <Link key={idx} href={`/industries/${industry.toLowerCase().replace(' ', '-')}`} className="block text-gray-300 hover:text-white transition">
                {industry}
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <div className="text-xs uppercase tracking-wide text-gray-500 mb-4">Case Studies</div>
          <div className="space-y-3">
            <Link href="/case-studies" className="block text-gray-300 hover:text-white transition">
              View all case studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourcesDropdown() {
  return (
    <div className="w-[400px] bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
      <div className="space-y-2">
        {[
          { icon: '📚', label: 'Documentation' },
          { icon: '🎓', label: 'Tutorials' },
          { icon: '📊', label: 'Blog' },
          { icon: '💡', label: 'Help Center' },
        ].map((item, idx) => (
          <Link key={idx} href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-gray-300 font-semibold">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
