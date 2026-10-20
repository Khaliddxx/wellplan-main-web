'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Github } from 'lucide-react';
import { useTranslations } from '../lib/translations';

const SITE = 'https://khalidbuilds.com';
const INSTAGRAM = 'https://www.instagram.com/khalidxah/';
const GITHUB = 'https://github.com/Khaliddxx';
const REELS = [
  { slug: 'aws', url: 'https://www.instagram.com/p/Deo5QZaPnIk/' },
  { slug: 'supabase', url: 'https://www.instagram.com/p/DeehKJ1PKSo/' },
  { slug: 'vercel', url: 'https://www.instagram.com/p/Dej0Wd-vDF6/' },
  { slug: 'fde', url: 'https://www.instagram.com/p/DehrbAOiqj_/' },
];
const IG_GRADIENT = 'linear-gradient(45deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)';

export default function MeetTheFounder() {
  const t = useTranslations('founder');
  const ext = { target: '_blank', rel: 'noopener noreferrer' };

  return (
    <section aria-labelledby="founder-title" className="py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto p-8 sm:p-12 bg-white/[0.02] border border-white/10 rounded-3xl"
      >
        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto md:mx-0">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#214CE5] to-purple-600 opacity-70 blur-md" aria-hidden="true" />
            <Image
              src="/founder/khalid.webp"
              alt={t('imageAlt')}
              width={320}
              height={320}
              sizes="160px"
              className="relative w-full h-full rounded-3xl object-cover border border-white/10"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">{t('eyebrow')}</p>
            <h2 id="founder-title" className="text-3xl sm:text-4xl font-black mb-2">{t('name')}</h2>
            <p className="text-gray-400 mb-5">
              {t('role')} · <a href={INSTAGRAM} {...ext} className="hover:text-white transition">{t('handle')}</a>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8">{t('bio')}</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href={SITE}
                {...ext}
                className="w-full sm:w-auto justify-center whitespace-nowrap inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition"
              >
                {t('button')}
                <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">{t('newTab')}</span>
              </a>
              <a
                href={INSTAGRAM}
                {...ext}
                aria-label={t('instagram')}
                className="group inline-flex items-center gap-3 rounded-xl p-[1.5px] transition hover:shadow-2xl hover:shadow-pink-500/30"
                style={{ background: IG_GRADIENT }}
              >
                <span className="inline-flex items-center gap-3 rounded-[10px] bg-slate-950 px-4 py-2.5 group-hover:bg-slate-950/80 transition">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: IG_GRADIENT }}>
                    <Instagram className="w-4 h-4 text-white" aria-hidden="true" />
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block font-bold text-white">{t('handle')}</span>
                    <span className="block text-xs text-gray-400">{t('igLabel')}</span>
                  </span>
                </span>
              </a>
              <a href={GITHUB} {...ext} aria-label={t('github')} className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-300 hover:text-white hover:border-white/30 transition">
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-xs text-slate-400 uppercase tracking-wide mb-4 text-center md:text-left">{t('reelsLabel')}</p>
          <ul className="grid grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto md:mx-0">
            {REELS.map((r) => (
              <li key={r.slug}>
                <a href={r.url} {...ext} className="block relative aspect-[9/16] overflow-hidden rounded-xl border border-white/10 hover:border-pink-400/60 transition">
                  <Image src={`/founder/reel-${r.slug}.webp`} alt={t(`reels.${r.slug}`)} width={216} height={384} sizes="(min-width: 640px) 140px, 22vw" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  <span className="sr-only">{t('newTab')}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
