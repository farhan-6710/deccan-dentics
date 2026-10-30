"use client";

import {
  DASHBOARD_RANGE_OPTIONS,
  DASHBOARD_STATUS_OPTIONS,
} from "@/constants/dashboard/filters";
import { DateRangePicker } from "@/components/forms/DateRangePicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { DashboardFilters } from "@/types/dashboard";

type DashboardFiltersBarProps = {
  filters: DashboardFilters;
  onChange: (next: DashboardFilters) => void;
};

export function DashboardFiltersBar({
  filters,
  onChange,
}: DashboardFiltersBarProps) {
  return (
    <div className="flex max-w-full shrink-0 items-center gap-2 overflow-x-auto">
      <FilterSelect
        value={filters.status}
        options={DASHBOARD_STATUS_OPTIONS}
        onChange={(status) => onChange({ ...filters, status })}
      />
      <FilterSelect
        value={filters.range}
        options={DASHBOARD_RANGE_OPTIONS}
        onChange={(range) =>
          onChange({ ...filters, range, dateRange: undefined })
        }
      />
      <DateRangePicker
        value={filters.dateRange}
        onChange={(dateRange) => onChange({ ...filters, dateRange })}
      />
    </div>
  );
}

type Option<T extends string> = { value: T; label: string };

function FilterSelect<T extends string>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: readonly Option<T>[];
  onChange: (value: T) => void;
}) {
  const selectedLabel =
    options.find((option) => option.value === value)?.label ?? value;

  return (
    <Select
      value={value}
      onValueChange={(next) => {
        if (next) onChange(next as T);
      }}
    >
      <SelectTrigger size="sm" className="w-auto min-w-[8.5rem] shrink-0">
        <SelectValue>{selectedLabel}</SelectValue>
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false} align="end">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
