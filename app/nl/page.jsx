import EnhancedHero from '../components/EnhancedHero';
import StickyFeatureScroll from '../components/StickyFeatureScroll';
import ComparisonMatrix from '../components/ComparisonMatrix';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FinalCTA from '../components/FinalCTA';
import IntegrationLogoCarousel from '../components/IntegrationLogoCarousel';
import DiscoverPlatform from '../components/DiscoverPlatform';
import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  path: '/nl',
  title: 'WellPlan — Het AI Lead Generatie Platform | Vastleggen. Nurture. Afsluiten.',
  description: 'WellPlan zet bezoekers om in leads, leads in klanten, en klanten in enthousiaste fans. All-in-one CRM met WhatsApp, AI chatbots, voice agents en 200+ integraties.',
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
