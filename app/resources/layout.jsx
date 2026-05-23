import { buildMetadata } from '@/app/lib/seo';

export const metadata = buildMetadata({
  path: '/resources',
  title: 'WellPlan Resources — Guides, Comparisons & Industry Insights',
  description:
    'Guides, comparison breakdowns, industry insights, and a complete glossary of CRM and marketing automation terms.',
});

export default function ResourcesLayout({ children }) {
  return children;
}
