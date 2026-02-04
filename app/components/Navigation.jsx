'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { ChevronDown, Zap, MessageSquare, Bot, Workflow, BarChart3, Send, Users, Building2, ShoppingCart, Home, Heart, Target } from 'lucide-react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    clearTimeout(closeTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">wellplan<span className="text-blue-400">®</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-0.5">
            {/* Features */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('features')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition rounded-lg ${activeDropdown === 'features' ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                Features
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Solutions */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition rounded-lg ${activeDropdown === 'solutions' ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Resources */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition rounded-lg ${activeDropdown === 'resources' ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                Resources
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link href="/pricing" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
              Pricing
            </Link>

            <Link href="#contact" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://app.wellplan.io"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition shadow-lg shadow-blue-500/25"
            >
              <Zap className="w-4 h-4" />
              Try Free
            </Link>
            <Link
              href="https://app.wellplan.io"
              target="_blank"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Dropdown Container */}
      {activeDropdown && (
        <div className="absolute left-0 right-0 top-16 flex justify-center px-6 pt-2">
          <div
            className="bg-[#111111] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            {activeDropdown === 'features' && <FeaturesDropdown />}
            {activeDropdown === 'solutions' && <SolutionsDropdown />}
            {activeDropdown === 'resources' && <ResourcesDropdown />}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-white/5">
          <div className="px-4 py-4 space-y-1">
            <MobileMenuItem title="Features" href="/features" setMobileOpen={setMobileOpen} />
            <MobileMenuItem title="Solutions" href="/industries" setMobileOpen={setMobileOpen} />
            <MobileMenuItem title="Integrations" href="/integrations" setMobileOpen={setMobileOpen} />
            <MobileMenuItem title="Pricing" href="/pricing" setMobileOpen={setMobileOpen} />
            <MobileMenuItem title="Case Studies" href="/case-studies" setMobileOpen={setMobileOpen} />
            
            <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
              <Link
                href="https://app.wellplan.io"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                <Zap className="w-4 h-4" />
                Try Free
              </Link>
              <Link
                href="https://app.wellplan.io"
                className="block w-full px-4 py-3 text-center text-gray-300 font-medium hover:bg-white/5 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileMenuItem({ title, href, setMobileOpen }) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 text-gray-300 font-medium hover:bg-white/5 rounded-lg"
      onClick={() => setMobileOpen(false)}
    >
      {title}
    </Link>
  );
}

function FeaturesDropdown() {
  const featureCards = [
    {
      title: 'Shared Team Inbox',
      desc: 'All channels in one place',
      href: '/features/shared-inbox',
      icon: MessageSquare,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI Lead Bot',
      desc: '24/7 automated qualification',
      href: '/features/ai-lead-bot',
      icon: Bot,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const integrations = [
    { name: 'WhatsApp', desc: 'Official Business API', icon: '💬', href: '/integrations/whatsapp' },
    { name: 'Instagram', desc: 'DMs & Comments', icon: '📸', href: '/integrations/instagram' },
    { name: 'HubSpot', desc: 'Sync your CRM', icon: '🎯', href: '/integrations/hubspot' },
    { name: 'Zapier', desc: '5000+ apps', icon: '⚡', href: '/integrations/zapier' },
  ];

  const moreFeatures = [
    { name: 'Automation Flows', href: '/features/automation-flows' },
    { name: 'Broadcast Campaigns', href: '/features/broadcast-campaigns' },
    { name: 'Lead Scoring', href: '/features/lead-scoring' },
    { name: 'See all features →', href: '/features', highlight: true },
  ];

  return (
    <div className="flex p-6 gap-8" style={{ width: '720px' }}>
      {/* Feature Cards */}
      <div className="flex-1">
        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Features</h4>
        <div className="space-y-3">
          {featureCards.map((feature, idx) => (
            <Link
              key={idx}
              href={feature.href}
              className="group flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400 transition">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{feature.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Connections */}
      <div className="w-48 border-l border-white/10 pl-6">
        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Connections</h4>
        <div className="space-y-2">
          {integrations.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5 transition group"
            >
              <span className="text-lg">{item.icon}</span>
              <div>
                <p className="font-medium text-xs text-white group-hover:text-blue-400 transition">{item.name}</p>
                <p className="text-[10px] text-gray-600">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/integrations" className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-blue-400 hover:text-blue-300">
          View all →
        </Link>
      </div>

      {/* More Features */}
      <div className="w-40 border-l border-white/10 pl-6">
        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">More</h4>
        <div className="space-y-1">
          {moreFeatures.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`block py-1.5 text-xs ${item.highlight ? 'font-semibold text-blue-400 hover:text-blue-300' : 'text-gray-400 hover:text-white'} transition`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function SolutionsDropdown() {
  const industryCards = [
    {
      title: 'For Agencies',
      desc: 'White-label client management',
      href: '/industries/agencies',
      icon: Building2,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'For Coaching',
      desc: 'Scale without scaling team',
      href: '/industries/coaching',
      icon: Target,
      gradient: 'from-purple-500 to-violet-500',
    },
  ];

  const industries = [
    { name: 'E-Commerce', icon: '🛒', href: '/industries/ecommerce' },
    { name: 'Real Estate', icon: '🏠', href: '/industries/real-estate' },
    { name: 'Healthcare', icon: '⚕️', href: '/industries/healthcare' },
    { name: 'SaaS', icon: '☁️', href: '/industries/saas' },
  ];

  const moreLinks = [
    { name: 'All Industries →', href: '/industries', highlight: true },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Book a Demo', href: '#demo' },
  ];

  return (
    <div className="flex p-6 gap-8" style={{ width: '680px' }}>
      {/* Industry Cards */}
      <div className="flex-1">
        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Solutions</h4>
        <div className="space-y-3">
          {industryCards.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* More Industries */}
      <div className="w-40 border-l border-white/10 pl-6">
        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Industries</h4>
        <div className="space-y-2">
          {industries.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center gap-2.5 py-1.5 text-gray-400 hover:text-white transition group"
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="w-32 border-l border-white/10 pl-6">
        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">More</h4>
        <div className="space-y-1">
          {moreLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`block py-1.5 text-xs ${item.highlight ? 'font-semibold text-blue-400 hover:text-blue-300' : 'text-gray-400 hover:text-white'} transition`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResourcesDropdown() {
  const resourceCards = [
    {
      title: 'Case Studies',
      desc: 'Real customer results',
      href: '/case-studies',
      icon: BarChart3,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Integrations',
      desc: '50+ app connections',
      href: '/integrations',
      icon: Workflow,
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  const quickLinks = [
    { name: 'Documentation', icon: '📚', href: '#docs' },
    { name: 'API Reference', icon: '⚙️', href: '#api' },
    { name: 'Status Page', icon: '✅', href: '#status' },
    { name: 'Contact Support', icon: '💬', href: '#support' },
  ];

  return (
    <div className="flex p-6 gap-8" style={{ width: '580px' }}>
      {/* Resource Cards */}
      <div className="flex-1">
        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Resources</h4>
        <div className="space-y-3">
          {resourceCards.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="w-44 border-l border-white/10 pl-6">
        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Quick Links</h4>
        <div className="space-y-2">
          {quickLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center gap-2.5 py-1.5 text-gray-400 hover:text-white transition"
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
