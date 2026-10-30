import { Sparkles } from "lucide-react";

export function HeroEyebrow() {
  return (
    <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-secondary/90 px-2.5 py-1.5 shadow-xs backdrop-blur-sm">
      <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
        <Sparkles className="size-2.5 fill-current" strokeWidth={2} />
      </span>
      <span
        className="pr-1 text-[0.7rem] font-medium uppercase text-foreground/75 sm:text-xs"
        style={{ letterSpacing: "var(--tracking-wider)" }}
      >
        Healthy smiles. Happier lives.
      </span>
    </p>
  );
}
