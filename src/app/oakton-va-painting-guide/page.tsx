import type { Metadata } from "next";
import { buildGuideJsonLd, oaktonPaintingGuide } from "@/lib/guide-pages";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: oaktonPaintingGuide.title,
  description: oaktonPaintingGuide.description,
  keywords: ["Oakton VA painting guide", "Oakton wooded lot painting", "painters Oakton VA"],
  alternates: {
    canonical: `https://paintswitch.com/${oaktonPaintingGuide.slug}`,
  },
};

export default function OaktonPaintingGuidePage() {
  return (
    <LegalPage
      title={oaktonPaintingGuide.headline}
      intro="Oakton's mix of 1960s-70s subdivision homes and newer construction on larger, wooded lots each bring different painting considerations. Here's what local factors are worth understanding first."
      effectiveDate={oaktonPaintingGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(oaktonPaintingGuide)}
    >
      <section>
        <h2>From Flint Hill to a named community</h2>
        <p>
          Oakton took its name in 1883 from a post office built beside a large oak tree, on land previously known as Flint Hill; a trolley station followed in 1905, connecting the area to Washington, D.C. That history predates most of the community&apos;s current housing by decades.
        </p>
      </section>

      <section>
        <h2>1960s subdivisions and newer construction</h2>
        <p>
          Post-World War II suburbanization brought subdivisions such as Waples Mill Manor in the 1960s, and homes from that era can carry original wall surfaces and multiple layers of prior coatings that benefit from a closer look than newer drywall construction nearby.
        </p>
      </section>

      <section>
        <h2>Wooded lots and site access</h2>
        <p>
          Today&apos;s community mixes that housing stock with newer construction on larger, wooded lots. Homes on larger, tree-covered lots often bring more exterior surface area and site-access considerations, which can affect preparation time and staging.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          {oaktonPaintingGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Starting an Oakton project</h2>
        <p>
          If you would like PaintSwitch to review a painting project in Oakton, visit{" "}
          <a href={`/${oaktonPaintingGuide.citySlug}`}>Painters in Oakton, VA</a>.
        </p>
      </section>
    </LegalPage>
  );
}
