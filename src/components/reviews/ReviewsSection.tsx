import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { ReviewsCarousel } from "@/components/reviews/ReviewsCarousel";
import { reviews } from "@/data/reviews";

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-b border-border bg-muted/40 py-[var(--section-padding-y)]"
    >
      <Image
        src="/images/leaf-accent.png"
        alt=""
        width={140}
        height={180}
        aria-hidden
        className="pointer-events-none absolute -left-2 top-12 hidden w-20 select-none opacity-40 sm:block md:w-28"
      />

      <div className="relative mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
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
