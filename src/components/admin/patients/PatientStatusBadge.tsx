import { PATIENT_STATUS_LABELS } from "@/constants/patients/statuses";
import type { PatientStatus } from "@/types/admin";
import { cn } from "cn";

const STATUS_STYLES: Record<PatientStatus, string> = {
  new: "bg-primary/10 text-primary",
  "follow-up-one": "bg-secondary text-secondary-foreground",
  "follow-up-two": "bg-accent text-accent-foreground",
  "follow-up-three": "bg-muted text-muted-foreground",
  done: "bg-primary text-primary-foreground",
};

type PatientStatusBadgeProps = {
  status: PatientStatus;
};

export function PatientStatusBadge({ status }: PatientStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium",
        STATUS_STYLES[status],
      )}
    >
      {PATIENT_STATUS_LABELS[status]}
    </span>
  );
}
