"use client";

import { WEEKDAY_LABELS } from "@/constants/schedule/weekdays";
import { TimeSelect } from "@/components/forms/TimeSelect";
import { HeroMotion } from "@/components/motion/FadeIn";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useClinicStore } from "@/stores/clinic-store";

export function ScheduleEditor() {
  const days = useClinicStore((s) => s.days);
  const updateDay = useClinicStore((s) => s.updateDay);

  return (
    <div className="space-y-3">
      {days.map((day, index) => (
        <HeroMotion key={day.day} delay={0.45 + index * 0.06}>
          <div className="grid gap-3 rounded-2xl border border-border bg-card p-4 sm:grid-cols-[9rem_1fr_1fr] sm:items-end">
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
            <div className="space-y-2">
              <Label htmlFor={`${day.day}-open`}>Opens</Label>
              <TimeSelect
                id={`${day.day}-open`}
                value={day.openTime}
                disabled={!day.isOpen}
                onChange={(openTime) => updateDay(day.day, { openTime })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${day.day}-close`}>Closes</Label>
              <TimeSelect
                id={`${day.day}-close`}
                value={day.closeTime}
                disabled={!day.isOpen}
                onChange={(closeTime) => updateDay(day.day, { closeTime })}
              />
            </div>
          </div>
        </HeroMotion>
      ))}
    </div>
  );
}
