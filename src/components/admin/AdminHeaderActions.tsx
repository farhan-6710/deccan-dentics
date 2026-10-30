"use client";

import { useRouter } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { AdminUserMenu } from "@/components/admin/AdminUserMenu";
import { Button } from "@/components/ui/button";

type AdminHeaderActionsProps = {
  onLogout: () => void;
};

export function AdminHeaderActions({ onLogout }: AdminHeaderActionsProps) {
  const router = useRouter();

  return (
    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
      <label className="relative hidden min-w-0 md:block md:w-56 lg:w-72">
        <span className="sr-only">Search</span>
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search patients, appointments..."
          className="h-10 w-full rounded-full border border-input bg-background py-2 pr-3 pl-9 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </label>

      <button
        type="button"
        aria-label="Notifications"
        className="relative inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <Bell className="size-4" />
        <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-destructive ring-2 ring-background" />
      </button>

      <AdminUserMenu onLogout={onLogout} />

      <Button
        type="button"
        size="sm"
        className="hidden shrink-0 sm:inline-flex"
        onClick={() => router.push("/")}
      >
        Back to website
      </Button>
    </div>
  );
}
