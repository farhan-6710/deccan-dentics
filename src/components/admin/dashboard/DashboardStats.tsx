"use client";

import { parseISO } from "date-fns";
import { StatsCard } from "@/components/admin/dashboard/StatsCard";
import { DASHBOARD_REFERENCE_DATE } from "@/constants/dashboard/reference";
import { useClinicStore } from "@/stores/clinic-store";
import type { DashboardFilters } from "@/types/dashboard";
import { buildDashboardStats } from "@/utils/dashboard-stats";

type DashboardStatsProps = {
  filters: DashboardFilters;
};

export function DashboardStats({ filters }: DashboardStatsProps) {
  const patients = useClinicStore((s) => s.patients);
  const appointments = useClinicStore((s) => s.appointments);
  const cards = buildDashboardStats(
    patients,
    appointments,
    filters,
    parseISO(DASHBOARD_REFERENCE_DATE),
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatsCard key={card.id} card={card} />
      ))}
    </div>
  );
}
