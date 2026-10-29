import { AboutSection } from "@/components/about/AboutSection";
import { PageShell } from "@/components/layout/PageShell";
import { WhyChooseUsSection } from "@/components/why-choose-us/WhyChooseUsSection";

export default function AboutPage() {
  return (
    <PageShell>
      <AboutSection />
      <WhyChooseUsSection />
    </PageShell>
  );
}
