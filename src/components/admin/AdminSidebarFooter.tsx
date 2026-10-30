"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "cn";

type AdminSidebarFooterProps = {
  collapsed: boolean;
  onNavigate?: () => void;
};

export function AdminSidebarFooter({
  collapsed,
  onNavigate,
}: AdminSidebarFooterProps) {
  const link = (
    <Link
      href="/"
      onClick={onNavigate}
      className={cn(
        "flex items-center gap-3 rounded-2xl text-sm font-medium transition",
        collapsed
          ? "justify-center px-4 py-4 text-sidebar-foreground/75 hover:bg-secondary"
          : "px-4 py-2.5 text-sidebar-foreground/75 hover:bg-secondary hover:text-secondary-foreground",
      )}
    >
      <ArrowLeft className="size-4 shrink-0" />
      {collapsed ? (
        <span className="sr-only">Back to website</span>
      ) : (
        <span>Back to website</span>
      )}
    </Link>
  );

  return (
    <div
      className={cn(
        "border-t border-sidebar-border/80",
        collapsed ? "p-3" : "p-4",
      )}
    >
      {collapsed ? (
        <Tooltip>
          <TooltipTrigger delay={0} render={<div className="w-full" />}>
            {link}
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={10}>
            <p className="font-medium">Back to website</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        link
      )}
    </div>
  );
}
