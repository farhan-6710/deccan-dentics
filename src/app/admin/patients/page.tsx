"use client";

import {
  AdminMotion,
  AdminPage,
} from "@/components/admin/AdminPage";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { PatientsTable } from "@/components/admin/patients/PatientsTable";

export default function AdminPatientsPage() {
  return (
    <AdminPage>
      <AdminPageHeader
        eyebrow="Patients"
        title="Patient records"
        description="Keep a lightweight patient list ready for appointments."
      />
      <AdminMotion>
        <PatientsTable />
      </AdminMotion>
    </AdminPage>
  );
}
