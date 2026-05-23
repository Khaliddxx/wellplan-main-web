import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  path: '/pricing',
  title: 'WellPlan Pricing — Plans From $97/mo | Agency, Business, Enterprise',
  description: 'Transparent WellPlan pricing. Agency ($97/mo), Business, and Enterprise plans. All include unlimited contacts, WhatsApp, AI, and 200+ integrations. 14-day free trial.',
});

export default function PricingLayout({ children }) {
  return children;
}
