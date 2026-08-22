import type { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page";
import { chevyChaseVillageCityPage } from "@/lib/city-landing-pages";

export const metadata: Metadata = {
  title: chevyChaseVillageCityPage.title,
  description: chevyChaseVillageCityPage.description,
  keywords: [
    chevyChaseVillageCityPage.primaryKeyword,
    "painting services Chevy Chase Village MD",
    "interior painting Chevy Chase Village MD",
    "exterior painting Chevy Chase Village MD",
    "cabinet painting Chevy Chase Village MD",
    "commercial painting Chevy Chase Village MD",
  ],
  alternates: {
    canonical: "https://paintswitch.com/chevy-chase-village-md",
  },
};

export default function ChevyChaseVillagePage() {
  return <CityLandingPage page={chevyChaseVillageCityPage} />;
}
