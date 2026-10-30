import { AppointmentsTable } from "@/components/admin/appointments/AppointmentsTable";

export default function AdminAppointmentsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Appointments
        </p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-foreground">
          Visit schedule
        </h2>
        <p className="mt-2 text-muted-foreground">
          Appointments always link to a patient record via patientId.
        </p>
      </div>
      <AppointmentsTable />
    </div>
  );
}
