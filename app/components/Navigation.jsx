'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Megamenu data - matching WISEPIM structure
  const menus = {
    Product: {
      features: [
        {
          title: 'Lead Capture',
          desc: 'Multi-channel form builder',
          icon: '📥',
          href: '#',
        },
        {
          title: 'Lead Nurture',
          desc: 'Automated email sequences',
          icon: '💬',
          href: '#',
        },
        {
          title: 'Lead Close',
          desc: 'Sales acceleration tools',
          icon: '🎯',
          href: '#',
        },
        {
          title: 'Analytics',
          desc: 'Real-time conversion tracking',
          icon: '📊',
          href: '#',
        },
      ],
      connections: [
        { name: 'HubSpot', icon: '🎯', color: 'bg-orange-500' },
        { name: 'Salesforce', icon: '☁️', color: 'bg-blue-600' },
        { name: 'Slack', icon: '💬', color: 'bg-purple-500' },
        { name: 'Gmail', icon: '✉️', color: 'bg-red-500' },
      ],
    },
    Solutions: {
      features: [
        {
          title: 'For Agencies',
          desc: 'Client lead management',
          icon: '🏢',
          href: '#',
        },
        {
          title: 'For SaaS',
          desc: 'Enterprise B2B leads',
          icon: '☁️',
          href: '#',
        },
        {
          title: 'For E-Commerce',
          desc: 'Product-driven leads',
          icon: '🛒',
          href: '#',
        },
        {
          title: 'For Real Estate',
          desc: 'Property lead management',
          icon: '🏠',
          href: '#',
        },
      ],
      connections: [
        { name: 'Zapier', icon: '🔌', color: 'bg-orange-500' },
        { name: 'Webhooks', icon: '🔗', color: 'bg-blue-600' },
        { name: 'API', icon: '⚙️', color: 'bg-purple-500' },
        { name: 'Custom', icon: '🛠️', color: 'bg-slate-600' },
      ],
    },
    Resources: {
      features: [
        {
          title: 'Documentation',
          desc: 'Complete API reference',
          icon: '📚',
          href: '#',
        },
        {
          title: 'Case Studies',
          desc: '3x lead growth stories',
          icon: '📈',
          href: '#',
        },
        {
          title: 'Blog',
          desc: 'Lead gen insights',
          icon: '📝',
          href: '#',
        },
        {
          title: 'Webinars',
          desc: 'Expert training sessions',
          icon: '🎓',
          href: '#',
        },
      ],
      connections: [
        { name: 'Academy', icon: '🎓', color: 'bg-blue-500' },
        { name: 'Community', icon: '👥', color: 'bg-green-500' },
        { name: 'Support', icon: '🆘', color: 'bg-purple-500' },
        { name: 'Contact', icon: '📞', color: 'bg-red-500' },
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
          <div className="flex items-center gap-8">
            {Object.keys(menus).map((menu) => (
              <div
                key={menu}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(menu)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-2 text-gray-300 font-medium hover:text-white transition py-2">
                  {menu}
                  <ChevronDown size={16} className="group-hover:rotate-180 transition duration-300" />
                </button>

                {/* Megamenu - Full Width Below */}
                {activeDropdown === menu && (
                  <div className="fixed left-0 right-0 top-full pt-0 w-screen bg-slate-900/98 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl">
                    <div className="max-w-7xl mx-auto px-6 py-12">
                      <div className="grid grid-cols-3 gap-12">
                        {/* Feature Cards */}
                        <div className="col-span-2">
                          <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">Features</h4>
                          <div className="grid grid-cols-2 gap-6">
                            {menus[menu].features.map((feature, idx) => (
                              <Link
                                key={idx}
                                href={feature.href}
                                className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition"
                              >
                                <div className="text-4xl mb-3">{feature.icon}</div>
                                <h5 className="font-bold text-white mb-1 group-hover:text-blue-400 transition">
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
                          <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">Integrations</h4>
                          <div className="space-y-4 mb-8">
                            {menus[menu].connections.map((conn, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition cursor-pointer">
                                <div className={`w-10 h-10 rounded-lg ${conn.color} flex items-center justify-center text-lg`}>
                                  {conn.icon}
                                </div>
                                <div>
                                  <p className="font-semibold text-white text-sm">{conn.name}</p>
                                  <p className="text-xs text-gray-500">Connect now</p>
                                </div>
                              </div>
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
          <div className="flex items-center gap-4">
            <button className="text-gray-300 hover:text-white transition font-medium">
              Sign In
            </button>
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
