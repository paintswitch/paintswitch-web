import type { Metadata } from "next";
import { buildGuideJsonLd, greatFallsPaintingGuide } from "@/lib/guide-pages";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: greatFallsPaintingGuide.title,
  description: greatFallsPaintingGuide.description,
  keywords: ["Great Falls VA painting guide", "Great Falls estate home painting", "painters Great Falls VA"],
  alternates: {
    canonical: `https://paintswitch.com/${greatFallsPaintingGuide.slug}`,
  },
};

export default function GreatFallsPaintingGuidePage() {
  return (
    <LegalPage
      title={greatFallsPaintingGuide.headline}
      intro="Great Falls ranges from colonial-era homes to Federal-inspired and contemporary estate construction, and each brings different painting considerations. Here's what local factors are worth understanding first."
      effectiveDate={greatFallsPaintingGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(greatFallsPaintingGuide)}
    >
      <section>
        <h2>Colonial roots and Federal-style homes</h2>
        <p>
          Great Falls traces to colonial-era homes dating as far back as the 1730s and 1750s, with later 19th- and early-20th-century buildings such as the Great Falls Grange Hall and Forestville School. Homes from these earlier eras, and later Federal-inspired construction, can carry original plaster and layered prior coatings worth assessing before new work begins.
        </p>
      </section>

      <section>
        <h2>Large, tree-lined lots</h2>
        <p>
          Today&apos;s northern Fairfax County community near the Potomac River mixes that history with contemporary construction on large, tree-lined lots. Estate-style homes on large lots often bring more exterior surface area and site-access considerations, which can affect preparation time and staging.
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
          {greatFallsPaintingGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Starting a Great Falls project</h2>
        <p>
          If you would like PaintSwitch to review a painting project in Great Falls, visit{" "}
          <a href={`/${greatFallsPaintingGuide.citySlug}`}>Painters in Great Falls, VA</a>.
        </p>
      </section>
    </LegalPage>
  );
}
