"use client";

import { useEffect, useState } from "react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
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
    <AdminPageHeader
      lead={greeting}
      title={
        <>
          {ADMIN_USER_PROFILE.displayName}{" "}
          <span aria-hidden="true">👋</span>
        </>
      }
      description="Here's what's happening at Deccan Dentics today."
    >
      <DashboardFiltersBar filters={filters} onChange={onChange} />
    </AdminPageHeader>
  );
}
