import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: '/features/ai-funnel',
  title: 'AI Funnel Builder — Landing Pages in Seconds | WellPlan',
  description: 'Build landing pages and funnels with AI. Just describe what you need and AI generates conversion-optimized pages in seconds.',
});

export default function AIFunnelLayout({ children }) {
  return children;
}
