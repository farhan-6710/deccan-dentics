"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroFeatures } from "@/components/home/HeroFeatures";
import { HeroTrustBadge } from "@/components/home/HeroTrustBadge";
import { HeroMotion } from "@/components/motion/FadeIn";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border bg-background pb-14 pt-4 md:pb-20 md:pt-16"
    >
      <div className="relative z-10 mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <div className="relative lg:min-h-[32rem] xl:min-h-[36rem]">
          <div className="relative z-10 max-w-xl lg:max-w-[30rem] xl:max-w-[34rem]">
            <HeroMotion delay={0.05}>
              <p
                className="mb-5 text-xs font-semibold uppercase text-primary sm:text-sm"
                style={{ letterSpacing: "var(--tracking-wider)" }}
              >
                Healthy smiles. Happier lives.
              </p>
            </HeroMotion>

            <HeroMotion delay={0.18}>
              <h1 className="font-heading text-[2.35rem] font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.15rem] xl:text-[3.5rem]">
                Expert Dental Care for a Brighter,{" "}
                <span className="text-primary">Healthier You</span>
              </h1>
            </HeroMotion>

            <HeroMotion delay={0.32}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                Experience exceptional dental care with a gentle touch, modern
                technology, and a team that puts your comfort first—every visit.
              </p>
            </HeroMotion>

            <HeroMotion delay={0.45}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact">
                  <Button size="xl">
                    <CalendarDays />
                    Book Appointment
                  </Button>
                </Link>
                <Button variant="outline" size="xl">
                  <Play className="fill-current" />
                  Watch Video
                </Button>
              </div>
            </HeroMotion>

            <HeroMotion delay={0.58}>
              <HeroFeatures />
            </HeroMotion>
          </div>

          <HeroMotion
            delay={0.28}
            y={36}
            className="relative mt-10 w-full sm:mt-8 lg:absolute lg:-right-10 lg:top-[40%] lg:mt-0 lg:w-[min(56%,42rem)] lg:-translate-y-1/2 xl:w-[min(58%,48rem)]"
          >
            <Image
              src="/images/hero.png"
              alt="Patient smiling during a gentle dental checkup"
              width={1536}
              height={1024}
              priority
              className="h-auto w-full object-contain"
            />
            <HeroTrustBadge />
          </HeroMotion>
        </div>
      </div>
    </section>
  );
}
