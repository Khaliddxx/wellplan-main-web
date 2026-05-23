import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/about",
  title: "Over Ons | WellPlan",
  description: "Leer over de missie van WellPlan om krachtige marketingautomatisering toegankelijk te maken voor elk bedrijf. Onze waarden, ons verhaal.",
});

export default function Layout({ children }) {
  return children;
}
