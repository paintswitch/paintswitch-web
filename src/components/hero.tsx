import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "./buttons";

export function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-[#D1C4B8] px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3D4E4E]">Painting for the DMV · Virginia prioritized</p>
          <h1 className="font-editorial mt-6 max-w-2xl text-[2.15rem] font-normal leading-[0.9] tracking-[-0.055em] text-[#253231] min-[360px]:text-[2.7rem] sm:text-[4.25rem] lg:text-[clamp(4.5rem,7.5vw,6.9rem)]">
            Transformation<br />through <em className="font-normal text-[#2D5A5A]">color.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#3D4E4E] sm:text-xl">
            Expert color choices and quality craftsmanship can change how a space looks, feels, and lives.
          </p>
          <p className="mt-4 max-w-xl leading-7 text-[#3D4E4E]">
            Request a quote for interior, exterior, cabinet, or commercial painting. Every project is reviewed before service availability or pricing is confirmed.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="#quote">Request a Quote <span aria-hidden="true">→</span></PrimaryButton>
            <SecondaryButton href="#services">Explore Services</SecondaryButton>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-3xl">
          <div className="relative overflow-hidden border border-[#3D4E4E]/30 bg-[#F5F1E8] p-2 sm:p-3">
            <Image
              src="/images/paintswitch-color-study.png"
              alt="The same living room shown with warm greige walls and with a deep teal feature wall"
              width={1586}
              height={992}
              className="aspect-[16/10] w-full object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
              preload
            />
            <div className="pointer-events-none absolute inset-x-2 bottom-2 grid grid-cols-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#F5F1E8] sm:inset-x-3 sm:bottom-3 sm:text-xs">
              <span className="bg-[#253231]/88 px-3 py-2 sm:px-4">Before · warm greige</span>
              <span className="justify-self-end bg-[#2D5A5A]/92 px-3 py-2 text-right sm:px-4">After · deep teal</span>
            </div>
          </div>
          <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-[#3D4E4E]/40 pt-3 text-xs uppercase tracking-[0.14em] text-[#3D4E4E]">
            <span>Illustrative color study</span>
            <span>Not a customer project</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
