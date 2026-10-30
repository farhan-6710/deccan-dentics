"use client";

import { useEffect, useState } from "react";
import { DashboardFiltersBar } from "@/components/admin/dashboard/DashboardFiltersBar";
import { ADMIN_USER_PROFILE } from "@/constants/admin";
import type { DashboardFilters } from "@/types/dashboard";

type DashboardPageHeaderProps = {
  filters: DashboardFilters;
  onChange: (next: DashboardFilters) => void;
};

function greetingForHour(hour: number) {
  if (hour < 12) return "Good Morning,";
  if (hour < 17) return "Good Afternoon,";
  return "Good Evening,";
}

export function DashboardPageHeader({
  filters,
  onChange,
}: DashboardPageHeaderProps) {
  const [greeting, setGreeting] = useState("Good Morning,");

  useEffect(() => {
    setGreeting(greetingForHour(new Date().getHours()));
  }, []);

  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
      <div className="min-w-0">
        <p className="font-heading text-lg text-muted-foreground sm:text-xl">
          {greeting}
        </p>
        <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {ADMIN_USER_PROFILE.displayName}{" "}
          <span aria-hidden="true">👋</span>
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Here&apos;s what&apos;s happening at Deccan Dentics today.
        </p>
      </div>
      <DashboardFiltersBar filters={filters} onChange={onChange} />
    </div>
  );
}
