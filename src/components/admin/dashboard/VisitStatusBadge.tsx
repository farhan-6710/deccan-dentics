import type { VisitStatus } from "@/types/dashboard";
import { cn } from "cn";

const STATUS_STYLES: Record<VisitStatus, string> = {
  completed: "bg-secondary text-secondary-foreground",
  in_progress: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  upcoming: "bg-muted text-muted-foreground",
};

const STATUS_LABELS: Record<VisitStatus, string> = {
  completed: "Completed",
  in_progress: "In Progress",
  upcoming: "Upcoming",
};

export function VisitStatusBadge({ status }: { status: VisitStatus }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap",
        STATUS_STYLES[status],
      )}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
