import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: '/solutions/coaches',
  title: 'Marketing Automation & CRM for Coaches | WellPlan',
  description: 'Scale your coaching business without scaling your team. Automated follow-ups, calendar booking, course memberships, and community features.',
});

export default function CoachesLayout({ children }) {
  return children;
}
