import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zainab Rafi | Instrumentation & Controls Engineer",
  description:
    "Designing reliable industrial automation systems, troubleshooting mission-critical equipment, and improving process reliability through modern control engineering.",
  keywords: [
    "Instrumentation Engineer",
    "Controls Engineer",
    "Industrial Automation",
    "DCS",
    "PLC",
    "Gas Turbine",
    "Yokogawa",
    "GE Mark VIe",
    "Engro Fertilizers",
  ],
  authors: [{ name: "Zainab Rafi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
