export const TOOLS = {
  mirror: "/images/tools/dental-mirror.png",
  explorer: "/images/tools/dental-explorer.png",
  tweezers: "/images/tools/dental-tweezers.png",
  handpiece: "/images/tools/dental-handpiece.png",
  syringe: "/images/tools/dental-syringe.png",
  forceps: "/images/tools/extraction-forceps.png",
  scaler: "/images/tools/periodontal-scaler.png",
  airWater: "/images/tools/air-water-syringe.png",
  curingLight: "/images/tools/curing-light.png",
  ejector: "/images/tools/saliva-ejector.png",
} as const;

export type ToolId = keyof typeof TOOLS;

export type ToolAccent = {
  id: ToolId;
  className: string;
  duration?: number;
  delay?: number;
  /** Vertical float distance in px */
  y?: number;
  /** Horizontal drift distance in px */
  x?: number;
  /** Base rotation in degrees */
  rotate?: number;
};
