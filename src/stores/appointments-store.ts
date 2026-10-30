"use client";

import { create } from "zustand";
import { SEED_APPOINTMENTS } from "@/data/admin-seed";
import type { Appointment, AppointmentInput } from "@/types/admin";
import { createId } from "@/utils/id";

type AppointmentsState = {
  appointments: Appointment[];
  addAppointment: (input: AppointmentInput) => Appointment;
  updateAppointment: (id: string, input: AppointmentInput) => void;
  deleteAppointment: (id: string) => void;
};

export const useAppointmentsStore = create<AppointmentsState>((set) => ({
  appointments: SEED_APPOINTMENTS,
  addAppointment: (input) => {
    const now = new Date().toISOString();
    const appointment: Appointment = {
      ...input,
      id: createId("apt"),
      createdAt: now,
      updatedAt: now,
    };
    set((state) => ({
      appointments: [appointment, ...state.appointments],
    }));
    return appointment;
  },
  updateAppointment: (id, input) => {
    set((state) => ({
      appointments: state.appointments.map((item) =>
        item.id === id
          ? { ...item, ...input, updatedAt: new Date().toISOString() }
          : item,
      ),
    }));
  },
  deleteAppointment: (id) => {
    set((state) => ({
      appointments: state.appointments.filter((item) => item.id !== id),
    }));
  },
}));
