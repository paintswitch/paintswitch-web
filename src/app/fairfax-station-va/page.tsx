import type { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page";
import { fairfaxStationCityPage } from "@/lib/city-landing-pages";

export const metadata: Metadata = {
  title: fairfaxStationCityPage.title,
  description: fairfaxStationCityPage.description,
  keywords: [
    fairfaxStationCityPage.primaryKeyword,
    "painting services Fairfax Station VA",
    "interior painting Fairfax Station VA",
    "exterior painting Fairfax Station VA",
    "cabinet painting Fairfax Station VA",
    "commercial painting Fairfax Station VA",
  ],
  alternates: {
    canonical: "https://paintswitch.com/fairfax-station-va",
  },
};

export default function FairfaxStationPage() {
  return <CityLandingPage page={fairfaxStationCityPage} />;
}
