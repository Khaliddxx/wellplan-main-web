import { buildMetadata } from '../../lib/seo';
import { getFeatureFaqs, buildFaqJsonLd } from '../../lib/featureFaqs';

export const metadata = buildMetadata({
  path: '/features/ai-content',
  title: 'AI Content Generation — Email, SMS & Social Copy | WellPlan',
  description: 'Generate emails, SMS, social posts, and blog content in seconds with AI. Train it on your brand voice for consistent, on-brand messaging.',
});

const faqJsonLd = buildFaqJsonLd(getFeatureFaqs('ai-content'));

export default function AIContentLayout({ children }) {
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
