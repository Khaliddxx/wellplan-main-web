import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/integrations",
  title: "Integraties | WellPlan",
  description: "50+ integraties met je favoriete tools. WhatsApp, Instagram, Facebook, Google, Stripe, Zapier en meer.",
});

export default function Layout({ children }) {
  return children;
}
