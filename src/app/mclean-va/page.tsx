import type { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page";
import { mcLeanCityPage } from "@/lib/city-landing-pages";

export const metadata: Metadata = {
  title: mcLeanCityPage.title,
  description: mcLeanCityPage.description,
  keywords: [
    mcLeanCityPage.primaryKeyword,
    "painting services McLean VA",
    "interior painting McLean VA",
    "exterior painting McLean VA",
    "cabinet painting McLean VA",
    "commercial painting McLean VA",
  ],
  alternates: {
    canonical: "https://paintswitch.com/mclean-va",
  },
};

export default function McLeanPage() {
  return <CityLandingPage page={mcLeanCityPage} />;
}
