import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: '/solutions/sales-teams',
  title: 'CRM for Sales Teams — Pipeline, Lead Scoring & Analytics | WellPlan',
  description: 'Close more deals faster. Pipeline management, team collaboration, AI lead scoring, and performance analytics built for modern sales teams.',
});

export default function SalesTeamsLayout({ children }) {
  return children;
}
