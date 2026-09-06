import type { Metadata } from "next";
import { CityServicePage } from "@/components/city-service-page";
import { arlingtonExteriorPage } from "@/lib/city-service-pages";

export const metadata: Metadata = {
  title: arlingtonExteriorPage.title,
  description: arlingtonExteriorPage.description,
  alternates: {
    canonical: `https://paintswitch.com/${arlingtonExteriorPage.slug}`,
  },
};

export default function ArlingtonExteriorPaintingPage() {
  return <CityServicePage page={arlingtonExteriorPage} />;
}
