'use client';

import { useState } from 'react';
import { siteData } from '../lib/data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <section className="py-20 px-4">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about WellPlan</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {siteData.faq.map((item, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-gray-900 hover:bg-gray-50 transition flex justify-between items-center"
                >
                  {item.q}
                  <span className="text-2xl">{openIndex === idx ? '−' : '+'}</span>
                </button>
                {openIndex === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200 text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {siteData.testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border-2 border-gray-100">
                <div className="text-primary text-lg mb-4">{'★'.repeat(testimonial.stars)}</div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 px-4">
        <div className="container text-center">
          <h2 className="text-4xl font-black mb-6">Still have questions?</h2>
          <p className="text-xl mb-8 opacity-95">Our support team is available 24/7 to help</p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
