import { buildMetadata } from '../../lib/seo';
import { getFeatureFaqs, buildFaqJsonLd } from '../../lib/featureFaqs';

export const metadata = buildMetadata({
  path: '/features/ai',
  title: 'AI Employee Suite — 6 AI Tools That Work 24/7 | WellPlan',
  description: '6 AI tools that work 24/7: Conversation AI, Voice AI, Reviews AI, Content AI, Funnel AI, and Workflow AI. Automate your business on autopilot.',
});

const faqJsonLd = buildFaqJsonLd(getFeatureFaqs('ai'));

export default function AILayout({ children }) {
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
