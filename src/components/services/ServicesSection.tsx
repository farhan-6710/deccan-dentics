"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Baby,
  Check,
  Crown,
  Smile,
  Sparkles,
  Syringe,
  WandSparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { FloatingTools } from "@/components/motion/FloatingTools";
import { SECTION_TOOLS } from "@/data/section-tools";
import { SERVICES } from "@/data/services";

const ICONS = [Syringe, WandSparkles, Smile, Sparkles, Crown, Baby] as const;

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];
  const Icon = ICONS[active] ?? Smile;

  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-border bg-muted/40 py-[var(--section-padding-y)]"
    >
      <FloatingTools tools={[...SECTION_TOOLS.services]} />
      <div className="relative z-10 mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p
            className="text-xs font-semibold uppercase text-primary sm:text-sm"
            style={{ letterSpacing: "var(--tracking-wider)" }}
          >
            Our services
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            High quality care for every smile
          </h2>
          <p className="mt-4 text-muted-foreground">
            From implants to kids’ dentistry—modern techniques, gentle hands,
            and a plan tailored to you.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {SERVICES.map((item, index) => {
              const TabIcon = ICONS[index] ?? Smile;
              const isActive = index === active;
              return (
                <Button
                  key={item.id}
                  type="button"
                  size="lg"
                  variant={isActive ? "default" : "outline"}
                  onClick={() => setActive(index)}
                  className="gap-2 px-4"
                >
                  <TabIcon className="size-4" />
                  <span className="hidden sm:inline">{item.title}</span>
                  <span className="sm:hidden">{item.title.split(" ")[0]}</span>
                </Button>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.14} className="mt-8">
          <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 md:grid-cols-2 md:p-8 lg:gap-10">
            <div className="space-y-5">
              <div className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
              <ul className="space-y-2.5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-2 px-5">
                Learn More
              </Button>
            </div>

            <div className="relative min-h-56 overflow-hidden rounded-2xl bg-secondary sm:min-h-72">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
