import { FadeIn } from "@/components/motion/FadeIn";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="border-b border-border bg-background py-[var(--section-padding-y)]"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p
            className="text-xs font-semibold uppercase text-primary sm:text-sm"
            style={{ letterSpacing: "var(--tracking-wider)" }}
          >
            Patient reviews
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted for compassionate care
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real stories from families across our Hyderabad clinics—gentle
            visits, clear plans, lasting smiles.
          </p>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-12">
          <ReviewsCarousel />
        </FadeIn>
      </div>
    </section>
  );
}
