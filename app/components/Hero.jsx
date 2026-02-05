'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
              Trusted by 450+ businesses
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black mb-6 text-slate-900 leading-tight">
            Omnichannel messaging platform
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              for businesses
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
            From first chat to repeat customer, all in one platform. 
            Centralize WhatsApp, Instagram, Facebook, SMS, and email conversations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
              Start for Free
            </button>
            <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-bold rounded-lg hover:border-blue-600 hover:text-blue-600 transition">
              Book a Demo
            </button>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free 14-day trial
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required
            </span>
          </div>

          {/* Customer Logos */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-xs text-slate-400 uppercase tracking-wide mb-4">Trusted by teams at</p>
            <div className="flex flex-wrap gap-6 items-center opacity-40 grayscale">
              {['Aura', 'Airzone', 'PSEO Agency', 'Gareebak', 'Kim Wellness', 'Jorge Perez'].map((company) => (
                <div key={company} className="px-4 py-2 bg-slate-100 rounded font-bold text-slate-700 text-sm">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Product Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Browser Window */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            {/* Browser Chrome */}
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="ml-4 flex-1 bg-white rounded px-3 py-1.5 text-xs text-slate-500 border border-slate-200">
                🔒 app.wellplan.io
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-800">Inbox</h3>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded">
                    24 Active
                  </div>
                </div>
              </div>

              {/* Conversation List */}
              <div className="space-y-3">
                {[
                  { name: 'Sarah Chen', platform: 'WhatsApp', message: 'Interested in your enterprise plan...', status: 'hot', time: '2m ago' },
                  { name: 'Marcus J.', platform: 'Instagram', message: 'Can you send me more info?', status: 'warm', time: '5m ago' },
                  { name: 'Emma R.', platform: 'Facebook', message: 'Thanks for the quick response!', status: 'cold', time: '12m ago' },
                ].map((conv, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 transition cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm text-slate-800">{conv.name}</span>
                        <span className="text-xs text-slate-400">{conv.time}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-slate-500">{conv.platform}</span>
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded ${
                          conv.status === 'hot' ? 'bg-red-100 text-red-600' :
                          conv.status === 'warm' ? 'bg-orange-100 text-orange-600' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          {conv.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 truncate">{conv.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Stats */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-6 shadow-xl"
          >
            <div className="text-sm opacity-90 mb-1">Response Time</div>
            <div className="text-4xl font-black">2.4m</div>
            <div className="text-sm opacity-90 mt-1">↓ 15% faster</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-6 shadow-xl"
          >
            <div className="text-sm opacity-90 mb-1">AI Qualified</div>
            <div className="text-4xl font-black">92%</div>
            <div className="text-sm opacity-90 mt-1">+12% this week</div>
          </motion.div>
        </motion.div>
      </div>

      {/* WhatsApp Badge */}
      <div className="absolute bottom-8 right-8">
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full shadow-lg">
          <span className="text-xl">💬</span>
          <span className="text-sm font-semibold">Official WhatsApp Partner</span>
        </div>
      </div>
    </section>
  );
}
