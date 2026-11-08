import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PrimaryButton } from "@/components/buttons";
import { buildTeamJsonLd, initials, teamMembers } from "@/lib/team";

export const metadata: Metadata = {
  title: "Our Team | PaintSwitch",
  description: "Meet the PaintSwitch team behind interior, exterior, cabinet, and commercial painting across the DMV. Call (571) 565-9491.",
  alternates: {
    canonical: "https://paintswitch.com/about",
  },
};

export default function AboutPage() {
  const jsonLd = buildTeamJsonLd();

  return (
    <>
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0658FE]"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <section id="home" className="overflow-hidden bg-[#D1C4B8] px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3D4E4E]">Our team</p>
            <h1 className="font-editorial mt-6 max-w-2xl text-[2.15rem] font-normal leading-[0.94] tracking-[-0.055em] text-[#253231] min-[360px]:text-[2.7rem] sm:text-[4.25rem]">
              The people behind <em className="font-normal text-[#012765]">PaintSwitch.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#3D4E4E] sm:text-xl">
              PaintSwitch is a DMV painting company. Every request is reviewed by a person before availability or pricing is confirmed.
            </p>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:py-28" aria-label="Team members">
          <div className="mx-auto max-w-5xl space-y-16">
            {teamMembers.map((member) => (
              <article
                key={member.slug}
                id={member.slug}
                className="grid items-start gap-10 border-t border-[#A99D91]/60 pt-12 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-14"
              >
                {member.photo ? (
                  <Image
                    src={member.photo.src}
                    alt={member.photo.alt}
                    width={member.photo.width}
                    height={member.photo.height}
                    className="aspect-[4/5] w-full max-w-64 border border-[#A99D91] object-cover"
                    sizes="(min-width: 640px) 16rem, 100vw"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="font-editorial flex aspect-[4/5] w-full max-w-64 items-center justify-center border border-[#A99D91] bg-[#D1C4B8] text-6xl text-[#012765]"
                  >
                    {initials(member.name)}
                  </div>
                )}
                <div>
                  <h2 className="font-editorial text-4xl font-normal tracking-[-0.04em] text-[#253231] sm:text-5xl">{member.name}</h2>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#012765]">{member.role}</p>
                  <div className="mt-6 space-y-4">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph} className="text-lg leading-8 text-[#3D4E4E]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#A99D91]/60 bg-[#D1C4B8] px-5 py-16 sm:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-editorial text-3xl tracking-[-0.03em] text-[#253231]">Have a project in mind?</p>
            <PrimaryButton href="/#quote">
              Request a Quote <span aria-hidden="true">&rarr;</span>
            </PrimaryButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
