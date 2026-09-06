import type { Metadata } from "next";
import { CityServicePage } from "@/components/city-service-page";
import { arlingtonCabinetPage } from "@/lib/city-service-pages";

export const metadata: Metadata = {
  title: arlingtonCabinetPage.title,
  description: arlingtonCabinetPage.description,
  alternates: {
    canonical: `https://paintswitch.com/${arlingtonCabinetPage.slug}`,
  },
};

export default function ArlingtonCabinetPaintingPage() {
  return <CityServicePage page={arlingtonCabinetPage} />;
}
