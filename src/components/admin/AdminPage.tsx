"use client";

import type { ReactNode } from "react";
import { cn } from "cn";
import { HeroMotion } from "@/components/motion/FadeIn";

type AdminPageProps = {
  children: ReactNode;
  className?: string;
};

/** Shared left-aligned admin page frame (padding lives on AdminShell main). */
export function AdminPage({ children, className }: AdminPageProps) {
  return (
    <div className={cn("w-full space-y-6 text-left", className)}>
      {children}
    </div>
  );
}

type AdminPageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

/** Same entrance cadence as the marketing hero (blur + rise + stagger). */
export function AdminPageIntro({
  eyebrow,
  title,
  description,
}: AdminPageIntroProps) {
  return (
    <div>
      <HeroMotion delay={0.05}>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </p>
      </HeroMotion>
      <HeroMotion delay={0.18}>
        <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
          {title}
        </h2>
      </HeroMotion>
      {description ? (
        <HeroMotion delay={0.32}>
          <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>
        </HeroMotion>
      ) : null}
    </div>
  );
}

type AdminMotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** Page-body entrance matching `HeroMotion` defaults. */
export function AdminMotion({
  children,
  className,
  delay = 0.45,
  y = 20,
}: AdminMotionProps) {
  return (
    <HeroMotion delay={delay} y={y} className={className}>
      {children}
    </HeroMotion>
  );
}
