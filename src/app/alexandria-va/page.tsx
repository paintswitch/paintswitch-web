import type { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page";
import { alexandriaCityPage } from "@/lib/city-landing-pages";

export const metadata: Metadata = {
  title: alexandriaCityPage.title,
  description: alexandriaCityPage.description,
  keywords: [
    alexandriaCityPage.primaryKeyword,
    "painting services Alexandria VA",
    "interior painting Alexandria VA",
    "exterior painting Alexandria VA",
    "cabinet painting Alexandria VA",
    "commercial painting Alexandria VA",
  ],
  alternates: {
    canonical: "https://paintswitch.com/alexandria-va",
  },
};

export default function AlexandriaPage() {
  return <CityLandingPage page={alexandriaCityPage} />;
}
