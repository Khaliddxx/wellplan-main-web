import EnhancedHero from '../components/EnhancedHero';
import StickyFeatureScroll from '../components/StickyFeatureScroll';
import ComparisonMatrix from '../components/ComparisonMatrix';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FinalCTA from '../components/FinalCTA';
import IntegrationLogoCarousel from '../components/IntegrationLogoCarousel';

export const metadata = {
  title: 'WellPlan | Vastleggen. Nurture. Afsluiten.',
  description: 'Het alles-in-één platform dat bezoekers omzet in leads, leads in klanten, en klanten in enthousiaste fans.',
  alternates: {
    canonical: 'https://wellplan.io/nl',
    languages: {
      'en': 'https://wellplan.io/en',
      'nl': 'https://wellplan.io/nl',
    },
  },
  openGraph: {
    title: 'WellPlan | Vastleggen. Nurture. Afsluiten.',
    description: 'Het alles-in-één platform dat bezoekers omzet in leads, leads in klanten, en klanten in enthousiaste fans.',
    url: 'https://wellplan.io/nl',
    locale: 'nl_NL',
    alternateLocale: 'en_US',
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
