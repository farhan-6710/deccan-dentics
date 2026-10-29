import { PageShell } from "@/components/PageShell";
import { ReviewsSection } from "@/components/ReviewsSection";

export const metadata = {
  title: "Reviews | Deccan Dentics",
  description: "Patient stories from Deccan Dentics clinics across Hyderabad.",
};

export default function ReviewsPage() {
  return (
    <PageShell>
      <ReviewsSection />
    </PageShell>
  );
}
