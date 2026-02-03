'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function TestimonialCarousel() {
  const testimonials = [
    {
      quote: 'WellPlan replaced 7 different tools we were using. The ROI was immediate - we cut our tech stack costs by 60%.',
      author: 'Sarah Chen',
      title: 'CEO, GrowthCo Digital',
      metric: '3x Lead Growth',
      company: '🏢',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      quote: 'Best decision we made this year. Our sales cycle dropped from 60 days to 36 days with intelligent lead scoring.',
      author: 'Marcus Johnson',
      title: 'VP Sales, CloudTech Inc',
      metric: '40% Faster Closing',
      company: '☁️',
      color: 'from-purple-500 to-pink-500',
    },
    {
      quote: 'The WhatsApp integration alone is worth it. We\'re now engaging leads on the platform they already use.',
      author: 'Emma Rodriguez',
      title: 'Founder, Elite Coaching',
      metric: '10x Revenue',
      company: '💼',
      color: 'from-orange-500 to-red-500',
    },
    {
      quote: 'Enterprise-grade platform at startup pricing. Our customers love the seamless experience.',
      author: 'Alex Kim',
      title: 'Director, Digital Agency Pro',
      metric: 'NPS: 72',
      company: '🎨',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  useEffect(() => {
    if (!autoplay || !isInView) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay, isInView, testimonials.length]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setAutoplay(true), 3000);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAutoplay(true), 3000);
  };

  return (
    <section ref={ref} className="py-32 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Trusted by
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Enterprise Teams
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See real results from companies using WellPlan
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <div
            className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-12 border border-slate-700/50 backdrop-blur-xl min-h-96 flex flex-col justify-between"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'scale(1)' : 'scale(0.95)',
              transition: 'all 0.6s ease-out',
            }}
          >
            {/* Quote */}
            <div className="mb-8">
              <div className="text-5xl mb-4 text-yellow-400">&#10077;</div>
              <p className="text-2xl font-semibold text-gray-100 leading-relaxed">
                {testimonials[current].quote}
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-between border-t border-slate-700/50 pt-8">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-3xl`}>
                  {testimonials[current].company}
                </div>
                <div>
                  <p className="font-bold text-white text-lg">{testimonials[current].author}</p>
                  <p className="text-gray-400 text-sm">{testimonials[current].title}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {testimonials[current].metric}
                </p>
                <p className="text-gray-400 text-sm">Achieved</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 transition flex items-center justify-center text-gray-300 hover:text-blue-400 font-bold text-xl"
            >
              ←
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrent(idx);
                    setAutoplay(false);
                    setTimeout(() => setAutoplay(true), 5000);
                  }}
                  className={`w-2 h-2 rounded-full transition ${
                    idx === current
                      ? 'bg-blue-500 w-8'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 transition flex items-center justify-center text-gray-300 hover:text-blue-400 font-bold text-xl"
            >
              →
            </button>
          </div>

          {/* Testimonial Cards Grid (Below) */}
          <div className="grid md:grid-cols-4 gap-4 mt-16">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setCurrent(idx);
                  setAutoplay(false);
                  setTimeout(() => setAutoplay(true), 5000);
                }}
                className={`p-6 rounded-xl border cursor-pointer transition ${
                  idx === current
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50'
                    : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'
                }`}
              >
                <p className="text-gray-300 text-sm mb-3 line-clamp-3">{testimonial.quote}</p>
                <p className="font-bold text-sm text-white">{testimonial.author}</p>
                <p className="text-xs text-gray-400">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
