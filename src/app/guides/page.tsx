import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";
import { cityGuidePages, guidePages } from "@/lib/guide-pages";

export const metadata: Metadata = {
  title: "Painting Guides | PaintSwitch",
  description: "Practical, non-salesy guides on color selection, exterior paint maintenance, and what affects painting cost, from PaintSwitch.",
  alternates: {
    canonical: "https://paintswitch.com/guides",
  },
};

export default function GuidesPage() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0658FE]"
      >
        <section className="overflow-hidden bg-[#D1C4B8] px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3D4E4E]">Guides</p>
            <h1 className="font-editorial mt-6 max-w-2xl text-[2.15rem] font-normal leading-[0.94] tracking-[-0.055em] text-[#253231] min-[360px]:text-[2.7rem] sm:text-[4.25rem]">
              Practical reading, <em className="font-normal text-[#012765]">not a sales pitch.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#3D4E4E] sm:text-xl">
              These guides cover the kinds of questions that come up before a painting project starts, like choosing a color, knowing when exterior paint needs attention, or understanding what shapes a quote. They&apos;re informational, not project reviews.
            </p>
          </div>
        </section>

        <section className="bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Available guides"
              title="Color, maintenance, and cost guides"
              description="More guides will be added over time."
            />
            <ul className="mt-14 grid gap-x-8 gap-y-1 border-t border-[#A99D91]/60 sm:grid-cols-2">
              {guidePages.map((guide) => (
                <li key={guide.slug} className="border-b border-[#A99D91]/60 py-6">
                  <a
                    href={`/${guide.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0658FE]"
                  >
                    <span className="font-editorial text-2xl font-normal tracking-[-0.03em] text-[#253231] group-hover:text-[#012765]">
                      {guide.headline}
                    </span>
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-[#0658FE] transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-[#A99D91]/60 bg-[#D1C4B8] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Local guides"
              title="City painting guides"
              description="Local factors, like older construction, historic-district review, and regional climate, for specific service areas. More cities will be added over time."
            />
            <ul className="mt-14 grid gap-x-8 gap-y-1 border-t border-[#3D4E4E]/45 sm:grid-cols-2">
              {cityGuidePages.map((guide) => (
                <li key={guide.slug} className="border-b border-[#3D4E4E]/45 py-6">
                  <a
                    href={`/${guide.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0658FE]"
                  >
                    <span className="font-editorial text-2xl font-normal tracking-[-0.03em] text-[#253231] group-hover:text-[#012765]">
                      {guide.headline}
                    </span>
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-[#0658FE] transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
