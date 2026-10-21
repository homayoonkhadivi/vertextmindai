import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.ico" },
  title: "VertexMind AI — AI Consulting Australia",
  description:
    "Senior AI consulting across healthcare, energy, mining, sports analytics, and digital transformation. Real deployments, measurable outcomes.",
  openGraph: {
    title: "VertexMind AI — AI Consulting Australia",
    description:
      "We build AI systems that drive real business outcomes. Healthcare, energy, mining, sports, and digital transformation.",
    url: "https://vertexmindai.com.au",
    siteName: "VertexMind AI",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
