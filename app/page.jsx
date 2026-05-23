import EnhancedHero from './components/EnhancedHero';
import StickyFeatureScroll from './components/StickyFeatureScroll';
import ComparisonMatrix from './components/ComparisonMatrix';
import TestimonialCarousel from './components/TestimonialCarousel';
import FinalCTA from './components/FinalCTA';
import IntegrationLogoCarousel from './components/IntegrationLogoCarousel';
import DiscoverPlatform from './components/DiscoverPlatform';
import { buildMetadata } from './lib/seo';

export const metadata = buildMetadata({
  path: '/',
  title: 'WellPlan — The AI Lead Generation Platform | Capture. Nurture. Close.',
  description: 'WellPlan turns visitors into leads, leads into customers, and customers into raving fans. All-in-one CRM with WhatsApp, AI chatbots, voice agents, and 200+ integrations.',
});

export default function HomePage() {
  return (
    <>
      <EnhancedHero />
      <StickyFeatureScroll />
      <DiscoverPlatform />
      <IntegrationLogoCarousel />
      <ComparisonMatrix />
      <TestimonialCarousel />
      <FinalCTA />
    </>
  );
}
