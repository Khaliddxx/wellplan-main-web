'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import ScrollToTop from './ScrollToTop';

export default function ClientProviders({ children }) {
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {children}
      
      {/* Scroll to Top Button (mobile only) */}
      <ScrollToTop />
      
      {/* WellPlan Chat Widget */}
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="68728a6281758b8a8d3c0144"
        strategy="lazyOnload"
      />
    </>
  );
}
