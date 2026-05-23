import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/features/ai-funnel",
  title: "Funnel AI | WellPlan",
  description: "Bouw landingspagina's en funnels met AI. Beschrijf wat je nodig hebt en AI genereert conversie-geoptimaliseerde pagina's in seconden.",
});

export default function Layout({ children }) {
  return children;
}
