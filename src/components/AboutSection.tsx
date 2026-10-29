import Image from "next/image";
import { Award, Building2, HeartPulse, Users } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { CLINIC } from "@/data/clinic";

const STAT_ICONS = [Award, Users, Building2, HeartPulse] as const;

export function AboutSection() {
  const { about, stats } = CLINIC;

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-border bg-background py-[var(--section-padding-y)]"
    >
      <div className="mx-auto grid max-w-[var(--container-max)] items-center gap-12 px-[var(--container-padding)] lg:grid-cols-[3fr_2fr] lg:gap-14">
        <FadeIn className="space-y-6">
          <p
            className="text-xs font-semibold uppercase text-primary sm:text-sm"
            style={{ letterSpacing: "var(--tracking-wider)" }}
          >
            {about.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {about.title}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {about.body}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {about.bodySecondary}
          </p>

          <ul className="grid grid-cols-2 gap-4 pt-2 sm:gap-5">
            {stats.map((stat, i) => {
              const Icon = STAT_ICONS[i] ?? Award;
              return (
                <li key={stat.label} className="flex items-start gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="size-4" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block font-heading text-xl font-bold text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-xs text-muted-foreground sm:text-sm">
                      {stat.label}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </FadeIn>

        <FadeIn delay={0.12} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
              <Image
                src="/images/doctor.png"
                alt="Deccan Dentics clinical team"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
            <blockquote className="space-y-2 px-2 py-5 text-center">
              <p className="font-script text-2xl text-primary sm:text-3xl">
                “{about.quote}”
              </p>
              <footer className="font-body text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {about.doctorName}
                </span>
                <span className="mx-1.5">·</span>
                {about.doctorRole}
              </footer>
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
