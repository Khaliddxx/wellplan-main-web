'use client';

import Link from 'next/link';
import { siteData } from '../lib/data';

export default function Industries() {
  return (
    <div>
      <section className="py-20 px-4">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Solutions for Every Industry</h2>
            <p className="text-xl text-gray-600">Tailored messaging solutions that understand your unique needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {siteData.industries.map((industry, idx) => (
              <Link key={idx} href={`/industries/${industry.slug}`}>
                <div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all cursor-pointer hover:-translate-y-2 h-full">
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 px-4">
        <div className="container text-center">
          <h2 className="text-4xl font-black mb-6">Choose your industry to learn more</h2>
          <p className="text-xl mb-8 opacity-95">WellPlan works for businesses of all sizes and industries</p>
        </div>
      </section>
    </div>
  );
}
