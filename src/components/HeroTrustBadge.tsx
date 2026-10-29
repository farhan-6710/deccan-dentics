import { Plus } from "lucide-react";

const AVATAR_COLORS = ["#6ba77e", "#409566", "#5b8d83"] as const;

export function HeroTrustBadge() {
  return (
    <div className="absolute bottom-4 left-2 z-10 flex max-w-[14rem] items-center gap-3 rounded-2xl border border-border/60 bg-card/95 px-3 py-2.5 shadow-lg backdrop-blur-sm sm:bottom-0 sm:left-80 sm:max-w-none sm:px-4 sm:py-3">
      <div className="flex -space-x-2">
        {AVATAR_COLORS.map((color) => (
          <span
            key={color}
            className="size-8 rounded-full border-2 border-card"
            style={{ backgroundColor: color }}
            aria-hidden
          />
        ))}
        <span className="flex size-8 items-center justify-center rounded-full border-2 border-card bg-primary text-primary-foreground">
          <Plus className="size-3.5" strokeWidth={2.5} />
        </span>
      </div>
      <p className="font-body text-xs leading-snug text-foreground sm:text-sm">
        Trusted by{" "}
        <span className="font-semibold text-primary">1000+</span> Happy Smiles
      </p>
    </div>
  );
}
