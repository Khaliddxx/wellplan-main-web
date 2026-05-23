import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  path: '/roi-calculator',
  title: 'WellPlan ROI Calculator — Estimate Time & Money Saved',
  description: 'Calculate your potential return on investment with WellPlan. See how much time and money you could save with CRM and marketing automation.',
});

export default function ROICalculatorLayout({ children }) {
  return children;
}
