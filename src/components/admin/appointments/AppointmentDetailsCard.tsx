"use client";

import { CalendarDays, Clock3, Pencil, Stethoscope, Trash2 } from "lucide-react";
import { format, parseISO } from "date-fns";
import { AppointmentStatusBadge } from "@/components/admin/appointments/AppointmentStatusBadge";
import { Button } from "@/components/ui/button";
import type { Appointment } from "@/types/admin";

type AppointmentDetailsCardProps = {
  appointment: Appointment | null;
  patientName: string;
  onEdit: () => void;
  onDelete: () => void;
};

function formatStamp(iso: string) {
  return format(parseISO(iso), "MMM d, yyyy");
}

export function AppointmentDetailsCard({
  appointment,
  patientName,
  onEdit,
  onDelete,
}: AppointmentDetailsCardProps) {
  if (!appointment) {
    return (
      <aside className="flex h-fit min-h-48 items-center justify-center self-start rounded-2xl border border-dashed border-border bg-card p-6 text-center text-sm text-muted-foreground">
        Select an appointment to view details.
      </aside>
    );
  }

  return (
    <aside className="flex h-fit flex-col gap-4 self-start rounded-2xl border border-border bg-card p-5 shadow-xs">
      <div className="flex items-start gap-3">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CalendarDays className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate font-heading text-lg font-bold text-foreground">
                {patientName}
              </p>
              <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-muted-foreground">
                <span>{appointment.date}</span>
                <span aria-hidden>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock3 className="size-3.5" />
                  {appointment.time}
                </span>
              </p>
            </div>
            <AppointmentStatusBadge status={appointment.status} />
          </div>
        </div>
      </div>

      <div className="space-y-3 rounded-xl bg-muted/50 px-3.5 py-3">
        <div>
          <p className="mb-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Stethoscope className="size-3.5" />
            Reason
          </p>
          <p className="text-sm leading-snug text-foreground">
            {appointment.reason}
          </p>
        </div>
        <div className="border-t border-border/70 pt-3">
          <p className="mb-1 text-xs font-medium text-muted-foreground">Notes</p>
          <p
            className={
              appointment.notes
                ? "text-sm leading-snug text-foreground"
                : "text-sm text-muted-foreground"
            }
          >
            {appointment.notes ?? "No notes added"}
          </p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        Added {formatStamp(appointment.createdAt)} · Updated{" "}
        {formatStamp(appointment.updatedAt)}
      </p>

      <div className="flex justify-end gap-2 border-t border-border pt-4">
        <Button
          type="button"
          variant="outline"
          className="w-fit gap-1.5"
          onClick={onEdit}
        >
          <Pencil className="size-3.5" />
          Edit
        </Button>
        <Button
          type="button"
          variant="destructive"
          className="w-fit gap-1.5"
          onClick={onDelete}
        >
          <Trash2 className="size-3.5" />
          Delete
        </Button>
      </div>
    </aside>
  );
}
