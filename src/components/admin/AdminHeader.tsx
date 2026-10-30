"use client";

import { motion } from "framer-motion";
import { Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { SHELL_HEADER_MOTION } from "@/constants/admin-shell";

type AdminHeaderProps = {
  title: string;
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  onMobileMenuClick: () => void;
  onLogout: () => void;
};

export function AdminHeader({
  title,
  isSidebarCollapsed,
  onToggleSidebar,
  onMobileMenuClick,
  onLogout,
}: AdminHeaderProps) {
  return (
    <motion.header
      {...SHELL_HEADER_MOTION}
      className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-border bg-background/90 px-4 backdrop-blur-md sm:px-6"
    >
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open sidebar"
          onClick={onMobileMenuClick}
        >
          <Menu className="size-4" />
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="hidden size-9 items-center justify-center rounded-xl md:inline-flex"
          aria-label={
            isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
          }
          onClick={onToggleSidebar}
        >
          <Menu className="size-4" />
        </Button>
        <h1 className="font-heading text-lg font-bold tracking-tight text-foreground sm:text-xl">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="gap-1.5"
          onClick={onLogout}
        >
          <LogOut className="size-3.5" />
          <span className="hidden sm:inline">Sign out</span>
        </Button>
      </div>
    </motion.header>
  );
}
