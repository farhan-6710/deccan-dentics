import type { Metadata } from "next";
import { Caveat, Libre_Baskerville, Merriweather } from "next/font/google";
import { ThemeScript } from "@/components/ThemeScript";
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
  title: "Deccan Dentics | Dental Clinic",
  description:
    "Healthy smiles. Happier lives. Premium dental care at Deccan Dentics.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${libreBaskerville.variable} ${merriweather.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body">
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
