import type { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page";
import { greatFallsCityPage } from "@/lib/city-landing-pages";

export const metadata: Metadata = {
  title: greatFallsCityPage.title,
  description: greatFallsCityPage.description,
  keywords: [
    greatFallsCityPage.primaryKeyword,
    "painting services Great Falls VA",
    "interior painting Great Falls VA",
    "exterior painting Great Falls VA",
    "cabinet painting Great Falls VA",
    "commercial painting Great Falls VA",
  ],
  alternates: {
    canonical: "https://paintswitch.com/great-falls-va",
  },
};

export default function GreatFallsPage() {
  return <CityLandingPage page={greatFallsCityPage} />;
}
