"use client";

import { useState } from "react";
import { useConfirmDialog } from "@/hooks/use-confirm-dialog";
import { useShowToast } from "@/hooks/use-show-toast";
import { useClinicStore } from "@/stores/clinic-store";
import type { Appointment, AppointmentInput } from "@/types/admin";
import { appointmentSaveToast } from "@/utils/describe-record-changes";

/** Create/edit/delete handlers for the appointments table. */
export function useAppointmentTableActions() {
  const getPatient = useClinicStore((s) => s.getPatient);
  const addAppointment = useClinicStore((s) => s.addAppointment);
  const updateAppointment = useClinicStore((s) => s.updateAppointment);
  const deleteAppointment = useClinicStore((s) => s.deleteAppointment);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Appointment | null>(null);
  const { ask, props: confirmProps } = useConfirmDialog();
  const showToast = useShowToast();

  const save = (input: AppointmentInput) => {
    const nextName = getPatient(input.patientId)?.name ?? "Patient";
    const previousName = editing
      ? (getPatient(editing.patientId)?.name ?? "Patient")
      : nextName;
    showToast(appointmentSaveToast(editing, input, previousName, nextName));
    if (editing) updateAppointment(editing.id, input);
    else addAppointment(input);
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

  const startCreate = () => {
    setEditing(null);
    setOpen(true);
  };

  const startEdit = (item: Appointment) => {
    setEditing(item);
    setOpen(true);
  };

  return {
    getPatient,
    open,
    editing,
    confirmProps,
    setOpen,
    save,
    remove,
    startCreate,
    startEdit,
  };
}
