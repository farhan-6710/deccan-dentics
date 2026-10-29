"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { reviews } from "@/data/reviews";
import { cn } from "cn";

export function ReviewsCarousel() {
  const [selected, setSelected] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 4500, stopOnInteraction: true })],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    const frame = requestAnimationFrame(() => onSelect());
    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Vertical padding so the scaled center card is not clipped */}
      <div className="overflow-hidden px-2" ref={emblaRef}>
        <div className="flex touch-pan-y items-stretch py-10 sm:py-12">
          {reviews.map((review, index) => {
            const focused = index === selected;
            return (
              <div
                key={review.id}
                className="min-w-0 shrink-0 grow-0 basis-full px-2 sm:basis-1/2 lg:basis-1/3"
              >
                <article
                  className={cn(
                    "h-full rounded-2xl border border-border bg-card p-6 transition-all duration-500 ease-out",
                    focused
                      ? "z-10 scale-100 opacity-100 shadow-md lg:scale-[1.04]"
                      : "scale-[0.97] opacity-70 lg:scale-[0.95]",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-12 items-center justify-center rounded-full bg-secondary font-heading text-sm font-bold text-primary">
                      {review.initials}
                    </span>
                    <div>
                      <p className="font-heading text-base font-bold text-foreground">
                        {review.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-0.5 text-chart-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    “{review.text}”
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Previous review"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft className="size-4" />
        </Button>
        <div className="flex gap-1.5">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              type="button"
              aria-label={`Go to review ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "size-2 rounded-full transition-all",
                index === selected
                  ? "w-5 bg-primary"
                  : "bg-border hover:bg-muted-foreground/40",
              )}
            />
          ))}
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Next review"
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
