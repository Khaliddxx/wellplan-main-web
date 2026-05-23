import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  path: '/about',
  title: 'About WellPlan — Our Mission, Story & Team',
  description: 'Learn about WellPlan\'s mission to make powerful marketing automation accessible to every business. Our values, story, and team.',
});

export default function AboutLayout({ children }) {
  return children;
}
