'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { ChevronDown, Zap, ArrowRight, BarChart3, BookOpen, FileText, Calculator, HelpCircle, Play, Newspaper, Calendar, Briefcase, GraduationCap, Stethoscope, Car, Utensils, Dumbbell, ShoppingCart, Home, Target, Building2, Users } from 'lucide-react';

// Brand colors: white (#FFFFFF) and blue (#214CE5)
const BRAND_BLUE = '#214CE5';

// Custom SVG Icons with brand colors
const CaptureIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <rect x="4" y="8" width="40" height="32" rx="4" stroke="white" strokeWidth="2.5" fill="none"/>
    <path d="M4 16h40" stroke="white" strokeWidth="2.5"/>
    <circle cx="10" cy="12" r="2" fill="#FF6B6B"/>
    <circle cx="16" cy="12" r="2" fill="#FFE66D"/>
    <circle cx="22" cy="12" r="2" fill="#4ECB71"/>
    <rect x="12" y="22" width="24" height="4" rx="2" fill="white" fillOpacity="0.6"/>
    <rect x="12" y="30" width="16" height="4" rx="2" fill={BRAND_BLUE}/>
    <path d="M32 28l6 6m0-6l-6 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const NurtureIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <path d="M8 12h32v24c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V12z" stroke="white" strokeWidth="2.5" fill="none"/>
    <path d="M8 12l16 14 16-14" stroke="white" strokeWidth="2.5" fill="none"/>
    <circle cx="36" cy="12" r="8" fill={BRAND_BLUE} stroke="white" strokeWidth="2"/>
    <path d="M36 8v8m-4-4h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <circle cx="24" cy="24" r="18" stroke="white" strokeWidth="2.5" fill="none"/>
    <path d="M24 14v12l8 4" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="6" fill={BRAND_BLUE}/>
    <path d="M20 24l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Integration Icons (branded versions)
const WhatsAppIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const MessengerIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z"/>
  </svg>
);

const GoogleIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const StripeIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
  </svg>
);

const CalendarIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width={size} height={size}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
  </svg>
);

const EmailIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const SMSIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
  </svg>
);

const PipelineIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
  </svg>
);

const FormIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"/>
  </svg>
);

const BotIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
    <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2M7.5 13A2.5 2.5 0 005 15.5 2.5 2.5 0 007.5 18a2.5 2.5 0 002.5-2.5A2.5 2.5 0 007.5 13m9 0a2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 002.5 2.5 2.5 2.5 0 002.5-2.5 2.5 2.5 0 00-2.5-2.5z"/>
  </svg>
);

const AutomationIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

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
            <div className="w-9 h-9 bg-gradient-to-br from-[#214CE5] to-[#1a3db8] rounded-xl flex items-center justify-center shadow-lg shadow-[#214CE5]/30">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">wellplan<span className="text-[#214CE5]">®</span></span>
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
            <Link href="https://app.wellplan.io" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] hover:from-[#1a3db8] hover:to-[#14308f] text-white text-sm font-semibold rounded-lg transition shadow-lg shadow-[#214CE5]/30">
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
          <div className="pt-4 mt-4 border-t border-white/10">
            <Link href="https://app.wellplan.io" className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#214CE5] text-white font-semibold rounded-lg" onClick={() => setMobileOpen(false)}>
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
    <div className="flex" style={{ width: '920px' }}>
      {/* 3 Pillars */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-4">
          {/* CAPTURE */}
          <div className="group">
            <div className="p-5 bg-gradient-to-br from-[#214CE5]/20 to-[#214CE5]/5 border border-[#214CE5]/30 rounded-2xl hover:border-[#214CE5]/60 transition-all hover:shadow-lg hover:shadow-[#214CE5]/20">
              <div className="w-16 h-16 mb-4 mx-auto">
                <CaptureIcon />
              </div>
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#214CE5]/20 text-[#6B8EFF] text-[10px] font-bold uppercase tracking-wider mb-2">Step 1</span>
                <h3 className="font-bold text-white text-lg">CAPTURE</h3>
                <p className="text-gray-500 text-xs mt-1">Attract & collect leads</p>
              </div>
              <div className="space-y-2">
                <Link href="/features/forms" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition group/item">
                  <div className="w-7 h-7 rounded-lg bg-[#214CE5]/30 flex items-center justify-center">
                    <FormIcon size={14} />
                  </div>
                  <span className="text-xs text-gray-400 group-hover/item:text-white">Forms & Surveys</span>
                </Link>
                <Link href="/features/landing-pages" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition group/item">
                  <div className="w-7 h-7 rounded-lg bg-[#214CE5]/30 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" width={14} height={14}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/></svg>
                  </div>
                  <span className="text-xs text-gray-400 group-hover/item:text-white">Landing Pages</span>
                </Link>
                <Link href="/features/chat-widget" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition group/item">
                  <div className="w-7 h-7 rounded-lg bg-[#214CE5]/30 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" width={14} height={14}><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                  </div>
                  <span className="text-xs text-gray-400 group-hover/item:text-white">Chat Widget</span>
                </Link>
              </div>
            </div>
          </div>

          {/* NURTURE */}
          <div className="group">
            <div className="p-5 bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-2xl hover:border-purple-500/60 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-16 h-16 mb-4 mx-auto">
                <NurtureIcon />
              </div>
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-wider mb-2">Step 2</span>
                <h3 className="font-bold text-white text-lg">NURTURE</h3>
                <p className="text-gray-500 text-xs mt-1">Engage & build trust</p>
              </div>
              <div className="space-y-2">
                <Link href="/features/email" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition group/item">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/30 flex items-center justify-center">
                    <EmailIcon size={14} />
                  </div>
                  <span className="text-xs text-gray-400 group-hover/item:text-white">Email Campaigns</span>
                </Link>
                <Link href="/features/sms" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition group/item">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/30 flex items-center justify-center">
                    <SMSIcon size={14} />
                  </div>
                  <span className="text-xs text-gray-400 group-hover/item:text-white">SMS Marketing</span>
                </Link>
                <Link href="/features/automation" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition group/item">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/30 flex items-center justify-center">
                    <AutomationIcon size={14} />
                  </div>
                  <span className="text-xs text-gray-400 group-hover/item:text-white">Workflow Automation</span>
                </Link>
              </div>
            </div>
          </div>

          {/* CLOSE */}
          <div className="group">
            <div className="p-5 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30 rounded-2xl hover:border-emerald-500/60 transition-all hover:shadow-lg hover:shadow-emerald-500/20">
              <div className="w-16 h-16 mb-4 mx-auto">
                <CloseIcon />
              </div>
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-2">Step 3</span>
                <h3 className="font-bold text-white text-lg">CLOSE</h3>
                <p className="text-gray-500 text-xs mt-1">Convert & get paid</p>
              </div>
              <div className="space-y-2">
                <Link href="/features/crm" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition group/item">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/30 flex items-center justify-center">
                    <PipelineIcon size={14} />
                  </div>
                  <span className="text-xs text-gray-400 group-hover/item:text-white">CRM & Pipeline</span>
                </Link>
                <Link href="/features/booking" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition group/item">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/30 flex items-center justify-center">
                    <CalendarIcon size={14} />
                  </div>
                  <span className="text-xs text-gray-400 group-hover/item:text-white">Calendar Booking</span>
                </Link>
                <Link href="/features/payments" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition group/item">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/30 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" width={14} height={14}><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                  </div>
                  <span className="text-xs text-gray-400 group-hover/item:text-white">Payments & Invoicing</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* AI Bot Banner */}
        <Link href="/features/ai-bot" className="mt-4 flex items-center justify-between p-4 bg-gradient-to-r from-[#214CE5]/10 via-purple-500/10 to-emerald-500/10 border border-white/10 rounded-xl hover:border-[#214CE5]/40 transition group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#214CE5] to-purple-500 flex items-center justify-center shadow-lg shadow-[#214CE5]/30">
              <BotIcon size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-white">AI Lead Bot</h4>
                <span className="px-2 py-0.5 rounded bg-[#214CE5]/20 text-[#6B8EFF] text-[10px] font-bold">NEW</span>
              </div>
              <p className="text-xs text-gray-500">24/7 AI that qualifies leads, books appointments, and closes deals</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#214CE5] group-hover:translate-x-1 transition-all" />
        </Link>
      </div>

      {/* Integrations Sidebar */}
      <div className="w-[240px] border-l border-white/[0.08] p-5 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-2 h-2 rounded-full bg-[#214CE5]"></div>
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">Integrations</span>
        </div>
        
        <div className="grid grid-cols-4 gap-2 mb-5">
          <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 flex items-center justify-center hover:bg-[#25D366]/30 transition cursor-pointer group" title="WhatsApp">
            <WhatsAppIcon size={20} />
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 flex items-center justify-center hover:from-[#833AB4]/30 hover:via-[#FD1D1D]/30 hover:to-[#F77737]/30 transition cursor-pointer" title="Instagram">
            <InstagramIcon size={20} />
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#1877F2]/20 flex items-center justify-center hover:bg-[#1877F2]/30 transition cursor-pointer" title="Facebook">
            <FacebookIcon size={20} />
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#0084FF]/20 flex items-center justify-center hover:bg-[#0084FF]/30 transition cursor-pointer" title="Messenger">
            <MessengerIcon size={20} />
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition cursor-pointer" title="Google">
            <GoogleIcon size={20} />
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#635BFF]/20 flex items-center justify-center hover:bg-[#635BFF]/30 transition cursor-pointer" title="Stripe">
            <StripeIcon size={20} />
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#FF4F00]/20 flex items-center justify-center hover:bg-[#FF4F00]/30 transition cursor-pointer" title="Zapier">
            <svg viewBox="0 0 24 24" fill="white" width={20} height={20}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.08h-3.19c-.18.792-.508 1.524-.96 2.172l2.256 2.256-1.414 1.414-2.256-2.256a6.008 6.008 0 01-2.172.96v3.19h-2v-3.19a6.008 6.008 0 01-2.172-.96l-2.256 2.256-1.414-1.414 2.256-2.256a6.008 6.008 0 01-.96-2.172h-3.19v-2h3.19c.18-.792.508-1.524.96-2.172L4.316 7.652l1.414-1.414 2.256 2.256a6.008 6.008 0 012.172-.96v-3.19h2v3.19c.792.18 1.524.508 2.172.96l2.256-2.256 1.414 1.414-2.256 2.256c.452.648.78 1.38.96 2.172h3.19v2z"/></svg>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#214CE5]/20 flex items-center justify-center hover:bg-[#214CE5]/30 transition cursor-pointer" title="More">
            <span className="text-white text-xs font-bold">50+</span>
          </div>
        </div>

        <Link href="/integrations" className="flex items-center gap-2 text-[11px] font-semibold text-[#214CE5] hover:text-[#6B8EFF] transition mb-6">
          View all integrations
          <ArrowRight className="w-3 h-3" />
        </Link>

        <div className="border-t border-white/10 pt-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <span className="text-[11px] font-bold text-white uppercase tracking-wider">Quick Links</span>
          </div>
          <Link href="/features" className="block py-2 text-[12px] text-gray-400 hover:text-white hover:translate-x-1 transition-all">→ All Features</Link>
          <Link href="/features/shared-inbox" className="block py-2 text-[12px] text-gray-400 hover:text-white hover:translate-x-1 transition-all">→ Shared Inbox</Link>
          <Link href="/features/analytics" className="block py-2 text-[12px] text-gray-400 hover:text-white hover:translate-x-1 transition-all">→ Analytics & Reports</Link>
          <Link href="/features/broadcasts" className="block py-2 text-[12px] text-gray-400 hover:text-white hover:translate-x-1 transition-all">→ Broadcast Campaigns</Link>
        </div>
      </div>
    </div>
  );
}

function SolutionsDropdown() {
  return (
    <div className="flex" style={{ width: '800px' }}>
      <div className="w-[220px] p-5 border-r border-white/[0.08]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#214CE5]"></div>
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">By Role</span>
        </div>
        <Link href="/industries/agencies" className="flex items-center gap-3 py-3 hover:bg-white/[0.04] -mx-2 px-2 rounded-lg transition group">
          <div className="w-10 h-10 rounded-xl bg-[#214CE5]/20 flex items-center justify-center group-hover:bg-[#214CE5]/30 transition">
            <Building2 className="w-5 h-5 text-[#6B8EFF]" />
          </div>
          <div>
            <p className="font-semibold text-[13px] text-white group-hover:text-[#6B8EFF]">For Agencies</p>
            <p className="text-[10px] text-gray-600">White-label for clients</p>
          </div>
        </Link>
        <Link href="/industries/coaching" className="flex items-center gap-3 py-3 hover:bg-white/[0.04] -mx-2 px-2 rounded-lg transition group">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition">
            <Target className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <p className="font-semibold text-[13px] text-white group-hover:text-purple-400">For Coaches</p>
            <p className="text-[10px] text-gray-600">Scale 1:1 relationships</p>
          </div>
        </Link>
        <Link href="/industries/sales" className="flex items-center gap-3 py-3 hover:bg-white/[0.04] -mx-2 px-2 rounded-lg transition group">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition">
            <Briefcase className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="font-semibold text-[13px] text-white group-hover:text-emerald-400">For Sales Teams</p>
            <p className="text-[10px] text-gray-600">Close deals faster</p>
          </div>
        </Link>

        <div className="border-t border-white/10 mt-4 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
            <span className="text-[11px] font-bold text-white uppercase tracking-wider">Business</span>
          </div>
          <Link href="/industries/b2b" className="flex items-center gap-3 py-2 hover:bg-white/[0.04] -mx-2 px-2 rounded-lg transition group">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <Users className="w-4 h-4 text-orange-400" />
            </div>
            <span className="text-[12px] text-gray-400 group-hover:text-white">B2B Sales</span>
          </Link>
          <Link href="/industries/b2c" className="flex items-center gap-3 py-2 hover:bg-white/[0.04] -mx-2 px-2 rounded-lg transition group">
            <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
              <Users className="w-4 h-4 text-pink-400" />
            </div>
            <span className="text-[12px] text-gray-400 group-hover:text-white">B2C Engagement</span>
          </Link>
        </div>
      </div>

      <div className="flex-1 p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">Popular Industries</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/industries/ecommerce" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition group">
            <div className="w-10 h-10 rounded-xl bg-[#214CE5]/20 flex items-center justify-center group-hover:scale-110 transition">
              <ShoppingCart className="w-5 h-5 text-[#6B8EFF]" />
            </div>
            <div>
              <p className="font-semibold text-[13px] text-white">E-Commerce</p>
              <p className="text-[10px] text-gray-600">Cart recovery & support</p>
            </div>
          </Link>
          <Link href="/industries/real-estate" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition">
              <Home className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="font-semibold text-[13px] text-white">Real Estate</p>
              <p className="text-[10px] text-gray-600">Never miss a lead</p>
            </div>
          </Link>
          <Link href="/industries/healthcare" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition group">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center group-hover:scale-110 transition">
              <Stethoscope className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="font-semibold text-[13px] text-white">Healthcare</p>
              <p className="text-[10px] text-gray-600">HIPAA-ready messaging</p>
            </div>
          </Link>
          <Link href="/industries/education" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition group">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition">
              <GraduationCap className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="font-semibold text-[13px] text-white">Education</p>
              <p className="text-[10px] text-gray-600">Student engagement</p>
            </div>
          </Link>
          <Link href="/industries/restaurants" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition group">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition">
              <Utensils className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="font-semibold text-[13px] text-white">Restaurants</p>
              <p className="text-[10px] text-gray-600">Reservations & promos</p>
            </div>
          </Link>
          <Link href="/industries/fitness" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition group">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition">
              <Dumbbell className="w-5 h-5 text-pink-400" />
            </div>
            <div>
              <p className="font-semibold text-[13px] text-white">Fitness</p>
              <p className="text-[10px] text-gray-600">Class bookings</p>
            </div>
          </Link>
          <Link href="/industries/automotive" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition">
              <Car className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <p className="font-semibold text-[13px] text-white">Automotive</p>
              <p className="text-[10px] text-gray-600">Dealership & service</p>
            </div>
          </Link>
          <Link href="/industries/professional-services" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition group">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center group-hover:scale-110 transition">
              <Briefcase className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <p className="font-semibold text-[13px] text-white">Professional Services</p>
              <p className="text-[10px] text-gray-600">Law, accounting & more</p>
            </div>
          </Link>
        </div>

        <div className="mt-4 p-4 bg-gradient-to-r from-[#214CE5]/10 to-purple-500/10 border border-[#214CE5]/20 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#214CE5]/30 flex items-center justify-center">
                <span className="text-lg">🎯</span>
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Don't see your industry?</p>
                <p className="text-[11px] text-gray-500">WellPlan adapts to any business model</p>
              </div>
            </div>
            <Link href="#demo" className="px-4 py-2 bg-[#214CE5] hover:bg-[#1a3db8] text-white text-xs font-semibold rounded-lg transition">
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourcesDropdown() {
  return (
    <div className="flex p-6 gap-6" style={{ width: '640px' }}>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#214CE5]"></div>
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">Learn</span>
        </div>
        <Link href="/case-studies" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.04] transition group">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="font-semibold text-[13px] text-white group-hover:text-[#6B8EFF]">Case Studies</p>
            <p className="text-[11px] text-gray-500">Real customer results</p>
          </div>
        </Link>
        <Link href="https://knowledge.wellplan.io/kb" target="_blank" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.04] transition group">
          <div className="w-10 h-10 rounded-xl bg-[#214CE5]/20 flex items-center justify-center group-hover:scale-110 transition">
            <BookOpen className="w-5 h-5 text-[#6B8EFF]" />
          </div>
          <div>
            <p className="font-semibold text-[13px] text-white group-hover:text-[#6B8EFF]">Documentation</p>
            <p className="text-[11px] text-gray-500">Guides and references</p>
          </div>
        </Link>
        <Link href="/blog" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.04] transition group">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition">
            <Newspaper className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <p className="font-semibold text-[13px] text-white group-hover:text-purple-400">Blog</p>
            <p className="text-[11px] text-gray-500">Latest updates & tips</p>
          </div>
        </Link>
        <Link href="/roi-calculator" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.04] transition group">
          <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition">
            <Calculator className="w-5 h-5 text-pink-400" />
          </div>
          <div>
            <p className="font-semibold text-[13px] text-white group-hover:text-pink-400">ROI Calculator</p>
            <p className="text-[11px] text-gray-500">Calculate your savings</p>
          </div>
        </Link>
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">Support</span>
        </div>
        <Link href="https://www.youtube.com/playlist?list=PLcZ6Hm093rEIL4yidwy2fDCCkImFLcn7K" target="_blank" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.04] transition group">
          <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center group-hover:scale-110 transition">
            <Play className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <p className="font-semibold text-[13px] text-white group-hover:text-red-400">Video Tutorials</p>
            <p className="text-[11px] text-gray-500">Learn WellPlan</p>
          </div>
        </Link>
        <Link href="https://marketplace.gohighlevel.com/docs/" target="_blank" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.04] transition group">
          <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition">
            <FileText className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <p className="font-semibold text-[13px] text-white group-hover:text-orange-400">API Reference</p>
            <p className="text-[11px] text-gray-500">Build integrations</p>
          </div>
        </Link>
        <Link href="https://help.leadconnectorhq.com/support/home" target="_blank" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.04] transition group">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition">
            <HelpCircle className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <p className="font-semibold text-[13px] text-white group-hover:text-cyan-400">Help Center</p>
            <p className="text-[11px] text-gray-500">FAQs and support</p>
          </div>
        </Link>
        <Link href="/demo" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.04] transition group">
          <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition">
            <Calendar className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <p className="font-semibold text-[13px] text-white group-hover:text-green-400">Book a Demo</p>
            <p className="text-[11px] text-gray-500">Schedule walkthrough</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
