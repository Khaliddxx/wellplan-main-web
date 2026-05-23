import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/features/nurturing",
  title: "Leads Nurturen | WellPlan",
  description: "Onderhoud relaties op schaal met geautomatiseerde e-mail, SMS en WhatsApp sequenties. Bouw vertrouwen op autopilot.",
});

export default function Layout({ children }) {
  return children;
}
