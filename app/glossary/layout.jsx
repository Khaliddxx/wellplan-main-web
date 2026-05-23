import { buildMetadata } from '@/app/lib/seo';

export const metadata = buildMetadata({
  path: '/glossary',
  title: 'WellPlan Glossary — CRM, Marketing Automation & Lead Generation Terms',
  description:
    '30+ definitions of essential CRM, marketing automation, and lead generation terms. Clear, jargon-free explanations from WellPlan.',
});

export default function GlossaryLayout({ children }) {
  return children;
}
