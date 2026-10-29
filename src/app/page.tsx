import { AboutSection } from "@/components/about/AboutSection";
import { BranchesSection } from "@/components/branches/BranchesSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { HeroSection } from "@/components/home/HeroSection";
import { PageShell } from "@/components/layout/PageShell";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { WhyChooseUsSection } from "@/components/why-choose-us/WhyChooseUsSection";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <FaqSection />
      <BranchesSection />
      <ContactSection />
    </PageShell>
  );
}
