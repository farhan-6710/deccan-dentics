"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { NAV_LINKS } from "@/constants/nav";
import { cn } from "cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between gap-4 px-[var(--container-padding)] py-3.5">
        <Link href="/" className="shrink-0" aria-label="Deccan Dentics home">
          <Image
            src="/images/logo.png"
            alt="Deccan Dentics Dental Clinic"
            width={220}
            height={52}
            priority
            className="h-10 w-auto object-contain sm:h-11"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body text-sm transition-colors hover:text-primary",
                  active
                    ? "font-medium text-primary underline decoration-2 underline-offset-8"
                    : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link href="/contact" className="hidden sm:inline-flex">
            <Button size="lg" className="gap-2 px-4 md:px-5">
              <CalendarDays className="size-4" />
              Book Appointment
            </Button>
          </Link>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-[var(--container-padding)] py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-body text-sm text-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button size="lg" className="mt-2 w-full gap-2">
                <CalendarDays className="size-4" />
                Book Appointment
              </Button>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
