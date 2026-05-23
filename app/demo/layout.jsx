import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  path: '/demo',
  title: 'Book a Free WellPlan Demo — See the Platform Live',
  description: 'Schedule a personalized WellPlan demo. See how our all-in-one CRM, automation, and AI platform helps you capture, nurture, and close more leads.',
});

export default function DemoLayout({ children }) {
  return children;
}
