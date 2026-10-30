import { FadeIn } from "@/components/motion/FadeIn";
import { FloatingTools } from "@/components/motion/FloatingTools";
import { ContactAside } from "@/components/contact/ContactAside";
import { ContactForm } from "@/components/contact/ContactForm";
import { CLINIC } from "@/data/clinic";
import { SECTION_TOOLS } from "@/data/section-tools";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-border bg-background py-[var(--section-padding-y)]"
    >
      <FloatingTools tools={[...SECTION_TOOLS.contact]} />

      <div className="relative z-10 mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <FadeIn className="max-w-2xl">
          <p
            className="text-xs font-semibold uppercase text-primary sm:text-sm"
            style={{ letterSpacing: "var(--tracking-wider)" }}
          >
            Contact us
          </p>
          <p className="mt-3 font-script text-2xl text-primary sm:text-3xl">
            We’re listening
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Send us your questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach Deccan Dentics for treatments, branches, or care—we’ll get
            back promptly.
          </p>
          <p className="mt-5 font-heading text-4xl font-bold tabular-nums text-primary/15 sm:text-5xl">
            {CLINIC.phone}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-8">
          <FadeIn>
            <ContactForm />
          </FadeIn>
          <FadeIn delay={0.1}>
            <ContactAside />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
