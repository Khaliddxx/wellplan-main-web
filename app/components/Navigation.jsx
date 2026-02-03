'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Zap, Users, BarChart3, Shield, Inbox, Workflow } from 'lucide-react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const megamenus = {
    Product: {
      columns: [
        {
          title: 'FEATURES',
          items: [
            { icon: Inbox, label: 'Lead Capture', desc: 'Multi-channel lead forms' },
            { icon: Workflow, label: 'Lead Nurture', desc: 'Automated email sequences' },
            { icon: Zap, label: 'Lead Close', desc: 'Sales acceleration tools' },
            { icon: BarChart3, label: 'Analytics', desc: 'Real-time conversion tracking' },
            { icon: Shield, label: 'Security', desc: 'Enterprise-grade protection' },
          ],
        },
        {
          title: 'INTEGRATIONS',
          items: [
            { icon: null, label: 'Zapier', desc: '1000+ app connections' },
            { icon: null, label: 'Webhooks', desc: 'Custom API integration' },
            { icon: null, label: 'CRM Sync', desc: 'HubSpot, Salesforce, more' },
            { icon: null, label: 'Email', desc: 'Gmail, Outlook integration' },
          ],
        },
      ],
      preview: {
        title: 'PRODUCT OVERVIEW',
        description: 'All-in-one platform for lead capture, nurturing, and closing',
        cta: 'Take a Product Tour',
      },
    },
    Solutions: {
      columns: [
        {
          title: 'BY INDUSTRY',
          items: [
            { icon: Users, label: 'Agencies', desc: 'Client lead management' },
            { icon: Users, label: 'SaaS', desc: 'Enterprise B2B flows' },
            { icon: Users, label: 'E-Commerce', desc: 'E-comm lead generation' },
            { icon: Users, label: 'Real Estate', desc: 'Property inquiry handling' },
          ],
        },
        {
          title: 'BY USE CASE',
          items: [
            { icon: null, label: 'Lead Generation', desc: 'Capture high-quality leads' },
            { icon: null, label: 'Lead Scoring', desc: 'Prioritize hot prospects' },
            { icon: null, label: 'Appointment Booking', desc: 'Automated scheduling' },
            { icon: null, label: 'Webinar Registration', desc: 'Event lead capture' },
          ],
        },
      ],
      preview: {
        title: 'PLATFORM OVERVIEW',
        description: 'Purpose-built for your industry and use case',
        cta: 'Explore Solutions',
      },
    },
    Resources: {
      columns: [
        {
          title: 'LEARN',
          items: [
            { icon: null, label: 'Documentation', desc: 'Complete API docs' },
            { icon: null, label: 'Guides', desc: 'Step-by-step tutorials' },
            { icon: null, label: 'Blog', desc: 'Latest lead gen tips' },
            { icon: null, label: 'Webinars', desc: 'Expert-led sessions' },
          ],
        },
        {
          title: 'COMPARE',
          items: [
            { icon: null, label: 'vs Competitors', desc: 'Feature comparison' },
            { icon: null, label: 'Case Studies', desc: '50% conversion increase' },
            { icon: null, label: 'Pricing', desc: 'Transparent, no surprises' },
            { icon: null, label: 'ROI Calculator', desc: 'See your savings' },
          ],
        },
      ],
      preview: {
        title: 'SUCCESS STORIES',
        description: 'See how customers achieved 50%+ conversion increases',
        cta: 'Read Case Studies',
      },
    },
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            WellPlan
          </Link>

          {/* Menu Items */}
          <div className="flex gap-8 items-center">
            {Object.keys(megamenus).map((menu) => (
              <div
                key={menu}
                className="relative"
                onMouseEnter={() => setActiveMenu(menu)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 text-gray-300 hover:text-blue-400 font-semibold transition py-2">
                  {menu}
                  <ChevronDown size={16} className={`transition ${activeMenu === menu ? 'rotate-180' : ''}`} />
                </button>

                {/* Megamenu Dropdown */}
                {activeMenu === menu && (
                  <div className="absolute left-0 top-full pt-4 w-screen left-1/2 -translate-x-1/2">
                    <div className="bg-slate-900/98 backdrop-blur-xl border border-slate-700/50 rounded-lg shadow-2xl">
                      <div className="grid grid-cols-3 gap-8 p-8 max-w-6xl">
                        {/* Columns */}
                        {megamenus[menu].columns.map((col, idx) => (
                          <div key={idx}>
                            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">
                              {col.title}
                            </h4>
                            <div className="space-y-4">
                              {col.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="cursor-pointer hover:translate-x-1 transition">
                                  <div className="flex items-start gap-3">
                                    {item.icon && <item.icon size={20} className="text-blue-400 mt-1 flex-shrink-0" />}
                                    <div>
                                      <p className="font-semibold text-gray-100">{item.label}</p>
                                      <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* Preview Panel */}
                        <div className="col-span-1 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 flex flex-col justify-between h-80">
                          <div>
                            <h3 className="text-white font-bold text-lg mb-2">
                              {megamenus[menu].preview.title}
                            </h3>
                            <p className="text-blue-100 text-sm">
                              {megamenus[menu].preview.description}
                            </p>
                          </div>
                          <button className="text-white font-bold hover:gap-2 transition flex items-center gap-1">
                            {megamenus[menu].preview.cta} →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Simple Top-Level Items */}
            <Link href="/pricing" className="text-gray-300 hover:text-blue-400 font-semibold transition">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-400 font-semibold transition">
              About
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex gap-4 items-center">
            <button className="text-gray-300 hover:text-white transition font-semibold">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition">
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
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-700/50 space-y-2">
            {Object.keys(megamenus).map((menu) => (
              <div key={menu}>
                <button className="w-full text-left px-4 py-3 text-blue-400 font-bold hover:bg-slate-800/50 rounded transition">
                  {menu}
                </button>
                <div className="pl-8 space-y-2 pb-2">
                  {megamenus[menu].columns.map((col, colIdx) =>
                    col.items.map((item, itemIdx) => (
                      <Link
                        key={`${colIdx}-${itemIdx}`}
                        href="#"
                        className="block text-gray-300 text-sm hover:text-blue-400 transition"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))
                  )}
                </div>
              </div>
            ))}
            <Link href="/pricing" className="block px-4 py-3 text-gray-300 hover:text-blue-400 transition">
              Pricing
            </Link>
            <Link href="/about" className="block px-4 py-3 text-gray-300 hover:text-blue-400 transition">
              About
            </Link>
            <div className="px-4 py-4 border-t border-slate-700/50 mt-4 flex gap-2">
              <button className="flex-1 text-gray-300 text-sm font-semibold hover:text-white transition">
                Sign In
              </button>
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold text-sm">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
