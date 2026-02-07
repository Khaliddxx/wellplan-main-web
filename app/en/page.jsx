import EnhancedHero from '../components/EnhancedHero';
import StatsSection from '../components/StatsSection';
import TrustedBy from '../components/TrustedBy';
import StickyFeatureScroll from '../components/StickyFeatureScroll';
import ComparisonMatrix from '../components/ComparisonMatrix';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FinalCTA from '../components/FinalCTA';
import IntegrationLogoCarousel from '../components/IntegrationLogoCarousel';

export const metadata = {
  title: 'WellPlan | Capture. Nurture. Close.',
  description: 'The all-in-one platform that turns visitors into leads, leads into customers, and customers into raving fans.',
};

export default function HomePage() {
  return (
    <>
      <EnhancedHero />
      <TrustedBy />
      <StatsSection />
      <StickyFeatureScroll />
      <IntegrationLogoCarousel />
      <ComparisonMatrix />
      <TestimonialCarousel />
      <FinalCTA />
    </>
  );
}
