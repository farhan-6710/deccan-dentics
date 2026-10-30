export const ADMIN_PASSWORD = "deccan-dentics-1234";
export const ADMIN_SESSION_KEY = "deccan-admin-authorized";

export const ADMIN_NAV = [
  { href: "/admin", label: "Overview", exact: true },
  { href: "/admin/schedule", label: "Schedule" },
  { href: "/admin/patients", label: "Patients" },
  { href: "/admin/appointments", label: "Appointments" },
] as const;

export const WEEKDAY_LABELS = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
} as const;

export const APPOINTMENT_STATUSES = [
  "scheduled",
  "completed",
  "cancelled",
] as const;
