import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildGuideJsonLd, potomacPaintingGuide } from "@/lib/guide-pages";

export const metadata: Metadata = {
  title: potomacPaintingGuide.title,
  description: potomacPaintingGuide.description,
  keywords: ["Potomac MD painting guide", "Potomac wooded lot painting", "painters Potomac MD"],
  alternates: {
    canonical: `https://paintswitch.com/${potomacPaintingGuide.slug}`,
  },
};

export default function PotomacPaintingGuidePage() {
  return (
    <LegalPage
      title={potomacPaintingGuide.headline}
      intro="Potomac's wooded, sloping lots and mix of restored farmhouses and newer construction each bring different painting considerations. Here's what local factors are worth understanding first."
      effectiveDate={potomacPaintingGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(potomacPaintingGuide)}
    >
      <section>
        <h2>From farmland to wooded suburban lots</h2>
        <p>
          Potomac transformed from a rural Montgomery County farming community into a suburban one from the 1950s through the late 20th century. Some neighborhoods, such as Potomac Overlook, reflect an early planned approach that integrated housing into wooded, sloping topography, while restored older farmhouses remain scattered among later suburban development.
        </p>
      </section>

      <section>
        <h2>Sloping sites and equipment access</h2>
        <p>
          Many Potomac properties sit on wooded or sloping lots, which can affect equipment access, staging, and the overall preparation approach for exterior work. Reviewing site access up front helps avoid surprises once a project is underway.
        </p>
      </section>

      <section>
        <h2>HOA rules and humidity</h2>
        <p>
          Some Potomac properties carry homeowner-association or other exterior requirements, and the region&apos;s hot, humid summers make moisture and surface dryness worth checking before exterior work. A window of moderate temperature and lower humidity generally cures paint best.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          {potomacPaintingGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Starting a Potomac project</h2>
        <p>
          If you would like PaintSwitch to review a painting project in Potomac, visit{" "}
          <a href={`/${potomacPaintingGuide.citySlug}`}>Painters in Potomac, MD</a>.
        </p>
      </section>
    </LegalPage>
  );
}
