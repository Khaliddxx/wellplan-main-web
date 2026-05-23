import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/features/capturing",
  title: "Leads Vastleggen | WellPlan",
  description: "Zet websitebezoekers om in gekwalificeerde leads met formulieren, landingspagina's en chatwidgets die converteren.",
});

export default function Layout({ children }) {
  return children;
}
