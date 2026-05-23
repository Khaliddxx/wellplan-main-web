import { buildMetadata } from '../../lib/seo';
import { getFeatureFaqs, buildFaqJsonLd } from '../../lib/featureFaqs';

export const metadata = buildMetadata({
  path: '/features/ai-workflow',
  title: 'AI Workflow Automation — Smart Decision-Making Flows | WellPlan',
  description: 'Build intelligent automation flows with AI-powered decision making. Let AI analyze data and make smart decisions in your workflows.',
});

const faqJsonLd = buildFaqJsonLd(getFeatureFaqs('ai-workflow'));

export default function AIWorkflowLayout({ children }) {
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
