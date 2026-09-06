import type { Metadata } from "next";
import { CityServicePage } from "@/components/city-service-page";
import { alexandriaCabinetPage } from "@/lib/city-service-pages";

export const metadata: Metadata = {
  title: alexandriaCabinetPage.title,
  description: alexandriaCabinetPage.description,
  alternates: {
    canonical: `https://paintswitch.com/${alexandriaCabinetPage.slug}`,
  },
};

export default function AlexandriaCabinetPaintingPage() {
  return <CityServicePage page={alexandriaCabinetPage} />;
}
