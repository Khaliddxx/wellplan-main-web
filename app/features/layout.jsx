import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  path: '/features',
  title: 'WellPlan Features — All-in-One CRM, Automation & AI Suite',
  description: 'CRM, email marketing, SMS, WhatsApp, landing pages, funnels, AI chatbots, voice agents, and more — every feature you need to capture, nurture, and close leads.',
});

export default function FeaturesLayout({ children }) {
  return children;
}
