'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteData } from './lib/data';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[85vh] bg-gradient-to-br from-white to-gray-50 flex items-center justify-between px-4 py-12 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-600 animate-slide-left">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Scale Your Business with <span className="text-primary">AI-Powered Omnichannel Messaging</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Centralize WhatsApp, Facebook, Instagram, and 15+ channels. Automate conversations, boost sales by 300%, and deliver exceptional customer experiences.
              </p>
              <div className="flex gap-4 flex-wrap mb-8">
                <button className="btn-primary hover:shadow-lg">Get Started Free</button>
                <button className="btn-outline">Watch Demo</button>
              </div>
              <div className="flex gap-4 flex-wrap text-sm text-gray-600">
                <span>✓ 14-day free trial</span>
                <span>✓ No credit card</span>
                <span>✓ Setup in 5 minutes</span>
              </div>
            </div>
            <div className="animate-slide-right">
              <Image 
                src="/bear-hero.jpg" 
                alt="WellPlan - One tool, all the superpowers"
                width={400}
                height={400}
                priority
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 px-4 animate-fade-in">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteData.stats.map((stat, idx) => (
              <div key={idx} className="text-center card-hover">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Automations Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-left">
              <Image 
                src="/bear-integrations.jpg" 
                alt="Complete Automated Business Automations"
                width={400}
                height={400}
                className="w-full max-w-md"
              />
            </div>
            <div className="animate-slide-right">
              <h2 className="text-4xl font-black text-gray-900 mb-6">🚀 Ultimate Business Automations 🚀</h2>
              <p className="text-xl text-gray-600 mb-6">Complete Automated Sales & Marketing Snapshot for ANY Small Business</p>
              <p className="text-gray-700 mb-8 leading-relaxed">Full automation for all your small business sales & marketing needs - makes running your business easier!</p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <p className="font-bold text-gray-900 mb-4">What's Included:</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-sm text-gray-700">✓ 7+ Funnels & 11+ Forms</div>
                  <div className="text-sm text-gray-700">✓ 100+ Workflow Actions</div>
                  <div className="text-sm text-gray-700">✓ Automated Pipelines</div>
                  <div className="text-sm text-gray-700">✓ 52 Weekly SMS Templates</div>
                  <div className="text-sm text-gray-700">✓ 12 Monthly Email Nurture</div>
                  <div className="text-sm text-gray-700">✓ Full Setup Support</div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">⚡ Just Install, Setup & Go • 🎯 Complete Automation • 📈 Boost Sales • 💎 Professional Support</p>
              
              <button className="btn-primary hover:shadow-lg">Get Complete Automation Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600">Everything you need to scale customer relationships</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {siteData.features.map((feature, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-2xl p-6 bg-white card-hover animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20 px-4 animate-fade-in">
        <div className="container text-center">
          <h2 className="text-4xl font-black mb-6">Ready to transform your customer communications?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Join thousands of businesses using WellPlan to automate, scale, and optimize their messaging strategy.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition cursor-pointer">
              Get Started for Free
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition cursor-pointer">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
