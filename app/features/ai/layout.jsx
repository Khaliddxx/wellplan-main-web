import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: '/features/ai',
  title: 'AI Employee Suite — 6 AI Tools That Work 24/7 | WellPlan',
  description: '6 AI tools that work 24/7: Conversation AI, Voice AI, Reviews AI, Content AI, Funnel AI, and Workflow AI. Automate your business on autopilot.',
});

export default function AILayout({ children }) {
  return children;
}
