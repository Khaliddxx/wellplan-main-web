import { buildMetadata } from '../../lib/seo';
import { getFeatureFaqs, buildFaqJsonLd } from '../../lib/featureFaqs';

export const metadata = buildMetadata({
  path: '/features/capturing',
  title: 'Lead Capture Software — Forms, Landing Pages & AI Chat | WellPlan',
  description: 'Capture more leads with smart forms, landing pages, AI chatbots, and conversion-optimized pop-ups. Turn visitors into qualified leads 24/7.',
});

const faqJsonLd = buildFaqJsonLd(getFeatureFaqs('capturing'));

export default function CaptureLayout({ children }) {
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
