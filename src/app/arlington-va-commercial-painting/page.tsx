import type { Metadata } from "next";
import { CityServicePage } from "@/components/city-service-page";
import { arlingtonCommercialPage } from "@/lib/city-service-pages";

export const metadata: Metadata = {
  title: arlingtonCommercialPage.title,
  description: arlingtonCommercialPage.description,
  alternates: {
    canonical: `https://paintswitch.com/${arlingtonCommercialPage.slug}`,
  },
};

export default function ArlingtonCommercialPaintingPage() {
  return <CityServicePage page={arlingtonCommercialPage} />;
}
