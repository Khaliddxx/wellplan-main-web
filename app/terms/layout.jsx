import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  path: '/terms',
  title: 'Terms of Service | WellPlan',
  description: 'WellPlan terms of service. The agreement between you and WellPlan when using our platform.',
});

export default function TermsLayout({ children }) {
  return children;
}
