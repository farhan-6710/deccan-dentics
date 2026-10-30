import { getInitials } from "@/utils/initials";

export const ADMIN_PASSWORD = "deccan-dentics-1234";
export const ADMIN_SESSION_KEY = "deccan-admin-authorized";

export const ADMIN_USER_PROFILE = {
  name: "Shazia",
  displayName: "Dr. Shazia",
  role: "Clinic admin",
  email: "dr.shandzia@deccandentics.in",
  phone: "079956 86661",
  branch: "Manikonda",
  initials: getInitials("Shazia"),
} as const;

export const ADMIN_NAV = [
  { href: "/admin/dashboard", label: "Dashboard", exact: true },
  { href: "/admin/schedule", label: "Schedule" },
  { href: "/admin/patients", label: "Patients" },
  { href: "/admin/appointments", label: "Appointments" },
  { href: "/admin/calendar", label: "Calendar" },
  { href: "/admin/account", label: "Account" },
  { href: "/admin/settings", label: "Settings" },
] as const;

export type AdminNavItem = (typeof ADMIN_NAV)[number];
