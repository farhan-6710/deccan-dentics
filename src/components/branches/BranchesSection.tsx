import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { BranchPicker } from "@/components/branches/BranchPicker";
import { CLINIC } from "@/data/clinic";

export function BranchesSection() {
  return (
    <section
      id="branches"
      className="relative overflow-hidden border-b border-border bg-background py-[var(--section-padding-y)]"
    >
      <Image
        src="/images/leaf-branch.png"
        alt=""
        width={180}
        height={220}
        aria-hidden
        className="pointer-events-none absolute -right-6 top-10 hidden w-28 select-none opacity-40 sm:block md:w-36 lg:opacity-50"
      />

      <div className="relative mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <FadeIn className="max-w-2xl">
          <p
            className="text-xs font-semibold uppercase text-primary sm:text-sm"
            style={{ letterSpacing: "var(--tracking-wider)" }}
          >
            Our branches
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Five clinics across Hyderabad
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose a neighbourhood to see the full address—same care standards
            at every Deccan Dentics location, with Manikonda as our primary
            clinic.
          </p>
          <p className="mt-5 font-heading text-5xl font-bold tabular-nums text-primary/15 sm:text-6xl">
            0{CLINIC.branches.length}
          </p>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-10">
          <BranchPicker />
        </FadeIn>
      </div>
    </section>
  );
}
