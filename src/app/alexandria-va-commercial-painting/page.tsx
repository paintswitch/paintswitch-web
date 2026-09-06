import type { Metadata } from "next";
import { CityServicePage } from "@/components/city-service-page";
import { alexandriaCommercialPage } from "@/lib/city-service-pages";

export const metadata: Metadata = {
  title: alexandriaCommercialPage.title,
  description: alexandriaCommercialPage.description,
  alternates: {
    canonical: `https://paintswitch.com/${alexandriaCommercialPage.slug}`,
  },
};

export default function AlexandriaCommercialPaintingPage() {
  return <CityServicePage page={alexandriaCommercialPage} />;
}
