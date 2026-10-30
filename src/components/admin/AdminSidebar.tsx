"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Clock3, LayoutDashboard, Users } from "lucide-react";
import { ADMIN_NAV } from "@/constants/admin";
import { cn } from "cn";

const ICONS = {
  "/admin": LayoutDashboard,
  "/admin/schedule": Clock3,
  "/admin/patients": Users,
  "/admin/appointments": CalendarDays,
} as const;

type AdminSidebarProps = {
  onNavigate?: () => void;
};

export function AdminSidebar({ onNavigate }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r border-border bg-card">
      <div className="flex justify-center items-center border-b border-border px-5 py-4">
        <Link href="/admin" onClick={onNavigate} className="inline-flex">
          <Image
            src="/images/brand/logo.png"
            alt="Deccan Dentics"
            width={168}
            height={40}
            className="h-9 w-auto object-contain"
          />
        </Link>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3" aria-label="Admin">
        {ADMIN_NAV.map((item) => {
          const Icon = ICONS[item.href];
          const active = "exact" in item && item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors",
                active
                  ? "bg-secondary font-medium text-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            >
              <Icon className="size-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-border p-4">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          ← Back to website
        </Link>
      </div>
    </aside>
  );
}
