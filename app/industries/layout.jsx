import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  path: '/industries',
  title: 'WellPlan Industry Solutions — CRM for Every Vertical',
  description: 'WellPlan is built for every industry. E-commerce, real estate, healthcare, coaching, fitness, and more. See how your peers are winning with automation.',
});

export default function IndustriesLayout({ children }) {
  return children;
}
