import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/features/ai-reviews",
  title: "Reviews AI | WellPlan",
  description: "Reageer automatisch op Google en Facebook reviews met AI. Bescherm je reputatie 24/7 met gepersonaliseerde antwoorden.",
});

export default function Layout({ children }) {
  return children;
}
