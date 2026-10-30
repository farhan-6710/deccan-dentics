import type { DaySchedule } from "@/types/admin";

export const SEED_SCHEDULE: DaySchedule[] = [
  {
    day: "monday",
    isOpen: true,
    slots: [
      { id: "mon_1", openTime: "09:00", closeTime: "13:00" },
      { id: "mon_2", openTime: "14:00", closeTime: "19:00" },
    ],
  },
  {
    day: "tuesday",
    isOpen: true,
    slots: [
      { id: "tue_1", openTime: "09:00", closeTime: "13:00" },
      { id: "tue_2", openTime: "14:00", closeTime: "19:00" },
    ],
  },
  {
    day: "wednesday",
    isOpen: true,
    slots: [
      { id: "wed_1", openTime: "09:00", closeTime: "13:00" },
      { id: "wed_2", openTime: "14:00", closeTime: "19:00" },
    ],
  },
  {
    day: "thursday",
    isOpen: true,
    slots: [{ id: "thu_1", openTime: "09:00", closeTime: "19:00" }],
  },
  {
    day: "friday",
    isOpen: true,
    slots: [
      { id: "fri_1", openTime: "09:00", closeTime: "13:00" },
      { id: "fri_2", openTime: "14:00", closeTime: "19:00" },
    ],
  },
  {
    day: "saturday",
    isOpen: true,
    slots: [{ id: "sat_1", openTime: "09:00", closeTime: "14:00" }],
  },
  {
    day: "sunday",
    isOpen: false,
    slots: [{ id: "sun_1", openTime: "10:00", closeTime: "14:00" }],
  },
];
