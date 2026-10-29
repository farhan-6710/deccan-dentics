import { BranchesSection } from "@/components/branches/BranchesSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { PageShell } from "@/components/layout/PageShell";

export default function ContactPage() {
  return (
    <PageShell>
      <BranchesSection />
      <ContactSection />
    </PageShell>
  );
}
