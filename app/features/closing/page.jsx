'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Users, Calendar, CreditCard, FileText, Phone, BarChart3, Target, Clock, Award, TrendingUp, DollarSign, Briefcase, CheckCircle } from 'lucide-react';

const mainFeatures = [
  {
    icon: Users,
    title: 'CRM & Pipeline',
    description: 'Visual sales pipeline to track every deal from lead to close. Never lose track of an opportunity.',
    benefits: ['Drag-and-drop deals', 'Custom stages', 'Deal forecasting', 'Activity tracking'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Calendar,
    title: 'Calendar & Booking',
    description: 'Let leads book meetings directly into your calendar. Reduce back-and-forth and close faster.',
    benefits: ['Online booking', 'Calendar sync', 'Reminders', 'Buffer times'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CreditCard,
    title: 'Payments & Invoicing',
    description: 'Get paid faster with integrated payments, invoices, and subscription management.',
    benefits: ['Stripe integration', 'Recurring billing', 'Invoices', 'Payment links'],
    color: 'from-amber-500 to-orange-500',
  },
];

const moreFeatures = [
  { icon: FileText, title: 'Proposals & Contracts', description: 'Send professional proposals with e-signatures' },
  { icon: Phone, title: 'Built-in Calling', description: 'Call leads directly from WellPlan with call recording' },
  { icon: Target, title: 'Sales Automation', description: 'Auto-assign leads and trigger follow-ups' },
  { icon: Clock, title: 'Task Management', description: 'Never miss a follow-up with automated reminders' },
  { icon: Award, title: 'Sales Gamification', description: 'Leaderboards and goals to motivate your team' },
  { icon: TrendingUp, title: 'Revenue Forecasting', description: 'Predict revenue based on pipeline data' },
  { icon: DollarSign, title: 'Commission Tracking', description: 'Track and calculate sales commissions' },
  { icon: Briefcase, title: 'Opportunity Scoring', description: 'AI-powered deal scoring to prioritize efforts' },
];

export default function ClosingPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-teal-500/10" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-500/30 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6">
              <span className="text-sm font-bold text-emerald-400">STEP 3</span>
              <span className="text-sm text-emerald-300">of the Customer Journey</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">CLOSE</span>
              <br />
              <span className="text-white">More Deals</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Convert nurtured leads into paying customers with powerful CRM, scheduling, and payment tools.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition shadow-lg shadow-emerald-500/30">
                Start Closing Deals
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition">
                See Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Closing Tools</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to convert leads into revenue</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mainFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-emerald-500/50 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <Check className="w-4 h-4 text-emerald-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Features Grid */}
      <section className="py-24 px-6 bg-[#111111]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">View 8 More Closing Features</h2>
            <p className="text-gray-400">Advanced tools to maximize your close rate</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition">
                  <feature.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Navigation */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">The Complete Customer Journey</h2>
            <p className="text-gray-400">Close is where all your efforts pay off.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/features/capturing" className="group p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#214CE5]/50 transition-all">
              <span className="text-xs font-bold text-[#214CE5] uppercase tracking-wider">Step 1</span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-[#214CE5] transition">← Capture</h3>
              <p className="text-sm text-gray-400 mt-1">Attract & collect leads</p>
            </Link>
            
            <Link href="/features/nurturing" className="group p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-purple-500/50 transition-all">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Step 2</span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-purple-400 transition">← Nurture</h3>
              <p className="text-sm text-gray-400 mt-1">Engage & build trust</p>
            </Link>
            
            <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Step 3 • Current</span>
              <h3 className="text-xl font-bold mt-2 text-white">Close</h3>
              <p className="text-sm text-gray-400 mt-1">Convert & get paid</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#111111]/50 to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Results That Speak</h2>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-black text-emerald-400 mb-2">32%</div>
              <div className="text-gray-400">Increase in close rate</div>
            </div>
            <div>
              <div className="text-5xl font-black text-emerald-400 mb-2">2.5x</div>
              <div className="text-gray-400">Faster sales cycle</div>
            </div>
            <div>
              <div className="text-5xl font-black text-emerald-400 mb-2">$47K</div>
              <div className="text-gray-400">Avg. revenue increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to close more deals?</h2>
            <p className="text-white/80 mb-8">Start your free trial and see your revenue grow.</p>
            <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-100 transition">
              <Zap className="w-5 h-5" />
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
