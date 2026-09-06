import type { Metadata } from "next";
import { CityServicePage } from "@/components/city-service-page";
import { alexandriaInteriorPage } from "@/lib/city-service-pages";

export const metadata: Metadata = {
  title: alexandriaInteriorPage.title,
  description: alexandriaInteriorPage.description,
  alternates: {
    canonical: `https://paintswitch.com/${alexandriaInteriorPage.slug}`,
  },
};

export default function AlexandriaInteriorPaintingPage() {
  return <CityServicePage page={alexandriaInteriorPage} />;
}
