import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Request a Painting Quote | PaintSwitch",
  description: "Submit a Virginia painting-project request for individual service-area review. Service availability and pricing are confirmed after review.",
  keywords: ["painting services", "residential painting", "commercial painting", "Virginia painters"],
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
