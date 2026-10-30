"use client";

import { Plus, Search } from "lucide-react";
import {
  APPOINTMENT_DATE_FILTER_OPTIONS,
  type AppointmentDateFilter,
} from "@/constants/appointments/date-filters";
import { APPOINTMENT_STATUS_FILTER_OPTIONS } from "@/constants/appointments/statuses";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { AppointmentListFilters } from "@/utils/filter-appointments";

type AppointmentsToolbarProps = {
  filters: AppointmentListFilters;
  onChange: (next: AppointmentListFilters) => void;
  onAdd: () => void;
  canAdd: boolean;
};

export function AppointmentsToolbar({
  filters,
  onChange,
  onAdd,
  canAdd,
}: AppointmentsToolbarProps) {
  const statusLabel =
    APPOINTMENT_STATUS_FILTER_OPTIONS.find((o) => o.value === filters.status)
      ?.label ?? "All statuses";
  const dateLabel =
    APPOINTMENT_DATE_FILTER_OPTIONS.find((o) => o.value === filters.date)
      ?.label ?? "All dates";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
        <label className="relative min-w-0 flex-1 sm:max-w-64">
          <span className="sr-only">Search appointments</span>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={filters.query}
            onChange={(event) =>
              onChange({ ...filters, query: event.target.value })
            }
            placeholder="Search appointments..."
            className="h-8 w-full rounded-lg border border-input bg-background py-1.5 pr-3 pl-9 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
        </label>

        <Select
          value={filters.date}
          onValueChange={(value) => {
            if (!value) return;
            onChange({ ...filters, date: value as AppointmentDateFilter });
          }}
        >
          <SelectTrigger size="sm" className="w-auto min-w-[7.5rem] shrink-0">
            <SelectValue>{dateLabel}</SelectValue>
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false} align="start">
            {APPOINTMENT_DATE_FILTER_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.status}
          onValueChange={(value) => {
            if (!value) return;
            onChange({
              ...filters,
              status: value as AppointmentListFilters["status"],
            });
          }}
        >
          <SelectTrigger size="sm" className="w-auto min-w-[8.5rem] shrink-0">
            <SelectValue>{statusLabel}</SelectValue>
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false} align="start">
            {APPOINTMENT_STATUS_FILTER_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        type="button"
        className="gap-1.5 shrink-0"
        disabled={!canAdd}
        onClick={onAdd}
      >
        <Plus className="size-4" />
        Add appointment
      </Button>
    </div>
  );
}
