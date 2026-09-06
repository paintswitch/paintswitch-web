import type { Metadata } from "next";
import { CityServicePage } from "@/components/city-service-page";
import { arlingtonInteriorPage } from "@/lib/city-service-pages";

export const metadata: Metadata = {
  title: arlingtonInteriorPage.title,
  description: arlingtonInteriorPage.description,
  alternates: {
    canonical: `https://paintswitch.com/${arlingtonInteriorPage.slug}`,
  },
};

export default function ArlingtonInteriorPaintingPage() {
  return <CityServicePage page={arlingtonInteriorPage} />;
}
