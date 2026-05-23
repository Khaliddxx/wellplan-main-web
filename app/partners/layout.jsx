import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  path: '/partners',
  title: 'WellPlan Partner Program — White-Label CRM for Agencies',
  description: 'Join the WellPlan partner network. White-label CRM and marketing automation, revenue sharing, and dedicated support for agencies and resellers.',
});

export default function PartnersLayout({ children }) {
  return children;
}
