"use client";

import { useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/data/clinic";
import { cn } from "cn";

const BRANCHES = CLINIC.branches;
type BranchId = (typeof BRANCHES)[number]["id"];

export function BranchPicker() {
  const [activeId, setActiveId] = useState<BranchId>("manikonda");
  const active = BRANCHES.find((branch) => branch.id === activeId) ?? BRANCHES[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
      <ol className="relative space-y-1 border-l border-border pl-5">
        {BRANCHES.map((branch, index) => {
          const selected = branch.id === activeId;
          return (
            <li key={branch.id} className="relative">
              <span
                aria-hidden
                className={cn(
                  "absolute -left-[1.53rem] top-1/2 size-2.5 -translate-y-1/2 rounded-full border-2 border-background transition-colors",
                  selected ? "bg-primary" : "bg-border",
                )}
              />
              <button
                type="button"
                onClick={() => setActiveId(branch.id)}
                className={cn(
                  "flex w-full items-baseline justify-between gap-3 rounded-xl px-3 py-3 text-left transition-colors",
                  selected
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                )}
              >
                <span className="font-heading text-lg font-bold sm:text-xl">
                  {branch.name}
                </span>
                <span className="font-body text-xs tabular-nums opacity-60">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="flex flex-col justify-center rounded-3xl border border-border bg-card p-6 sm:p-8">
        <p className="font-script text-2xl text-primary sm:text-3xl">
          Visit us here
        </p>
        <h3 className="mt-3 font-heading text-2xl font-bold text-foreground">
          {active.clinicName}
        </h3>
        <div className="mt-5 flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
          <p>{active.address}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={active.mapLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 px-5">
              Get directions
              <ExternalLink className="size-4" />
            </Button>
          </a>
          <a href={CLINIC.phoneHref}>
            <Button variant="outline" size="lg" className="px-5">
              Call {CLINIC.phone}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
