import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { PrimaryButton } from "@/components/buttons";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard, type ServiceIcon } from "@/components/service-card";
import { TrustBar } from "@/components/trust-bar";

const services: { title: string; description: string; icon: ServiceIcon }[] = [
  { title: "Interior Painting", description: "Thoughtful color and crisp finishes that make every room feel like yours.", icon: "interior" },
  { title: "Exterior Painting", description: "Durable, weather-ready finishes that protect and refresh your property.", icon: "exterior" },
  { title: "Cabinet Painting", description: "A clean, modern cabinet transformation without a full renovation.", icon: "cabinet" },
  { title: "Commercial Painting", description: "Flexible, dependable painting solutions designed around your business.", icon: "commercial" },
  { title: "Drywall Repair", description: "Seamless patches and careful preparation for a smooth final result.", icon: "drywall" },
];

const benefits = [
  ["01", "Simple process", "One clear path from your first request to the final walkthrough."],
  ["02", "Reliable scheduling", "A plan built around your calendar, with updates you can count on."],
  ["03", "Clean crews", "Respectful professionals who protect your space and tidy up each day."],
  ["04", "Clear communication", "Straight answers and proactive updates at every step."],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />

        <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="What we paint" title="Expert painting for every kind of space" description="From a single room to a full commercial property, we bring a precise process and professional finish." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => <ServiceCard key={service.title} {...service} />)}
              <article className="flex min-h-64 flex-col justify-between rounded-3xl bg-[#0F172A] p-7 text-white sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2DD4BF]">Not sure where to start?</p>
                <div><h3 className="text-2xl font-semibold">Let&apos;s talk paint.</h3><p className="mt-3 text-slate-300">Tell us about your space and we&apos;ll help shape the right plan.</p></div>
                <PrimaryButton href="#contact" className="mt-6 self-start">Get a free estimate</PrimaryButton>
              </article>
            </div>
          </div>
        </section>

        <HowItWorks />

        <section id="about" className="scroll-mt-24 bg-[#0F172A] px-5 py-20 text-white sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading light eyebrow="Why PaintSwitch" title="The better way to paint your space" description="Good painting should feel straightforward. We pair professional work with a refreshingly clear experience." />
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

        <section id="reviews" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Reviews" title="A smooth experience, start to finish" description="What homeowners and teams will be able to say about working with PaintSwitch." />
            <p className="mt-8 inline-flex rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-800">Placeholder testimonials — customer stories coming soon</p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {["The whole process felt organized, clear, and remarkably easy.", "Every detail was handled with care, from prep through clean-up.", "Our space feels completely renewed—and the schedule stayed on track."].map((quote) => (
                <figure key={quote} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <blockquote className="mt-6 text-lg leading-8 text-slate-700">“{quote}”</blockquote>
                  <figcaption className="mt-7 border-t border-slate-100 pt-5 text-sm font-semibold text-slate-500">Placeholder customer</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 lg:pb-28" aria-labelledby="areas-title">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[#E6FFFA] lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">Service areas</p><h2 id="areas-title" className="mt-4 text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">Coming to the DMV</h2><p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">PaintSwitch is preparing to serve homes and businesses across the DC, Maryland, and Virginia region. Detailed coverage information is coming soon.</p></div>
            <div className="relative min-h-72 overflow-hidden bg-[#CCFBF1]" aria-hidden="true"><div className="absolute left-[18%] top-[20%] h-44 w-44 rounded-full border border-[#2DD4BF]/50"/><div className="absolute left-[42%] top-[10%] h-52 w-52 rounded-full border border-[#2DD4BF]/50"/><div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0F172A] text-3xl text-[#2DD4BF] shadow-xl">⌖</div></div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-5 pb-20 sm:px-8 lg:pb-28">
          <div className="mx-auto flex max-w-7xl flex-col items-center rounded-3xl bg-[#2DD4BF] px-6 py-16 text-center sm:px-12 sm:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F5F59]">Your fresh start</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] sm:text-5xl">Ready to transform your home?</h2><p className="mt-5 max-w-xl text-lg text-[#134E4A]">A more beautiful space starts with one simple conversation.</p>
            <PrimaryButton href="#contact" className="mt-8 !bg-[#0F172A] !text-white hover:!bg-slate-800">Request My Estimate <span aria-hidden="true">→</span></PrimaryButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
