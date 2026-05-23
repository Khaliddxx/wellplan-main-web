import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: '/features/capturing',
  title: 'Lead Capture Software — Forms, Landing Pages & AI Chat | WellPlan',
  description: 'Capture more leads with smart forms, landing pages, AI chatbots, and conversion-optimized pop-ups. Turn visitors into qualified leads 24/7.',
});

export default function CaptureLayout({ children }) {
  return children;
}
