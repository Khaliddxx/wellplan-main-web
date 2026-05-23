'use client';

import { useLocale } from '../lib/translations';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
];

export default function LanguageSwitcher({ variant = 'default' }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find(l => l.code === locale) || languages[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLocale = (newLocale) => {
    setIsOpen(false);

    // Strip any existing locale prefix to get the bare path
    const segments = pathname.split('/').filter(Boolean);
    if (segments[0] === 'en' || segments[0] === 'nl') {
      segments.shift();
    }

    // EN is the default locale — no prefix. NL gets a /nl prefix.
    const prefix = newLocale === 'en' ? '' : `/${newLocale}`;
    const bare = segments.length ? '/' + segments.join('/') : '';
    const newPath = (prefix + bare) || '/';
    router.push(newPath);
  };

  if (variant === 'footer') {
    return (
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4 text-gray-500" />
        <div className="flex gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`text-sm transition ${
                locale === lang.code
                  ? 'text-white font-semibold'
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {lang.flag} {lang.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
      >
        <span className="text-base">{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-[#0f1115] border border-white/10 rounded-xl shadow-xl overflow-hidden z-50 min-w-[140px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition ${
                locale === lang.code
                  ? 'bg-[#214CE5]/20 text-white'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.name}</span>
              {locale === lang.code && (
                <span className="ml-auto text-[#214CE5]">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
