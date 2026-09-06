import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PrimaryButton } from "@/components/buttons";
import { QuoteRequestForm } from "@/components/quote-request-form";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { buildCityServiceJsonLd, type CityServicePageData } from "@/lib/city-service-pages";

export function CityServicePage({ page }: { page: CityServicePageData }) {
  const jsonLd = buildCityServiceJsonLd(page);
  const localTitleId = `${page.slug}-local-title`;
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

        <section id="home" className="overflow-hidden bg-[#D1C4B8] px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3D4E4E]">{page.primaryKeyword}</p>
            <h1 className="font-editorial mt-6 max-w-3xl text-[2.15rem] font-normal leading-[0.94] tracking-[-0.055em] text-[#253231] min-[360px]:text-[2.7rem] sm:text-[4.25rem]">
              {page.heroHeading}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#3D4E4E] sm:text-xl">{page.heroSummary}</p>
            <div className="mt-9">
              <PrimaryButton href="#quote">
                Request a Quote <span aria-hidden="true">&rarr;</span>
              </PrimaryButton>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby={localTitleId}>
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#012765]">Local context</p>
            <h2 id={localTitleId} className="font-editorial mt-5 text-4xl font-normal leading-[1.02] tracking-[-0.04em] text-[#253231] sm:text-5xl">
              {page.localHeading}
            </h2>
            <div className="mt-8 space-y-6">
              {page.localParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-[#3D4E4E]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {page.costFactors.length > 0 && (
          <section className="border-t border-[#A99D91]/60 bg-[#D1C4B8] px-5 py-20 sm:px-8 lg:py-28">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="Pricing review"
                title={`What shapes a ${page.serviceName.toLowerCase()} review in ${page.cityLabel}`}
                description="PaintSwitch does not publish an unsupported price. These are the project details reviewed before pricing can be confirmed."
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
        )}

        <section className="border-t border-[#A99D91]/60 bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby={faqTitleId}>
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#012765]">Frequently asked questions</p>
              <h2 id={faqTitleId} className="font-editorial mt-5 text-4xl font-normal leading-[1.02] tracking-[-0.04em] text-[#253231] sm:text-5xl">
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

        <section className="border-t border-[#A99D91]/60 bg-[#D1C4B8] px-5 py-14 sm:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm leading-6 text-[#3D4E4E]">
              Learn more about <a href={`/${page.citySlug}`} className="font-semibold text-[#012765] underline underline-offset-4">{page.cityLabel} painting services</a>, browse{" "}
              <a href={`/${page.serviceSlug}`} className="font-semibold text-[#012765] underline underline-offset-4">{page.serviceName} services</a> in general,
              {page.cityGuideSlug && (
                <>
                  {" "}read the <a href={`/${page.cityGuideSlug}`} className="font-semibold text-[#012765] underline underline-offset-4">{page.cityLabel} painting guide</a>,
                </>
              )}
              {page.costGuideSlug && (
                <>
                  {" "}or see <a href={`/${page.costGuideSlug}`} className="font-semibold text-[#012765] underline underline-offset-4">what affects {page.serviceName.toLowerCase()} cost</a>.
                </>
              )}
            </p>
          </div>
        </section>

        <section id="quote" className="scroll-mt-24 bg-[#012765] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="text-[#F5F1E8] lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D1C4B8]">Request a quote</p>
              <h2 className="font-editorial mt-5 text-4xl font-normal leading-[1.02] tracking-[-0.04em] sm:text-5xl">
                Tell us about your {page.cityLabel} {page.serviceName.toLowerCase()} project.
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
