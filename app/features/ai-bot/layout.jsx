import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: '/features/ai-bot',
  title: 'AI Chatbot for Lead Generation — WhatsApp & Telegram | WellPlan',
  description: 'AI chatbot for WhatsApp and Telegram that qualifies leads and books appointments 24/7. Syncs with your calendar and CRM automatically.',
});

export default function AIBotLayout({ children }) {
  return children;
}
