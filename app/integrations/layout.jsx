import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  path: '/integrations',
  title: 'WellPlan Integrations — 200+ Apps via Native + Zapier',
  description: 'Connect WellPlan to 200+ tools you already use, including WhatsApp, Instagram, Facebook, Google, Stripe, Shopify, and 5,000+ apps via Zapier.',
});

export default function IntegrationsLayout({ children }) {
  return children;
}
