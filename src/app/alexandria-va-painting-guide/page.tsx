import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { alexandriaPaintingGuide, buildGuideJsonLd } from "@/lib/guide-pages";

export const metadata: Metadata = {
  title: alexandriaPaintingGuide.title,
  description: alexandriaPaintingGuide.description,
  keywords: ["Alexandria VA painting guide", "Alexandria historic home painting", "painters Alexandria VA"],
  alternates: {
    canonical: `https://paintswitch.com/${alexandriaPaintingGuide.slug}`,
  },
};

export default function AlexandriaPaintingGuidePage() {
  return (
    <LegalPage
      title={alexandriaPaintingGuide.headline}
      intro="Alexandria's mix of historic rowhouses, mid-century homes, and newer construction each bring different painting considerations. Here's what local factors are worth understanding first."
      effectiveDate={alexandriaPaintingGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(alexandriaPaintingGuide)}
    >
      <section>
        <h2>Older homes bring older materials</h2>
        <p>
          Many Alexandria neighborhoods, including Old Town and Old Town North, are built around older construction with original plaster walls, older trim profiles, and multiple layers of prior paint. That combination behaves differently during preparation than newer drywall, and surface condition is worth assessing before assuming a standard repaint timeline.
        </p>
      </section>

      <section>
        <h2>Humidity and the Mid-Atlantic paint season</h2>
        <p>
          The Washington, D.C. region&apos;s summer humidity and winter cold both work against proper exterior paint cure times. A moderate-temperature, lower-humidity window, generally spring or fall, gives exterior paint the best chance to cure as intended, though the right timing for a specific property still depends on its exposure and condition.
        </p>
      </section>

      <section>
        <h2>Historic-district exterior review</h2>
        <p>
          Some Alexandria properties, particularly within Old Town, sit inside a designated historic district with its own rules for exterior changes. Property owners should verify what applies to their specific address before selecting a visible exterior color or finish, since these requirements exist separately from any painting project.
        </p>
      </section>

      <section>
        <h2>Rowhouses, party walls, and access</h2>
        <p>
          Attached rowhouse construction common in parts of Alexandria can mean limited side access and shared party walls, which affects how exterior work is staged and prepared. Reviewing access and adjacent-property considerations up front helps avoid surprises once a project is underway.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          {alexandriaPaintingGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Starting an Alexandria project</h2>
        <p>
          If you would like PaintSwitch to review a painting project in Alexandria, visit{" "}
          <a href={`/${alexandriaPaintingGuide.citySlug}`}>Painters in Alexandria, VA</a>.
        </p>
      </section>
    </LegalPage>
  );
}
