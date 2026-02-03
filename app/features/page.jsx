'use client';

import { siteData } from '../lib/data';

export default function Features() {
  return (
    <div>
      {/* All Features Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">The #1 Solution in The Game!</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {siteData.allFeatures.map((feature, idx) => (
              <div key={idx} className="border-2 border-gray-100 rounded-xl p-4 hover:border-primary transition">
                <h3 className="font-bold text-gray-900">✓ {feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Why WellPlan Replaces Multiple Tools</h2>
            <p className="text-xl text-gray-600">Save over $1,500/month by consolidating your toolstack</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Competitors</th>
                  <th className="px-6 py-4 text-right font-bold text-gray-900">Cost/Month</th>
                </tr>
              </thead>
              <tbody>
                {siteData.comparison.data.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.competitors}</td>
                    <td className="px-6 py-4 text-right text-gray-600">{row.cost}</td>
                  </tr>
                ))}
                <tr className="bg-primary text-white">
                  <td className="px-6 py-4 font-bold">TOTAL</td>
                  <td></td>
                  <td className="px-6 py-4 text-right font-bold">{siteData.comparison.total}</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="px-6 py-4 font-bold text-gray-900">WellPlan</td>
                  <td></td>
                  <td className="px-6 py-4 text-right font-bold text-primary">{siteData.comparison.wellplan}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 px-4">
        <div className="container text-center">
          <h2 className="text-4xl font-black mb-6">Ready to save thousands per month?</h2>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Get Started for Free
          </button>
        </div>
      </section>
    </div>
  );
}
