import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/industries",
  title: "Branche Oplossingen | WellPlan",
  description: "WellPlan is gebouwd voor elke branche. E-commerce, vastgoed, gezondheidszorg, coaching en meer. Zie hoe jouw vakgenoten winnen.",
});

export default function Layout({ children }) {
  return children;
}
