import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  path: '/contact',
  title: 'Contact WellPlan — Talk to Sales & Support',
  description: 'Get in touch with the WellPlan team. We\'re here to help you capture more leads, nurture relationships, and close deals faster.',
});

export default function ContactLayout({ children }) {
  return children;
}
