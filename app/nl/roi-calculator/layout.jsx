import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/roi-calculator",
  title: "ROI Calculator | WellPlan",
  description: "Bereken hoeveel je kunt besparen met WellPlan. Zie je potentiële ROI met onze gratis calculator.",
});

export default function Layout({ children }) {
  return children;
}
