import type { Metadata } from "next";
import { Caveat, Libre_Baskerville, Merriweather } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { CLINIC } from "@/data/clinic";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(CLINIC.website),
  title: {
    default: `${CLINIC.name} | Dental Clinic`,
    template: `%s | ${CLINIC.name}`,
  },
  description:
    "Healthy smiles. Happier lives. Premium dental care in Hyderabad at Deccan Dentics.",
  applicationName: CLINIC.name,
  keywords: [
    "Deccan Dentics",
    "dental clinic Hyderabad",
    "dentist Manikonda",
    "dental implants",
    "teeth whitening",
  ],
  openGraph: {
    title: CLINIC.name,
    description: CLINIC.tagline,
    url: CLINIC.website,
    siteName: CLINIC.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/brand/logo-mark.png",
        width: 461,
        height: 461,
        alt: `${CLINIC.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: CLINIC.name,
    description: CLINIC.tagline,
    images: ["/images/brand/logo-mark.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "192x192" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${libreBaskerville.variable} ${merriweather.variable} ${caveat.variable}`}
    >
      <body suppressHydrationWarning className="h-full font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
