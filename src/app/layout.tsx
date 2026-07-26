import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PaintSwitch | Painting. Simplified.",
  description: "Professional residential and commercial painting made simple with clear estimates, reliable scheduling, and quality crews.",
  keywords: ["painting services", "residential painting", "commercial painting", "DMV painters"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
