import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Saud Nadaf | Cybersecurity & Technology Portfolio", template: "%s | Saud Nadaf" },
  description: "Portfolio of Saud Nadaf, a CSE (Cybersecurity) student building forensics, SOC and secure-system projects.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Saud Nadaf | Cybersecurity & Technology Portfolio",
    description: "Projects, training and security work by Saud Nadaf.",
    url: siteUrl,
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-bg">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
