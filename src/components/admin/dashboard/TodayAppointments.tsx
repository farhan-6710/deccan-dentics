"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { DashboardAvatar } from "@/components/admin/dashboard/DashboardAvatar";
import {
  DashboardCard,
  DashboardCardHeader,
} from "@/components/admin/dashboard/DashboardCard";
import { VisitStatusBadge } from "@/components/admin/dashboard/VisitStatusBadge";
import { buttonVariants } from "@/components/ui/button";
import { SEED_TODAY_VISITS } from "@/constants/dashboard/visits";
import { formatTimeLabel } from "@/utils/time";
import { cn } from "cn";

export function TodayAppointments() {
  return (
    <DashboardCard>
      <DashboardCardHeader
        icon={<CalendarDays className="size-4" />}
        title="Today's Appointments"
        action={
          <Link
            href="/admin/appointments"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full",
            )}
          >
            View all
          </Link>
        }
      />
      <ul className="divide-y divide-border">
        {SEED_TODAY_VISITS.map((visit) => (
          <li
            key={visit.id}
            className="flex flex-wrap items-center gap-3 py-3 sm:flex-nowrap"
          >
            <span className="w-20 shrink-0 text-sm text-muted-foreground tabular-nums">
              {formatTimeLabel(visit.time)}
            </span>
            <DashboardAvatar name={visit.patientName} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-foreground">
                {visit.patientName}
              </p>
              <p className="truncate text-sm text-muted-foreground">
                {visit.service}
              </p>
            </div>
            <VisitStatusBadge status={visit.status} />
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}
