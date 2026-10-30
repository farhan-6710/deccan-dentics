import type { CalendarView } from "@/types/calendar";

export const CALENDAR_VIEWS: { value: CalendarView; label: string }[] = [
  { value: "month", label: "Month" },
  { value: "week", label: "Week" },
  { value: "day", label: "Day" },
];

/** Clinic day grid starts/ends (24h). Matches reference timelines. */
export const CALENDAR_DAY_START_HOUR = 8;
export const CALENDAR_DAY_END_HOUR = 17;

/** Assumed visit length when Appointment has only a start time. */
export const CALENDAR_DEFAULT_DURATION_MINUTES = 60;
