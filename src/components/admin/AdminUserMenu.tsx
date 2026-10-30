"use client";

import { useState } from "react";
import {
  ChevronDown,
  CircleHelp,
  LogOut,
  Settings,
  UserRound,
} from "lucide-react";
import { ConfirmationModal } from "@/components/ui/ConfirmationModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ADMIN_USER_PROFILE } from "@/constants/admin";

type AdminUserMenuProps = {
  onLogout: () => void;
};

export function AdminUserMenu({ onLogout }: AdminUserMenuProps) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          aria-label={`${ADMIN_USER_PROFILE.name} account`}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full p-0.5 outline-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            {ADMIN_USER_PROFILE.initials}
          </span>
          <ChevronDown className="hidden size-4 text-muted-foreground sm:block" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-52" sideOffset={8}>
          <DropdownMenuLabel className="px-2 py-1.5">
            <p className="text-sm font-medium text-foreground">
              {ADMIN_USER_PROFILE.name}
            </p>
            <p className="text-xs font-normal text-muted-foreground">
              Clinic admin
            </p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <UserRound />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            Preferences
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CircleHelp />
            Help & support
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            variant="destructive"
            onClick={() => setConfirmOpen(true)}
          >
            <LogOut />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ConfirmationModal
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Sign out?"
        description="You will need the clinic password again to open the admin dashboard."
        cancelLabel="Cancel"
        confirmLabel="Sign out"
        confirmVariant="destructive"
        onConfirm={onLogout}
      />
    </>
  );
}
