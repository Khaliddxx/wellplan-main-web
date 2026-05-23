import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: '/features/ai-reviews',
  title: 'AI Review Management — Auto-Reply to Google & Facebook | WellPlan',
  description: 'Automatically respond to Google and Facebook reviews with AI. Protect your reputation 24/7 with personalized, on-brand replies.',
});

export default function AIReviewsLayout({ children }) {
  return children;
}
