import { cn } from "cn";

type DetailFieldProps = {
  label: string;
  value: string;
  className?: string;
};

export function DetailField({ label, value, className }: DetailFieldProps) {
  return (
    <div className={cn("flex items-baseline gap-3 py-1.5", className)}>
      <dt className="w-[5.5rem] shrink-0 text-xs font-medium text-muted-foreground">
        {label}
      </dt>
      <dd className="min-w-0 flex-1 text-sm leading-snug text-foreground">
        {value}
      </dd>
    </div>
  );
}
