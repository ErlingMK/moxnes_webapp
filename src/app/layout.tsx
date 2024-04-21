import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moxnes Jurist og Coach",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <HydrationOverlay>{children}</HydrationOverlay>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
