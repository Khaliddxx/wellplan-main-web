import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  path: '/blog',
  title: 'WellPlan Blog — CRM, WhatsApp Marketing & AI Lead Generation',
  description: 'Guides, playbooks, and case studies on CRM automation, WhatsApp marketing, AI lead qualification, and growing your business with WellPlan.',
});

export default function BlogLayout({ children }) {
  return children;
}
