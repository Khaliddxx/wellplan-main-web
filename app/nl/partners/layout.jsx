import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/partners",
  title: "Partner Programma | WellPlan",
  description: "Word een WellPlan partner. White-label oplossingen, omzetdeling en dedicated support voor bureaus en resellers.",
});

export default function Layout({ children }) {
  return children;
}
