import { buildMetadata } from '../../lib/seo';
import { getFeatureFaqs, buildFaqJsonLd } from '../../lib/featureFaqs';

export const metadata = buildMetadata({
  path: '/features/ai-bot',
  title: 'AI Chatbot for Lead Generation — WhatsApp & Telegram | WellPlan',
  description: 'AI chatbot for WhatsApp and Telegram that qualifies leads and books appointments 24/7. Syncs with your calendar and CRM automatically.',
});

const faqJsonLd = buildFaqJsonLd(getFeatureFaqs('ai-bot'));

export default function AIBotLayout({ children }) {
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
