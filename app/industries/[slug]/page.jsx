import { getIndustry, siteData } from '../../lib/data';

export async function generateStaticParams() {
  return siteData.industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export default function IndustryPage({ params }) {
  const industry = getIndustry(params.slug);

  if (!industry) {
    return (
      <div className="py-20 px-4">
        <div className="container text-center">
          <h1 className="text-3xl font-black text-gray-900">Industry not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20 px-4">
        <div className="container">
          <div className="max-w-2xl">
            <div className="text-6xl mb-6">{industry.icon}</div>
            <h1 className="text-5xl font-black text-gray-900 mb-6">{industry.name}</h1>
            <p className="text-2xl text-gray-600 mb-8">{industry.desc}</p>
            <button className="btn-primary">Get Started for Free</button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="container">
          <h2 className="text-4xl font-black text-gray-900 mb-12">Key Features for {industry.name}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {industry.features.map((feature, idx) => (
              <div key={idx} className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature}</h3>
                <p className="text-gray-600">
                  Optimized specifically for {industry.name.toLowerCase()} businesses to streamline operations and increase efficiency.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container">
          <h2 className="text-4xl font-black text-gray-900 mb-12">Success in {industry.name}</h2>
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
            <div className="mb-6">
              <div className="text-primary text-2xl font-bold mb-2">300% Sales Increase</div>
              <p className="text-gray-600 text-lg">
                {industry.name} businesses using WellPlan see average sales increases of 300% through improved customer engagement and automation.
              </p>
            </div>
            <div className="mb-6">
              <div className="text-primary text-2xl font-bold mb-2">85% Time Saved</div>
              <p className="text-gray-600 text-lg">
                Reduce manual work with AI-powered automation, allowing your team to focus on high-value activities.
              </p>
            </div>
            <div>
              <div className="text-primary text-2xl font-bold mb-2">24/7 Availability</div>
              <p className="text-gray-600 text-lg">
                Never miss a customer inquiry with round-the-clock automated responses and smart routing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 px-4">
        <div className="container text-center">
          <h2 className="text-4xl font-black mb-6">Ready to transform {industry.name.toLowerCase()}?</h2>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Get Started for Free
          </button>
        </div>
      </section>
    </div>
  );
}
