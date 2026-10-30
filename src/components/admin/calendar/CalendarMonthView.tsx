"use client";

import { useMemo } from "react";
import type { Appointment } from "@/types/admin";
import { CalendarMonthCell } from "@/components/admin/calendar/CalendarMonthCell";
import {
  dayStatusDotClasses,
  groupAppointmentsByDate,
} from "@/utils/calendar-appointments";
import {
  WEEKDAY_SHORT,
  buildMonthCells,
} from "@/utils/calendar-month";

type CalendarMonthViewProps = {
  month: Date;
  selected: Date;
  today: Date;
  appointments: Appointment[];
  onSelectDate: (date: Date) => void;
};

export function CalendarMonthView({
  month,
  selected,
  today,
  appointments,
  onSelectDate,
}: CalendarMonthViewProps) {
  const cells = useMemo(
    () => buildMonthCells(month, selected, today),
    [month, selected, today],
  );
  const byDate = useMemo(
    () => groupAppointmentsByDate(appointments),
    [appointments],
  );

  return (
    <div className="mt-4 flex min-h-0 flex-1 flex-col">
      <div className="grid grid-cols-7 gap-1 border-b border-border pb-2">
        {WEEKDAY_SHORT.map((label) => (
          <p
            key={label}
            className="text-center text-xs font-medium text-muted-foreground"
          >
            {label}
          </p>
        ))}
      </div>
      <div className="mt-1 grid flex-1 grid-cols-7 gap-1">
        {cells.map((cell) => (
          <CalendarMonthCell
            key={cell.dateKey}
            cell={cell}
            dots={dayStatusDotClasses(byDate.get(cell.dateKey) ?? [])}
            onSelect={onSelectDate}
          />
        ))}
      </div>
    </div>
  );
}
