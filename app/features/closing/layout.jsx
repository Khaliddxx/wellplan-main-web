import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: '/features/closing',
  title: 'Sales CRM & Pipeline Management — Close Deals Faster | WellPlan',
  description: 'Close more deals with pipeline management, AI lead scoring, calendar booking, and seamless payment processing. Built for modern sales teams.',
});

export default function CloseLayout({ children }) {
  return children;
}
