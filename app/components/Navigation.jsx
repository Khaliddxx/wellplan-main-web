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

const TelegramIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const ZapierIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="#FF4F00" width={size} height={size}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.08h-3.19c-.18.792-.508 1.524-.96 2.172l2.256 2.256-1.414 1.414-2.256-2.256a6.008 6.008 0 01-2.172.96v3.19h-2v-3.19a6.008 6.008 0 01-2.172-.96l-2.256 2.256-1.414-1.414 2.256-2.256a6.008 6.008 0 01-.96-2.172h-3.19v-2h3.19c.18-.792.508-1.524.96-2.172L4.316 7.652l1.414-1.414 2.256 2.256a6.008 6.008 0 012.172-.96v-3.19h2v3.19c.792.18 1.524.508 2.172.96l2.256-2.256 1.414 1.414-2.256 2.256c.452.648.78 1.38.96 2.172h3.19v2z"/>
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
          <Link 
            href="/" 
            className="flex items-center"
            onClick={() => {
              setActiveDropdown(null);
              setMobileOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src="/Frame 69.png" alt="WellPlan" className="h-8" />
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
            {activeDropdown === 'features' && <FeaturesDropdown onClose={() => setActiveDropdown(null)} />}
            {activeDropdown === 'solutions' && <SolutionsDropdown onClose={() => setActiveDropdown(null)} />}
            {activeDropdown === 'resources' && <ResourcesDropdown onClose={() => setActiveDropdown(null)} />}
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-white/5 px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {/* Features */}
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Features</div>
          <Link href="/features/capturing" className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg" onClick={() => setMobileOpen(false)}>
            <span className="text-[#214CE5] mr-2">●</span> Capture Leads
          </Link>
          <Link href="/features/nurturing" className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg" onClick={() => setMobileOpen(false)}>
            <span className="text-purple-400 mr-2">●</span> Nurture Contacts
          </Link>
          <Link href="/features/closing" className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg" onClick={() => setMobileOpen(false)}>
            <span className="text-emerald-400 mr-2">●</span> Close Deals
          </Link>
          
          {/* Solutions */}
          <div className="px-4 py-2 mt-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Solutions</div>
          <Link href="/solutions/agencies" className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg" onClick={() => setMobileOpen(false)}>For Agencies</Link>
          <Link href="/solutions/coaches" className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg" onClick={() => setMobileOpen(false)}>For Coaches</Link>
          <Link href="/solutions/sales-teams" className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg" onClick={() => setMobileOpen(false)}>For Sales Teams</Link>
          
          {/* Resources */}
          <div className="px-4 py-2 mt-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Resources</div>
          <Link href="/integrations" className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg" onClick={() => setMobileOpen(false)}>Integrations</Link>
          <Link href="/blog" className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/demo" className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg" onClick={() => setMobileOpen(false)}>Book a Demo</Link>
          
          {/* Main Links */}
          <div className="px-4 py-2 mt-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Company</div>
          <Link href="/pricing" className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <a href="https://help.leadconnectorhq.com/support/home" target="_blank" className="block px-4 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg" onClick={() => setMobileOpen(false)}>Support</a>
          
          {/* CTA */}
          <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
            <Link href="https://app.wellplan.io" target="_blank" className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#214CE5] text-white font-semibold rounded-lg" onClick={() => setMobileOpen(false)}>
              <Zap className="w-4 h-4" />Start Free Trial
            </Link>
            <Link href="https://app.wellplan.io" target="_blank" className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-white/10 text-gray-300 font-medium rounded-lg" onClick={() => setMobileOpen(false)}>
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function FeaturesDropdown({ onClose }) {
  return (
    <div className="flex" style={{ width: '920px' }}>
      {/* 3 Pillars */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-4">
          {/* CAPTURE */}
          <Link href="/features/capturing" onClick={onClose} className="group block">
            <div className="p-5 bg-gradient-to-br from-[#214CE5]/20 to-[#214CE5]/5 border border-[#214CE5]/30 rounded-2xl hover:border-[#214CE5]/60 transition-all hover:shadow-lg hover:shadow-[#214CE5]/20">
              <div className="block text-center mb-4 group/header">
                <div className="w-16 h-16 mb-4 mx-auto group-hover/header:scale-110 transition">
                  <CaptureIcon />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#214CE5]/20 text-[#6B8EFF] text-[10px] font-bold uppercase tracking-wider mb-2">Step 1</span>
                <h3 className="font-bold text-white text-lg group-hover:text-[#6B8EFF] transition">CAPTURE</h3>
                <p className="text-gray-500 text-xs mt-1">Attract & collect leads</p>
              </div>
              <div className="flex items-center justify-center gap-1 mt-4 pt-3 border-t border-[#214CE5]/20 text-[11px] font-semibold text-[#6B8EFF] group-hover:text-white transition">
                Explore Capture <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>

          {/* NURTURE */}
          <Link href="/features/nurturing" onClick={onClose} className="group block">
            <div className="p-5 bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-2xl hover:border-purple-500/60 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <div className="block text-center mb-4">
                <div className="w-16 h-16 mb-4 mx-auto group-hover:scale-110 transition">
                  <NurtureIcon />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-wider mb-2">Step 2</span>
                <h3 className="font-bold text-white text-lg group-hover:text-purple-400 transition">NURTURE</h3>
                <p className="text-gray-500 text-xs mt-1">Engage & build trust</p>
              </div>
              <div className="flex items-center justify-center gap-1 mt-4 pt-3 border-t border-purple-500/20 text-[11px] font-semibold text-purple-400 group-hover:text-white transition">
                Explore Nurture <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>

          {/* CLOSE */}
          <Link href="/features/closing" onClick={onClose} className="group block">
            <div className="p-5 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30 rounded-2xl hover:border-emerald-500/60 transition-all hover:shadow-lg hover:shadow-emerald-500/20">
              <div className="block text-center mb-4">
                <div className="w-16 h-16 mb-4 mx-auto group-hover:scale-110 transition">
                  <CloseIcon />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-2">Step 3</span>
                <h3 className="font-bold text-white text-lg group-hover:text-emerald-400 transition">CLOSE</h3>
                <p className="text-gray-500 text-xs mt-1">Convert & get paid</p>
              </div>
              <div className="flex items-center justify-center gap-1 mt-4 pt-3 border-t border-emerald-500/20 text-[11px] font-semibold text-emerald-400 group-hover:text-white transition">
                Explore Close <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
        </div>

        {/* AI Bot Banner */}
        <Link onClick={onClose} href="/features/ai-bot" className="mt-4 flex items-center justify-between p-4 bg-gradient-to-r from-[#214CE5]/10 via-purple-500/10 to-emerald-500/10 border border-white/10 rounded-xl hover:border-[#214CE5]/40 transition group">
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
          <Link onClick={onClose} href="/integrations/whatsapp" className="w-10 h-10 rounded-xl bg-[#25D366]/20 flex items-center justify-center hover:bg-[#25D366]/30 transition" title="WhatsApp">
            <svg viewBox="0 0 24 24" fill="#25D366" width={20} height={20}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </Link>
          <Link onClick={onClose} href="/integrations/telegram" className="w-10 h-10 rounded-xl bg-[#0088cc]/20 flex items-center justify-center hover:bg-[#0088cc]/30 transition" title="Telegram">
            <svg viewBox="0 0 24 24" fill="#0088cc" width={20} height={20}><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          </Link>
          <Link onClick={onClose} href="/integrations/instagram" className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 flex items-center justify-center hover:from-[#833AB4]/30 hover:via-[#FD1D1D]/30 hover:to-[#F77737]/30 transition" title="Instagram">
            <svg viewBox="0 0 24 24" width={20} height={20}><defs><linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#F77737"/><stop offset="50%" stopColor="#FD1D1D"/><stop offset="100%" stopColor="#833AB4"/></linearGradient></defs><path fill="url(#ig)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </Link>
          <Link onClick={onClose} href="/integrations/facebook-messenger" className="w-10 h-10 rounded-xl bg-[#0084FF]/20 flex items-center justify-center hover:bg-[#0084FF]/30 transition" title="Messenger">
            <svg viewBox="0 0 24 24" fill="#0084FF" width={20} height={20}><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z"/></svg>
          </Link>
          <Link onClick={onClose} href="/integrations/google" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition" title="Google">
            <svg viewBox="0 0 24 24" width={20} height={20}><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          </Link>
          <Link onClick={onClose} href="/integrations/stripe" className="w-10 h-10 rounded-xl bg-[#635BFF]/20 flex items-center justify-center hover:bg-[#635BFF]/30 transition" title="Stripe">
            <svg viewBox="0 0 24 24" fill="#635BFF" width={20} height={20}><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/></svg>
          </Link>
          <Link onClick={onClose} href="/integrations/zapier" className="w-10 h-10 rounded-xl bg-[#FF4F00]/20 flex items-center justify-center hover:bg-[#FF4F00]/30 transition" title="Zapier">
            <svg viewBox="0 0 24 24" fill="#FF4F00" width={20} height={20}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.08h-3.19c-.18.792-.508 1.524-.96 2.172l2.256 2.256-1.414 1.414-2.256-2.256a6.008 6.008 0 01-2.172.96v3.19h-2v-3.19a6.008 6.008 0 01-2.172-.96l-2.256 2.256-1.414-1.414 2.256-2.256a6.008 6.008 0 01-.96-2.172h-3.19v-2h3.19c.18-.792.508-1.524.96-2.172L4.316 7.652l1.414-1.414 2.256 2.256a6.008 6.008 0 012.172-.96v-3.19h2v3.19c.792.18 1.524.508 2.172.96l2.256-2.256 1.414 1.414-2.256 2.256c.452.648.78 1.38.96 2.172h3.19v2z"/></svg>
          </Link>
          <Link onClick={onClose} href="/integrations" className="w-10 h-10 rounded-xl bg-[#214CE5]/20 flex items-center justify-center hover:bg-[#214CE5]/30 transition" title="More">
            <span className="text-white text-xs font-bold">50+</span>
          </Link>
        </div>

        <Link onClick={onClose} href="/integrations" className="flex items-center gap-2 text-[11px] font-semibold text-[#214CE5] hover:text-[#6B8EFF] transition mb-6">
          View all integrations
          <ArrowRight className="w-3 h-3" />
        </Link>

        <div className="border-t border-white/10 pt-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <span className="text-[11px] font-bold text-white uppercase tracking-wider">Quick Links</span>
          </div>
          <Link onClick={onClose} href="/features" className="block py-2 text-[12px] text-gray-400 hover:text-white hover:translate-x-1 transition-all">→ All Features</Link>
          <Link onClick={onClose} href="/features/shared-inbox" className="block py-2 text-[12px] text-gray-400 hover:text-white hover:translate-x-1 transition-all">→ Shared Inbox</Link>
          <Link onClick={onClose} href="/features/analytics" className="block py-2 text-[12px] text-gray-400 hover:text-white hover:translate-x-1 transition-all">→ Analytics & Reports</Link>
          <Link onClick={onClose} href="/features/broadcasts" className="block py-2 text-[12px] text-gray-400 hover:text-white hover:translate-x-1 transition-all">→ Broadcast Campaigns</Link>
        </div>
      </div>
    </div>
  );
}

function SolutionsDropdown({ onClose }) {
  return (
    <div className="flex" style={{ width: '920px' }}>
      {/* 3 Main Pillars - Agencies, Coaches, Sales Teams */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-4">
          {/* FOR AGENCIES */}
          <Link onClick={onClose} href="/solutions/agencies" className="group">
            <div className="p-5 bg-gradient-to-br from-[#214CE5]/20 to-[#214CE5]/5 border border-[#214CE5]/30 rounded-2xl hover:border-[#214CE5]/60 transition-all hover:shadow-lg hover:shadow-[#214CE5]/20 h-full">
              <div className="w-14 h-14 mb-4 mx-auto rounded-2xl bg-[#214CE5]/30 flex items-center justify-center group-hover:scale-110 transition">
                <Building2 className="w-7 h-7 text-[#6B8EFF]" />
              </div>
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#214CE5]/20 text-[#6B8EFF] text-[10px] font-bold uppercase tracking-wider mb-2">Most Popular</span>
                <h3 className="font-bold text-white text-lg">For Agencies</h3>
                <p className="text-gray-500 text-xs mt-1">White-label for your clients</p>
              </div>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-[#6B8EFF]">✓</span> Unlimited sub-accounts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#6B8EFF]">✓</span> Custom branding
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#6B8EFF]">✓</span> Reseller pricing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#6B8EFF]">✓</span> Client dashboards
                </li>
              </ul>
            </div>
          </Link>

          {/* FOR COACHES */}
          <Link onClick={onClose} href="/solutions/coaches" className="group">
            <div className="p-5 bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-2xl hover:border-purple-500/60 transition-all hover:shadow-lg hover:shadow-purple-500/20 h-full">
              <div className="w-14 h-14 mb-4 mx-auto rounded-2xl bg-purple-500/30 flex items-center justify-center group-hover:scale-110 transition">
                <Target className="w-7 h-7 text-purple-400" />
              </div>
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-wider mb-2">Scale Fast</span>
                <h3 className="font-bold text-white text-lg">For Coaches</h3>
                <p className="text-gray-500 text-xs mt-1">Scale 1:1 relationships</p>
              </div>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span> Automated follow-ups
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span> Course & membership
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span> Calendar booking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span> Community features
                </li>
              </ul>
            </div>
          </Link>

          {/* FOR SALES TEAMS */}
          <Link onClick={onClose} href="/solutions/sales-teams" className="group">
            <div className="p-5 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30 rounded-2xl hover:border-emerald-500/60 transition-all hover:shadow-lg hover:shadow-emerald-500/20 h-full">
              <div className="w-14 h-14 mb-4 mx-auto rounded-2xl bg-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition">
                <Briefcase className="w-7 h-7 text-emerald-400" />
              </div>
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-2">Close Faster</span>
                <h3 className="font-bold text-white text-lg">For Sales Teams</h3>
                <p className="text-gray-500 text-xs mt-1">Close more deals faster</p>
              </div>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Pipeline management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Team collaboration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Lead scoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Performance analytics
                </li>
              </ul>
            </div>
          </Link>
        </div>

        {/* CTA Banner */}
        <Link onClick={onClose} href="/demo" className="mt-4 flex items-center justify-between p-4 bg-gradient-to-r from-[#214CE5]/10 via-purple-500/10 to-emerald-500/10 border border-white/10 rounded-xl hover:border-[#214CE5]/40 transition group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#214CE5] to-purple-500 flex items-center justify-center shadow-lg shadow-[#214CE5]/30">
              <span className="text-xl">🎯</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-white">Not sure which is right for you?</h4>
              </div>
              <p className="text-xs text-gray-500">Book a free consultation — we'll help you choose</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#214CE5] group-hover:translate-x-1 transition-all" />
        </Link>
      </div>

      {/* Industries Sidebar */}
      <div className="w-[240px] border-l border-white/[0.08] p-5 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">Industries</span>
        </div>
        
        <div className="space-y-1 max-h-[280px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          <Link onClick={onClose} href="/industries/ecommerce" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.04] transition group">
            <div className="w-8 h-8 rounded-lg bg-[#214CE5]/20 flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-[#6B8EFF]" />
            </div>
            <span className="text-[12px] text-gray-400 group-hover:text-white">E-Commerce</span>
          </Link>
          <Link onClick={onClose} href="/industries/real-estate" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.04] transition group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Home className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="text-[12px] text-gray-400 group-hover:text-white">Real Estate</span>
          </Link>
          <Link onClick={onClose} href="/industries/healthcare" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.04] transition group">
            <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-red-400" />
            </div>
            <span className="text-[12px] text-gray-400 group-hover:text-white">Healthcare</span>
          </Link>
          <Link onClick={onClose} href="/industries/education" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.04] transition group">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-purple-400" />
            </div>
            <span className="text-[12px] text-gray-400 group-hover:text-white">Education</span>
          </Link>
          <Link onClick={onClose} href="/industries/restaurants" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.04] transition group">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <Utensils className="w-4 h-4 text-orange-400" />
            </div>
            <span className="text-[12px] text-gray-400 group-hover:text-white">Restaurants</span>
          </Link>
          <Link onClick={onClose} href="/industries/fitness" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.04] transition group">
            <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
              <Dumbbell className="w-4 h-4 text-pink-400" />
            </div>
            <span className="text-[12px] text-gray-400 group-hover:text-white">Fitness</span>
          </Link>
          <Link onClick={onClose} href="/industries/automotive" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.04] transition group">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <Car className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-[12px] text-gray-400 group-hover:text-white">Automotive</span>
          </Link>
          <Link onClick={onClose} href="/industries/professional-services" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.04] transition group">
            <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-violet-400" />
            </div>
            <span className="text-[12px] text-gray-400 group-hover:text-white">Professional Services</span>
          </Link>
        </div>

        <Link onClick={onClose} href="/industries" className="flex items-center gap-2 text-[11px] font-semibold text-[#214CE5] hover:text-[#6B8EFF] transition mt-4 pt-4 border-t border-white/10">
          View all industries
          <ArrowRight className="w-3 h-3" />
        </Link>

        <div className="border-t border-white/10 mt-4 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
            <span className="text-[11px] font-bold text-white uppercase tracking-wider">Business Type</span>
          </div>
          <Link onClick={onClose} href="/solutions/b2b" className="block py-2 text-[12px] text-gray-400 hover:text-white hover:translate-x-1 transition-all">→ B2B Sales</Link>
          <Link onClick={onClose} href="/solutions/b2c" className="block py-2 text-[12px] text-gray-400 hover:text-white hover:translate-x-1 transition-all">→ B2C Engagement</Link>
        </div>
      </div>
    </div>
  );
}

function ResourcesDropdown({ onClose }) {
  return (
    <div className="flex p-6 gap-6" style={{ width: '640px' }}>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#214CE5]"></div>
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">Learn</span>
        </div>
        <Link onClick={onClose} href="/case-studies" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.04] transition group">
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
        <Link onClick={onClose} href="/blog" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.04] transition group">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition">
            <Newspaper className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <p className="font-semibold text-[13px] text-white group-hover:text-purple-400">Blog</p>
            <p className="text-[11px] text-gray-500">Latest updates & tips</p>
          </div>
        </Link>
        <Link onClick={onClose} href="/roi-calculator" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.04] transition group">
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
        <Link onClick={onClose} href="/demo" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.04] transition group">
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
