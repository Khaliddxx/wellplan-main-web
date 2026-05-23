import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/terms",
  title: "Algemene Voorwaarden | WellPlan",
  description: "Lees de algemene voorwaarden van WellPlan. De regels en voorwaarden voor het gebruik van onze diensten.",
});

export default function Layout({ children }) {
  return children;
}
