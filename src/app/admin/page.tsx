import Link from "next/link";
import { OverviewStats } from "@/components/admin/overview/OverviewStats";

const LINKS = [
  {
    href: "/admin/schedule",
    title: "Schedule & timings",
    body: "Set open days and clinic hours.",
  },
  {
    href: "/admin/patients",
    title: "Patients",
    body: "Add and manage patient records.",
  },
  {
    href: "/admin/appointments",
    title: "Appointments",
    body: "Plan visits linked to patients.",
  },
] as const;

export default function AdminOverviewPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Overview
        </p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
          Clinic operations at a glance
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Manage timings, patients, and appointments for Deccan Dentics from one
          calm workspace.
        </p>
      </div>

      <OverviewStats />

      <div className="grid gap-4 md:grid-cols-3">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-secondary/40"
          >
            <h3 className="font-heading text-lg font-bold text-foreground">
              {link.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{link.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
