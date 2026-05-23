import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/features/ai",
  title: "AI Medewerker Suite | WellPlan",
  description: "6 AI-tools die 24/7 werken: Conversatie AI, Voice AI, Reviews AI, Content AI, Funnel AI en Workflow AI. Automatiseer je bedrijf op autopilot.",
});

export default function Layout({ children }) {
  return children;
}
