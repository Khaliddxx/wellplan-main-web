import { buildMetadata } from '@/app/lib/seo';

export const metadata = buildMetadata({
  path: '/guides/migrate-from-hubspot',
  title: 'How to Migrate from HubSpot to WellPlan — Step-by-Step Guide',
  description:
    'Switching from HubSpot to WellPlan? Step-by-step migration guide covering contacts, deals, automations, and email campaigns. Free migration support.',
});

export default function MigrateFromHubspotLayout({ children }) {
  return children;
}
