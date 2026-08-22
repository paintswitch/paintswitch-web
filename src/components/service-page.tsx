import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";
import { QuoteRequestForm } from "@/components/quote-request-form";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { buildServiceJsonLd, servicePages, type ServicePageData } from "@/lib/service-pages";

export function ServicePage({ page }: { page: ServicePageData }) {
  const jsonLd = buildServiceJsonLd(page);
  const scopeTitleId = `${page.slug}-scope-title`;
  const practicalTitleId = `${page.slug}-practical-title`;
  const faqTitleId = `${page.slug}-faq-title`;
  const otherServices = servicePages.filter((service) => service.slug !== page.slug);

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
                {page.heroHeading}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#3D4E4E] sm:text-xl">
                {page.heroSummary}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="#quote">
                  Request a Quote <span aria-hidden="true">→</span>
                </PrimaryButton>
                <SecondaryButton href="#scope">
                  What&apos;s Reviewed
                </SecondaryButton>
              </div>
            </div>

            <aside className="border border-[#3D4E4E]/30 bg-[#F5F1E8] p-7 shadow-[10px_10px_0_rgba(37,50,49,0.12)] sm:p-10" aria-label={`${page.serviceName} project review`}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#012765]">Project review</p>
              <h2 className="font-editorial mt-5 text-4xl font-normal leading-[1.04] tracking-[-0.04em] text-[#253231] sm:text-5xl">
                Built around your project, not a flat rate.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#596563]">
                {page.serviceName} projects vary by surface, condition, and access. PaintSwitch reviews the actual project before confirming the next step.
              </p>
              <p className="mt-8 border-l border-[#A99D91] pl-5 text-sm leading-6 text-[#596563]">
                This page describes typical project scope. It does not guarantee availability, pricing, or a specific approach for your property.
              </p>
            </aside>
          </div>
        </section>

        <TrustBar />

        <section id="scope" className="scroll-mt-24 bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby={scopeTitleId}>
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#012765]">{page.scopeHeading}</p>
              <h2 id={scopeTitleId} className="font-editorial mt-5 text-4xl font-normal leading-[1.02] tracking-[-0.04em] text-[#253231] sm:text-5xl lg:text-6xl">
                {page.serviceName}, planned around the details.
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-7 border-l border-[#A99D91] pl-6 sm:pl-10">
              {page.scopeParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-[#3D4E4E] sm:text-xl sm:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#A99D91]/60 bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow={`${page.serviceName} scope`}
                title="What's part of the review"
                description="PaintSwitch reviews these project elements before confirming availability or pricing."
              />
              <PrimaryButton href="#quote" className="self-start lg:mb-2">
                Request a Quote
              </PrimaryButton>
            </div>
            <ul className="mt-14 grid gap-x-10 gap-y-3 border-t border-[#A99D91]/60 sm:grid-cols-2">
              {page.scopeItems.map((item) => (
                <li key={item.title} className="border-b border-[#A99D91]/60 py-7">
                  <h3 className="font-editorial text-2xl font-normal tracking-[-0.03em] text-[#253231]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#596563]">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 border-y border-[#A99D91]/60 bg-[#D1C4B8] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Pricing review"
              title={`What shapes a ${page.serviceName.toLowerCase()} review`}
              description="PaintSwitch does not publish an unsupported flat price. These are the project details reviewed before pricing can be confirmed."
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

        <section className="bg-[#253231] px-5 py-20 text-[#F5F1E8] sm:px-8 lg:py-28" aria-labelledby={practicalTitleId}>
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D1C4B8]">Practical factors</p>
              <h2 id={practicalTitleId} className="font-editorial mt-5 text-4xl font-normal leading-[1.02] tracking-[-0.04em] text-[#F5F1E8] sm:text-5xl lg:text-6xl">
                {page.practicalFactorsHeading}
              </h2>
            </div>
            <ul className="grid border-l border-t border-[#D1C4B8]/30 sm:grid-cols-3">
              {page.practicalFactors.map((factor, index) => (
                <li key={factor.title} className="border-b border-r border-[#D1C4B8]/30 p-7 sm:p-8">
                  <span aria-hidden="true" className="font-editorial text-2xl italic text-[#D1C4B8]">0{index + 1}</span>
                  <h3 className="font-editorial mt-10 text-2xl font-normal text-[#F5F1E8]">{factor.title}</h3>
                  <p className="mt-4 leading-7 text-[#D1C4B8]">{factor.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Other services"
              title="Explore PaintSwitch's other services"
              description="PaintSwitch reviews requests across four approved painting categories."
            />
            <ul className="mt-14 grid gap-x-8 gap-y-1 border-t border-[#A99D91]/60 sm:grid-cols-3">
              {otherServices.map((service) => (
                <li key={service.slug} className="border-b border-[#A99D91]/60 py-6">
                  <a
                    href={`/${service.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0658FE]"
                  >
                    <span className="font-editorial text-2xl font-normal tracking-[-0.03em] text-[#253231] group-hover:text-[#012765]">
                      {service.serviceName}
                    </span>
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-[#0658FE] transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-6 text-[#596563]">
              Looking for a specific city? Browse <a href="/service-areas" className="text-[#012765] underline underline-offset-2">Service Areas</a>.
            </p>
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
                Tell us about your {page.serviceName.toLowerCase()} project.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#F5F1E8]/80">
                Share the property location, service, and project details for individual review.
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
