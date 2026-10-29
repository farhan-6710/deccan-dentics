import { PageShell } from "@/components/PageShell";
import { ServicesSection } from "@/components/ServicesSection";

export const metadata = {
  title: "Services | Deccan Dentics",
  description:
    "Dental implants, cosmetic care, root canals, whitening, crowns, and kids dentistry.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesSection />
    </PageShell>
  );
}
