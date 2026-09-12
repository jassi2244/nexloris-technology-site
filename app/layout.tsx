import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexloris Technology | Websites. Software. Digital Solutions.",
  description:
    "Nexloris Technology builds modern websites, custom software, web applications, APIs, integrations and scalable digital solutions for businesses in India and worldwide.",
  keywords: [
    "Nexloris Technology",
    "web development",
    "custom software",
    "web applications",
    "API development",
    "software company Chandigarh",
    "digital solutions",
  ],
  openGraph: {
    title: "Nexloris Technology",
    description: "Websites. Software. Digital Solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
