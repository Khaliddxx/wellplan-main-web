'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimeoutRef = useRef(null);

  // Megamenu data - Properly organized by actual sitemap
  const menus = {
    Product: {
      features: [
        {
          title: 'Features',
          desc: 'All platform features',
          icon: '⭐',
          href: '/features',
        },
        {
          title: 'Case Studies',
          desc: 'Real customer results',
          icon: '📊',
          href: '/case-studies',
        },
        {
          title: 'Integrations',
          desc: '200+ app connections',
          icon: '🔗',
          href: '/integrations',
        },
        {
          title: 'Pricing',
          desc: 'Simple pricing',
          icon: '💰',
          href: '/pricing',
        },
      ],
      connections: [
        { name: 'HubSpot', icon: '🎯', color: 'bg-orange-500', href: '/integrations' },
        { name: 'Salesforce', icon: '☁️', color: 'bg-blue-600', href: '/integrations' },
        { name: 'Zapier', icon: '⚡', color: 'bg-orange-600', href: '/integrations' },
        { name: 'WhatsApp', icon: '💬', color: 'bg-green-500', href: '/integrations' },
      ],
    },
    Solutions: {
      features: [
        {
          title: 'By Industry',
          desc: 'Solutions for your sector',
          icon: '🏢',
          href: '/industries',
        },
        {
          title: 'For Agencies',
          desc: 'Client lead management',
          icon: '🎨',
          href: '/industries/agencies',
        },
        {
          title: 'For SaaS',
          desc: 'B2B lead generation',
          icon: '☁️',
          href: '/industries/saas',
        },
        {
          title: 'For E-Commerce',
          desc: 'Product-driven leads',
          icon: '🛒',
          href: '/industries/ecommerce',
        },
      ],
      connections: [
        { name: 'Real Estate', icon: '🏠', color: 'bg-slate-600', href: '/industries/real-estate' },
        { name: 'Coaching', icon: '🎯', color: 'bg-purple-500', href: '/industries/coaching' },
        { name: 'Healthcare', icon: '⚕️', color: 'bg-red-500', href: '/industries/healthcare' },
        { name: 'All Industries', icon: '→', color: 'bg-blue-500', href: '/industries' },
      ],
    },
    Resources: {
      features: [
        {
          title: 'Case Studies',
          desc: 'Customer success stories',
          icon: '📈',
          href: '/case-studies',
        },
        {
          title: 'Integrations',
          desc: 'Connect your tools',
          icon: '🔌',
          href: '/integrations',
        },
        {
          title: 'Industries',
          desc: 'Solutions by industry',
          icon: '🏪',
          href: '/industries',
        },
        {
          title: 'Help & Support',
          desc: 'Get help anytime',
          icon: '❓',
          href: '#',
        },
      ],
      connections: [
        { name: 'Documentation', icon: '📚', color: 'bg-blue-500', href: '#' },
        { name: 'API Reference', icon: '⚙️', color: 'bg-slate-600', href: '#' },
        { name: 'Status Page', icon: '✅', color: 'bg-green-500', href: '#' },
        { name: 'Contact Us', icon: '📞', color: 'bg-purple-500', href: '#' },
      ],
    },
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            WellPlan
          </Link>

          {/* Menu Items */}
          <div className="flex items-center gap-4">
            {Object.keys(menus).map((menu) => (
              <div
                key={menu}
                className="relative group"
                onMouseEnter={() => {
                  clearTimeout(closeTimeoutRef.current);
                  setActiveDropdown(menu);
                }}
                onMouseLeave={() => {
                  closeTimeoutRef.current = setTimeout(() => {
                    setActiveDropdown(null);
                  }, 200);
                }}
              >
                <button className="flex items-center gap-2 text-gray-300 font-medium hover:text-white transition py-2">
                  {menu}
                  <ChevronDown size={16} className="group-hover:rotate-180 transition duration-300" />
                </button>

                {/* Megamenu - Absolute positioning, not full screen */}
                {activeDropdown === menu && (
                  <div className="absolute left-0 right-0 top-full pt-2 bg-slate-950 backdrop-blur-2xl border border-slate-700 shadow-2xl rounded-b-2xl" style={{ minWidth: '900px', maxHeight: '500px', overflowY: 'auto' }} onMouseEnter={() => {
                    clearTimeout(closeTimeoutRef.current);
                    setActiveDropdown(menu);
                  }} onMouseLeave={() => {
                    closeTimeoutRef.current = setTimeout(() => {
                      setActiveDropdown(null);
                    }, 200);
                  }}>
                    <div className="max-w-7xl mx-auto px-6 py-24">
                      <div className="grid grid-cols-3 gap-20">
                        {/* Feature Cards */}
                        <div className="col-span-2">
                          <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-10">Features</h4>
                          <div className="grid grid-cols-2 gap-10">
                            {menus[menu].features.map((feature, idx) => (
                              <Link
                                key={idx}
                                href={feature.href}
                                className="group p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition"
                              >
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h5 className="font-bold text-white mb-2 text-lg group-hover:text-blue-400 transition">
                                  {feature.title}
                                </h5>
                                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition">
                                  {feature.desc}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Connections Sidebar */}
                        <div>
                          <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-10">Integrations</h4>
                          <div className="space-y-6 mb-10">
                            {menus[menu].connections.map((conn, idx) => (
                              <Link key={idx} href={conn.href} className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-800/50 transition cursor-pointer">
                                <div className={`w-12 h-12 rounded-lg ${conn.color} flex items-center justify-center text-xl flex-shrink-0`}>
                                  {conn.icon}
                                </div>
                                <div>
                                  <p className="font-semibold text-white text-sm">{conn.name}</p>
                                  <p className="text-xs text-gray-500">Learn more</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <button className="w-full px-4 py-2 text-sm text-blue-400 hover:text-blue-300 font-semibold">
                            View all integrations →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link href="/pricing" className="text-gray-300 font-medium hover:text-white transition">
              Pricing
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link href="https://app.wellplan.io" target="_blank" className="text-gray-300 hover:text-white transition font-medium">
              Sign In
            </Link>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-between items-center">
          <Link href="/" className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            WellPlan
          </Link>
          <button
            className="text-blue-400 text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-700/50">
            {Object.keys(menus).map((menu) => (
              <details key={menu} className="group mb-2">
                <summary className="px-4 py-3 text-gray-300 font-medium hover:bg-slate-800/50 rounded-lg cursor-pointer hover:text-white transition flex items-center justify-between">
                  {menu}
                  <ChevronDown size={16} className="group-open:rotate-180 transition" />
                </summary>
                <div className="pl-6 space-y-2 mt-2">
                  {menus[menu].features.map((feature, idx) => (
                    <Link
                      key={idx}
                      href={feature.href}
                      className="block px-4 py-2 text-gray-400 text-sm hover:text-blue-400 hover:bg-slate-800/50 rounded transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      {feature.title}
                    </Link>
                  ))}
                </div>
              </details>
            ))}

            <Link
              href="/pricing"
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>

            <div className="mt-6 pt-6 border-t border-slate-700/50 space-y-2">
              <button className="w-full px-4 py-2 text-gray-300 font-medium hover:text-white transition">
                Sign In
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
