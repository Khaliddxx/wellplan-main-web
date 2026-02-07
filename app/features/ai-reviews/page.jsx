'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, MessageSquare, ThumbsUp, ThumbsDown, TrendingUp,
  ArrowRight, CheckCircle, Zap, Globe, Clock, BarChart3
} from 'lucide-react';

const features = [
  { icon: Star, title: 'Google Reviews', description: 'Automatically respond to Google Business reviews within minutes of posting.' },
  { icon: MessageSquare, title: 'Facebook Reviews', description: 'Monitor and respond to Facebook page reviews and recommendations.' },
  { icon: ThumbsUp, title: 'Positive Response AI', description: 'Thank happy customers with personalized, on-brand responses that encourage loyalty.' },
  { icon: ThumbsDown, title: 'Negative Review Handling', description: 'Address complaints professionally with empathetic responses that protect your reputation.' },
  { icon: TrendingUp, title: 'Sentiment Analysis', description: 'AI analyzes review sentiment and trends to help you improve your business.' },
  { icon: BarChart3, title: 'Review Analytics', description: 'Track review volume, ratings over time, and response rates in one dashboard.' },
];

export default function ReviewsAIPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-[#214CE5]/10 to-transparent" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-amber-500/30 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <Link href="/features/ai" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6">← Back to AI Suite</Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-400">Reviews AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              Never Miss a{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Review Again</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              AI monitors and responds to your Google and Facebook reviews automatically. Protect your reputation 24/7.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-amber-500/30 transition">
                See Reviews AI Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">&lt;5min</div>
                <div className="text-xs sm:text-sm text-gray-500">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-500">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">4.8★</div>
                <div className="text-xs sm:text-sm text-gray-500">Avg Rating Lift</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
                className="p-6 sm:p-8 bg-[#111111] border border-white/5 rounded-2xl hover:border-amber-500/30 transition group">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="py-16 sm:py-24 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">See It In <span className="text-amber-400">Action</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                <span className="text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-gray-300 mb-4">"Amazing service! The team was incredibly helpful and the results exceeded my expectations."</p>
              <p className="text-sm text-gray-500">— Sarah M.</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-amber-400 mb-2">AI Response</p>
                <p className="text-sm text-gray-400">"Thank you so much, Sarah! We're thrilled to hear you had such a great experience. Your satisfaction means everything to us. We look forward to serving you again!"</p>
              </div>
            </div>
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">{[1,2].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}{[3,4,5].map(i => <Star key={i} className="w-4 h-4 text-gray-600" />)}</div>
                <span className="text-sm text-gray-500">2.0</span>
              </div>
              <p className="text-gray-300 mb-4">"Had to wait too long for my appointment. Not happy with the scheduling."</p>
              <p className="text-sm text-gray-500">— Mike T.</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-amber-400 mb-2">AI Response</p>
                <p className="text-sm text-gray-400">"Hi Mike, we sincerely apologize for the wait time. This isn't the experience we want for our customers. We'd love to make it right — please reach out to us directly so we can address this."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500" />
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">Protect Your Reputation</h3>
              <p className="text-lg sm:text-xl text-white/80 mb-8">Start responding to reviews automatically today.</p>
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-lg">
                Book a Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
