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
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">wellplan<span className="text-blue-500">®</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Features */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('features')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition rounded-lg ${activeDropdown === 'features' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>
                Features
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'features' && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-blue-500" />}
            </div>

            {/* Solutions */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition rounded-lg ${activeDropdown === 'solutions' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'solutions' && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-blue-500" />}
            </div>

            {/* Resources */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition rounded-lg ${activeDropdown === 'resources' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'resources' && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-blue-500" />}
            </div>

            <Link href="/pricing" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition">
              Pricing
            </Link>

            <Link href="#contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition">
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://app.wellplan.io"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition shadow-sm"
            >
              <Zap className="w-4 h-4" />
              Try WellPlan - It's Free
            </Link>
            <Link
              href="https://app.wellplan.io"
              target="_blank"
              className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdowns */}
      {activeDropdown && (
        <div
          className="absolute left-0 right-0 top-16 bg-white border-b border-gray-200 shadow-xl"
          onMouseEnter={() => handleMouseEnter(activeDropdown)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            {activeDropdown === 'features' && <FeaturesDropdown />}
            {activeDropdown === 'solutions' && <SolutionsDropdown />}
            {activeDropdown === 'resources' && <ResourcesDropdown />}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-1">
            <MobileMenuItem title="Features" href="/features" setMobileOpen={setMobileOpen} />
            <MobileMenuItem title="Solutions" href="/industries" setMobileOpen={setMobileOpen} />
            <MobileMenuItem title="Integrations" href="/integrations" setMobileOpen={setMobileOpen} />
            <MobileMenuItem title="Pricing" href="/pricing" setMobileOpen={setMobileOpen} />
            <MobileMenuItem title="Case Studies" href="/case-studies" setMobileOpen={setMobileOpen} />
            
            <div className="pt-4 mt-4 border-t border-gray-100 space-y-2">
              <Link
                href="https://app.wellplan.io"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                <Zap className="w-4 h-4" />
                Try WellPlan Free
              </Link>
              <Link
                href="https://app.wellplan.io"
                className="block w-full px-4 py-3 text-center text-gray-700 font-medium hover:bg-gray-50 rounded-lg"
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
      className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg"
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
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    },
    {
      title: 'AI Lead Bot',
      desc: '24/7 automated qualification',
      href: '/features/ai-lead-bot',
      icon: Bot,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    },
    {
      title: 'Automation Flows',
      desc: 'Visual workflow builder',
      href: '/features/automation-flows',
      icon: Workflow,
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
    },
  ];

  const integrations = [
    { name: 'WhatsApp', desc: 'Official Business API', icon: '💬', color: 'bg-green-500', href: '/integrations/whatsapp' },
    { name: 'Instagram', desc: 'DMs & Comments', icon: '📸', color: 'bg-pink-500', href: '/integrations/instagram' },
    { name: 'HubSpot', desc: 'Sync your CRM', icon: '🎯', color: 'bg-orange-500', href: '/integrations/hubspot' },
    { name: 'Zapier', desc: '5000+ app connections', icon: '⚡', color: 'bg-orange-600', href: '/integrations/zapier' },
  ];

  const moreFeatures = [
    { name: 'Broadcast Campaigns', href: '/features/broadcast-campaigns' },
    { name: 'Lead Scoring', href: '/features/lead-scoring' },
    { name: 'Analytics & Reporting', href: '/features/analytics-reporting' },
    { name: 'See all features', href: '/features', highlight: true },
  ];

  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Feature Cards - Left Side */}
      <div className="col-span-8">
        <div className="grid grid-cols-3 gap-4">
          {featureCards.map((feature, idx) => (
            <Link
              key={idx}
              href={feature.href}
              className={`group p-6 rounded-2xl ${feature.bgColor} hover:shadow-lg transition-all duration-200`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-4 border-l border-gray-100 pl-8">
        {/* Connections */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Connections</h4>
          <div className="space-y-3">
            {integrations.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-gray-50 transition group"
              >
                <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center text-lg flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/integrations" className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-blue-600 hover:text-blue-700">
            View all connections
            <ChevronDown className="w-4 h-4 -rotate-90" />
          </Link>
        </div>

        {/* More Features */}
        <div className="pt-6 border-t border-gray-100">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">More Features</h4>
          <div className="space-y-2">
            {moreFeatures.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`block py-1.5 text-sm ${item.highlight ? 'font-semibold text-blue-600 hover:text-blue-700' : 'text-gray-700 hover:text-gray-900'} transition`}
              >
                {item.name} {item.highlight && '→'}
              </Link>
            ))}
          </div>
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
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    },
    {
      title: 'For E-Commerce',
      desc: 'Convert browsers to buyers',
      href: '/industries/ecommerce',
      icon: ShoppingCart,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    },
    {
      title: 'For Coaching',
      desc: 'Scale without scaling team',
      href: '/industries/coaching',
      icon: Target,
      gradient: 'from-purple-500 to-violet-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-violet-50',
    },
  ];

  const industries = [
    { name: 'Real Estate', desc: 'Property inquiries', icon: '🏠', color: 'bg-slate-500', href: '/industries/real-estate' },
    { name: 'Healthcare', desc: 'Patient acquisition', icon: '⚕️', color: 'bg-red-500', href: '/industries/healthcare' },
    { name: 'SaaS', desc: 'B2B lead generation', icon: '☁️', color: 'bg-blue-600', href: '/industries/saas' },
  ];

  const moreLinks = [
    { name: 'All Industries', href: '/industries', highlight: true },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Book a Demo', href: '#demo' },
  ];

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8">
        <div className="grid grid-cols-3 gap-4">
          {industryCards.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`group p-6 rounded-2xl ${item.bgColor} hover:shadow-lg transition-all duration-200`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="col-span-4 border-l border-gray-100 pl-8">
        <div className="mb-6">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">More Industries</h4>
          <div className="space-y-3">
            {industries.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-gray-50 transition group"
              >
                <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center text-lg flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <div className="space-y-2">
            {moreLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`block py-1.5 text-sm ${item.highlight ? 'font-semibold text-blue-600 hover:text-blue-700' : 'text-gray-700 hover:text-gray-900'} transition`}
              >
                {item.name} {item.highlight && '→'}
              </Link>
            ))}
          </div>
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
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    },
    {
      title: 'Integrations',
      desc: '50+ app connections',
      href: '/integrations',
      icon: Workflow,
      gradient: 'from-violet-500 to-purple-500',
      bgColor: 'bg-gradient-to-br from-violet-50 to-purple-50',
    },
    {
      title: 'Help Center',
      desc: 'Get started guides',
      href: '#help',
      icon: Users,
      gradient: 'from-amber-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
    },
  ];

  const quickLinks = [
    { name: 'Documentation', icon: '📚', href: '#docs' },
    { name: 'API Reference', icon: '⚙️', href: '#api' },
    { name: 'Status Page', icon: '✅', href: '#status' },
    { name: 'Contact Support', icon: '💬', href: '#support' },
  ];

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8">
        <div className="grid grid-cols-3 gap-4">
          {resourceCards.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`group p-6 rounded-2xl ${item.bgColor} hover:shadow-lg transition-all duration-200`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="col-span-4 border-l border-gray-100 pl-8">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Quick Links</h4>
        <div className="space-y-3">
          {quickLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-gray-50 transition group"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                {item.icon}
              </div>
              <p className="font-medium text-sm text-gray-700 group-hover:text-blue-600 transition">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
