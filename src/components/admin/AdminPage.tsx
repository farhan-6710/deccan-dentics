import { cn } from "cn";

type AdminPageProps = {
  children: React.ReactNode;
  className?: string;
};

/** Shared left-aligned admin page frame (padding lives on AdminShell main). */
export function AdminPage({ children, className }: AdminPageProps) {
  return (
    <div className={cn("w-full max-w-6xl space-y-6 text-left", className)}>
      {children}
    </div>
  );
}

type AdminPageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function AdminPageIntro({
  eyebrow,
  title,
  description,
}: AdminPageIntroProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
