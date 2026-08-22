import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { interiorPaintingServicePage } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: interiorPaintingServicePage.title,
  description: interiorPaintingServicePage.description,
  keywords: [interiorPaintingServicePage.primaryKeyword, "interior painters", "interior house painting"],
  alternates: {
    canonical: "https://paintswitch.com/interior-painting",
  },
};

export default function InteriorPaintingPage() {
  return <ServicePage page={interiorPaintingServicePage} />;
}
