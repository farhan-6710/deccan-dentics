import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { CLINIC } from "@/data/clinic";

const DETAILS = [
  {
    icon: MapPin,
    label: "Visit",
    body: CLINIC.primaryBranch.address,
    title: CLINIC.primaryBranch.name,
  },
  {
    icon: Phone,
    label: "Call",
    body: CLINIC.phone,
    href: CLINIC.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    body: CLINIC.email,
    href: CLINIC.emailHref,
  },
  {
    icon: Clock3,
    label: "Hours",
    body: `${CLINIC.hours.weekdays} · ${CLINIC.hours.sunday}`,
  },
] as const;

export function ContactAside() {
  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        <iframe
          title="Deccan Dentics Manikonda map"
          src={CLINIC.primaryBranch.mapEmbedUrl}
          className="h-56 w-full border-0 sm:h-64"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="rounded-3xl border border-border bg-card p-6 md:p-7">
        <p className="font-script text-2xl text-primary sm:text-3xl">
          Reach the clinic
        </p>
        <ol className="mt-5 space-y-1 border-l border-border pl-5">
          {DETAILS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label} className="relative py-3">
                <span
                  aria-hidden
                  className="absolute -left-[1.53rem] top-5 size-2.5 rounded-full border-2 border-background bg-primary"
                />
                <div className="flex gap-3">
                  <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div className="min-w-0 text-sm">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </p>
                    {"title" in item ? (
                      <p className="mt-1 font-medium text-foreground">
                        {item.title}
                      </p>
                    ) : null}
                    {"href" in item && item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block text-foreground hover:text-primary"
                      >
                        {item.body}
                      </a>
                    ) : (
                      <p className="mt-1 leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
