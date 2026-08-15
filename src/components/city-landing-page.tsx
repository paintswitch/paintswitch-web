import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";
import { QuoteRequestForm } from "@/components/quote-request-form";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TrustBar } from "@/components/trust-bar";
import { buildCityJsonLd, type CityLandingPageData } from "@/lib/city-landing-pages";

export function CityLandingPage({ page }: { page: CityLandingPageData }) {
  const jsonLd = buildCityJsonLd(page);
  const architectureTitleId = `${page.slug}-architecture-title`;
  const localContextTitleId = `${page.slug}-local-context-title`;
  const faqTitleId = `${page.slug}-faq-title`;

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

        <section
          id="home"
          className="overflow-hidden bg-[#D1C4B8] px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3D4E4E]">
                {page.primaryKeyword}
              </p>
              <h1 className="font-editorial mt-6 max-w-3xl text-[2.15rem] font-normal leading-[0.94] tracking-[-0.055em] text-[#253231] min-[360px]:text-[2.7rem] sm:text-[4.25rem] lg:text-[clamp(4rem,6.7vw,6.4rem)]">
                Painting services in <em className="font-normal text-[#012765]">{page.city}, Virginia.</em>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#3D4E4E] sm:text-xl">
                {page.heroSummary}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="#quote">
                  Request a Quote <span aria-hidden="true">→</span>
                </PrimaryButton>
                <SecondaryButton href="#services">
                  Explore Services
                </SecondaryButton>
              </div>
            </div>

            <aside className="border border-[#3D4E4E]/30 bg-[#F5F1E8] p-7 shadow-[10px_10px_0_rgba(37,50,49,0.12)] sm:p-10" aria-label={`${page.city} local project context`}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#012765]">Local project context</p>
              <h2 className="font-editorial mt-5 text-4xl font-normal leading-[1.04] tracking-[-0.04em] text-[#253231] sm:text-5xl">
                Built around the property, not a citywide assumption.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#596563]">
                {page.city} includes older homes, newer residences, multifamily properties, and commercial spaces. PaintSwitch reviews the actual location and scope before confirming the next step.
              </p>
              <p className="mt-8 border-l border-[#A99D91] pl-5 text-sm leading-6 text-[#596563]">
                This page accepts project requests for individual review. It does not guarantee service for every address or ZIP code.
              </p>
            </aside>
          </div>
        </section>

        <TrustBar />

        <section className="bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby={architectureTitleId}>
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#012765]">Local architecture</p>
              <h2 id={architectureTitleId} className="font-editorial mt-5 text-4xl font-normal leading-[1.02] tracking-[-0.04em] text-[#253231] sm:text-5xl lg:text-6xl">
                {page.architectureHeading}
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-7 border-l border-[#A99D91] pl-6 sm:pl-10">
              {page.architectureParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-[#3D4E4E] sm:text-xl sm:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 border-t border-[#A99D91]/60 bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow={`${page.city} painting services`}
                title="Four ways to start a project review"
                description={`PaintSwitch reviews ${page.city} requests across the four approved painting categories. Availability and pricing are confirmed only after the project details are reviewed.`}
              />
              <PrimaryButton href="#quote" className="self-start lg:mb-2">
                Request a Quote
              </PrimaryButton>
            </div>
            <div className="mt-14 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
              {page.services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 border-y border-[#A99D91]/60 bg-[#D1C4B8] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Pricing review"
              title={`What shapes a ${page.city} painting review`}
              description="PaintSwitch does not publish an unsupported citywide price. These are the project details reviewed before pricing can be confirmed."
            />
            <div className="mt-14 overflow-x-auto border-t border-[#3D4E4E]/45">
              <table className="w-full min-w-[42rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#3D4E4E]/45">
                    <th scope="col" className="w-1/3 px-4 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#253231] sm:px-6">
                      Project type
                    </th>
                    <th scope="col" className="px-4 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#253231] sm:px-6">
                      Details reviewed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {page.costFactors.map((row) => (
                    <tr key={row.projectType} className="border-b border-[#3D4E4E]/45 align-top">
                      <th scope="row" className="font-editorial px-4 py-6 text-2xl font-normal text-[#253231] sm:px-6">
                        {row.projectType}
                      </th>
                      <td className="px-4 py-6 leading-7 text-[#3D4E4E] sm:px-6">{row.reviewFactors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-[#253231] px-5 py-20 text-[#F5F1E8] sm:px-8 lg:py-28" aria-labelledby={localContextTitleId}>
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D1C4B8]">Regional project factors</p>
              <h2 id={localContextTitleId} className="font-editorial mt-5 text-4xl font-normal leading-[1.02] tracking-[-0.04em] text-[#F5F1E8] sm:text-5xl lg:text-6xl">
                Local conditions belong in the plan.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D1C4B8]">
                Weather, building condition, access, and property-specific requirements can affect preparation and timing.
              </p>
            </div>
            <ul className="grid border-l border-t border-[#D1C4B8]/30 sm:grid-cols-3">
              {page.regionalFactors.map((factor, index) => (
                <li key={factor.title} className="border-b border-r border-[#D1C4B8]/30 p-7 sm:p-8">
                  <span className="font-editorial text-2xl italic text-[#D1C4B8]">0{index + 1}</span>
                  <h3 className="font-editorial mt-10 text-2xl font-normal text-[#F5F1E8]">{factor.title}</h3>
                  <p className="mt-4 leading-7 text-[#D1C4B8]">{factor.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby={`${page.slug}-areas-title`}>
          <div className="mx-auto grid max-w-7xl border-y border-[#A99D91] lg:grid-cols-[0.66fr_1.34fr]">
            <div className="border-b border-[#A99D91] py-8 lg:border-b-0 lg:border-r lg:py-12 lg:pr-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#012765]">Geographic reference</p>
              <p className="mt-4 text-sm leading-6 text-[#596563]">
                Neighborhood and postal references provide local context only. They are not guaranteed service boundaries.
              </p>
            </div>
            <div className="py-10 lg:pl-16">
              <h2 id={`${page.slug}-areas-title`} className="font-editorial text-4xl font-normal tracking-[-0.04em] text-[#253231] sm:text-5xl">
                {page.city} neighborhoods and ZIP references
              </h2>
              <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {page.neighborhoods.map((neighborhood) => (
                  <li key={neighborhood} className="border-b border-[#A99D91]/70 pb-3 text-[#3D4E4E]">
                    {neighborhood}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm leading-7 text-[#596563]">
                Postal references: {page.postalCodes.join(", ")}. ZIP codes can cross jurisdictional lines and do not confirm PaintSwitch availability for a specific address.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#A99D91]/60 bg-[#D1C4B8] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby={faqTitleId}>
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#012765]">Frequently asked questions</p>
              <h2 id={faqTitleId} className="font-editorial mt-5 text-4xl font-normal leading-[1.02] tracking-[-0.04em] text-[#253231] sm:text-5xl lg:text-6xl">
                Before you request a quote
              </h2>
            </div>
            <div className="border-t border-[#3D4E4E]/45">
              {page.faqs.map((faq) => (
                <article key={faq.question} className="border-b border-[#3D4E4E]/45 py-7">
                  <h3 className="font-editorial text-2xl font-normal tracking-[-0.03em] text-[#253231]">{faq.question}</h3>
                  <p className="mt-4 leading-7 text-[#3D4E4E]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="scroll-mt-24 bg-[#012765] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="text-[#F5F1E8] lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D1C4B8]">Request a quote</p>
              <h2 className="font-editorial mt-5 text-4xl font-normal leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Tell us about your {page.city} painting project.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#F5F1E8]/80">
                Share the property location, service, and project details for individual review. Virginia projects are prioritized for the public beta.
              </p>
              <p className="mt-8 max-w-xl border-l border-[#D1C4B8] pl-5 text-sm leading-6 text-[#D1C4B8]">
                Submitting this form does not confirm service availability, pricing, scheduling, or booking. A PaintSwitch team member will review your request and follow up.
              </p>
            </div>
            <QuoteRequestForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
