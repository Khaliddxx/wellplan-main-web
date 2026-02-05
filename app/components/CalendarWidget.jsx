'use client';

import { useEffect } from 'react';

export default function CalendarWidget() {
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
    <div className="calendar-widget-container">
      <iframe
        src="https://link.wellplan.io/widget/booking/42vv4cmCu0QRd0setfWK"
        style={{
          width: '100%',
          minHeight: '600px',
          border: 'none',
          overflow: 'hidden',
        }}
        scrolling="no"
        id="42vv4cmCu0QRd0setfWK_1770254133954"
      />
    </div>
  );
}
