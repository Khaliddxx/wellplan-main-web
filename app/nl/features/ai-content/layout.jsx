import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/features/ai-content",
  title: "Content AI | WellPlan",
  description: "Genereer e-mails, SMS, social posts en blogcontent in seconden met AI. Train op je merkstem voor consistente berichten.",
});

export default function Layout({ children }) {
  return children;
}
