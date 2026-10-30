export type Patient = {
  id: string;
  name: string;
  phone: string;
  age: number;
  profession: string;
  email?: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
};

export type AppointmentStatus = "scheduled" | "completed" | "cancelled";

export type Appointment = {
  id: string;
  patientId: string;
  date: string;
  time: string;
  reason: string;
  status: AppointmentStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
};

export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type DaySchedule = {
  day: Weekday;
  isOpen: boolean;
  openTime: string;
  closeTime: string;
};

export type PatientInput = Omit<Patient, "id" | "createdAt" | "updatedAt">;
export type AppointmentInput = Omit<
  Appointment,
  "id" | "createdAt" | "updatedAt"
>;
