import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import { HeroSection } from "@/components/HeroSection";
import { PageShell } from "@/components/PageShell";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
    </PageShell>
  );
}
