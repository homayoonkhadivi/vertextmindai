import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Analytics from "@/components/layout/Analytics";
import JsonLd from "@/components/layout/JsonLd";
import { site } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder, url: site.social.linkedin }],
  creator: site.founder,
  keywords: [
    "AI consulting Australia",
    "machine learning consultant",
    "LLM agents",
    "RAG",
    "MLOps",
    "computer vision",
    "AI for mining",
    "AI for energy",
    "AI for healthcare",
  ],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: site.title,
    description:
      "We build AI systems that drive real business outcomes. Healthcare, energy, mining, sports, and digital transformation.",
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-[#7c6fcd] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        {children}
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}
