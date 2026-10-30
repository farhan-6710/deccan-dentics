"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SEED_APPOINTMENTS } from "@/constants/appointments/seed";
import { SEED_PATIENTS } from "@/constants/patients/seed";
import { SEED_SCHEDULE } from "@/constants/schedule/seed";
import { DEFAULT_ADMIN_SETTINGS } from "@/constants/settings";
import { SEED_TODOS } from "@/constants/todos/seed";
import { createClinicEntityActions } from "@/stores/clinic-entity-actions";
import { createScheduleActions } from "@/stores/schedule-actions";
import type {
  Appointment,
  AppointmentInput,
  DaySchedule,
  Patient,
  PatientInput,
  ScheduleTimeSlot,
  Weekday,
} from "@/types/admin";
import type { AdminSettings, AdminSettingsKey } from "@/types/settings";
import type { ClinicTodo, TodoInput } from "@/types/todo";

type ClinicState = AdminSettings & {
  patients: Patient[];
  appointments: Appointment[];
  days: DaySchedule[];
  todos: ClinicTodo[];
  getPatient: (id: string) => Patient | undefined;
  addPatient: (input: PatientInput) => Patient;
  updatePatient: (id: string, input: PatientInput) => void;
  deletePatient: (id: string) => void;
  addAppointment: (input: AppointmentInput) => Appointment;
  updateAppointment: (id: string, input: AppointmentInput) => void;
  deleteAppointment: (id: string) => void;
  setDayOpen: (day: Weekday, isOpen: boolean) => void;
  addDaySlot: (day: Weekday) => void;
  updateDaySlot: (
    day: Weekday,
    slotId: string,
    patch: Partial<Omit<ScheduleTimeSlot, "id">>,
  ) => void;
  removeDaySlot: (day: Weekday, slotId: string) => void;
  addTodo: (input: TodoInput) => ClinicTodo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setSetting: (key: AdminSettingsKey, value: boolean) => void;
};

export const useClinicStore = create<ClinicState>()(
  persist(
    (set, get) => ({
      ...DEFAULT_ADMIN_SETTINGS,
      patients: SEED_PATIENTS,
      appointments: SEED_APPOINTMENTS,
      days: SEED_SCHEDULE,
      todos: SEED_TODOS,
      ...createClinicEntityActions(set, get),
      ...createScheduleActions(set),
      setSetting: (key, value) => set({ [key]: value }),
    }),
    { name: "deccan-clinic-store" },
  ),
);
