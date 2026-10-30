import { PatientsTable } from "@/components/admin/patients/PatientsTable";

export default function AdminPatientsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Patients
        </p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-foreground">
          Patient records
        </h2>
        <p className="mt-2 text-muted-foreground">
          Keep a lightweight patient list ready for appointments.
        </p>
      </div>
      <PatientsTable />
    </div>
  );
}
