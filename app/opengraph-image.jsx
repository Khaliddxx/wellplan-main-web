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
          fontFamily: 'system-ui, sans-serif',
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

        {/* Logo text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #214CE5 0%, #1a3db8 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
              fontSize: '40px',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            W
          </div>
          <span
            style={{
              fontSize: '56px',
              fontWeight: '800',
              color: 'white',
            }}
          >
            WellPlan
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: '900',
            marginBottom: '20px',
            display: 'flex',
            gap: '16px',
          }}
        >
          <span style={{ color: '#214CE5' }}>Capture.</span>
          <span style={{ color: '#a855f7' }}>Nurture.</span>
          <span style={{ color: '#10b981' }}>Close.</span>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '28px',
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
