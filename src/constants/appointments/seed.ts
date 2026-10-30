import { SEED_APPOINTMENT_IDS } from "@/constants/appointments/seed-ids";
import {
  SEED_PATIENT_IDS,
  type SeedPatientKey,
} from "@/constants/patients/seed-ids";
import type { Appointment, AppointmentStatus } from "@/types/admin";

type SeedRow = [
  patientKey: SeedPatientKey,
  date: string,
  time: string,
  reason: string,
  status: AppointmentStatus,
  createdAt: string,
  updatedAt: string,
  notes?: string,
];

/** Fixed timestamps relative to dashboard reference 2026-10-30. */
const ROWS: SeedRow[] = [
  ["sara", "2026-10-30", "09:00", "Routine checkup", "completed", "2026-10-28T07:00:00.000Z", "2026-10-30T09:40:00.000Z"],
  ["rohan", "2026-10-30", "10:30", "Teeth cleaning", "upcoming", "2026-10-27T08:00:00.000Z", "2026-10-29T08:00:00.000Z"],
  ["neha", "2026-10-29", "12:00", "Whitening consult", "completed", "2026-10-25T10:00:00.000Z", "2026-10-29T12:45:00.000Z"],
  ["ananya", "2026-10-31", "10:30", "Routine cleaning", "upcoming", "2026-10-20T09:00:00.000Z", "2026-10-20T09:00:00.000Z"],
  ["vikram", "2026-10-28", "16:00", "Root canal follow-up", "completed", "2026-10-15T11:00:00.000Z", "2026-10-28T16:45:00.000Z", "Healing well"],
  ["meera", "2026-11-02", "11:15", "Whitening consult", "upcoming", "2026-10-22T13:20:00.000Z", "2026-10-22T13:20:00.000Z"],
  ["arjun", "2026-10-10", "14:30", "Root canal", "not-attended", "2026-10-01T09:00:00.000Z", "2026-10-10T15:30:00.000Z"],
  ["priya", "2026-09-28", "11:00", "Orthodontic review", "completed", "2026-09-20T08:00:00.000Z", "2026-09-28T11:40:00.000Z"],
  ["kabir", "2026-09-12", "15:00", "Filling", "cancelled", "2026-09-05T10:00:00.000Z", "2026-09-11T18:00:00.000Z"],
  ["isha", "2026-08-18", "10:00", "Crown prep", "completed", "2026-08-08T12:00:00.000Z", "2026-08-18T11:00:00.000Z"],
  ["dev", "2026-07-21", "09:30", "Denture adjust", "not-attended", "2026-07-10T09:00:00.000Z", "2026-07-21T10:10:00.000Z"],
  ["leena", "2026-06-05", "13:00", "Cleaning", "completed", "2026-05-28T14:00:00.000Z", "2026-06-05T13:45:00.000Z"],
  ["sara", "2026-05-14", "16:30", "Sensitivity check", "completed", "2026-05-01T11:00:00.000Z", "2026-05-14T17:00:00.000Z"],
  ["vikram", "2026-04-09", "11:30", "Consult", "cancelled", "2026-04-02T08:00:00.000Z", "2026-04-08T09:00:00.000Z"],
];

export const SEED_APPOINTMENTS: Appointment[] = ROWS.map(
  ([patientKey, date, time, reason, status, createdAt, updatedAt, notes], index) => ({
    id: SEED_APPOINTMENT_IDS[index],
    patientId: SEED_PATIENT_IDS[patientKey],
    date,
    time,
    reason,
    status,
    createdAt,
    updatedAt,
    ...(notes ? { notes } : {}),
  }),
);
