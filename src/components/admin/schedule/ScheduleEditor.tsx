"use client";

import { WEEKDAY_LABELS } from "@/constants/admin";
import { useScheduleStore } from "@/stores/schedule-store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ScheduleEditor() {
  const { days, updateDay } = useScheduleStore();

  return (
    <div className="space-y-3">
      {days.map((day) => (
        <div
          key={day.day}
          className="grid gap-3 rounded-2xl border border-border bg-card p-4 sm:grid-cols-[9rem_auto_1fr_1fr] sm:items-end"
        >
          <div>
            <p className="font-heading text-base font-bold text-foreground">
              {WEEKDAY_LABELS[day.day]}
            </p>
            <Button
              type="button"
              size="sm"
              variant={day.isOpen ? "secondary" : "outline"}
              className="mt-2"
              onClick={() => updateDay(day.day, { isOpen: !day.isOpen })}
            >
              {day.isOpen ? "Open" : "Closed"}
            </Button>
          </div>
          <div className="hidden sm:block" />
          <div className="space-y-2">
            <Label htmlFor={`${day.day}-open`}>Opens</Label>
            <Input
              id={`${day.day}-open`}
              type="time"
              value={day.openTime}
              disabled={!day.isOpen}
              onChange={(event) =>
                updateDay(day.day, { openTime: event.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${day.day}-close`}>Closes</Label>
            <Input
              id={`${day.day}-close`}
              type="time"
              value={day.closeTime}
              disabled={!day.isOpen}
              onChange={(event) =>
                updateDay(day.day, { closeTime: event.target.value })
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
