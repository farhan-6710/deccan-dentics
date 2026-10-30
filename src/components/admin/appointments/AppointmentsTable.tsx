"use client";

import { useCallback, useMemo, useState } from "react";
import { DataTable } from "@/components/admin/DataTable";
import { AppointmentDetailsCard } from "@/components/admin/appointments/AppointmentDetailsCard";
import { AppointmentFormDialog } from "@/components/admin/appointments/AppointmentFormDialog";
import { getAppointmentListColumns } from "@/components/admin/appointments/appointment-columns";
import { AppointmentsToolbar } from "@/components/admin/appointments/AppointmentsToolbar";
import { ConfirmationModal } from "@/components/ui/ConfirmationModal";
import { useConfirmDialog } from "@/hooks/use-confirm-dialog";
import { useSelectedRow } from "@/hooks/use-selected-row";
import { useShowToast } from "@/hooks/use-show-toast";
import { useClinicStore } from "@/stores/clinic-store";
import type { Appointment, AppointmentInput } from "@/types/admin";
import { appointmentSaveToast } from "@/utils/describe-record-changes";
import {
  filterAppointments,
  type AppointmentListFilters,
} from "@/utils/filter-appointments";

const INITIAL_FILTERS: AppointmentListFilters = {
  query: "",
  status: "all",
  date: "all",
};
export function AppointmentsTable() {
  const appointments = useClinicStore((s) => s.appointments);
  const patients = useClinicStore((s) => s.patients);
  const getPatient = useClinicStore((s) => s.getPatient);
  const addAppointment = useClinicStore((s) => s.addAppointment);
  const updateAppointment = useClinicStore((s) => s.updateAppointment);
  const deleteAppointment = useClinicStore((s) => s.deleteAppointment);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Appointment | null>(null);
  const { ask, props: confirmProps } = useConfirmDialog();
  const showToast = useShowToast();
  const rows = useMemo(
    () => filterAppointments(appointments, patients, filters),
    [appointments, patients, filters],
  );
  const getId = useCallback((item: Appointment) => item.id, []);
  const [selectedId, setSelectedId, selected] = useSelectedRow(rows, getId);
  const columns = useMemo(
    () => getAppointmentListColumns((id) => getPatient(id)?.name ?? "Unknown"),
    [getPatient],
  );

  const save = (input: AppointmentInput) => {
    const nextName = getPatient(input.patientId)?.name ?? "Patient";
    const previousName = editing
      ? (getPatient(editing.patientId)?.name ?? "Patient")
      : nextName;
    const toast = appointmentSaveToast(editing, input, previousName, nextName);
    if (editing) updateAppointment(editing.id, input);
    else addAppointment(input);
    showToast(toast);
  };

  const remove = (item: Appointment) => {
    const name = getPatient(item.patientId)?.name ?? "this appointment";
    ask({
      title: "Delete appointment?",
      description: `Removes the visit for ${name} on ${item.date} at ${item.time}.`,
      confirmLabel: "Delete appointment",
      onConfirm: () => {
        deleteAppointment(item.id);
        showToast({
          title: "Appointment deleted",
          description: `Visit for ${name} on ${item.date} at ${item.time} was removed.`,
          type: "success",
        });
      },
    });
  };

  return (
    <div className="space-y-4">
      <AppointmentsToolbar
        filters={filters}
        onChange={setFilters}
        canAdd={patients.length > 0}
        onAdd={() => {
          setEditing(null);
          setOpen(true);
        }}
      />
      <div className="grid gap-4 lg:grid-cols-[3fr_2fr]">
        <DataTable
          columns={columns}
          rows={rows}
          getRowId={getId}
          selectedRowId={selectedId}
          onRowSelect={(item) => setSelectedId(item.id)}
          emptyMessage="No appointments match these filters."
        />
        <AppointmentDetailsCard
          appointment={selected}
          patientName={
            selected ? (getPatient(selected.patientId)?.name ?? "Unknown") : ""
          }
          onEdit={() => {
            if (!selected) return;
            setEditing(selected);
            setOpen(true);
          }}
          onDelete={() => selected && remove(selected)}
        />
      </div>
      <AppointmentFormDialog
        open={open}
        appointment={editing}
        patients={patients}
        onClose={() => setOpen(false)}
        onSave={save}
      />
      {confirmProps ? <ConfirmationModal {...confirmProps} /> : null}
    </div>
  );
}
