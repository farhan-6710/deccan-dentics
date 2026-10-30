import { getInitials } from "@/utils/initials";

export const ADMIN_PASSWORD = "deccan-dentics-1234";
export const ADMIN_SESSION_KEY = "deccan-admin-authorized";

export const ADMIN_USER_PROFILE = {
  name: "Farhan Ahmed",
  displayName: "Dr. Ahmed",
  initials: getInitials("Farhan Ahmed"),
} as const;

export const ADMIN_NAV = [
  { href: "/admin/dashboard", label: "Dashboard", exact: true },
  { href: "/admin/schedule", label: "Schedule" },
  { href: "/admin/patients", label: "Patients" },
  { href: "/admin/appointments", label: "Appointments" },
] as const;
