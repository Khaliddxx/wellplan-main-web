import EnhancedHero from '../components/EnhancedHero';
import StickyFeatureScroll from '../components/StickyFeatureScroll';
import ComparisonMatrix from '../components/ComparisonMatrix';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FinalCTA from '../components/FinalCTA';
import IntegrationLogoCarousel from '../components/IntegrationLogoCarousel';

export const metadata = {
  title: 'WellPlan | Capture. Nurture. Close.',
  description: 'The all-in-one platform that turns visitors into leads, leads into customers, and customers into raving fans.',
  alternates: {
    canonical: 'https://wellplan.io/en',
    languages: {
      'en': 'https://wellplan.io/en',
      'nl': 'https://wellplan.io/nl',
    },
  },
  openGraph: {
    title: 'WellPlan | Capture. Nurture. Close.',
    description: 'The all-in-one platform that turns visitors into leads, leads into customers, and customers into raving fans.',
    url: 'https://wellplan.io/en',
    locale: 'en_US',
    alternateLocale: 'nl_NL',
  },
};

export default function HomePage() {
  return (
    <>
      <EnhancedHero />
      <StickyFeatureScroll />
      <IntegrationLogoCarousel />
      <ComparisonMatrix />
      <TestimonialCarousel />
      <FinalCTA />
    </>
  );
}
