"use client";

import { useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AppointmentFormDialog } from "@/components/admin/appointments/AppointmentFormDialog";
import { useClinicStore } from "@/stores/clinic-store";
import type { Appointment, AppointmentInput } from "@/types/admin";

export function AppointmentsTable() {
  const appointments = useClinicStore((s) => s.appointments);
  const addAppointment = useClinicStore((s) => s.addAppointment);
  const updateAppointment = useClinicStore((s) => s.updateAppointment);
  const deleteAppointment = useClinicStore((s) => s.deleteAppointment);
  const patients = useClinicStore((s) => s.patients);
  const getPatient = useClinicStore((s) => s.getPatient);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Appointment | null>(null);

  const save = (input: AppointmentInput) => {
    if (editing) updateAppointment(editing.id, input);
    else addAppointment(input);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button
          type="button"
          className="gap-1.5"
          disabled={patients.length === 0}
          onClick={() => {
            setEditing(null);
            setOpen(true);
          }}
        >
          <Plus className="size-4" />
          Add appointment
        </Button>
      </div>
      <div className="rounded-2xl border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  {getPatient(item.patientId)?.name ?? "Unknown"}
                </TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.time}</TableCell>
                <TableCell>{item.reason}</TableCell>
                <TableCell className="capitalize">{item.status}</TableCell>
                <TableCell className="space-x-1 text-right">
                  <Button
                    type="button"
                    size="icon-sm"
                    variant="ghost"
                    aria-label="Edit appointment"
                    onClick={() => {
                      setEditing(item);
                      setOpen(true);
                    }}
                  >
                    <Pencil className="size-3.5" />
                  </Button>
                  <Button
                    type="button"
                    size="icon-sm"
                    variant="ghost"
                    aria-label="Delete appointment"
                    onClick={() => deleteAppointment(item.id)}
                  >
                    <Trash2 className="size-3.5 text-destructive" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <AppointmentFormDialog
        open={open}
        appointment={editing}
        patients={patients}
        onClose={() => setOpen(false)}
        onSave={save}
      />
    </div>
  );
}
