import type { Metadata } from "next";
import { bethesdaPaintingGuide, buildGuideJsonLd } from "@/lib/guide-pages";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: bethesdaPaintingGuide.title,
  description: bethesdaPaintingGuide.description,
  keywords: ["Bethesda MD painting guide", "Bethesda historic home painting", "painters Bethesda MD"],
  alternates: {
    canonical: `https://paintswitch.com/${bethesdaPaintingGuide.slug}`,
  },
};

export default function BethesdaPaintingGuidePage() {
  return (
    <LegalPage
      title={bethesdaPaintingGuide.headline}
      intro="Bethesda's mix of early-1900s subdivision homes, mid-century houses, and newer downtown condos each bring different painting considerations. Here's what local factors are worth understanding first."
      effectiveDate={bethesdaPaintingGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(bethesdaPaintingGuide)}
    >
      <section>
        <h2>From rural crossroads to streetcar suburb</h2>
        <p>
          Bethesda began as a 19th-century rural village at the intersection of Rockville Pike and Georgetown Road, and grew into a center of residential subdivisions after an electric railway opened in 1891. That growth left a wide range of construction eras within the same community.
        </p>
      </section>

      <section>
        <h2>1910s subdivisions and older plaster</h2>
        <p>
          Early subdivisions such as Edgemoor, Sonoma, and Bradley Hills date to the 1910s, and homes there can carry original plaster, layered prior coatings, and age-related surface conditions worth reviewing before new coatings are applied.
        </p>
      </section>

      <section>
        <h2>Condo and HOA exterior rules</h2>
        <p>
          Newer downtown condominiums and apartments sit alongside that older housing stock, and some properties, including those managed by a homeowner association or condominium board, carry their own exterior-change requirements worth verifying first.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          {bethesdaPaintingGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Starting a Bethesda project</h2>
        <p>
          If you would like PaintSwitch to review a painting project in Bethesda, visit{" "}
          <a href={`/${bethesdaPaintingGuide.citySlug}`}>Painters in Bethesda, MD</a>.
        </p>
      </section>
    </LegalPage>
  );
}
