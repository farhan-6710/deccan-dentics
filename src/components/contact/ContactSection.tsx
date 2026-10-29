import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactAside } from "@/components/contact/ContactAside";
import { ContactForm } from "@/components/contact/ContactForm";
import { CLINIC } from "@/data/clinic";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-border bg-background py-[var(--section-padding-y)]"
    >
      <Image
        src="/images/leaf-corner.png"
        alt=""
        width={160}
        height={180}
        aria-hidden
        className="pointer-events-none absolute -right-4 top-8 hidden w-24 select-none opacity-40 sm:block md:w-32"
      />

      <div className="relative mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
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
