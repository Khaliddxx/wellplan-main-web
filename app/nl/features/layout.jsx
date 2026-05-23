import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/features",
  title: "Functies | WellPlan",
  description: "Alles-in-één marketingautomatisering functies. CRM, e-mailmarketing, SMS, landingspagina's, funnels, AI chatbots en meer.",
});

export default function Layout({ children }) {
  return children;
}
