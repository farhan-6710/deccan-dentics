import { Plus, Star } from "lucide-react";
import { cn } from "cn";

const AVATARS = [
  { initials: "SA", tone: "bg-emerald-200 text-emerald-900" },
  { initials: "RK", tone: "bg-sky-200 text-sky-900" },
  { initials: "NP", tone: "bg-amber-200 text-amber-900" },
  { initials: "AR", tone: "bg-rose-200 text-rose-900" },
] as const;

export function HeroTrustBadge() {
  return (
    <div className="absolute right-2 bottom-4 z-10 flex max-w-[16.5rem] flex-wrap items-center gap-3 rounded-2xl border border-border/60 bg-card/95 px-3 py-2.5 shadow-lg backdrop-blur-sm sm:right-10 sm:-bottom-10 sm:max-w-none sm:gap-4 sm:px-4 sm:py-3">
      <div className="flex items-center">
        {AVATARS.map((avatar, index) => (
          <span
            key={avatar.initials}
            className={cn(
              "inline-flex size-9 items-center justify-center rounded-full border-[2.5px] border-card font-heading text-[0.65rem] font-bold shadow-xs sm:size-10",
              avatar.tone,
              index > 0 && "-ml-2.5",
            )}
            style={{ zIndex: AVATARS.length - index }}
            aria-hidden
          >
            {avatar.initials}
          </span>
        ))}
        <span
          className="-ml-2.5 inline-flex size-9 items-center justify-center rounded-full border-[2.5px] border-card bg-muted text-muted-foreground shadow-xs sm:size-10"
          aria-hidden
        >
          <Plus className="size-4" strokeWidth={2.25} />
        </span>
      </div>

      <div className="min-w-0">
        <p className="font-body text-xs font-medium text-foreground sm:text-sm">
          Trusted by 1000+ Happy Smiles
        </p>
        <div
          className="mt-1 flex items-center gap-0.5 text-[var(--chart-4)]"
          aria-label="5 out of 5 stars"
        >
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="size-3.5 fill-current" />
          ))}
        </div>
      </div>
    </div>
  );
}
