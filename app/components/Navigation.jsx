'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { ChevronDown, Zap, MessageSquare, Bot, BarChart3, BookOpen, FileText, Calculator, HelpCircle, Play, Newspaper, Calendar, Briefcase, GraduationCap, Stethoscope, Car, Utensils, Dumbbell, ShoppingCart, Home, Target, Building2, Users } from 'lucide-react';

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
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">wellplan<span className="text-blue-400">®</span></span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            <div className="relative" onMouseEnter={() => handleMouseEnter('features')} onMouseLeave={handleMouseLeave}>
              <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition rounded-lg ${activeDropdown === 'features' ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                Features
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="relative" onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={handleMouseLeave}>
              <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition rounded-lg ${activeDropdown === 'solutions' ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="relative" onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={handleMouseLeave}>
              <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition rounded-lg ${activeDropdown === 'resources' ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                Resources
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link href="/pricing" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">Pricing</Link>
            <Link href="#contact" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="https://app.wellplan.io" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg transition shadow-lg shadow-blue-500/25">
              <Zap className="w-4 h-4" />
              Try WellPlan - It's Free
            </Link>
            <Link href="https://app.wellplan.io" target="_blank" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition">Login</Link>
          </div>

          <button className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {activeDropdown && (
        <div className="absolute left-1/2 -translate-x-1/2 top-16 pt-2" onMouseEnter={() => handleMouseEnter(activeDropdown)} onMouseLeave={handleMouseLeave}>
          <div className="bg-[#0f1115] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
            {activeDropdown === 'features' && <FeaturesDropdown />}
            {activeDropdown === 'solutions' && <SolutionsDropdown />}
            {activeDropdown === 'resources' && <ResourcesDropdown />}
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-white/5 px-4 py-4 space-y-1">
          <Link href="/features" className="block px-4 py-3 text-gray-300 font-medium hover:bg-white/5 rounded-lg" onClick={() => setMobileOpen(false)}>Features</Link>
          <Link href="/industries" className="block px-4 py-3 text-gray-300 font-medium hover:bg-white/5 rounded-lg" onClick={() => setMobileOpen(false)}>Solutions</Link>
          <Link href="/pricing" className="block px-4 py-3 text-gray-300 font-medium hover:bg-white/5 rounded-lg" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
            <Link href="https://app.wellplan.io" className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg" onClick={() => setMobileOpen(false)}>
              <Zap className="w-4 h-4" />Try Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function FeaturesDropdown() {
  return (
    <div className="flex" style={{ width: '820px' }}>
      <div className="flex-1 p-5 grid grid-cols-2 gap-3">
        <Link href="/features/shared-inbox" className="group p-5 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] rounded-xl hover:border-blue-500/40 transition">
          <h3 className="font-semibold text-white text-[15px] mb-1 group-hover:text-blue-400">Shared Team Inbox</h3>
          <p className="text-gray-500 text-xs">All channels unified</p>
          <div className="mt-4 flex gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center"><MessageSquare className="w-4 h-4 text-blue-400" /></div>
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-sm">💬</div>
            <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-sm">📸</div>
          </div>
        </Link>

        <Link href="/features/ai-lead-bot" className="group p-5 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] rounded-xl hover:border-purple-500/40 transition">
          <h3 className="font-semibold text-white text-[15px] mb-1 group-hover:text-purple-400">AI Lead Bot</h3>
          <p className="text-gray-500 text-xs">24/7 qualification</p>
          <div className="mt-4 flex justify-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
              <Bot className="w-7 h-7 text-purple-400" />
            </div>
          </div>
        </Link>

        <Link href="/features/automation-flows" className="group p-5 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] rounded-xl hover:border-emerald-500/40 transition col-span-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-white text-[15px] mb-1 group-hover:text-emerald-400">Automation Workflows</h3>
              <p className="text-gray-500 text-xs">Build powerful sequences without code</p>
            </div>
            <div className="flex gap-1.5">
              <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-medium">Email</span>
              <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-[10px] font-medium">SMS</span>
              <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-[10px] font-medium">WhatsApp</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="w-[220px] border-l border-white/[0.08] p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Connections</span>
        </div>
        {[{ n: 'WhatsApp', d: 'Official Business API', i: '💬' }, { n: 'Instagram', d: 'DMs & Comments', i: '📸' }, { n: 'Facebook', d: 'Messenger & Comments', i: '👤' }, { n: 'HubSpot', d: 'Sync your CRM', i: '🎯' }].map((item, idx) => (
          <Link key={idx} href={`/integrations/${item.n.toLowerCase()}`} className="flex items-center gap-2.5 py-2 hover:bg-white/[0.04] -mx-2 px-2 rounded-lg transition group">
            <span className="text-base">{item.i}</span>
            <div><p className="font-medium text-[13px] text-white group-hover:text-blue-400">{item.n}</p><p className="text-[10px] text-gray-600">{item.d}</p></div>
          </Link>
        ))}
        <Link href="/integrations" className="text-[11px] font-medium text-blue-400 hover:text-blue-300 mt-3 block">View all connections</Link>

        <div className="flex items-center gap-2 mt-6 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
          <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">More Features</span>
        </div>
        {['Broadcast Campaigns', 'Lead Scoring', 'Analytics Dashboard'].map((name, idx) => (
          <Link key={idx} href="/features" className="block py-1.5 text-[12px] text-gray-400 hover:text-white">{name}</Link>
        ))}
        <Link href="/features" className="text-[11px] font-medium text-blue-400 hover:text-blue-300 mt-3 block">See all features →</Link>
      </div>
    </div>
  );
}

function SolutionsDropdown() {
  return (
    <div className="flex" style={{ width: '780px' }}>
      <div className="w-[200px] p-5 border-r border-white/[0.08]">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
          <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">By Role</span>
        </div>
        {[{ n: 'For Agencies', d: 'White-label for clients', Icon: Building2, c: 'blue' }, { n: 'For Coaches', d: 'Scale 1:1 relationships', Icon: Target, c: 'purple' }, { n: 'For Sales Teams', d: 'Close deals faster', Icon: Briefcase, c: 'emerald' }].map((item, idx) => (
          <Link key={idx} href="/industries" className="flex items-center gap-3 py-2.5 hover:bg-white/[0.04] -mx-2 px-2 rounded-lg transition group">
            <div className={`w-8 h-8 rounded-lg bg-${item.c}-500/20 flex items-center justify-center`}><item.Icon className={`w-4 h-4 text-${item.c}-400`} /></div>
            <div><p className="font-medium text-[13px] text-white group-hover:text-blue-400">{item.n}</p><p className="text-[10px] text-gray-600">{item.d}</p></div>
          </Link>
        ))}
        <div className="flex items-center gap-2 mt-5 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
          <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Business Model</span>
        </div>
        {[{ n: 'For B2B', d: 'Enterprise sales cycles' }, { n: 'For B2C', d: 'Consumer engagement' }].map((item, idx) => (
          <Link key={idx} href="/industries" className="flex items-center gap-3 py-2 hover:bg-white/[0.04] -mx-2 px-2 rounded-lg transition group">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center"><Users className="w-4 h-4 text-orange-400" /></div>
            <div><p className="font-medium text-[13px] text-white group-hover:text-blue-400">{item.n}</p><p className="text-[10px] text-gray-600">{item.d}</p></div>
          </Link>
        ))}
      </div>

      <div className="flex-1 p-5 border-r border-white/[0.08]">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Popular Industries</span>
        </div>
        {[{ n: 'E-Commerce', d: 'Boost cart recovery', Icon: ShoppingCart, c: 'blue' }, { n: 'Real Estate', d: 'Never miss a lead', Icon: Home, c: 'emerald' }, { n: 'Healthcare', d: 'HIPAA-ready messaging', Icon: Stethoscope, c: 'red' }, { n: 'Education', d: 'Student & parent comms', Icon: GraduationCap, c: 'purple' }, { n: 'Restaurants', d: 'Reservations & promos', Icon: Utensils, c: 'orange' }, { n: 'Fitness', d: 'Class bookings', Icon: Dumbbell, c: 'pink' }].map((item, idx) => (
          <Link key={idx} href={`/industries/${item.n.toLowerCase().replace(' ', '-')}`} className="flex items-center gap-3 py-2 hover:bg-white/[0.04] -mx-2 px-2 rounded-lg transition group">
            <div className={`w-7 h-7 rounded-lg bg-${item.c}-500/20 flex items-center justify-center`}><item.Icon className={`w-3.5 h-3.5 text-${item.c}-400`} /></div>
            <div><p className="font-medium text-[13px] text-white group-hover:text-blue-400">{item.n}</p><p className="text-[10px] text-gray-600">{item.d}</p></div>
          </Link>
        ))}
      </div>

      <div className="w-[220px] p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
          <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Specialized</span>
        </div>
        {[{ n: 'Automotive', d: 'Dealership & service', Icon: Car }, { n: 'Professional Services', d: 'Law, accounting', Icon: Briefcase }].map((item, idx) => (
          <Link key={idx} href="/industries" className="flex items-center gap-3 py-2 hover:bg-white/[0.04] -mx-2 px-2 rounded-lg transition group">
            <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center"><item.Icon className="w-3.5 h-3.5 text-purple-400" /></div>
            <div><p className="font-medium text-[13px] text-white group-hover:text-blue-400">{item.n}</p><p className="text-[10px] text-gray-600">{item.d}</p></div>
          </Link>
        ))}

        <div className="mt-5 p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span className="text-[12px] font-semibold text-white">Don't see your industry?</span>
          </div>
          <p className="text-[11px] text-gray-400 mb-3">WellPlan adapts to any business.</p>
          <Link href="#demo" className="text-[11px] font-medium text-blue-400 hover:text-blue-300">Talk to an expert →</Link>
        </div>

        <Link href="/industries" className="flex items-center gap-2 mt-4 p-3 -mx-1 rounded-lg hover:bg-white/[0.04] transition group">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          <div><p className="font-medium text-[13px] text-white group-hover:text-blue-400">View all solutions</p><p className="text-[10px] text-gray-600">Explore catalog</p></div>
          <ChevronDown className="w-4 h-4 text-gray-500 -rotate-90 ml-auto" />
        </Link>
      </div>
    </div>
  );
}

function ResourcesDropdown() {
  const left = [{ n: 'Case Studies', d: 'Real customer results', Icon: BarChart3, c: 'emerald', h: '/case-studies' }, { n: 'Documentation', d: 'Guides and references', Icon: BookOpen, c: 'blue', h: '#docs' }, { n: 'Blog', d: 'Latest updates & tips', Icon: Newspaper, c: 'purple', h: '#blog' }, { n: 'ROI Calculator', d: 'Calculate your savings', Icon: Calculator, c: 'pink', h: '#calculator' }];
  const right = [{ n: 'Video Tutorials', d: 'Learn WellPlan', Icon: Play, c: 'red', h: '#tutorials' }, { n: 'API Reference', d: 'Build integrations', Icon: FileText, c: 'orange', h: '#api' }, { n: 'Help Center', d: 'FAQs and support', Icon: HelpCircle, c: 'cyan', h: '#help' }, { n: 'Book a Demo', d: 'Schedule walkthrough', Icon: Calendar, c: 'green', h: '#demo' }];

  return (
    <div className="flex p-5 gap-1" style={{ width: '580px' }}>
      <div className="flex-1 space-y-1">
        {left.map((item, idx) => (
          <Link key={idx} href={item.h} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition group">
            <div className={`w-9 h-9 rounded-lg bg-${item.c}-500/20 flex items-center justify-center`}><item.Icon className={`w-4 h-4 text-${item.c}-400`} /></div>
            <div><p className="font-medium text-[13px] text-white group-hover:text-blue-400">{item.n}</p><p className="text-[11px] text-gray-500">{item.d}</p></div>
          </Link>
        ))}
      </div>
      <div className="flex-1 space-y-1">
        {right.map((item, idx) => (
          <Link key={idx} href={item.h} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition group">
            <div className={`w-9 h-9 rounded-lg bg-${item.c}-500/20 flex items-center justify-center`}><item.Icon className={`w-4 h-4 text-${item.c}-400`} /></div>
            <div><p className="font-medium text-[13px] text-white group-hover:text-blue-400">{item.n}</p><p className="text-[11px] text-gray-500">{item.d}</p></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
