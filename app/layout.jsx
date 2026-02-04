'use client';

import './globals.css';
import MegaNav from './components/MegaNav';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        <MegaNav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
