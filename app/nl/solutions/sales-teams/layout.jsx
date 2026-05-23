import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/solutions/sales-teams",
  title: "Voor Sales Teams | WellPlan",
  description: "Sluit meer deals sneller. Pipeline management, teamcollaboratie, lead scoring en prestatie-analytics voor sales teams.",
});

export default function Layout({ children }) {
  return children;
}
