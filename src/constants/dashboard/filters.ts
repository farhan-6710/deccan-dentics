import type { DashboardRange, DashboardStatusFilter } from "@/types/dashboard";

export const DASHBOARD_RANGE_OPTIONS: {
  value: DashboardRange;
  label: string;
}[] = [
  { value: "all", label: "All time" },
  { value: "7d", label: "Last 7 days" },
  { value: "month", label: "This month" },
  { value: "3m", label: "Last 3 months" },
  { value: "6m", label: "Last 6 months" },
];

export const DASHBOARD_STATUS_OPTIONS: {
  value: DashboardStatusFilter;
  label: string;
}[] = [
  { value: "all", label: "All statuses" },
  { value: "scheduled", label: "Scheduled" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
];
