"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

function applyTheme(nextDark: boolean) {
  document.documentElement.classList.toggle("dark", nextDark);
  window.localStorage.setItem("theme", nextDark ? "dark" : "light");
}

export function ThemeToggle() {
  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    applyTheme(next);
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggle}
      className="text-muted-foreground hover:text-foreground"
    >
      <Sun className="size-5 dark:hidden" />
      <Moon className="hidden size-5 dark:block" />
    </Button>
  );
}
