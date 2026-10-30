import type { DashboardVisit } from "@/types/dashboard";

export const SEED_TODAY_VISITS: DashboardVisit[] = [
  {
    id: "visit_1",
    time: "09:00",
    patientName: "Sara Ahmed",
    service: "Routine Checkup",
    status: "completed",
  },
  {
    id: "visit_2",
    time: "10:30",
    patientName: "Rohan Kapoor",
    service: "Teeth Cleaning",
    status: "in_progress",
  },
  {
    id: "visit_3",
    time: "12:00",
    patientName: "Neha Patel",
    service: "Whitening Consult",
    status: "upcoming",
  },
  {
    id: "visit_4",
    time: "14:30",
    patientName: "Arjun Sharma",
    service: "Root Canal",
    status: "upcoming",
  },
  {
    id: "visit_5",
    time: "16:00",
    patientName: "Priya Sharma",
    service: "Orthodontic Review",
    status: "upcoming",
  },
];
