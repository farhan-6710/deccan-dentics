import type { AdminSettings, AdminSettingsKey } from "@/types/settings";

export const DEFAULT_ADMIN_SETTINGS: AdminSettings = {
  emailReminders: true,
  smsReminders: false,
  appointmentEmails: true,
  marketingEmails: false,
  desktopNotifications: true,
  weeklyDigest: true,
};

export const SETTINGS_TOGGLES: {
  key: AdminSettingsKey;
  title: string;
  description: string;
}[] = [
  {
    key: "emailReminders",
    title: "Email reminders",
    description: "Send appointment reminders to patients by email.",
  },
  {
    key: "smsReminders",
    title: "SMS reminders",
    description: "Send short text reminders before visits.",
  },
  {
    key: "appointmentEmails",
    title: "Booking emails",
    description: "Notify the clinic when a new appointment is created.",
  },
  {
    key: "marketingEmails",
    title: "Marketing emails",
    description: "Occasional clinic tips and seasonal offers.",
  },
  {
    key: "desktopNotifications",
    title: "Desktop notifications",
    description: "Show alerts in the admin browser tab.",
  },
  {
    key: "weeklyDigest",
    title: "Weekly digest",
    description: "A Monday summary of visits and open todos.",
  },
];
