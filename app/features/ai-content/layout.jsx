import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: '/features/ai-content',
  title: 'AI Content Generation — Email, SMS & Social Copy | WellPlan',
  description: 'Generate emails, SMS, social posts, and blog content in seconds with AI. Train it on your brand voice for consistent, on-brand messaging.',
});

export default function AIContentLayout({ children }) {
  return children;
}
