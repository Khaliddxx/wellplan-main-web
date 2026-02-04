'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed top-20 left-0 right-0 mx-auto w-fit z-40 lg:hidden px-4 py-2 bg-[#214CE5]/80 backdrop-blur-md border border-[#214CE5]/50 text-white rounded-full flex items-center gap-1.5 text-xs font-medium shadow-lg shadow-[#214CE5]/20 hover:bg-[#214CE5] transition-all"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-3.5 h-3.5" />
          <span>Top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
