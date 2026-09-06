import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { arlingtonPaintingGuide, buildGuideJsonLd } from "@/lib/guide-pages";

export const metadata: Metadata = {
  title: arlingtonPaintingGuide.title,
  description: arlingtonPaintingGuide.description,
  keywords: ["Arlington VA painting guide", "Arlington condo painting", "painters Arlington VA"],
  alternates: {
    canonical: `https://paintswitch.com/${arlingtonPaintingGuide.slug}`,
  },
};

export default function ArlingtonPaintingGuidePage() {
  return (
    <LegalPage
      title={arlingtonPaintingGuide.headline}
      intro="Arlington's housing spans early-1900s bungalows, brick garden apartments, and newer high-rise condos, and each type calls for a different painting approach. Here's what's worth understanding first."
      effectiveDate={arlingtonPaintingGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(arlingtonPaintingGuide)}
    >
      <section>
        <h2>A county of many housing eras</h2>
        <p>
          Arlington&apos;s housing ranges from early foursquares and bungalows in Maywood and Cherrydale to Cape Cod and Colonial Revival homes, brick garden apartments in Buckingham and Lyon Park, and newer condo buildings along the Rosslyn-Ballston corridor. An older bungalow&apos;s original plaster and trim behave differently during prep than a condo&apos;s drywall, so the right approach depends on the specific property, not the neighborhood alone.
        </p>
      </section>

      <section>
        <h2>Common-property and managed-building rules</h2>
        <p>
          Condo and garden-apartment buildings often have their own rules around exterior color, access, and work hours, separate from any citywide standard. Historic districts can add another layer of review. Checking what applies to a specific building before planning visible exterior work avoids surprises later.
        </p>
      </section>

      <section>
        <h2>Weather-driven timing for exterior work</h2>
        <p>
          Northern Virginia&apos;s humid summers and year-round precipitation make moisture and surface dryness important checks before exterior painting. Winter temperature cycling can also affect wood, trim, and masonry that already has water damage, so understanding existing condition matters as much as picking a calendar date.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          {arlingtonPaintingGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Starting an Arlington project</h2>
        <p>
          If you would like PaintSwitch to review a painting project in Arlington, visit{" "}
          <a href={`/${arlingtonPaintingGuide.citySlug}`}>Painters in Arlington, VA</a>.
        </p>
      </section>
    </LegalPage>
  );
}
