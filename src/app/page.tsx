import { Footer } from "@/components/footer";
import { HighLevelChatWidget } from "@/components/highlevel-chat-widget";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { PrimaryButton } from "@/components/buttons";
import { QuoteRequestForm } from "@/components/quote-request-form";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard, type ServiceIcon } from "@/components/service-card";
import { TrustBar } from "@/components/trust-bar";

const services: { title: string; description: string; icon: ServiceIcon }[] = [
  { title: "Interior Painting", description: "Share the rooms, surfaces, and project details you would like PaintSwitch to review.", icon: "interior" },
  { title: "Exterior Painting", description: "Request a consultation review for an exterior painting project.", icon: "exterior" },
  { title: "Cabinet Painting", description: "Request a consultation review for a cabinet painting project.", icon: "cabinet" },
  { title: "Commercial Painting", description: "Tell us about your commercial space and painting needs for consultation review.", icon: "commercial" },
];

const palette = [
  ["Warm greige", "#D1C4B8"],
  ["Soft taupe", "#C9BDAD"],
  ["Brand navy", "#012765"],
  ["Brand cobalt", "#0658FE"],
  ["Warm charcoal", "#3D4E4E"],
  ["Soft cream", "#F5F1E8"],
];

const benefits = [
  ["01", "Simple request", "Share the project details PaintSwitch needs in one clear form."],
  ["02", "Project review", "Every request is reviewed before service availability or pricing is confirmed."],
  ["03", "Human follow-up", "A PaintSwitch team member follows up to discuss your project and next steps."],
  ["04", "Clear communication", "Know what was received, what is under review, and what happens next."],
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0658FE]">
        <Hero />
        <TrustBar />

        <section className="bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="transformation-title">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#012765]">The power of color</p>
              <h2 id="transformation-title" className="font-editorial mt-5 text-4xl font-normal leading-[1.02] tracking-[-0.04em] text-[#253231] sm:text-5xl lg:text-6xl">
                A thoughtful change can transform the whole room.
              </h2>
            </div>
            <div className="flex flex-col justify-between gap-12 border-l border-[#A99D91] pl-6 sm:pl-10">
              <p className="max-w-2xl text-xl leading-9 text-[#3D4E4E] sm:text-2xl">
                Before-and-after stories show the power of expert color choices and quality craftsmanship.
              </p>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#596563]">PaintSwitch color direction</p>
                <ul className="grid grid-cols-2 border-l border-t border-[#A99D91]/70 sm:grid-cols-6">
                  {palette.map(([name, color]) => (
                    <li key={name} className="border-b border-r border-[#A99D91]/70 bg-[#F5F1E8] p-2">
                      <span className="block aspect-square w-full border border-[#253231]/10" style={{ backgroundColor: color }} aria-hidden="true" />
                      <span className="mt-2 block text-[0.65rem] uppercase tracking-[0.12em] text-[#596563]">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 border-t border-[#A99D91]/60 bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading eyebrow="Painting services" title="Expert attention for every surface" description="Submit a DMV project request for individual service-area review. Virginia projects are prioritized for the public beta." />
              <PrimaryButton href="#quote" className="self-start lg:mb-2">Request a Quote</PrimaryButton>
            </div>
            <div className="mt-14 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => <ServiceCard key={service.title} {...service} />)}
            </div>
          </div>
        </section>

        <HowItWorks />

        <section id="about" className="scroll-mt-24 bg-[#253231] px-5 py-20 text-[#F5F1E8] sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading light eyebrow="Why PaintSwitch" title="A clear way to start your painting project" description="Share the details once, receive confirmation, and know that a human will review your request before the next step." />
            <div className="grid border-l border-t border-[#D1C4B8]/30 sm:grid-cols-2">
              {benefits.map(([number, title, description]) => (
                <article key={title} className="border-b border-r border-[#D1C4B8]/30 p-7 sm:p-9">
                  <span className="font-editorial text-2xl italic text-[#D1C4B8]">{number}</span>
                  <h3 className="font-editorial mt-10 text-2xl font-normal text-[#F5F1E8]">{title}</h3>
                  <p className="mt-4 leading-7 text-[#D1C4B8]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="areas-title">
          <div className="mx-auto grid max-w-7xl border-y border-[#A99D91] lg:grid-cols-[0.66fr_1.34fr]">
            <div className="flex items-center border-b border-[#A99D91] py-8 lg:border-b-0 lg:border-r lg:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#012765]">Service area</p>
            </div>
            <div className="py-10 lg:pl-16">
              <h2 id="areas-title" className="font-editorial text-4xl font-normal tracking-[-0.04em] text-[#253231] sm:text-5xl">DMV project review</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#596563]">PaintSwitch accepts requests throughout the DMV and prioritizes Virginia projects for the public beta. Every location is reviewed individually before availability or pricing is confirmed.</p>
            </div>
          </div>
        </section>

        <section id="quote" className="scroll-mt-24 bg-[#012765] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="text-[#F5F1E8] lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D1C4B8]">Request a quote</p>
              <h2 className="font-editorial mt-5 text-4xl font-normal leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">Tell us about your painting project.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#F5F1E8]/80">Submit a DMV project request for individual service-area review across interior, exterior, cabinet, or commercial painting. Virginia projects are prioritized for the public beta.</p>
              <p className="mt-8 max-w-xl border-l border-[#D1C4B8] pl-5 text-sm leading-6 text-[#D1C4B8]">Submitting this form does not confirm service availability, pricing, scheduling, or booking. A PaintSwitch team member will review your request and follow up.</p>
            </div>
            <QuoteRequestForm />
          </div>
        </section>
      </main>
      <Footer />
      <HighLevelChatWidget />
    </>
  );
}
