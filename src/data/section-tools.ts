import type { ToolAccent } from "@/data/tools";

/** Desktop-only: exactly two small floating tools per section. */
export const SECTION_TOOLS = {
  hero: [
    {
      // Beside the start of the hero heading (slightly up)
      id: "explorer",
      className: "left-[3%] top-[22%] w-20 xl:w-24",
      duration: 8.5,
      y: 12,
      x: 5,
      rotate: -16,
    },
    {
      // Under the portrait, nudged slightly right
      id: "mirror",
      className: "left-[55%] bottom-[8%] w-24 xl:w-28",
      duration: 9,
      delay: 0.6,
      y: 14,
      x: 6,
      rotate: 10,
    },
  ],
  about: [
    {
      id: "scaler",
      className: "left-[4%] top-[28%] w-20 xl:w-24",
      duration: 8.5,
      y: 12,
      x: 5,
      rotate: 14,
    },
    {
      id: "forceps",
      className: "right-[8%] bottom-[10%] w-24 xl:w-28",
      duration: 9,
      delay: 0.5,
      y: 14,
      x: 6,
      rotate: -18,
    },
  ],
  services: [
    {
      id: "handpiece",
      className: "left-[3%] top-[36%] w-20 xl:w-24",
      duration: 8.5,
      y: 12,
      x: 5,
      rotate: -18,
    },
    {
      id: "curingLight",
      className: "right-[6%] bottom-[12%] w-20 xl:w-24",
      duration: 9,
      delay: 0.55,
      y: 14,
      x: 6,
      rotate: 12,
    },
  ],
  whyChooseUs: [
    {
      id: "tweezers",
      className: "left-[4%] top-[30%] w-20 xl:w-24",
      duration: 8.5,
      y: 12,
      x: 5,
      rotate: -14,
    },
    {
      id: "airWater",
      className: "right-[6%] bottom-[14%] w-20 xl:w-24",
      duration: 9,
      delay: 0.5,
      y: 14,
      x: 6,
      rotate: 16,
    },
  ],
  reviews: [
    {
      id: "syringe",
      className: "left-[5%] top-[34%] w-20 xl:w-24",
      duration: 8.5,
      y: 12,
      x: 5,
      rotate: -12,
    },
    {
      id: "curingLight",
      className: "right-[5%] bottom-[16%] w-20 xl:w-24",
      duration: 9,
      delay: 0.55,
      y: 14,
      x: 6,
      rotate: 14,
    },
  ],
  faq: [
    {
      id: "ejector",
      className: "left-[6%] top-[40%] w-20 xl:w-24",
      duration: 8.5,
      y: 12,
      x: 5,
      rotate: -14,
    },
    {
      id: "explorer",
      className: "right-[5%] bottom-[18%] w-20 xl:w-24",
      duration: 9,
      delay: 0.5,
      y: 14,
      x: 6,
      rotate: 18,
    },
  ],
  branches: [
    {
      // Open space to the right of the section heading
      id: "handpiece",
      className: "left-[52%] top-[10%] w-20 xl:w-24",
      duration: 8.5,
      y: 12,
      x: 5,
      rotate: 14,
    },
    {
      id: "forceps",
      className: "right-[8%] bottom-[12%] w-20 xl:w-24",
      duration: 9,
      delay: 0.55,
      y: 14,
      x: 6,
      rotate: -16,
    },
  ],
  contact: [
    {
      id: "mirror",
      className: "left-[4%] top-[28%] w-20 xl:w-24",
      duration: 8.5,
      y: 12,
      x: 5,
      rotate: 10,
    },
    {
      id: "tweezers",
      className: "right-[6%] bottom-[12%] w-20 xl:w-24",
      duration: 9,
      delay: 0.5,
      y: 14,
      x: 6,
      rotate: -12,
    },
  ],
} as const satisfies Record<string, ToolAccent[]>;
