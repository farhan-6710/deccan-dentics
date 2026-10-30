import { ScheduleEditor } from "@/components/admin/schedule/ScheduleEditor";

export default function AdminSchedulePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Schedule
        </p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-foreground">
          Working days & timings
        </h2>
        <p className="mt-2 text-muted-foreground">
          Toggle availability and set opening hours for each day.
        </p>
      </div>
      <ScheduleEditor />
    </div>
  );
}
