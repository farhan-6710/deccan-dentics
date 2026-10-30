import {
  AdminPage,
  AdminPageIntro,
} from "@/components/admin/AdminPage";
import { ScheduleEditor } from "@/components/admin/schedule/ScheduleEditor";

export default function AdminSchedulePage() {
  return (
    <AdminPage>
      <AdminPageIntro
        eyebrow="Schedule"
        title="Working days & timings"
        description="Toggle availability and set opening hours for each day."
      />
      <ScheduleEditor />
    </AdminPage>
  );
}
