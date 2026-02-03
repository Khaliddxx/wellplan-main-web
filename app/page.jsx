'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteData } from './lib/data';
import { useEffect, useRef } from 'react';

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      heroRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      heroRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(33, 76, 229, 0.15) 0%, transparent 50%)'
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 backdrop-blur">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              The Complete Lead Generation Platform
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Capture. Nurture. Close.
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The only platform you need for complete lead generation. From capturing first leads to closing deals—all in one place.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 cursor-pointer">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-gray-400 hover:border-blue-400 rounded-lg font-bold transition-all cursor-pointer backdrop-blur">
              See Demo
            </button>
          </div>

          <p className="text-sm text-gray-400">✓ No credit card • ✓ 14 days free • ✓ Full access</p>
        </div>
      </section>

      {/* 3 Objectives Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4">
              Three Stages. <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">One Platform.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to run a complete lead generation machine—from first impression to closed deal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {siteData.objectives.map((obj, idx) => (
              <Link key={idx} href={`/objectives/${obj.slug}`}>
                <div className="group relative h-full cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border border-slate-600 opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-slate-500 transition-all backdrop-blur-xl h-full transform group-hover:scale-105 group-hover:-translate-y-2">
                    <div className="text-5xl mb-4">{obj.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{obj.title}</h3>
                    <p className="text-gray-400 mb-6">{obj.description}</p>
                    
                    <div className="space-y-3">
                      {obj.tools.slice(0, 3).map((tool, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                            ✓
                          </div>
                          <div className="text-sm">
                            <div className="font-semibold">{tool.name}</div>
                            <div className="text-gray-500 text-xs">{tool.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-700">
                      <span className="text-blue-400 text-sm font-semibold group-hover:gap-2 transition-all flex items-center">
                        Learn more
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-xl">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why WellPlan?</h3>
              <ul className="space-y-3">
                {['300% more leads captured', '85% time saved on automation', '10x faster sales cycles', 'One platform replaces 7+ tools'].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Enterprise-Grade</h3>
              <ul className="space-y-3">
                {['SOC 2 Type II Certified', 'GDPR & CCPA Compliant', '99.9% Uptime SLA', '24/7 Dedicated Support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">⚡</span>
                    </div>
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteData.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">Ready to scale your lead generation?</h2>
          <p className="text-xl text-gray-300 mb-8">Join 50,000+ businesses generating leads at scale with WellPlan.</p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 cursor-pointer">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-gray-400 hover:border-blue-400 rounded-lg font-bold transition-all cursor-pointer">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
