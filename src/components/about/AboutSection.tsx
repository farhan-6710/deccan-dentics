import { FadeIn } from "@/components/motion/FadeIn";
import { FloatingTools } from "@/components/motion/FloatingTools";
import { AboutStats } from "@/components/about/AboutStats";
import { CLINIC } from "@/data/clinic";
import { SECTION_TOOLS } from "@/data/section-tools";

export function AboutSection() {
  const { about, stats } = CLINIC;

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-border bg-background py-[var(--section-padding-y)]"
    >
      <FloatingTools tools={[...SECTION_TOOLS.about]} />

      <div className="relative z-10 mx-auto grid max-w-[var(--container-max)] items-start gap-12 px-[var(--container-padding)] lg:grid-cols-[3fr_2fr] lg:gap-14">
        <FadeIn className="min-w-0">
          <p
            className="text-xs font-semibold uppercase text-primary sm:text-sm"
            style={{ letterSpacing: "var(--tracking-wider)" }}
          >
            {about.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {about.title}
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">{about.body}</p>
          <p className="mt-3 max-w-xl text-muted-foreground">
            {about.bodySecondary}
          </p>
          <p className="mt-6 font-heading text-5xl font-bold tabular-nums text-primary/15 sm:text-6xl">
            {stats[0].value}
          </p>
        </FadeIn>

        <FadeIn delay={0.12} className="min-w-0">
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <p className="font-script text-2xl text-primary sm:text-3xl">
              “{about.quote}”
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                {about.doctorName}
              </span>
              <span className="mx-1.5">·</span>
              {about.doctorRole}
            </p>
          </div>
          <AboutStats />
        </FadeIn>
      </div>
    </section>
  );
}
