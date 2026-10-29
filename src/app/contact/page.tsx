import { ContactSection } from "@/components/ContactSection";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Contact | Deccan Dentics",
  description:
    "Contact Deccan Dentics Manikonda — phone 079956 86661 for enquiries.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactSection />
    </PageShell>
  );
}
