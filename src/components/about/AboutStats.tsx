import { CLINIC } from "@/data/clinic";

export function AboutStats() {
  return (
    <ol className="mt-8 space-y-1 border-l border-border pl-5">
      {CLINIC.stats.map((stat, index) => (
        <li key={stat.label} className="group relative">
          <span
            aria-hidden
            className="absolute -left-[1.53rem] top-1/2 size-2.5 -translate-y-1/2 rounded-full border-2 border-background bg-primary transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_0_4px] group-hover:shadow-primary/20"
          />
          <div className="flex items-baseline justify-between gap-4 rounded-xl px-3 py-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-secondary/80">
            <div>
              <p className="font-heading text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {stat.label}
              </p>
            </div>
            <span className="font-body text-xs tabular-nums text-muted-foreground/50 transition-colors duration-300 group-hover:text-primary/60">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}
