import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PersistentCTA } from "@/components/layout/persistent-cta";
import { SonnerToaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Studio [TON NOM] — Sites web premium",
  description: "Des sites web qui font vendre — design, performance, conversion.",
  openGraph: {
    title: "Studio [TON NOM]",
    description: "Des sites web qui font vendre — design, performance, conversion.",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <PersistentCTA />
        <SonnerToaster />
      </body>
    </html>
  );
}
