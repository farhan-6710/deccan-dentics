import { APPOINTMENT_STATUS_LABELS } from "@/constants/appointments/statuses";
import type { AppointmentStatus } from "@/types/admin";
import { cn } from "cn";

const STATUS_STYLES: Record<AppointmentStatus, string> = {
  upcoming: "bg-primary/10 text-primary",
  completed: "bg-primary text-primary-foreground",
  "not-attended": "bg-muted text-muted-foreground",
  cancelled: "bg-destructive/10 text-destructive",
};

type AppointmentStatusBadgeProps = {
  status: AppointmentStatus;
};

export function AppointmentStatusBadge({ status }: AppointmentStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium",
        STATUS_STYLES[status],
      )}
    >
      {APPOINTMENT_STATUS_LABELS[status]}
    </span>
  );
}
