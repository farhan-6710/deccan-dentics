import { Star } from "lucide-react";
import { cn } from "cn";

type ReviewCardProps = {
  initials: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  index: number;
  focused: boolean;
};

export function ReviewCard({
  initials,
  name,
  role,
  rating,
  text,
  index,
  focused,
}: ReviewCardProps) {
  return (
    <article
      className={cn(
        "relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 ease-out",
        focused
          ? "z-10 scale-100 opacity-100 shadow-md lg:scale-[1.04]"
          : "scale-[0.97] opacity-70 lg:scale-[0.95]",
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-1 -top-3 font-heading text-7xl font-bold leading-none text-primary/10"
      >
        ”
      </span>
      <div className="relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex size-12 items-center justify-center rounded-full bg-secondary font-heading text-sm font-bold text-primary">
            {initials}
          </span>
          <div>
            <p className="font-heading text-base font-bold text-foreground">
              {name}
            </p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
        <span className="text-xs tabular-nums text-muted-foreground/50">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="relative mt-3 flex gap-0.5 text-chart-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
        “{text}”
      </p>
    </article>
  );
}
