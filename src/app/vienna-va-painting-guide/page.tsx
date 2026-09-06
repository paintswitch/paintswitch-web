import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildGuideJsonLd, viennaPaintingGuide } from "@/lib/guide-pages";

export const metadata: Metadata = {
  title: viennaPaintingGuide.title,
  description: viennaPaintingGuide.description,
  keywords: ["Vienna VA painting guide", "Vienna historic home painting", "painters Vienna VA"],
  alternates: {
    canonical: `https://paintswitch.com/${viennaPaintingGuide.slug}`,
  },
};

export default function ViennaPaintingGuidePage() {
  return (
    <LegalPage
      title={viennaPaintingGuide.headline}
      intro="Vienna's mix of historic homes near Windover Heights, mid-century houses, and semi-rural lots near Wolf Trap each bring different painting considerations. Here's what local factors are worth understanding first."
      effectiveDate={viennaPaintingGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(viennaPaintingGuide)}
    >
      <section>
        <h2>From Ayr Hill to a rail town</h2>
        <p>
          Vienna traces to a late-1760s tobacco plantation called Ayr Hill, and grew into a town by the mid-1850s with the arrival of a rail line, later taking the name Vienna. That layered history means a wide range of construction eras exist within a fairly small area.
        </p>
      </section>

      <section>
        <h2>Windover Heights and historic surface conditions</h2>
        <p>
          The Windover Heights Historic District preserves homes from Vienna&apos;s earlier era, and homes near it or in other older sections of town can carry original plaster, layered prior coatings, and age-related surface conditions worth reviewing before new coatings are applied. Some of these properties also carry exterior-change requirements worth verifying first.
        </p>
      </section>

      <section>
        <h2>Semi-rural lots near Wolf Trap</h2>
        <p>
          The surrounding town and nearby Wolf Trap area mix mid-century houses with larger, semi-rural lots and newer construction. Larger properties can mean more exterior surface area and access considerations that affect preparation time.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          {viennaPaintingGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Starting a Vienna project</h2>
        <p>
          If you would like PaintSwitch to review a painting project in Vienna, visit{" "}
          <a href={`/${viennaPaintingGuide.citySlug}`}>Painters in Vienna, VA</a>.
        </p>
      </section>
    </LegalPage>
  );
}
