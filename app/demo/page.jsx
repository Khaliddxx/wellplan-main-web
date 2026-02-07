'use client';

import Link from 'next/link';
import { Calendar, Clock, Video, Check, Star, Users, Zap, ArrowRight, MessageSquare, Globe } from 'lucide-react';
import CalendarWidget from '../components/CalendarWidget';
import { useTranslations } from '../lib/translations';

export default function DemoPage() {
  const t = useTranslations('demo');
  const tc = useTranslations('common');

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/20 via-transparent to-purple-500/10" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#214CE5]/20 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#214CE5]/20 border border-[#214CE5]/30 mb-6">
                <Video className="w-4 h-4 text-[#214CE5]" />
                <span className="text-sm font-semibold text-[#6B8EFF]">{t('badge')}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                {t('headline')} <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">{t('headlineHighlight')}</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-8">
                {t('description')}
              </p>
              
              {/* What you'll see */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold">{t('whatYouSee.inbox.title')}</div>
                    <div className="text-sm text-gray-500">{t('whatYouSee.inbox.description')}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold">{t('whatYouSee.ai.title')}</div>
                    <div className="text-sm text-gray-500">{t('whatYouSee.ai.description')}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold">{t('whatYouSee.automation.title')}</div>
                    <div className="text-sm text-gray-500">{t('whatYouSee.automation.description')}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold">{t('whatYouSee.qa.title')}</div>
                    <div className="text-sm text-gray-500">{t('whatYouSee.qa.description')}</div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#214CE5] to-purple-500 border-2 border-[#0a0a0a]" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">{t('trustBadge.businesses')}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-400 ml-1">{t('trustBadge.rating')}</span>
                </div>
              </div>
            </div>

            {/* Right: Calendar Widget */}
            <div className="lg:pl-8">
              <div className="p-6 rounded-3xl bg-[#111111] border border-white/10 shadow-2xl">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#214CE5]" />
                  {t('scheduleTitle')}
                </h2>
                
                {/* Calendar Widget */}
                <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5">
                  <CalendarWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What happens after */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('afterDemo.title')}</h2>
            <p className="text-gray-400">{t('afterDemo.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-[#214CE5]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#214CE5]">1</span>
              </div>
              <h3 className="font-bold mb-2">{t('afterDemo.step1.title')}</h3>
              <p className="text-sm text-gray-500">
                {t('afterDemo.step1.description')}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="font-bold mb-2">{t('afterDemo.step2.title')}</h3>
              <p className="text-sm text-gray-500">
                {t('afterDemo.step2.description')}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-400">3</span>
              </div>
              <h3 className="font-bold mb-2">{t('afterDemo.step3.title')}</h3>
              <p className="text-sm text-gray-500">
                {t('afterDemo.step3.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="border-t border-white/10 bg-[#111111]/50">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold mb-8 text-center">{t('faq.title')}</h2>
          
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-[#0a0a0a] border border-white/10">
              <h3 className="font-semibold mb-2">{t('faq.q1.question')}</h3>
              <p className="text-sm text-gray-500">
                {t('faq.q1.answer')}
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-[#0a0a0a] border border-white/10">
              <h3 className="font-semibold mb-2">{t('faq.q2.question')}</h3>
              <p className="text-sm text-gray-500">
                {t('faq.q2.answer')}
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-[#0a0a0a] border border-white/10">
              <h3 className="font-semibold mb-2">{t('faq.q3.question')}</h3>
              <p className="text-sm text-gray-500">
                {t('faq.q3.answer')}
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-[#0a0a0a] border border-white/10">
              <h3 className="font-semibold mb-2">{t('faq.q4.question')}</h3>
              <p className="text-sm text-gray-500">
                {t('faq.q4.answer')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-[#214CE5] to-purple-600 text-center">
            <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="text-white/80 mb-8">
              {t('cta.subtitle')}
            </p>
            <Link 
              href="https://app.wellplan.io"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#214CE5] font-bold rounded-xl hover:bg-gray-100 transition"
            >
              <Zap className="w-5 h-5" />
              {t('cta.button')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
