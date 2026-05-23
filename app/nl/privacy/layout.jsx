import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/privacy",
  title: "Privacybeleid | WellPlan",
  description: "Lees het privacybeleid van WellPlan. Hoe we je gegevens verzamelen, gebruiken en beschermen.",
});

export default function Layout({ children }) {
  return children;
}
