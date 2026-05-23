import { buildMetadata } from '@/app/lib/seo';

export const metadata = buildMetadata({
  path: '/resources/whatsapp-crm',
  title: 'WhatsApp CRM — Complete Guide to Using WhatsApp for Business | WellPlan',
  description:
    'Use WhatsApp as a CRM channel: official Business API, unified inbox, automation, AI chatbots, and templates. Complete WhatsApp CRM guide for businesses.',
});

export default function WhatsappCrmLayout({ children }) {
  return children;
}
