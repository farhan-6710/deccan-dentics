"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AdminAuthDialog } from "@/components/admin/AdminAuthDialog";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { ADMIN_NAV } from "@/constants/admin";
import { useAdminAuth } from "@/hooks/use-admin-auth";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { authorized, login, logout } = useAdminAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const title = useMemo(() => {
    const match = [...ADMIN_NAV]
      .reverse()
      .find((item) =>
        "exact" in item && item.exact
          ? pathname === item.href
          : pathname.startsWith(item.href),
      );
    return match?.label ?? "Admin";
  }, [pathname]);

  return (
    <div className="flex min-h-dvh bg-muted/30">
      <AdminAuthDialog open={!authorized} onLogin={login} />

      <div className="hidden lg:block">
        <AdminSidebar />
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close sidebar"
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 shadow-xl">
            <AdminSidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <AdminHeader
          title={title}
          onMenuClick={() => setMobileOpen(true)}
          onLogout={logout}
        />
        <main
          className="flex-1 px-4 py-6 sm:px-6 lg:px-8"
          inert={!authorized ? true : undefined}
          aria-hidden={!authorized}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
