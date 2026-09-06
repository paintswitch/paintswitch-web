import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildGuideJsonLd, chevyChaseVillagePaintingGuide } from "@/lib/guide-pages";

export const metadata: Metadata = {
  title: chevyChaseVillagePaintingGuide.title,
  description: chevyChaseVillagePaintingGuide.description,
  keywords: ["Chevy Chase Village painting guide", "Chevy Chase historic home painting", "painters Chevy Chase Village MD"],
  alternates: {
    canonical: `https://paintswitch.com/${chevyChaseVillagePaintingGuide.slug}`,
  },
};

export default function ChevyChaseVillagePaintingGuidePage() {
  return (
    <LegalPage
      title={chevyChaseVillagePaintingGuide.headline}
      intro="Chevy Chase Village's early-1900s housing stock and designated historic district both shape how a painting project should be planned. Here's what local factors are worth understanding first."
      effectiveDate={chevyChaseVillagePaintingGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(chevyChaseVillagePaintingGuide)}
    >
      <section>
        <h2>A streetcar suburb built before 1900</h2>
        <p>
          Chevy Chase Village was platted in 1890 by the Chevy Chase Land Company as one of the original streetcar suburbs of Washington, D.C., and incorporated in 1951. Its roughly 720 homes, many dating to the early 1900s, commonly carry original plaster, older trim profiles, and multiple layers of prior coatings that are worth assessing before assuming a standard repaint timeline.
        </p>
      </section>

      <section>
        <h2>Historic-district exterior review</h2>
        <p>
          Chevy Chase Village includes a designated historic district. Property owners should verify what applies to their specific address before selecting a visible exterior color or finish, since this requirement exists separately from any painting project itself.
        </p>
      </section>

      <section>
        <h2>Humidity and older plaster</h2>
        <p>
          Hot, humid summers and precipitation throughout the year make moisture and surface dryness important checks before exterior work. Combined with the Village&apos;s older plaster and layered coatings, a careful surface assessment tends to matter more here than in newer construction.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          {chevyChaseVillagePaintingGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Starting a Chevy Chase Village project</h2>
        <p>
          If you would like PaintSwitch to review a painting project in Chevy Chase Village, visit{" "}
          <a href={`/${chevyChaseVillagePaintingGuide.citySlug}`}>Painters in Chevy Chase Village, MD</a>.
        </p>
      </section>
    </LegalPage>
  );
}
