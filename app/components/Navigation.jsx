'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <Link href="/" className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer">
          WellPlan
        </Link>
        
        <button 
          className="md:hidden text-blue-400 text-2xl cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        <div className={`${mobileOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto bg-slate-800 md:bg-transparent border-b md:border-0 md:flex gap-8 p-4 md:p-0`}>
          <Link href="/" className="block md:inline text-gray-300 hover:text-blue-400 font-medium transition cursor-pointer">
            Home
          </Link>
          <Link href="/objectives/capturing" className="block md:inline text-gray-300 hover:text-blue-400 font-medium transition cursor-pointer">
            Capturing
          </Link>
          <Link href="/objectives/nurturing" className="block md:inline text-gray-300 hover:text-blue-400 font-medium transition cursor-pointer">
            Nurturing
          </Link>
          <Link href="/objectives/closing" className="block md:inline text-gray-300 hover:text-blue-400 font-medium transition cursor-pointer">
            Closing
          </Link>
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <button className="text-gray-300 hover:text-white transition cursor-pointer font-medium">
            Sign In
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
