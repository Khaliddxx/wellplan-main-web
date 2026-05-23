import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: '/partners/pseo',
  title: 'WellPlan + PSEO Agency — Done-for-You CRM Setup',
  description: 'WellPlan partner: PSEO Agency provides done-for-you CRM setup, onboarding, and ongoing optimization for businesses scaling with WellPlan.',
});

export default function PSEOPartnerLayout({ children }) {
  return children;
}
