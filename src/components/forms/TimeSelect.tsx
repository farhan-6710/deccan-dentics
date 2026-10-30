"use client";

import { useState } from "react";
import { ChevronUp, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HALF_HOUR_SLOTS, formatTimeLabel } from "@/utils/time";
import { cn } from "cn";

type TimeSelectProps = {
  value: string;
  onChange: (next: string) => void;
  disabled?: boolean;
  id?: string;
  label?: string;
};

export function TimeSelect({
  value,
  onChange,
  disabled,
  id,
  label = "Select time",
}: TimeSelectProps) {
  const [open, setOpen] = useState(false);
  const display = value ? formatTimeLabel(value) : label;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        disabled={disabled}
        render={
          <Button
            id={id}
            type="button"
            variant="outline"
            disabled={disabled}
            className="h-9 w-full justify-between gap-2 bg-secondary/40 px-3 font-normal"
          />
        }
      >
        <span className="inline-flex items-center gap-2 truncate">
          <Clock3 className="size-4 shrink-0 text-primary" />
          {display}
        </span>
        <ChevronUp
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform",
            open ? "rotate-0" : "rotate-180",
          )}
        />
      </PopoverTrigger>
      <PopoverContent align="start" className="w-56 p-0" side="top">
        <PopoverHeader className="border-b border-border px-3 py-2.5">
          <PopoverTitle className="font-heading text-base font-bold">
            Select a time
          </PopoverTitle>
          <p className="text-xs text-muted-foreground">
            {value ? formatTimeLabel(value) : "Half-hour slots"}
          </p>
        </PopoverHeader>
        <div className="max-h-56 space-y-1.5 overflow-y-auto p-2">
          {HALF_HOUR_SLOTS.map((slot) => {
            const active = slot === value;
            return (
              <button
                key={slot}
                type="button"
                onClick={() => {
                  onChange(slot);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-center rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/60 text-foreground hover:bg-secondary",
                )}
              >
                {formatTimeLabel(slot)}
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
