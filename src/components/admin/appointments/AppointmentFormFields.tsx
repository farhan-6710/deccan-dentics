"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { APPOINTMENT_STATUSES } from "@/constants/admin";
import type { AppointmentInput, Patient } from "@/types/admin";

type AppointmentFormFieldsProps = {
  value: AppointmentInput;
  patients: Patient[];
  onChange: (next: AppointmentInput) => void;
};

export function AppointmentFormFields({
  value,
  patients,
  onChange,
}: AppointmentFormFieldsProps) {
  const set = <K extends keyof AppointmentInput>(
    key: K,
    next: AppointmentInput[K],
  ) => onChange({ ...value, [key]: next });

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="space-y-2 sm:col-span-2">
        <Label>Patient</Label>
        <Select
          value={value.patientId}
          onValueChange={(patientId) => {
            if (patientId) set("patientId", patientId);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select patient" />
          </SelectTrigger>
          <SelectContent>
            {patients.map((patient) => (
              <SelectItem key={patient.id} value={patient.id}>
                {patient.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="apt-date">Date</Label>
        <Input
          id="apt-date"
          type="date"
          value={value.date}
          onChange={(e) => set("date", e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="apt-time">Time</Label>
        <Input
          id="apt-time"
          type="time"
          value={value.time}
          onChange={(e) => set("time", e.target.value)}
          required
        />
      </div>
      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="apt-reason">Reason</Label>
        <Input
          id="apt-reason"
          value={value.reason}
          onChange={(e) => set("reason", e.target.value)}
          required
        />
      </div>
      <div className="space-y-2 sm:col-span-2">
        <Label>Status</Label>
        <Select
          value={value.status}
          onValueChange={(status) => {
            if (status) set("status", status as AppointmentInput["status"]);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {APPOINTMENT_STATUSES.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="apt-notes">Notes (optional)</Label>
        <Textarea
          id="apt-notes"
          value={value.notes ?? ""}
          onChange={(e) => set("notes", e.target.value || undefined)}
        />
      </div>
    </div>
  );
}
