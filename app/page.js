import HeroSection from './HeroSection';
import PortfolioSection from './PortfolioSection';
import ServicesSection from './ServicesSection';
import NeuromarketingSection from './NeuromarketingSection';
import ChemistrySection from './ChemistrySection';
import ContactSection from './ContactSection';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  return (
    <>
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <PortfolioSection />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <NeuromarketingSection />
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <ChemistrySection />
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <ContactSection />
      </AnimatedSection>
    </>
  );
}
