import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/case-studies",
  title: "Case Studies | WellPlan",
  description: "Zie hoe bedrijven in verschillende sectoren buitengewone resultaten behaalden met WellPlan. Echte klantverhalen en meetbare resultaten.",
});

export default function Layout({ children }) {
  return children;
}
