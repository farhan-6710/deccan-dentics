"use client";

import { create } from "zustand";
import { SEED_APPOINTMENTS } from "@/constants/appointments/seed";
import { SEED_PATIENTS } from "@/constants/patients/seed";
import { SEED_SCHEDULE } from "@/constants/schedule/seed";
import { SEED_TODOS } from "@/constants/todos/seed";
import type {
  Appointment,
  AppointmentInput,
  DaySchedule,
  Patient,
  PatientInput,
  Weekday,
} from "@/types/admin";
import type { ClinicTodo, TodoInput } from "@/types/todo";
import { createId } from "@/utils/id";

type ClinicState = {
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
  updateDay: (day: Weekday, patch: Partial<Omit<DaySchedule, "day">>) => void;
  addTodo: (input: TodoInput) => ClinicTodo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const useClinicStore = create<ClinicState>((set, get) => ({
  patients: SEED_PATIENTS,
  appointments: SEED_APPOINTMENTS,
  days: SEED_SCHEDULE,
  todos: SEED_TODOS,
  getPatient: (id) => get().patients.find((patient) => patient.id === id),
  addPatient: (input) => {
    const now = new Date().toISOString();
    const patient: Patient = {
      ...input,
      id: createId("pat"),
      createdAt: now,
      updatedAt: now,
    };
    set((s) => ({ patients: [patient, ...s.patients] }));
    return patient;
  },
  updatePatient: (id, input) => {
    set((s) => ({
      patients: s.patients.map((p) =>
        p.id === id ? { ...p, ...input, updatedAt: new Date().toISOString() } : p,
      ),
    }));
  },
  deletePatient: (id) => {
    set((s) => ({ patients: s.patients.filter((p) => p.id !== id) }));
  },
  addAppointment: (input) => {
    const now = new Date().toISOString();
    const appointment: Appointment = {
      ...input,
      id: createId("apt"),
      createdAt: now,
      updatedAt: now,
    };
    set((s) => ({ appointments: [appointment, ...s.appointments] }));
    return appointment;
  },
  updateAppointment: (id, input) => {
    set((s) => ({
      appointments: s.appointments.map((item) =>
        item.id === id
          ? { ...item, ...input, updatedAt: new Date().toISOString() }
          : item,
      ),
    }));
  },
  deleteAppointment: (id) => {
    set((s) => ({
      appointments: s.appointments.filter((item) => item.id !== id),
    }));
  },
  updateDay: (day, patch) => {
    set((s) => ({
      days: s.days.map((item) => (item.day === day ? { ...item, ...patch } : item)),
    }));
  },
  addTodo: (input) => {
    const todo: ClinicTodo = {
      id: createId("todo"),
      label: input.label.trim(),
      done: false,
    };
    set((s) => ({ todos: [todo, ...s.todos] }));
    return todo;
  },
  toggleTodo: (id) => {
    set((s) => ({
      todos: s.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    }));
  },
  deleteTodo: (id) => {
    set((s) => ({ todos: s.todos.filter((todo) => todo.id !== id) }));
  },
}));
