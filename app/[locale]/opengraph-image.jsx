import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'WellPlan - Capture. Nurture. Close.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #111827 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(33, 76, 229, 0.4) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            right: '-50px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Logo from public folder */}
        <img
          src="https://wellplan-main-web.vercel.app/Frame%2069.png"
          width={300}
          height={85}
          style={{
            marginBottom: '30px',
            objectFit: 'contain',
          }}
        />

        {/* Tagline - extra bold */}
        <div
          style={{
            fontSize: '76px',
            fontWeight: '900',
            marginBottom: '24px',
            display: 'flex',
            gap: '20px',
            letterSpacing: '-0.03em',
          }}
        >
          <span style={{ color: '#214CE5' }}>Capture.</span>
          <span style={{ color: '#a855f7' }}>Nurture.</span>
          <span style={{ color: '#10b981' }}>Close.</span>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: '600',
            color: '#9ca3af',
            maxWidth: '800px',
            textAlign: 'center',
          }}
        >
          The all-in-one platform that turns visitors into customers
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '24px',
            fontWeight: '700',
            color: '#6b7280',
          }}
        >
          wellplan.io
        </div>
      </div>
    ),
    { ...size }
  );
}
