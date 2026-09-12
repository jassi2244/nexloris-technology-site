import type { Metadata } from "next";
import { siteDescription, siteUrl } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nexloris Technology | Websites. Software. Digital Solutions.",
  description: siteDescription,
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Nexloris Technology",
    description: "Websites. Software. Digital Solutions.",
    siteName: "Nexloris Technology",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/nexloris-banner.png", width: 2508, height: 627, alt: "Nexloris Technology — Websites. Software. Digital Solutions." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexloris Technology",
    description: "Websites. Software. Digital Solutions.",
    images: ["/nexloris-banner.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
