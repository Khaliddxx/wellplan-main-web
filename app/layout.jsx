'use client';

import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Script from 'next/script';
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
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        
        {/* WellPlan Chat Widget */}
        <Script
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="68728a6281758b8a8d3c0144"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
