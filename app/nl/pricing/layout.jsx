import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/pricing",
  title: "Prijzen | WellPlan",
  description: "Eenvoudige, transparante prijzen voor WellPlan. Start gratis, upgrade naarmate je groeit. Plannen voor startups, groeiende bedrijven en bureaus.",
});

export default function Layout({ children }) {
  return children;
}
