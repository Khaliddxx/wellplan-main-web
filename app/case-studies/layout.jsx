import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  path: '/case-studies',
  title: 'WellPlan Case Studies — Real Customer Results',
  description: 'See how agencies, coaches, and SMBs across industries achieve extraordinary results with WellPlan. Real customer stories and measurable outcomes.',
});

export default function CaseStudiesLayout({ children }) {
  return children;
}
