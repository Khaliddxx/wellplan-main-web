'use client';

import { siteData } from '../lib/data';

export default function Pricing() {
  const { pricing } = siteData;
  const plan = pricing.plan;

  return (
    <div>
      <section className="py-20 px-4">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
            <h2 className="text-4xl font-black text-gray-900 mb-4">{pricing.title}</h2>
            <p className="text-xl text-gray-600">{pricing.description}</p>
          </div>

          <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="border-4 border-primary rounded-2xl p-8 bg-gradient-to-br from-gray-50 to-white card-hover">
              <div className="mb-6">
                <div className="text-5xl font-black text-primary mb-2">
                  {plan.price}
                  <span className="text-xl text-gray-600">{plan.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-900">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-primary w-full py-3 text-lg font-bold hover:shadow-lg">
                Get Started Free
              </button>

              <p className="text-center text-gray-600 text-sm mt-4">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center animate-slide-up">Pricing FAQ</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              { q: "Is there a setup fee?", a: "No. WellPlan has zero setup fees. You only pay the monthly subscription." },
              { q: "Can I cancel anytime?", a: "Yes. Cancel your subscription at any time with no penalties or long-term contracts." },
              { q: "Do you offer annual billing?", a: "Yes. Pay annually and save 20% off the monthly price." },
              { q: "Is everything really unlimited?", a: "Yes. Unlimited contacts, websites, funnels, courses, automations, and everything else." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 card-hover animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 px-4 animate-fade-in">
        <div className="container text-center">
          <h2 className="text-4xl font-black mb-6">Start your free trial today</h2>
          <p className="text-xl mb-8 opacity-95">No credit card required. Full access to all features.</p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition cursor-pointer">
            Get Started for Free
          </button>
        </div>
      </section>
    </div>
  );
}
