"use client";

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
import { CLINIC } from "@/data/clinic";

const TOPICS = [
  "General enquiry",
  "Treatment question",
  "Branch & timings",
  "Feedback",
  "Other",
] as const;

export function ContactForm() {
  return (
    <div className="rounded-3xl border border-border bg-background p-6 md:p-8">
      <p className="font-script text-2xl text-primary sm:text-3xl">Write to us</p>
      <h3 className="mt-2 font-heading text-xl font-bold text-foreground">
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
    </div>
  );
}
