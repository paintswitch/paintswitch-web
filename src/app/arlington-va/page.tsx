import type { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page";
import { arlingtonCityPage } from "@/lib/city-landing-pages";

export const metadata: Metadata = {
  title: arlingtonCityPage.title,
  description: arlingtonCityPage.description,
  keywords: [
    arlingtonCityPage.primaryKeyword,
    "painting services Arlington VA",
    "interior painting Arlington VA",
    "exterior painting Arlington VA",
    "cabinet painting Arlington VA",
    "commercial painting Arlington VA",
  ],
  alternates: {
    canonical: "https://paintswitch.com/arlington-va",
  },
};

export default function ArlingtonPage() {
  return <CityLandingPage page={arlingtonCityPage} />;
}
