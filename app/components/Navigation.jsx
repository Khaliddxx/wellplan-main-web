'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Megamenu data
  const menus = {
    Product: {
      sections: [
        {
          title: 'Features',
          items: [
            { name: 'Lead Capture', href: '/features#capture', desc: 'Multi-channel forms & landing pages' },
            { name: 'Lead Nurture', href: '/features#nurture', desc: 'Automated email & SMS sequences' },
            { name: 'Lead Close', href: '/features#close', desc: 'Sales acceleration & CRM integration' },
            { name: 'Analytics', href: '/features#analytics', desc: 'Real-time conversion tracking' },
          ]
        },
        {
          title: 'By Use Case',
          items: [
            { name: 'Lead Generation', href: '/solutions#generation', desc: 'High-volume lead capture' },
            { name: 'Appointment Booking', href: '/solutions#booking', desc: 'Automated scheduling' },
            { name: 'E-commerce', href: '/solutions#ecommerce', desc: 'Product inquiries & sales' },
            { name: 'Real Estate', href: '/solutions#realestate', desc: 'Property lead management' },
          ]
        },
        {
          title: 'Resources',
          items: [
            { name: 'API Docs', href: '/docs/api', desc: 'Complete API reference' },
            { name: 'Integrations', href: '/integrations', desc: '200+ app connections' },
            { name: 'Webhooks', href: '/docs/webhooks', desc: 'Custom integrations' },
            { name: 'Templates', href: '/templates', desc: 'Ready-to-use flows' },
          ]
        }
      ],
      width: 'w-screen max-w-6xl'
    },
    Solutions: {
      sections: [
        {
          title: 'By Industry',
          items: [
            { name: 'Agencies', href: '/industries/agencies', desc: 'Client lead management' },
            { name: 'SaaS', href: '/industries/saas', desc: 'Enterprise B2B leads' },
            { name: 'E-Commerce', href: '/industries/ecommerce', desc: 'Product-driven leads' },
            { name: 'Services', href: '/industries/services', desc: 'Consultation bookings' },
          ]
        },
        {
          title: 'Use Cases',
          items: [
            { name: 'Lead Scoring', href: '/solutions#scoring', desc: 'AI-powered qualification' },
            { name: 'Lead Distribution', href: '/solutions#distribution', desc: 'Smart assignment' },
            { name: 'Lead Qualification', href: '/solutions#qualification', desc: 'Auto-qualification' },
            { name: 'Lead Enrichment', href: '/solutions#enrichment', desc: 'Data completion' },
          ]
        },
        {
          title: 'Popular',
          items: [
            { name: 'Competitors', href: '/compare', desc: 'vs HubSpot, Salesforce' },
            { name: 'Case Studies', href: '/case-studies', desc: '3x lead growth stories' },
            { name: 'ROI Calculator', href: '/roi', desc: 'Calculate your savings' },
            { name: 'Demo', href: '/demo', desc: 'See it in action' },
          ]
        }
      ],
      width: 'w-screen max-w-6xl'
    },
    Resources: {
      sections: [
        {
          title: 'Learn',
          items: [
            { name: 'Documentation', href: '/docs', desc: 'Complete guides' },
            { name: 'Blog', href: '/blog', desc: 'Lead gen tips & tricks' },
            { name: 'Webinars', href: '/webinars', desc: 'Expert sessions' },
            { name: 'Academy', href: '/academy', desc: 'Certification program' },
          ]
        },
        {
          title: 'Support',
          items: [
            { name: 'Help Center', href: '/help', desc: 'FAQs & troubleshooting' },
            { name: 'Community', href: '/community', desc: 'User forum' },
            { name: 'Contact Sales', href: '/sales', desc: 'Enterprise support' },
            { name: 'Status', href: '/status', desc: 'System uptime' },
          ]
        },
        {
          title: 'Company',
          items: [
            { name: 'About', href: '/about', desc: 'Our story' },
            { name: 'Pricing', href: '/pricing', desc: 'Plans & pricing' },
            { name: 'Partners', href: '/partners', desc: 'Partnership program' },
            { name: 'Careers', href: '/careers', desc: 'Join our team' },
          ]
        }
      ],
      width: 'w-screen max-w-6xl'
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition">
            WellPlan
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {Object.keys(menus).map((menu) => (
              <div
                key={menu}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(menu)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-gray-300 font-medium hover:text-white hover:bg-slate-800/50 rounded-lg transition flex items-center gap-1">
                  {menu}
                  <ChevronDown size={16} className="group-hover:rotate-180 transition duration-300" />
                </button>

                {/* Megamenu */}
                {activeDropdown === menu && (
                  <div className="absolute left-0 right-0 top-full pt-0 pointer-events-auto w-screen">
                    <div className="w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl p-8">
                      <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-3 gap-12">
                          {menus[menu].sections.map((section, idx) => (
                            <div key={idx}>
                              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6 opacity-80">
                                {section.title}
                              </h4>
                              <div className="space-y-4">
                                {section.items.map((item, itemIdx) => (
                                  <Link
                                    key={itemIdx}
                                    href={item.href}
                                    className="block hover:translate-x-1 transition"
                                  >
                                    <p className="font-semibold text-gray-100 hover:text-blue-400 transition">
                                      {item.name}
                                    </p>
                                    <p className="text-sm text-gray-500 hover:text-gray-400 transition">
                                      {item.desc}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Top-level items */}
            <Link href="/pricing" className="px-4 py-2 text-gray-300 font-medium hover:text-white hover:bg-slate-800/50 rounded-lg transition">
              Pricing
            </Link>
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-4 py-2 text-gray-300 font-medium hover:text-white transition">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:from-blue-400 hover:to-blue-500 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-blue-400 text-2xl hover:text-blue-300 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-slate-700/50">
            {Object.keys(menus).map((menu) => (
              <details key={menu} className="group mb-2">
                <summary className="px-4 py-3 text-gray-300 font-medium hover:bg-slate-800/50 rounded-lg cursor-pointer hover:text-white transition flex items-center justify-between">
                  {menu}
                  <ChevronDown size={16} className="group-open:rotate-180 transition" />
                </summary>
                <div className="pl-6 space-y-2 mt-2">
                  {menus[menu].sections.map((section, secIdx) => (
                    <div key={secIdx}>
                      <p className="text-xs text-blue-400 font-bold uppercase mb-3 opacity-70">{section.title}</p>
                      {section.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.href}
                          className="block px-4 py-2 text-gray-400 text-sm hover:text-blue-400 hover:bg-slate-800/50 rounded transition"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
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
