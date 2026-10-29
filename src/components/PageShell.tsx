import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pt-[4.25rem]">{children}</main>
      <SiteFooter />
    </div>
  );
}
