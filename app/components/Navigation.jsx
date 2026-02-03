'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = {
    Product: [
      { label: 'Features', href: '/features' },
      { label: 'Lead Capture', href: '/objectives/capturing' },
      { label: 'Lead Nurture', href: '/objectives/nurturing' },
      { label: 'Lead Close', href: '/objectives/closing' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Security', href: '/security' },
    ],
    Solutions: [
      { label: 'For Agencies', href: '/solutions/agencies' },
      { label: 'For SaaS', href: '/solutions/saas' },
      { label: 'For E-Commerce', href: '/solutions/ecommerce' },
      { label: 'For Startups', href: '/solutions/startups' },
      { label: 'By Industry', href: '/industries' },
    ],
    Resources: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Blog', href: '/blog' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Compare', href: '/compare' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Partners', href: '/partners' },
      { label: 'Careers', href: '/careers' },
    ],
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            WellPlan
          </Link>

          {/* Menu Items */}
          <div className="flex gap-8 items-center">
            {Object.entries(menuItems).map(([category, items]) => (
              <div
                key={category}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-gray-300 hover:text-blue-400 font-medium transition py-2">
                  {category}
                  <ChevronDown size={16} className="group-hover:rotate-180 transition" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-lg shadow-2xl min-w-48">
                    {items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-slate-800/50 transition first:rounded-t-lg last:rounded-b-lg"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex gap-4 items-center">
            <button className="text-gray-300 hover:text-white transition font-medium">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
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
          <div className="md:hidden mt-4 pb-4 border-t border-slate-700/50">
            {Object.entries(menuItems).map(([category, items]) => (
              <div key={category}>
                <div className="px-4 py-2 text-blue-400 font-bold text-sm">{category}</div>
                {items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block px-8 py-2 text-gray-300 hover:text-blue-400 text-sm transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
              <div className="px-4 py-4 border-t border-slate-700/50 mt-4 flex gap-2">
                <button className="flex-1 text-gray-300 hover:text-white text-sm font-medium transition">
                  Sign In
                </button>
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold text-sm hover:shadow-lg">
                  Get Started
                </button>
              </div>
          </div>
        )}
      </div>
    </nav>
  );
}
