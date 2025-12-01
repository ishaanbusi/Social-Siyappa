import AboutSection from "./AboutSection";
import AboutUsSection from "./AboutUsSection";
import OurHowSection from "./OurHowSection";
import OurWhySection from "./OurWhySection";
import AnimatedSection from "../../components/AnimatedSection";

export default function AboutPage() {
  return (
    <main>
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <AboutUsSection />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <OurWhySection />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <OurHowSection />
      </AnimatedSection>
    </main>
  );
}
