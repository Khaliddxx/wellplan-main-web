import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/solutions/coaches",
  title: "Voor Coaches | WellPlan",
  description: "Schaal je coachingbedrijf zonder je team uit te breiden. Geautomatiseerde follow-ups, agendaboeking, cursussen en community features.",
});

export default function Layout({ children }) {
  return children;
}
