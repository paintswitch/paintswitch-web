import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PrimaryButton } from "@/components/buttons";
import { SectionHeading } from "@/components/section-heading";
import { cityLandingPages } from "@/lib/city-landing-pages";

export const metadata: Metadata = {
  title: "Service Areas | PaintSwitch",
  description: "PaintSwitch reviews painting project requests throughout the DMV. Browse local pages for cities and communities we currently cover.",
  alternates: {
    canonical: "https://paintswitch.com/service-areas",
  },
};

export default function ServiceAreasPage() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3D4E4E]">Service areas</p>
            <h1 className="font-editorial mt-6 max-w-2xl text-[2.15rem] font-normal leading-[0.94] tracking-[-0.055em] text-[#253231] min-[360px]:text-[2.7rem] sm:text-[4.25rem]">
              Where PaintSwitch <em className="font-normal text-[#012765]">reviews requests.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#3D4E4E] sm:text-xl">
              PaintSwitch accepts project requests throughout the DMV. The pages below provide local context for specific cities and communities, but a page&apos;s existence does not guarantee service for every address or ZIP code &mdash; every project is reviewed individually before availability or pricing is confirmed.
            </p>
            <div className="mt-9">
              <PrimaryButton href="/#quote">
                Request a Quote <span aria-hidden="true">&rarr;</span>
              </PrimaryButton>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Local pages"
              title="Cities and communities"
              description="Each page covers local architecture, neighborhoods, and project-review factors for that area."
            />
            <ul className="mt-14 grid gap-x-8 gap-y-1 border-t border-[#A99D91]/60 sm:grid-cols-2 lg:grid-cols-3">
              {cityLandingPages.map((page) => (
                <li key={page.slug} className="border-b border-[#A99D91]/60 py-6">
                  <a
                    href={`/${page.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0658FE]"
                  >
                    <span>
                      <span className="font-editorial block text-2xl font-normal tracking-[-0.03em] text-[#253231] group-hover:text-[#012765]">
                        {page.city}
                      </span>
                      <span className="mt-1 block text-sm uppercase tracking-[0.1em] text-[#596563]">
                        {page.stateAbbreviation}
                      </span>
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
