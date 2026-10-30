"use client";

import { create } from "zustand";
import { SEED_SCHEDULE } from "@/data/admin-seed";
import type { DaySchedule, Weekday } from "@/types/admin";

type ScheduleState = {
  days: DaySchedule[];
  updateDay: (day: Weekday, patch: Partial<Omit<DaySchedule, "day">>) => void;
};

export const useScheduleStore = create<ScheduleState>((set) => ({
  days: SEED_SCHEDULE,
  updateDay: (day, patch) => {
    set((state) => ({
      days: state.days.map((item) =>
        item.day === day ? { ...item, ...patch } : item,
      ),
    }));
  },
}));
