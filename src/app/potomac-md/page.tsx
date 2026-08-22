import type { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page";
import { potomacCityPage } from "@/lib/city-landing-pages";

export const metadata: Metadata = {
  title: potomacCityPage.title,
  description: potomacCityPage.description,
  keywords: [
    potomacCityPage.primaryKeyword,
    "painting services Potomac MD",
    "interior painting Potomac MD",
    "exterior painting Potomac MD",
    "cabinet painting Potomac MD",
    "commercial painting Potomac MD",
  ],
  alternates: {
    canonical: "https://paintswitch.com/potomac-md",
  },
};

export default function PotomacPage() {
  return <CityLandingPage page={potomacCityPage} />;
}
