import { Footer } from "@/components/footer";
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
      <main id="main-content" tabIndex={-1} className="focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0F766E]">
        <Hero />
        <TrustBar />

        <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Painting services" title="Choose the service that fits your project" description="Request a review for interior, exterior, cabinet, or commercial painting in the DMV." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => <ServiceCard key={service.title} {...service} />)}
              <article className="flex min-h-64 flex-col justify-between rounded-3xl bg-[#0F172A] p-7 text-white sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2DD4BF]">Not sure where to start?</p>
                <div><h3 className="text-2xl font-semibold">Let&apos;s talk paint.</h3><p className="mt-3 text-slate-300">Tell us about your space and we&apos;ll help shape the right plan.</p></div>
                <PrimaryButton href="#quote" className="mt-6 self-start">Request a Quote</PrimaryButton>
              </article>
            </div>
          </div>
        </section>

        <HowItWorks />

        <section id="about" className="scroll-mt-24 bg-[#0F172A] px-5 py-20 text-white sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading light eyebrow="Why PaintSwitch" title="A clear way to start your painting project" description="Share the details once, receive confirmation, and know that a human will review your request before the next step." />
            <div className="grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2">
              {benefits.map(([number, title, description]) => (
                <article key={title} className="bg-[#111c32] p-7 sm:p-9">
                  <span className="font-mono text-sm text-[#2DD4BF]">{number}</span>
                  <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="areas-title">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[#E6FFFA] lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">Service area</p><h2 id="areas-title" className="mt-4 text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">DMV launch market</h2><p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Project requests are reviewed individually. PaintSwitch confirms whether a location is within the current service area before confirming availability or pricing.</p></div>
            <div className="relative min-h-72 overflow-hidden bg-[#CCFBF1]" aria-hidden="true"><div className="absolute left-[18%] top-[20%] h-44 w-44 rounded-full border border-[#2DD4BF]/50"/><div className="absolute left-[42%] top-[10%] h-52 w-52 rounded-full border border-[#2DD4BF]/50"/><div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0F172A] text-3xl text-[#2DD4BF] shadow-xl">⌖</div></div>
          </div>
        </section>

        <section id="quote" className="scroll-mt-24 bg-[#2DD4BF] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F3D39]">Request a quote</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0F172A] sm:text-5xl">Tell us about your painting project.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#134E4A]">Request a review for an interior, exterior, cabinet, or commercial painting project in the DMV.</p>
              <p className="mt-6 max-w-xl rounded-2xl border border-[#0F766E]/25 bg-white/35 p-4 text-sm leading-6 text-[#134E4A]">Submitting this form does not confirm service availability, pricing, scheduling, or booking. A PaintSwitch team member will review your request and follow up.</p>
            </div>
            <QuoteRequestForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
