import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { cabinetPaintingServicePage } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: cabinetPaintingServicePage.title,
  description: cabinetPaintingServicePage.description,
  keywords: [cabinetPaintingServicePage.primaryKeyword, "cabinet painters", "kitchen cabinet painting"],
  alternates: {
    canonical: "https://paintswitch.com/cabinet-painting",
  },
};

export default function CabinetPaintingPage() {
  return <ServicePage page={cabinetPaintingServicePage} />;
}
