import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { FloatingTools } from "@/components/motion/FloatingTools";
import { FaqPicker } from "@/components/faq/FaqPicker";
import { FAQS } from "@/data/faqs";
import { SECTION_TOOLS } from "@/data/section-tools";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-border bg-card py-[var(--section-padding-y)]"
    >
      <FloatingTools tools={[...SECTION_TOOLS.faq]} />
      <div className="relative z-10 mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <div className="grid items-end gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
          <FadeIn className="mx-auto w-36 sm:w-44 lg:mx-0">
            <Image
              src="/images/faq/faq.png"
              alt="Frequently asked questions illustration"
              width={220}
              height={275}
              className="h-auto w-full"
              sizes="176px"
            />
          </FadeIn>

          <FadeIn delay={0.08} className="min-w-0">
            <p
              className="text-xs font-semibold uppercase text-primary sm:text-sm"
              style={{ letterSpacing: "var(--tracking-wider)" }}
            >
              FAQ
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Questions patients ask most
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Pick a question to read a clear answer—visits, emergencies, kids’
              care, branches, and payments.
            </p>
            <p className="mt-5 font-heading text-5xl font-bold tabular-nums text-primary/15 sm:text-6xl">
              {String(FAQS.length).padStart(2, "0")}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} className="mt-10">
          <FaqPicker />
        </FadeIn>
      </div>
    </section>
  );
}
