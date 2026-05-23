import { buildMetadata } from '../../lib/seo';
import { getFeatureFaqs, buildFaqJsonLd } from '../../lib/featureFaqs';

export const metadata = buildMetadata({
  path: '/features/closing',
  title: 'Sales CRM & Pipeline Management — Close Deals Faster | WellPlan',
  description: 'Close more deals with pipeline management, AI lead scoring, calendar booking, and seamless payment processing. Built for modern sales teams.',
});

const faqJsonLd = buildFaqJsonLd(getFeatureFaqs('closing'));

export default function CloseLayout({ children }) {
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
