import { buildMetadata } from '../../lib/seo';
import { getFeatureFaqs, buildFaqJsonLd } from '../../lib/featureFaqs';

export const metadata = buildMetadata({
  path: '/features/ai-reviews',
  title: 'AI Review Management — Auto-Reply to Google & Facebook | WellPlan',
  description: 'Automatically respond to Google and Facebook reviews with AI. Protect your reputation 24/7 with personalized, on-brand replies.',
});

const faqJsonLd = buildFaqJsonLd(getFeatureFaqs('ai-reviews'));

export default function AIReviewsLayout({ children }) {
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
