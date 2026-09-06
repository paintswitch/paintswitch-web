import type { Metadata } from "next";
import { CityServicePage } from "@/components/city-service-page";
import { alexandriaExteriorPage } from "@/lib/city-service-pages";

export const metadata: Metadata = {
  title: alexandriaExteriorPage.title,
  description: alexandriaExteriorPage.description,
  alternates: {
    canonical: `https://paintswitch.com/${alexandriaExteriorPage.slug}`,
  },
};

export default function AlexandriaExteriorPaintingPage() {
  return <CityServicePage page={alexandriaExteriorPage} />;
}
