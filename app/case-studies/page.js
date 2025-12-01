import HeroSection from "./HeroSection";
import HeroSectionNext from "./HeroSectionNext";
import AnimatedSection from "../../components/AnimatedSection";

export default function CaseStudiesPage() {
  return (
    <main>
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <HeroSectionNext />
      </AnimatedSection>
    </main>
  );
}
