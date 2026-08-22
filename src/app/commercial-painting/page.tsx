import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { commercialPaintingServicePage } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: commercialPaintingServicePage.title,
  description: commercialPaintingServicePage.description,
  keywords: [commercialPaintingServicePage.primaryKeyword, "commercial painters", "office painting"],
  alternates: {
    canonical: "https://paintswitch.com/commercial-painting",
  },
};

export default function CommercialPaintingPage() {
  return <ServicePage page={commercialPaintingServicePage} />;
}
