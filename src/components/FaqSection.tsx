import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/FadeIn";
import { FAQS } from "@/data/faqs";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="border-b border-border bg-muted/40 py-[var(--section-padding-y)]"
    >
      <div className="mx-auto grid max-w-[var(--container-max)] items-center gap-12 px-[var(--container-padding)] lg:grid-cols-[2fr_3fr] lg:gap-14">
        <FadeIn className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
          <Image
            src="/images/faq.png"
            alt="Frequently asked questions illustration"
            width={400}
            height={500}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 90vw, 40vw"
          />
        </FadeIn>

        <FadeIn delay={0.1} className="min-w-0">
          <p
            className="text-xs font-semibold uppercase text-primary sm:text-sm"
            style={{ letterSpacing: "var(--tracking-wider)" }}
          >
            FAQ
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <Accordion defaultValue={["visits"]} className="mt-8">
            {FAQS.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className="font-heading text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
