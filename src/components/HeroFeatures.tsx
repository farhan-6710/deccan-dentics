import { HeartHandshake, Smile, Stethoscope, Wrench } from "lucide-react";

const FEATURES = [
  { label: "Experienced Dentists", icon: Stethoscope },
  { label: "Modern Equipment", icon: Wrench },
  { label: "Comfortable Care", icon: HeartHandshake },
  { label: "Family Friendly", icon: Smile },
] as const;

export function HeroFeatures() {
  return (
    <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
      {FEATURES.map(({ label, icon: Icon }) => (
        <li key={label} className="flex items-center gap-2.5">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
            <Icon className="size-4" strokeWidth={1.75} />
          </span>
          <span className="font-body text-xs leading-snug text-foreground sm:text-sm">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
