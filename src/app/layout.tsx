import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-LEKK2Q0XJ0";

export const metadata: Metadata = {
  title: "Request a Painting Quote | PaintSwitch",
  description: "Submit a DMV painting-project request for individual service-area review. Service availability and pricing are confirmed after review.",
  keywords: ["painting services", "residential painting", "commercial painting", "DMV painters", "Virginia painters"],
  verification: {
    google: "sVUjCBFVGJjWrRzky2n58cSi29Paa4UrfBGg8x4L-bo",
  },
  openGraph: {
    title: "Request a Painting Quote | PaintSwitch",
    description: "Expert color choices and quality craftsmanship for DMV painting projects. Interior, exterior, cabinet, and commercial painting services.",
    url: "https://paintswitch.com",
    siteName: "PaintSwitch",
    images: [
      {
        url: "https://paintswitch.com/images/paintswitch-color-study.png",
        width: 1200,
        height: 630,
        alt: "Before and after living room with warm greige and deep teal walls",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Painting Quote | PaintSwitch",
    description: "Expert color choices and quality craftsmanship for DMV painting projects.",
    images: ["https://paintswitch.com/images/paintswitch-color-study.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
