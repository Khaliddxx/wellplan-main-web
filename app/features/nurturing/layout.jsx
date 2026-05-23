import { buildMetadata } from '../../lib/seo';
import { getFeatureFaqs, buildFaqJsonLd } from '../../lib/featureFaqs';

export const metadata = buildMetadata({
  path: '/features/nurturing',
  title: 'Automated Lead Nurturing — Email, SMS & WhatsApp | WellPlan',
  description: 'Automate your follow-ups with email, SMS, and WhatsApp sequences. Nurture leads with personalized content and AI-powered engagement.',
});

const faqJsonLd = buildFaqJsonLd(getFeatureFaqs('nurturing'));

export default function NurtureLayout({ children }) {
  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {children}
    </>
  );
}
