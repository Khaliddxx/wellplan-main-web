import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  path: '/privacy',
  title: 'Privacy Policy | WellPlan',
  description: 'WellPlan privacy policy. How we collect, use, and protect your data.',
});

export default function PrivacyLayout({ children }) {
  return children;
}
