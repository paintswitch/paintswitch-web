import type { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page";
import { viennaCityPage } from "@/lib/city-landing-pages";

export const metadata: Metadata = {
  title: viennaCityPage.title,
  description: viennaCityPage.description,
  keywords: [
    viennaCityPage.primaryKeyword,
    "painting services Vienna VA",
    "interior painting Vienna VA",
    "exterior painting Vienna VA",
    "cabinet painting Vienna VA",
    "commercial painting Vienna VA",
  ],
  alternates: {
    canonical: "https://paintswitch.com/vienna-va",
  },
};

export default function ViennaPage() {
  return <CityLandingPage page={viennaCityPage} />;
}
