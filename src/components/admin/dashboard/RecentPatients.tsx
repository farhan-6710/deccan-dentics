"use client";

import Link from "next/link";
import { Users } from "lucide-react";
import { DashboardAvatar } from "@/components/admin/dashboard/DashboardAvatar";
import {
  DashboardCard,
  DashboardCardHeader,
} from "@/components/admin/dashboard/DashboardCard";
import { buttonVariants } from "@/components/ui/button";
import { SEED_RECENT_PATIENTS } from "@/constants/dashboard/recent-patients";
import { cn } from "cn";

export function RecentPatients() {
  return (
    <DashboardCard>
      <DashboardCardHeader
        icon={<Users className="size-4" />}
        title="Recent Patients"
        action={
          <Link
            href="/admin/patients"
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
        {SEED_RECENT_PATIENTS.map((patient) => (
          <li key={patient.id} className="flex items-center gap-3 py-3.5">
            <DashboardAvatar name={patient.name} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-foreground">
                {patient.name}
              </p>
              <p className="truncate text-sm text-muted-foreground">
                Last visit • {patient.lastVisitLabel}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}
