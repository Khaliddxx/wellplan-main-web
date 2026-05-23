import { buildMetadata } from '../../lib/seo';
import { getFeatureFaqs, buildFaqJsonLd } from '../../lib/featureFaqs';

export const metadata = buildMetadata({
  path: '/features/ai-funnel',
  title: 'AI Funnel Builder — Landing Pages in Seconds | WellPlan',
  description: 'Build landing pages and funnels with AI. Just describe what you need and AI generates conversion-optimized pages in seconds.',
});

const faqJsonLd = buildFaqJsonLd(getFeatureFaqs('ai-funnel'));

export default function AIFunnelLayout({ children }) {
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
