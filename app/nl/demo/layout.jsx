import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/demo",
  title: "Boek een Demo | WellPlan",
  description: "Plan een persoonlijke demo van WellPlan. Ontdek hoe ons alles-in-één marketingplatform je kan helpen meer leads te vangen en te converteren.",
});

export default function Layout({ children }) {
  return children;
}
