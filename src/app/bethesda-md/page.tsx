import type { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page";
import { bethesdaCityPage } from "@/lib/city-landing-pages";

export const metadata: Metadata = {
  title: bethesdaCityPage.title,
  description: bethesdaCityPage.description,
  keywords: [
    bethesdaCityPage.primaryKeyword,
    "painting services Bethesda MD",
    "interior painting Bethesda MD",
    "exterior painting Bethesda MD",
    "cabinet painting Bethesda MD",
    "commercial painting Bethesda MD",
  ],
  alternates: {
    canonical: "https://paintswitch.com/bethesda-md",
  },
};

export default function BethesdaPage() {
  return <CityLandingPage page={bethesdaCityPage} />;
}
