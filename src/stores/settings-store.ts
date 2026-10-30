"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AdminSettings, AdminSettingsKey } from "@/types/settings";

type SettingsState = AdminSettings & {
  setSetting: (key: AdminSettingsKey, value: boolean) => void;
};

const DEFAULT_SETTINGS: AdminSettings = {
  emailReminders: true,
  smsReminders: false,
  appointmentEmails: true,
  marketingEmails: false,
  desktopNotifications: true,
  weeklyDigest: true,
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      ...DEFAULT_SETTINGS,
      setSetting: (key, value) => set({ [key]: value }),
    }),
    { name: "deccan-admin-settings" },
  ),
);
