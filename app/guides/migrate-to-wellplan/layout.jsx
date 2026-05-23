import { buildMetadata } from '@/app/lib/seo';

export const metadata = buildMetadata({
  path: '/guides/migrate-to-wellplan',
  title: 'How to Migrate Your CRM to WellPlan — Complete Migration Guide',
  description:
    'Step-by-step guide to migrating your CRM, contacts, automations, and integrations to WellPlan. Free migration support included.',
});

export default function MigrateToWellplanLayout({ children }) {
  return children;
}
