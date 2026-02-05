export const metadata = {
  title: 'Terms of Service',
  description: 'WellPlan Terms of Service - The agreement governing your use of our platform.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: February 2026</p>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              By accessing or using WellPlan's services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you 
              are prohibited from using or accessing our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">2. Description of Service</h2>
            <p className="text-gray-400 leading-relaxed">
              WellPlan provides a marketing automation and CRM platform that enables businesses to capture 
              leads, nurture relationships, and close deals. Our services include but are not limited to 
              email marketing, SMS messaging, landing pages, forms, and integrations with third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">3. Account Registration</h2>
            <p className="text-gray-400 leading-relaxed mb-4">To use our services, you must:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Be at least 18 years old</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly update any changes to your information</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">4. Acceptable Use</h2>
            <p className="text-gray-400 leading-relaxed mb-4">You agree not to use our services to:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Send unsolicited or unauthorized advertising (spam)</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malicious code or interfere with our systems</li>
              <li>Harass, abuse, or harm others</li>
              <li>Collect user information without consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Payment Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              Paid services are billed in advance on a monthly or annual basis. All fees are non-refundable 
              except as required by law or as explicitly stated in these terms. We reserve the right to 
              change our prices with 30 days notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">6. Intellectual Property</h2>
            <p className="text-gray-400 leading-relaxed">
              The WellPlan platform, including its original content, features, and functionality, is owned 
              by KLABS Ventures LLC and is protected by international copyright, trademark, and other 
              intellectual property laws. You retain ownership of content you create using our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">7. Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              To the maximum extent permitted by law, WellPlan shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
              whether incurred directly or indirectly, or any loss of data, use, goodwill, or other 
              intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">8. Termination</h2>
            <p className="text-gray-400 leading-relaxed">
              We may terminate or suspend your account immediately, without prior notice or liability, 
              for any reason, including breach of these Terms. Upon termination, your right to use the 
              service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">9. Changes to Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, 
              we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">10. Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@wellplan.io" className="text-[#214CE5] hover:underline">
                legal@wellplan.io
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
