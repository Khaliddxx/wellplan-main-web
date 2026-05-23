import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/solutions/agencies",
  title: "Voor Bureaus | WellPlan",
  description: "White-label marketingautomatisering voor bureaus. Onbeperkte sub-accounts, eigen branding, klantdashboards en resellerprizen.",
});

export default function Layout({ children }) {
  return children;
}
