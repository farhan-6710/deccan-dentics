import { FadeIn } from "@/components/motion/FadeIn";
import { FloatingTools } from "@/components/motion/FloatingTools";
import { BranchPicker } from "@/components/branches/BranchPicker";
import { CLINIC } from "@/data/clinic";
import { SECTION_TOOLS } from "@/data/section-tools";

export function BranchesSection() {
  return (
    <section
      id="branches"
      className="relative overflow-hidden border-b border-border bg-background py-[var(--section-padding-y)]"
    >
      <FloatingTools tools={[...SECTION_TOOLS.branches]} />

      <div className="relative z-10 mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
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
