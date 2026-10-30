import {
  AdminPage,
  AdminPageIntro,
} from "@/components/admin/AdminPage";
import { AppointmentsTable } from "@/components/admin/appointments/AppointmentsTable";

export default function AdminAppointmentsPage() {
  return (
    <AdminPage>
      <AdminPageIntro
        eyebrow="Appointments"
        title="Visit schedule"
        description="Appointments always link to a patient record via patientId."
      />
      <AppointmentsTable />
    </AdminPage>
  );
}
