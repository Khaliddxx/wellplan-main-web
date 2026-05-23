import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: '/features/ai-workflow',
  title: 'AI Workflow Automation — Smart Decision-Making Flows | WellPlan',
  description: 'Build intelligent automation flows with AI-powered decision making. Let AI analyze data and make smart decisions in your workflows.',
});

export default function AIWorkflowLayout({ children }) {
  return children;
}
