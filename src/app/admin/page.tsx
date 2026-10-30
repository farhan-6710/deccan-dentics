import Link from "next/link";
import {
  AdminPage,
  AdminPageIntro,
} from "@/components/admin/AdminPage";
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
    <AdminPage className="space-y-8">
      <AdminPageIntro
        eyebrow="Overview"
        title="Clinic operations at a glance"
        description="Manage timings, patients, and appointments for Deccan Dentics from one calm workspace."
      />

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
    </AdminPage>
  );
}
