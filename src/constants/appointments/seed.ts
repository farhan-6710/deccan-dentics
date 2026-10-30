import type { Appointment, AppointmentStatus } from "@/types/admin";

type SeedRow = [
  id: string,
  patientId: string,
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
  ["apt_101", "pat_sara", "2026-10-30", "09:00", "Routine checkup", "completed", "2026-10-28T07:00:00.000Z", "2026-10-30T09:40:00.000Z"],
  ["apt_102", "pat_rohan", "2026-10-30", "10:30", "Teeth cleaning", "upcoming", "2026-10-27T08:00:00.000Z", "2026-10-29T08:00:00.000Z"],
  ["apt_103", "pat_neha", "2026-10-29", "12:00", "Whitening consult", "completed", "2026-10-25T10:00:00.000Z", "2026-10-29T12:45:00.000Z"],
  ["apt_104", "pat_ananya", "2026-10-31", "10:30", "Routine cleaning", "upcoming", "2026-10-20T09:00:00.000Z", "2026-10-20T09:00:00.000Z"],
  ["apt_105", "pat_vikram", "2026-10-28", "16:00", "Root canal follow-up", "completed", "2026-10-15T11:00:00.000Z", "2026-10-28T16:45:00.000Z", "Healing well"],
  ["apt_106", "pat_meera", "2026-11-02", "11:15", "Whitening consult", "upcoming", "2026-10-22T13:20:00.000Z", "2026-10-22T13:20:00.000Z"],
  ["apt_107", "pat_arjun", "2026-10-10", "14:30", "Root canal", "not-attended", "2026-10-01T09:00:00.000Z", "2026-10-10T15:30:00.000Z"],
  ["apt_108", "pat_priya", "2026-09-28", "11:00", "Orthodontic review", "completed", "2026-09-20T08:00:00.000Z", "2026-09-28T11:40:00.000Z"],
  ["apt_109", "pat_kabir", "2026-09-12", "15:00", "Filling", "cancelled", "2026-09-05T10:00:00.000Z", "2026-09-11T18:00:00.000Z"],
  ["apt_110", "pat_isha", "2026-08-18", "10:00", "Crown prep", "completed", "2026-08-08T12:00:00.000Z", "2026-08-18T11:00:00.000Z"],
  ["apt_111", "pat_dev", "2026-07-21", "09:30", "Denture adjust", "not-attended", "2026-07-10T09:00:00.000Z", "2026-07-21T10:10:00.000Z"],
  ["apt_112", "pat_leena", "2026-06-05", "13:00", "Cleaning", "completed", "2026-05-28T14:00:00.000Z", "2026-06-05T13:45:00.000Z"],
  ["apt_113", "pat_sara", "2026-05-14", "16:30", "Sensitivity check", "completed", "2026-05-01T11:00:00.000Z", "2026-05-14T17:00:00.000Z"],
  ["apt_114", "pat_vikram", "2026-04-09", "11:30", "Consult", "cancelled", "2026-04-02T08:00:00.000Z", "2026-04-08T09:00:00.000Z"],
];

export const SEED_APPOINTMENTS: Appointment[] = ROWS.map(
  ([id, patientId, date, time, reason, status, createdAt, updatedAt, notes]) => ({
    id,
    patientId,
    date,
    time,
    reason,
    status,
    createdAt,
    updatedAt,
    ...(notes ? { notes } : {}),
  }),
);
