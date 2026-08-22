import type { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page";
import { oaktonCityPage } from "@/lib/city-landing-pages";

export const metadata: Metadata = {
  title: oaktonCityPage.title,
  description: oaktonCityPage.description,
  keywords: [
    oaktonCityPage.primaryKeyword,
    "painting services Oakton VA",
    "interior painting Oakton VA",
    "exterior painting Oakton VA",
    "cabinet painting Oakton VA",
    "commercial painting Oakton VA",
  ],
  alternates: {
    canonical: "https://paintswitch.com/oakton-va",
  },
};

export default function OaktonPage() {
  return <CityLandingPage page={oaktonCityPage} />;
}
