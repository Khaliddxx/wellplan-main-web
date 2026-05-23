import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/contact",
  title: "Contact | WellPlan",
  description: "Neem contact op met het WellPlan team. Wij helpen je graag met het vangen van meer leads en het sluiten van meer deals.",
});

export default function Layout({ children }) {
  return children;
}
