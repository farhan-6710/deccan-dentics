export const SERVICES = [
  {
    id: "implants",
    title: "Dental Implants",
    summary:
      "Replace missing teeth with durable, natural-looking implants so you can chew, speak, and smile with confidence again.",
    points: [
      "Digital planning for precise placement",
      "Durable, natural aesthetics",
      "Restore bite strength and comfort",
    ],
    image: "/images/general-dentistry.png",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    summary:
      "Enhance the aesthetics of your smile—and your self-assurance—with tailored cosmetic treatments.",
    points: [
      "Smile design consultations",
      "Veneers and bonding options",
      "Subtle, camera-ready results",
    ],
    image: "/images/general-dentistry.png",
  },
  {
    id: "root-canals",
    title: "Root Canals",
    summary:
      "Relieve persistent toothaches and sensitivity with gentle root canal care that protects your natural tooth.",
    points: [
      "Pain-focused, calm appointments",
      "Advanced diagnostics when needed",
      "Preserve your natural tooth",
    ],
    image: "/images/general-dentistry.png",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    summary:
      "Professionally lift stains and brighten your smile safely—ideal before events or anytime you want a refresh.",
    points: [
      "Safe in-clinic whitening",
      "Customized shade goals",
      "Guidance for lasting brightness",
    ],
    image: "/images/general-dentistry.png",
  },
  {
    id: "crowns",
    title: "Dental Crowns",
    summary:
      "Custom caps that protect weakened teeth while restoring strength and a seamless natural look.",
    points: [
      "Precision-fitted restorations",
      "Protect cracked or weak teeth",
      "Blend with your smile",
    ],
    image: "/images/general-dentistry.png",
  },
  {
    id: "kids",
    title: "Kids Dentistry",
    summary:
      "Delightful, gentle visits designed for children—so early dental care feels as precious as their smiles.",
    points: [
      "Kid-friendly chairside manner",
      "Preventive check-ups & cleanings",
      "Parents welcome in the room",
    ],
    image: "/images/general-dentistry.png",
  },
] as const;

export type Service = (typeof SERVICES)[number];
