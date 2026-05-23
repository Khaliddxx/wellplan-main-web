import { buildMetadata } from '@/app/lib/seo';

export const metadata = buildMetadata({
  path: '/alternatives/all-in-one-marketing-platform',
  title: 'Looking for an All-in-One Marketing Platform? Meet WellPlan',
  description:
    'Tired of stitching together CRM, email, SMS, WhatsApp, funnels, AI, and automation tools? WellPlan replaces 7+ tools with one unified platform. From $97/mo.',
});

export default function AllInOneAlternativeLayout({ children }) {
  return children;
}
