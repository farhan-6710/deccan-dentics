"use client";

import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FadeIn } from "@/components/motion/FadeIn";
import { CLINIC } from "@/data/clinic";

const TOPICS = [
  "General enquiry",
  "Treatment question",
  "Branch & timings",
  "Feedback",
  "Other",
] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-b border-border bg-background py-[var(--section-padding-y)]"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p
            className="text-xs font-semibold uppercase text-primary sm:text-sm"
            style={{ letterSpacing: "var(--tracking-wider)" }}
          >
            Contact us
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Send us your questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach Deccan Dentics for enquiries about treatments, branches, or
            care—we’ll get back promptly.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-8">
          <FadeIn className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Enquiry form
            </h3>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={CLINIC.phone}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="topic">Topic</Label>
                <Select defaultValue={TOPICS[0]}>
                  <SelectTrigger id="topic" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {TOPICS.map((topic) => (
                      <SelectItem key={topic} value={topic}>
                        {topic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help?"
                  required
                />
              </div>
              <Button type="submit" size="xl" className="w-full sm:w-auto">
                Send enquiry
              </Button>
            </form>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col gap-6">
            <div className="min-h-64 overflow-hidden rounded-3xl border border-border bg-card sm:min-h-72">
              <iframe
                title="Deccan Dentics Manikonda map"
                src={CLINIC.primaryBranch.mapEmbedUrl}
                className="h-64 w-full border-0 sm:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="space-y-5 rounded-3xl border border-border bg-card p-6 md:p-7">
              <h3 className="font-heading text-xl font-bold text-foreground">
                Clinic details
              </h3>
              <div className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">
                    {CLINIC.primaryBranch.name}
                  </p>
                  <p className="mt-1 leading-relaxed">
                    {CLINIC.primaryBranch.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 shrink-0 text-primary" />
                <a
                  href={CLINIC.phoneHref}
                  className="text-foreground hover:text-primary"
                >
                  {CLINIC.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 shrink-0 text-primary" />
                <a
                  href={CLINIC.emailHref}
                  className="text-foreground hover:text-primary"
                >
                  {CLINIC.email}
                </a>
              </div>
              <div className="flex gap-3 text-sm text-muted-foreground">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p>{CLINIC.hours.weekdays}</p>
                  <p className="mt-1">{CLINIC.hours.sunday}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
