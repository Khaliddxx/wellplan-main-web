'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, CheckCircle, AlertCircle, ArrowRight, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTranslations } from '../lib/translations';

export default function ContactPage() {
  const t = useTranslations('contactPage');
  const [formState, setFormState] = useState('idle'); // idle, sending, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For now, just show success
    setFormState('success');
    setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
  };

  const subjects = [
    { value: 'demo', label: t('subjects.demo') },
    { value: 'sales', label: t('subjects.sales') },
    { value: 'support', label: t('subjects.support') },
    { value: 'partnership', label: t('subjects.partnership') },
    { value: 'other', label: t('subjects.other') },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/20 via-transparent to-purple-500/10" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#214CE5]/30 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#214CE5]/20 border border-[#214CE5]/30 mb-6">
              <MessageSquare className="w-4 h-4 text-[#214CE5]" />
              <span className="text-sm font-semibold text-[#6B8EFF]">{t('badge')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              {t('title')} <span className="bg-gradient-to-r from-[#214CE5] to-purple-400 bg-clip-text text-transparent">{t('titleHighlight')}</span>
            </h1>
            
            <p className="text-xl text-gray-400">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-[#111111] border border-white/10">
              {formState === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{t('form.success')}</h3>
                  <Link href="/demo" className="inline-flex items-center gap-2 mt-6 text-[#214CE5] hover:underline">
                    {t('subjects.demo')} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">{t('form.name')} *</label>
                      <input
                        type="text"
                        required
                        placeholder={t('form.namePlaceholder')}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#214CE5]/50 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">{t('form.email')} *</label>
                      <input
                        type="email"
                        required
                        placeholder={t('form.emailPlaceholder')}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#214CE5]/50 transition"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">{t('form.company')}</label>
                      <input
                        type="text"
                        placeholder={t('form.companyPlaceholder')}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#214CE5]/50 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">{t('form.phone')}</label>
                      <input
                        type="tel"
                        placeholder={t('form.phonePlaceholder')}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#214CE5]/50 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">{t('form.subject')} *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#214CE5]/50 transition"
                    >
                      <option value="" className="bg-[#0a0a0a]">{t('form.subjectPlaceholder')}</option>
                      {subjects.map((subject) => (
                        <option key={subject.value} value={subject.value} className="bg-[#0a0a0a]">
                          {subject.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">{t('form.message')} *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder={t('form.messagePlaceholder')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#214CE5]/50 transition resize-none"
                    />
                  </div>

                  {formState === 'error' && (
                    <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400">
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm">{t('form.error')}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#214CE5] to-[#1a3db8] hover:from-[#1a3db8] hover:to-[#14308f] text-white font-bold rounded-xl transition shadow-lg shadow-[#214CE5]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === 'sending' ? (
                      <>{t('form.sending')}</>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('form.submit')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Methods */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10">
              <h3 className="font-bold text-lg mb-6">{t('info.title')}</h3>
              
              <div className="space-y-6">
                <a href="mailto:hello@wellplan.io" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#214CE5]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#214CE5]/30 transition">
                    <Mail className="w-5 h-5 text-[#6B8EFF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-[#6B8EFF] transition">{t('info.email.title')}</div>
                    <div className="text-sm text-gray-500">{t('info.email.description')}</div>
                    <div className="text-sm text-[#214CE5] mt-1">{t('info.email.value')}</div>
                  </div>
                </a>

                <a href="mailto:sales@wellplan.io" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/30 transition">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-emerald-400 transition">{t('info.sales.title')}</div>
                    <div className="text-sm text-gray-500">{t('info.sales.description')}</div>
                    <div className="text-sm text-emerald-400 mt-1">{t('info.sales.value')}</div>
                  </div>
                </a>

                <a href="mailto:support@wellplan.io" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-purple-400 transition">{t('info.support.title')}</div>
                    <div className="text-sm text-gray-500">{t('info.support.description')}</div>
                    <div className="text-sm text-purple-400 mt-1">{t('info.support.value')}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10">
              <h3 className="font-bold text-lg mb-2">{t('social.title')}</h3>
              <p className="text-sm text-gray-500 mb-4">{t('social.description')}</p>
              
              <div className="flex gap-3">
                <a href="https://twitter.com/wellplanio" target="_blank" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/wellplan" target="_blank" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/wellplan.io" target="_blank" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#E4405F]/20 hover:text-[#E4405F] transition">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick FAQ */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#214CE5]/10 to-purple-500/10 border border-[#214CE5]/20">
              <h3 className="font-bold text-lg mb-4">{t('faq.title')}</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-white text-sm">{t('faq.response.question')}</div>
                  <div className="text-sm text-gray-400 mt-1">{t('faq.response.answer')}</div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-medium text-white text-sm">{t('faq.demo.question')}</div>
                  <div className="text-sm text-gray-400 mt-1">{t('faq.demo.answer')}</div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-medium text-white text-sm">{t('faq.trial.question')}</div>
                  <div className="text-sm text-gray-400 mt-1">{t('faq.trial.answer')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
