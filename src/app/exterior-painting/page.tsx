import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { exteriorPaintingServicePage } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: exteriorPaintingServicePage.title,
  description: exteriorPaintingServicePage.description,
  keywords: [exteriorPaintingServicePage.primaryKeyword, "exterior painters", "house exterior painting"],
  alternates: {
    canonical: "https://paintswitch.com/exterior-painting",
  },
};

export default function ExteriorPaintingPage() {
  return <ServicePage page={exteriorPaintingServicePage} />;
}
