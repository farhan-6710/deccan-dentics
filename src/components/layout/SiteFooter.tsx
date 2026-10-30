import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { CLINIC } from "@/data/clinic";
import { NAV_LINKS } from "@/constants/nav";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-muted/60">
      <div className="mx-auto grid max-w-[var(--container-max)] gap-10 px-[var(--container-padding)] py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="space-y-4 lg:col-span-1">
          <Image
            src="/images/brand/logo.png"
            alt={CLINIC.name}
            width={200}
            height={48}
            className="h-11 w-auto object-contain"
          />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Healthy smiles. Happier lives. Comprehensive dental care for the
            whole family across Hyderabad.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold text-foreground">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold text-foreground">
            Visit
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{CLINIC.primaryBranch.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href={CLINIC.phoneHref} className="hover:text-primary">
                {CLINIC.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-primary" />
              <a href={CLINIC.emailHref} className="hover:text-primary">
                {CLINIC.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold text-foreground">
            Hours
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{CLINIC.hours.weekdays}</li>
            <li>{CLINIC.hours.sunday}</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            5 branches across Hyderabad — Manikonda, Kondapur, Malakpet, Toli
            Chowki & more.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-2 px-[var(--container-padding)] py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {CLINIC.name}. All rights reserved.
          </p>
          <a
            href={CLINIC.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            dddental.in
          </a>
        </div>
      </div>
    </footer>
  );
}
