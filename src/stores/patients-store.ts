"use client";

import { create } from "zustand";
import { SEED_PATIENTS } from "@/data/admin-seed";
import type { Patient, PatientInput } from "@/types/admin";
import { createId } from "@/utils/id";

type PatientsState = {
  patients: Patient[];
  addPatient: (input: PatientInput) => Patient;
  updatePatient: (id: string, input: PatientInput) => void;
  deletePatient: (id: string) => void;
  getPatient: (id: string) => Patient | undefined;
};

export const usePatientsStore = create<PatientsState>((set, get) => ({
  patients: SEED_PATIENTS,
  getPatient: (id) => get().patients.find((patient) => patient.id === id),
  addPatient: (input) => {
    const now = new Date().toISOString();
    const patient: Patient = {
      ...input,
      id: createId("pat"),
      createdAt: now,
      updatedAt: now,
    };
    set((state) => ({ patients: [patient, ...state.patients] }));
    return patient;
  },
  updatePatient: (id, input) => {
    set((state) => ({
      patients: state.patients.map((patient) =>
        patient.id === id
          ? { ...patient, ...input, updatedAt: new Date().toISOString() }
          : patient,
      ),
    }));
  },
  deletePatient: (id) => {
    set((state) => ({
      patients: state.patients.filter((patient) => patient.id !== id),
    }));
  },
}));
