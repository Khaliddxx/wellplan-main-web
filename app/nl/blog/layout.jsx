import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/blog",
  title: "Blog | WellPlan",
  description: "Marketingtips, productupdates en groeistrategieën van WellPlan. Leer hoe je meer leads vangt, nurturt en converteert.",
});

export default function Layout({ children }) {
  return children;
}
