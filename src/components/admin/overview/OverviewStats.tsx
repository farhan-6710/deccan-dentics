"use client";

import { AdminStatCard } from "@/components/admin/AdminStatCard";
import { useAppointmentsStore } from "@/stores/appointments-store";
import { usePatientsStore } from "@/stores/patients-store";
import { useScheduleStore } from "@/stores/schedule-store";

export function OverviewStats() {
  const patients = usePatientsStore((s) => s.patients);
  const appointments = useAppointmentsStore((s) => s.appointments);
  const days = useScheduleStore((s) => s.days);

  const scheduled = appointments.filter((item) => item.status === "scheduled");
  const openDays = days.filter((day) => day.isOpen).length;

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <AdminStatCard label="Patients" value={patients.length} hint="On file" />
      <AdminStatCard
        label="Appointments"
        value={appointments.length}
        hint="All statuses"
      />
      <AdminStatCard
        label="Upcoming"
        value={scheduled.length}
        hint="Scheduled visits"
      />
      <AdminStatCard
        label="Open days"
        value={`${openDays}/7`}
        hint="Clinic availability"
      />
    </div>
  );
}
