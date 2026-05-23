import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/features/ai-bot",
  title: "Conversatie AI | WellPlan",
  description: "AI chatbot voor WhatsApp & Telegram die leads kwalificeert en 24/7 afspraken boekt. Synchroniseert automatisch met je agenda.",
});

export default function Layout({ children }) {
  return children;
}
