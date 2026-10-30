import type { Appointment, DaySchedule, Patient } from "@/types/admin";

export const SEED_PATIENTS: Patient[] = [
  {
    id: "pat_ananya",
    name: "Ananya Reddy",
    phone: "98765 43210",
    age: 32,
    profession: "Software engineer",
    email: "ananya.reddy@email.com",
    address: "Manikonda, Hyderabad",
    createdAt: "2026-09-12T10:00:00.000Z",
    updatedAt: "2026-09-12T10:00:00.000Z",
  },
  {
    id: "pat_vikram",
    name: "Vikram Singh",
    phone: "98123 45678",
    age: 41,
    profession: "School teacher",
    email: "vikram.singh@email.com",
    createdAt: "2026-09-18T08:30:00.000Z",
    updatedAt: "2026-09-18T08:30:00.000Z",
  },
  {
    id: "pat_meera",
    name: "Meera Iyer",
    phone: "99001 22334",
    age: 28,
    profession: "Architect",
    address: "Kondapur, Hyderabad",
    createdAt: "2026-10-02T14:15:00.000Z",
    updatedAt: "2026-10-02T14:15:00.000Z",
  },
];

export const SEED_APPOINTMENTS: Appointment[] = [
  {
    id: "apt_001",
    patientId: "pat_ananya",
    date: "2026-10-31",
    time: "10:30",
    reason: "Routine cleaning",
    status: "scheduled",
    createdAt: "2026-10-20T09:00:00.000Z",
    updatedAt: "2026-10-20T09:00:00.000Z",
  },
  {
    id: "apt_002",
    patientId: "pat_vikram",
    date: "2026-10-28",
    time: "16:00",
    reason: "Root canal follow-up",
    status: "completed",
    notes: "Healing well",
    createdAt: "2026-10-15T11:00:00.000Z",
    updatedAt: "2026-10-28T16:45:00.000Z",
  },
  {
    id: "apt_003",
    patientId: "pat_meera",
    date: "2026-11-02",
    time: "11:15",
    reason: "Whitening consult",
    status: "scheduled",
    createdAt: "2026-10-22T13:20:00.000Z",
    updatedAt: "2026-10-22T13:20:00.000Z",
  },
];

export const SEED_SCHEDULE: DaySchedule[] = [
  { day: "monday", isOpen: true, openTime: "09:00", closeTime: "20:00" },
  { day: "tuesday", isOpen: true, openTime: "09:00", closeTime: "20:00" },
  { day: "wednesday", isOpen: true, openTime: "09:00", closeTime: "20:00" },
  { day: "thursday", isOpen: true, openTime: "09:00", closeTime: "20:00" },
  { day: "friday", isOpen: true, openTime: "09:00", closeTime: "20:00" },
  { day: "saturday", isOpen: true, openTime: "09:00", closeTime: "20:00" },
  { day: "sunday", isOpen: true, openTime: "14:00", closeTime: "18:00" },
];
