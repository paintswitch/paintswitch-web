import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildGuideJsonLd, fairfaxStationPaintingGuide } from "@/lib/guide-pages";

export const metadata: Metadata = {
  title: fairfaxStationPaintingGuide.title,
  description: fairfaxStationPaintingGuide.description,
  keywords: ["Fairfax Station VA painting guide", "Fairfax Station estate home painting", "painters Fairfax Station VA"],
  alternates: {
    canonical: `https://paintswitch.com/${fairfaxStationPaintingGuide.slug}`,
  },
};

export default function FairfaxStationPaintingGuidePage() {
  return (
    <LegalPage
      title={fairfaxStationPaintingGuide.headline}
      intro="Fairfax Station's large estate-sized homes, wooded lots, and equestrian properties each bring different exterior painting considerations. Here's what local factors are worth understanding first."
      effectiveDate={fairfaxStationPaintingGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(fairfaxStationPaintingGuide)}
    >
      <section>
        <h2>A railroad-era community grown into estate lots</h2>
        <p>
          Fairfax Station grew around a 19th-century railroad station in western Fairfax County, was briefly renamed Swetnam in 1897, and reverted to Fairfax Station in 1921. Today the community is known for large estate-sized homes on wooded lots near Burke Lake Park, quite different from the compact railroad settlement it began as.
        </p>
      </section>

      <section>
        <h2>Wooded and equestrian properties</h2>
        <p>
          Estate-sized homes on wooded or equestrian properties often bring more exterior surface area and site-access considerations, which can affect both preparation time and staging. Reviewing the specific site before scheduling helps set realistic expectations.
        </p>
      </section>

      <section>
        <h2>Weather and exterior timing</h2>
        <p>
          Hot, humid summers and precipitation throughout the year make moisture and surface dryness worth checking before exterior work. A window of moderate temperature and lower humidity, generally spring or fall, tends to cure exterior coatings best.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          {fairfaxStationPaintingGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Starting a Fairfax Station project</h2>
        <p>
          If you would like PaintSwitch to review a painting project in Fairfax Station, visit{" "}
          <a href={`/${fairfaxStationPaintingGuide.citySlug}`}>Painters in Fairfax Station, VA</a>.
        </p>
      </section>
    </LegalPage>
  );
}
