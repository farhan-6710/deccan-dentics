import { FadeIn } from "@/components/motion/FadeIn";
import { FloatingTools } from "@/components/motion/FloatingTools";
import { ReviewsCarousel } from "@/components/reviews/ReviewsCarousel";
import { reviews } from "@/data/reviews";
import { SECTION_TOOLS } from "@/data/section-tools";

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-b border-border bg-muted/40 py-[var(--section-padding-y)]"
    >
      <FloatingTools tools={[...SECTION_TOOLS.reviews]} />

      <div className="relative z-10 mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <FadeIn className="max-w-2xl">
          <p
            className="text-xs font-semibold uppercase text-primary sm:text-sm"
            style={{ letterSpacing: "var(--tracking-wider)" }}
          >
            Patient reviews
          </p>
          <p className="mt-3 font-script text-2xl text-primary sm:text-3xl">
            Voices from our chairs
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted for compassionate care
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real stories from families across our Hyderabad clinics—gentle
            visits, clear plans, lasting smiles.
          </p>
          <p className="mt-5 font-heading text-5xl font-bold tabular-nums text-primary/15 sm:text-6xl">
            {String(reviews.length).padStart(2, "0")}
          </p>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-4">
          <ReviewsCarousel />
        </FadeIn>
      </div>
    </section>
  );
}
