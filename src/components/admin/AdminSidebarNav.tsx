"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Clock3, LayoutDashboard, Users } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ADMIN_NAV } from "@/constants/admin";
import { cn } from "cn";

const ICONS = {
  "/admin/dashboard": LayoutDashboard,
  "/admin/schedule": Clock3,
  "/admin/patients": Users,
  "/admin/appointments": CalendarDays,
} as const;

type AdminSidebarNavProps = {
  collapsed: boolean;
  onNavigate?: () => void;
};

export function AdminSidebarNav({
  collapsed,
  onNavigate,
}: AdminSidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Admin"
      className={cn(
        "min-h-0 flex-1 space-y-1.5 overflow-y-auto",
        collapsed ? "p-3" : "p-4",
      )}
    >
      {ADMIN_NAV.map((item) => {
        const Icon = ICONS[item.href];
        const active =
          "exact" in item && item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

        const link = (
          <Link
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-2xl text-sm font-medium transition",
              collapsed ? "justify-center px-4 py-4" : "px-4 py-2.5",
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-sidebar-foreground/75 hover:bg-secondary hover:text-secondary-foreground",
            )}
          >
            <Icon className="size-4 shrink-0" />
            {collapsed ? (
              <span className="sr-only">{item.label}</span>
            ) : (
              <span>{item.label}</span>
            )}
          </Link>
        );

        if (!collapsed) return <div key={item.href}>{link}</div>;

        return (
          <Tooltip key={item.href}>
            <TooltipTrigger delay={0} render={<div className="w-full" />}>
              {link}
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={10}>
              <p className="font-medium">{item.label}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </nav>
  );
}
