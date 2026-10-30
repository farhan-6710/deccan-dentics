"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  formatDateLabel,
  parseDateValue,
  toDateValue,
} from "@/utils/date";

type DatePickerProps = {
  value: string;
  onChange: (next: string) => void;
  disabled?: boolean;
  id?: string;
};

export function DatePicker({
  value,
  onChange,
  disabled,
  id,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const selected = parseDateValue(value);

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
            className="h-9 w-full justify-start gap-2 bg-secondary/40 px-3 font-normal"
          />
        }
      >
        <CalendarDays className="size-4 shrink-0 text-primary" />
        <span className="truncate">{formatDateLabel(value)}</span>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-2">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={(date) => {
            if (!date) return;
            onChange(toDateValue(date));
            setOpen(false);
          }}
          className="rounded-lg bg-transparent p-0 [--cell-radius:var(--radius-md)]"
        />
      </PopoverContent>
    </Popover>
  );
}
