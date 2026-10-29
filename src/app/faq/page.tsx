import { FaqSection } from "@/components/FaqSection";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "FAQ | Deccan Dentics",
  description: "Answers about visits, emergencies, kids care, branches, and payments.",
};

export default function FaqPage() {
  return (
    <PageShell>
      <FaqSection />
    </PageShell>
  );
}
