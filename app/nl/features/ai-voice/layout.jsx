import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/features/ai-voice",
  title: "Voice AI | WellPlan",
  description: "AI telefoonagenten die inkomende en uitgaande gesprekken afhandelen met natuurlijke spraak. Kwalificeer leads, boek afspraken, 24/7.",
});

export default function Layout({ children }) {
  return children;
}
