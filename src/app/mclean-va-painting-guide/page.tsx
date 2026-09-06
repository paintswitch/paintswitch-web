import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildGuideJsonLd, mcLeanPaintingGuide } from "@/lib/guide-pages";

export const metadata: Metadata = {
  title: mcLeanPaintingGuide.title,
  description: mcLeanPaintingGuide.description,
  keywords: ["McLean VA painting guide", "McLean estate home painting", "painters McLean VA"],
  alternates: {
    canonical: `https://paintswitch.com/${mcLeanPaintingGuide.slug}`,
  },
};

export default function McLeanPaintingGuidePage() {
  return (
    <LegalPage
      title={mcLeanPaintingGuide.headline}
      intro="McLean's mix of estate-style homes, newer construction, and condos near Tysons each bring different painting considerations. Here's what local factors are worth understanding first."
      effectiveDate={mcLeanPaintingGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(mcLeanPaintingGuide)}
    >
      <section>
        <h2>Estate lots and varied siding materials</h2>
        <p>
          McLean is an unincorporated Fairfax County community whose housing spans established single-family neighborhoods with large, estate-style homes, newer construction throughout the area, and townhomes and condominiums nearer Tysons and the Silver Line corridor. Larger lots often mean more exterior surface area and a wider mix of siding and trim materials to account for.
        </p>
      </section>

      <section>
        <h2>HOA and property-specific rules</h2>
        <p>
          Some McLean properties carry homeowner-association or other exterior requirements. Property owners should verify what applies to their address before selecting a visible exterior change, since these rules exist separately from the painting project itself.
        </p>
      </section>

      <section>
        <h2>Humid summers and exterior timing</h2>
        <p>
          McLean&apos;s hot, humid summers and year-round precipitation make moisture and surface dryness important checks before exterior painting. A window of moderate temperature and lower humidity, generally spring or fall, tends to give exterior coatings the best chance to cure as intended.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          {mcLeanPaintingGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Starting a McLean project</h2>
        <p>
          If you would like PaintSwitch to review a painting project in McLean, visit{" "}
          <a href={`/${mcLeanPaintingGuide.citySlug}`}>Painters in McLean, VA</a>.
        </p>
      </section>
    </LegalPage>
  );
}
