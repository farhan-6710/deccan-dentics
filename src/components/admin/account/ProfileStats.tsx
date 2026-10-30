"use client";

import { AdminStatCard } from "@/components/admin/AdminStatCard";
import { useClinicStore } from "@/stores/clinic-store";

export function ProfileStats() {
  const patients = useClinicStore((s) => s.patients);
  const appointments = useClinicStore((s) => s.appointments);
  const todos = useClinicStore((s) => s.todos);
  const openTodos = todos.filter((todo) => !todo.done).length;

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <AdminStatCard
        label="Patients"
        value={patients.length}
        hint="In your clinic list"
      />
      <AdminStatCard
        label="Appointments"
        value={appointments.length}
        hint="Total visits logged"
      />
      <AdminStatCard
        label="Open todos"
        value={openTodos}
        hint="Still on today’s list"
      />
    </div>
  );
}
