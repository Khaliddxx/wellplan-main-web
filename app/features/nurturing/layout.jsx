import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  path: '/features/nurturing',
  title: 'Automated Lead Nurturing — Email, SMS & WhatsApp | WellPlan',
  description: 'Automate your follow-ups with email, SMS, and WhatsApp sequences. Nurture leads with personalized content and AI-powered engagement.',
});

export default function NurtureLayout({ children }) {
  return children;
}
