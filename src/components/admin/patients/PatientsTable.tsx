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
import { PatientFormDialog } from "@/components/admin/patients/PatientFormDialog";
import { usePatientsStore } from "@/stores/patients-store";
import { useAppointmentsStore } from "@/stores/appointments-store";
import type { Patient, PatientInput } from "@/types/admin";

export function PatientsTable() {
  const { patients, addPatient, updatePatient, deletePatient } =
    usePatientsStore();
  const deleteAppointment = useAppointmentsStore((s) => s.deleteAppointment);
  const appointments = useAppointmentsStore((s) => s.appointments);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Patient | null>(null);

  const save = (input: PatientInput) => {
    if (editing) updatePatient(editing.id, input);
    else addPatient(input);
  };

  const remove = (id: string) => {
    appointments
      .filter((item) => item.patientId === id)
      .forEach((item) => deleteAppointment(item.id));
    deletePatient(id);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button
          type="button"
          className="gap-1.5"
          onClick={() => {
            setEditing(null);
            setOpen(true);
          }}
        >
          <Plus className="size-4" />
          Add patient
        </Button>
      </div>
      <div className="rounded-2xl border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Profession</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.name}</TableCell>
                <TableCell>{patient.phone}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.profession}</TableCell>
                <TableCell className="space-x-1 text-right">
                  <Button
                    type="button"
                    size="icon-sm"
                    variant="ghost"
                    aria-label={`Edit ${patient.name}`}
                    onClick={() => {
                      setEditing(patient);
                      setOpen(true);
                    }}
                  >
                    <Pencil className="size-3.5" />
                  </Button>
                  <Button
                    type="button"
                    size="icon-sm"
                    variant="ghost"
                    aria-label={`Delete ${patient.name}`}
                    onClick={() => remove(patient.id)}
                  >
                    <Trash2 className="size-3.5 text-destructive" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <PatientFormDialog
        open={open}
        patient={editing}
        onClose={() => setOpen(false)}
        onSave={save}
      />
    </div>
  );
}
