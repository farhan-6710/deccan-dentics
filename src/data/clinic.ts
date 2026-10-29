export const CLINIC = {
  name: "Deccan Dentics",
  tagline: "Don't Just Smile, Shine with Confidence!",
  phone: "079956 86661",
  phoneHref: "tel:+917995686661",
  email: "drsadiqali2000@gmail.com",
  emailHref: "mailto:drsadiqali2000@gmail.com",
  website: "https://dddental.in",
  hours: {
    weekdays: "Mon–Sat 09:00 AM – 08:00 PM",
    sunday: "Sun 02:00 PM – 06:00 PM",
  },
  primaryBranch: {
    name: "Deccan Dentics Manikonda",
    address:
      "1-3-13/1, Opposite Hallmark Tranquil, Puppalaguda – Manikonda Main Rd, near Sloka The School, Hyderabad, Telangana 500089",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Deccan%20Dentics%20Manikonda%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Deccan+Dentics+Manikonda+Hyderabad",
  },
  branches: [
    {
      id: "kondapur",
      name: "Kondapur",
      clinicName: "Deccan Dentics Kondapur",
      address:
        "Flat No. 304, 4th floor, Ace Monte Carlo apartments, junction, beside TCS, Land Mark Residency, Kondapur, Kothaguda, Hyderabad, Telangana 500084",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Deccan+Dentics+Kondapur+Hyderabad",
    },
    {
      id: "manikonda",
      name: "Manikonda",
      clinicName: "Deccan Dentics Manikonda",
      address:
        "1-3-13/1, Opposite Hallmark Tranquil, Puppalaguda – Manikonda Main Rd, near Sloka The School, Hyderabad, Telangana 500089",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Deccan+Dentics+Manikonda+Hyderabad",
    },
    {
      id: "malakpet",
      name: "Malakpet",
      clinicName: "Deccan Dentics Malakpet",
      address:
        "First floor, Health front speciality clinics, Azampura, New Malakpet, Hyderabad, Telangana 500024",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Deccan+Dentics+Malakpet+Hyderabad",
    },
    {
      id: "toli-chowki",
      name: "Toli Chowki",
      clinicName: "Deccan Dentics Toli Chowki",
      address:
        "Paramount Heights, Street Number 2, opp. Gate, Paramount Hills, Toli Chowki, Hyderabad, Telangana 500008",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Deccan+Dentics+Toli+Chowki+Hyderabad",
    },
    {
      id: "rajendra-nagar",
      name: "Rajendra Nagar",
      clinicName: "Videnta Dental Clinic",
      address:
        "Pillar no 179, Videnta dental clinic near, Naidu Colony, Rajendra Nagar, Upperpally, Hyderabad, Telangana 500048",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Videnta+Dental+Clinic+Rajendra+Nagar+Hyderabad",
    },
  ],
  about: {
    eyebrow: "About us",
    title: "Redefining dental care with expertise and compassion",
    body: "At Deccan Dentics, we are dedicated to redefining dental care through innovation, expertise, and a patient-first approach. Our mission is to provide world-class dental solutions in a warm and welcoming environment where every patient feels valued and cared for.",
    bodySecondary:
      "Founded on the principles of excellence and compassion, Deccan Dentics has become a trusted name in Hyderabad for comprehensive family dentistry—from routine check-ups to complex procedures.",
    doctorName: "Our Clinical Team",
    doctorRole: "Experienced dentists & specialists",
    quote:
      "Every smile deserves care that is precise, gentle, and personal.",
  },
  stats: [
    { value: "10+", label: "Years Clinical Excellence" },
    { value: "25k+", label: "Happy Patients" },
    { value: "5", label: "Branches in Hyderabad" },
    { value: "24/7", label: "Emergency Support" },
  ],
} as const;
