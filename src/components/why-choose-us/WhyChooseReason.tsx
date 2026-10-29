type WhyChooseReasonProps = {
  index: number;
  title: string;
  body: string;
};

export function WhyChooseReason({ index, title, body }: WhyChooseReasonProps) {
  const label = String(index + 1).padStart(2, "0");

  return (
    <li className="group relative border-t border-border pt-5 first:border-t-0 first:pt-0 sm:pt-6 sm:[&:nth-child(-n+2)]:border-t-0 sm:[&:nth-child(-n+2)]:pt-0">
      <div className="flex gap-4 sm:gap-5">
        <span
          aria-hidden
          className="font-heading text-2xl font-bold tabular-nums text-primary/25 transition-colors group-hover:text-primary/50 sm:text-3xl"
        >
          {label}
        </span>
        <div className="min-w-0 space-y-1.5 pb-1">
          <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
        </div>
      </div>
    </li>
  );
}
