'use client';

import { useEffect, useState } from 'react';

export default function CalendarWidget() {
  const [dimensions, setDimensions] = useState({ width: '100%', height: '700px' });

  useEffect(() => {
    // Update dimensions based on screen size
    const updateDimensions = () => {
      if (typeof window !== 'undefined') {
        const isMobile = window.innerWidth < 1024;
        if (isMobile) {
          // Mobile: wider than container, taller height
          setDimensions({ 
            width: 'calc(100vw - 3rem)', 
            height: '700px' 
          });
        } else {
          // Desktop: fit container, reasonable height
          setDimensions({ 
            width: '100%', 
            height: '650px' 
          });
        }
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://link.wellplan.io/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://link.wellplan.io/js/form_embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="calendar-widget-container -mx-4 lg:mx-0 w-[calc(100%+2rem)] lg:w-full">
      <iframe
        src="https://link.wellplan.io/widget/booking/42vv4cmCu0QRd0setfWK"
        style={{
          width: dimensions.width,
          height: dimensions.height,
          border: 'none',
          overflow: 'auto',
        }}
        scrolling="auto"
        id="42vv4cmCu0QRd0setfWK_1770254133954"
      />
    </div>
  );
}
