import {
  AdminPage,
  AdminPageIntro,
} from "@/components/admin/AdminPage";
import { PatientsTable } from "@/components/admin/patients/PatientsTable";

export default function AdminPatientsPage() {
  return (
    <AdminPage>
      <AdminPageIntro
        eyebrow="Patients"
        title="Patient records"
        description="Keep a lightweight patient list ready for appointments."
      />
      <PatientsTable />
    </AdminPage>
  );
}
