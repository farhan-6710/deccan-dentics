import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { FloatingTools } from "@/components/motion/FloatingTools";
import { WhyChooseReason } from "@/components/why-choose-us/WhyChooseReason";
import { SECTION_TOOLS } from "@/data/section-tools";
import { WHY_CHOOSE_US } from "@/data/why-choose-us";

export function WhyChooseUsSection() {
  const { eyebrow, title, intro, image, reasons } = WHY_CHOOSE_US;

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden border-b border-border bg-muted/40 py-[var(--section-padding-y)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-secondary/70 blur-3xl"
      />
      <FloatingTools tools={[...SECTION_TOOLS.whyChooseUs]} />

      <div className="relative z-10 mx-auto grid max-w-[var(--container-max)] items-center gap-12 px-[var(--container-padding)] lg:grid-cols-[2fr_3fr] lg:gap-16">
        <FadeIn className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
          <div className="relative mx-auto flex aspect-square max-w-[22rem] items-center justify-center lg:max-w-none">
            <div
              aria-hidden
              className="absolute inset-[8%] rounded-full bg-secondary/80"
            />
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="relative z-10 h-auto w-[88%] object-contain drop-shadow-sm"
              sizes="(max-width: 1024px) 320px, 40vw"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="min-w-0">
          <p
            className="text-xs font-semibold uppercase text-primary sm:text-sm"
            style={{ letterSpacing: "var(--tracking-wider)" }}
          >
            {eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">{intro}</p>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7">
            {reasons.map((reason, index) => (
              <WhyChooseReason
                key={reason.title}
                index={index}
                title={reason.title}
                body={reason.body}
              />
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
