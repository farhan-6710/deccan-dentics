import { AboutSection } from "@/components/AboutSection";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "About | Deccan Dentics",
  description:
    "10+ years of clinical excellence and 25k+ happy patients across Hyderabad.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutSection />
    </PageShell>
  );
}
