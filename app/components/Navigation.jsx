'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container flex justify-between items-center px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          WellPlan
        </Link>
        
        <button 
          className="md:hidden text-primary text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        <div className={`${mobileOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto bg-white md:bg-transparent border-b md:border-0 md:flex gap-8 p-4 md:p-0`}>
          <Link href="/" className="block md:inline text-gray-600 hover:text-primary font-medium transition-colors">
            Home
          </Link>
          <Link href="/features" className="block md:inline text-gray-600 hover:text-primary font-medium transition-colors">
            Features
          </Link>
          <Link href="/industries" className="block md:inline text-gray-600 hover:text-primary font-medium transition-colors">
            Industries
          </Link>
          <Link href="/pricing" className="block md:inline text-gray-600 hover:text-primary font-medium transition-colors">
            Pricing
          </Link>
          <Link href="/faq" className="block md:inline text-gray-600 hover:text-primary font-medium transition-colors">
            FAQ
          </Link>
        </div>

        <div className="hidden md:flex gap-3 items-center">
          <button className="btn-outline">Login</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
}
