"use client";

import { useState } from "react";
import { FAQS } from "@/data/faqs";
import { cn } from "cn";

type FaqId = (typeof FAQS)[number]["value"];

export function FaqPicker() {
  const [activeId, setActiveId] = useState<FaqId>(FAQS[0].value);
  const active = FAQS.find((item) => item.value === activeId) ?? FAQS[0];
  const activeIndex = FAQS.findIndex((item) => item.value === activeId);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-10">
      <div className="flex flex-col justify-center rounded-3xl border border-border bg-background p-6 sm:p-8 lg:order-none order-2">
        <p className="font-script text-2xl text-primary sm:text-3xl">
          Good to know
        </p>
        <p className="mt-2 text-xs tabular-nums text-muted-foreground">
          Question {String(activeIndex + 1).padStart(2, "0")} of{" "}
          {String(FAQS.length).padStart(2, "0")}
        </p>
        <h3 className="mt-4 font-heading text-xl font-bold text-foreground sm:text-2xl">
          {active.question}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {active.answer}
        </p>
      </div>

      <ol className="relative order-1 space-y-1 border-l border-border pl-5 lg:order-none">
        {FAQS.map((item, index) => {
          const selected = item.value === activeId;
          return (
            <li key={item.value} className="relative">
              <span
                aria-hidden
                className={cn(
                  "absolute -left-[1.53rem] top-1/2 size-2.5 -translate-y-1/2 rounded-full border-2 border-background transition-colors",
                  selected ? "bg-primary" : "bg-border",
                )}
              />
              <button
                type="button"
                onClick={() => setActiveId(item.value)}
                className={cn(
                  "flex w-full items-start justify-between gap-3 rounded-xl px-3 py-3 text-left transition-colors",
                  selected
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                )}
              >
                <span className="font-heading text-base font-bold leading-snug sm:text-lg">
                  {item.question}
                </span>
                <span className="shrink-0 pt-1 text-xs tabular-nums opacity-60">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
