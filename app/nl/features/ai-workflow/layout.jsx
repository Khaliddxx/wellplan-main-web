import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  path: "/nl/features/ai-workflow",
  title: "Workflow AI | WellPlan",
  description: "Bouw intelligente automatiseringsflows met AI-aangestuurde besluitvorming. Laat AI data analyseren en slimme beslissingen nemen.",
});

export default function Layout({ children }) {
  return children;
}
