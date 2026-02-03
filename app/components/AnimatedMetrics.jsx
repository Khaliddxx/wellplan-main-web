'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const [counts, setCounts] = useState({ users: 0, messages: 0, conversions: 0, uptime: 0 });

  // Counter animation
  useEffect(() => {
    if (!isInView) return;

    const intervals = {
      users: setInterval(() => setCounts(prev => ({ ...prev, users: Math.min(prev.users + 1250, 50000) })), 10),
      messages: setInterval(() => setCounts(prev => ({ ...prev, messages: Math.min(prev.messages + 50000, 2500000) })), 8),
      conversions: setInterval(() => setCounts(prev => ({ ...prev, conversions: Math.min(prev.conversions + 0.5, 35) })), 15),
      uptime: setInterval(() => setCounts(prev => ({ ...prev, uptime: Math.min(prev.uptime + 0.1, 99.99) })), 20),
    };

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, [isInView]);

  // Particle background
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(96, 165, 250, 0.5)';
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.2)';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section ref={ref} className="relative py-32 px-4 bg-gradient-to-b from-slate-900/50 to-slate-950 overflow-hidden">
      {/* Particle Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Built at Scale
            </span>
          </h2>
          <p className="text-xl text-gray-300">Millions of leads. Billions of messages. Zero compromises.</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Users */}
          <div
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-xl text-center"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            <div className="text-5xl mb-4">👥</div>
            <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {(counts.users / 1000).toFixed(0)}K+
            </div>
            <div className="text-gray-400">Active Users</div>
          </div>

          {/* Messages */}
          <div
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-xl text-center"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.1s',
            }}
          >
            <div className="text-5xl mb-4">💬</div>
            <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              {(counts.messages / 1000000).toFixed(1)}B+
            </div>
            <div className="text-gray-400">Messages Sent</div>
          </div>

          {/* Conversion Rate */}
          <div
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-xl text-center"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.2s',
            }}
          >
            <div className="text-5xl mb-4">📈</div>
            <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
              {counts.conversions.toFixed(1)}%
            </div>
            <div className="text-gray-400">Avg. Conversion</div>
          </div>

          {/* Uptime */}
          <div
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-xl text-center"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.3s',
            }}
          >
            <div className="text-5xl mb-4">⚡</div>
            <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              {counts.uptime.toFixed(2)}%
            </div>
            <div className="text-gray-400">Enterprise Uptime</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 flex flex-wrap justify-center gap-6 items-center">
          <div className="px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700/50 text-sm text-gray-300">
            ✓ SOC 2 Certified
          </div>
          <div className="px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700/50 text-sm text-gray-300">
            ✓ GDPR Compliant
          </div>
          <div className="px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700/50 text-sm text-gray-300">
            ✓ HIPAA Ready
          </div>
          <div className="px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700/50 text-sm text-gray-300">
            ✓ Enterprise SLA
          </div>
        </div>
      </div>
    </section>
  );
}
