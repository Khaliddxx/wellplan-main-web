import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: '/solutions/agencies',
  title: 'White-Label CRM for Marketing Agencies | WellPlan',
  description: 'White-label CRM and marketing automation for agencies. Unlimited sub-accounts, custom branding, client dashboards, and reseller pricing.',
});

export default function AgenciesLayout({ children }) {
  return children;
}
