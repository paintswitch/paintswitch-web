import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildGuideJsonLd, exteriorMaintenanceGuide } from "@/lib/guide-pages";

export const metadata: Metadata = {
  title: exteriorMaintenanceGuide.title,
  description: exteriorMaintenanceGuide.description,
  keywords: ["exterior paint maintenance", "exterior paint wear signs", "when to repaint exterior"],
  alternates: {
    canonical: `https://paintswitch.com/${exteriorMaintenanceGuide.slug}`,
  },
};

export default function ExteriorMaintenanceGuidePage() {
  return (
    <LegalPage
      title={exteriorMaintenanceGuide.headline}
      intro="Exterior paint wears differently depending on material, sun exposure, and weather. Here's what typically shows up between projects."
      effectiveDate={exteriorMaintenanceGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(exteriorMaintenanceGuide)}
    >
      <section>
        <h2>Watch for early warning signs</h2>
        <p>
          Chalking, a powdery residue that rubs off when you run a hand across the surface, is one of the earliest signs of exterior paint aging. Fading is another, especially on south- and west-facing sides that get more direct sun. Hairline cracking and caulk separating at joints and trim are also worth watching for between projects.
        </p>
      </section>

      <section>
        <h2>Different materials wear differently</h2>
        <p>
          Wood siding is more prone to peeling when moisture gets underneath the paint film. Masonry surfaces like brick and stucco can show efflorescence, a white mineral residue, rather than peeling. Trim is often exposed to more direct water than large siding areas, so it can show wear before the rest of the exterior does.
        </p>
      </section>

      <section>
        <h2>Seasonal moisture is the biggest factor</h2>
        <p>
          Prolonged moisture exposure, gutters draining onto siding, sprinklers hitting the house, or poor drainage near the foundation, tends to accelerate wear in specific spots rather than across the whole exterior. Addressing the moisture source matters as much as the paint itself when a particular area keeps failing faster than the rest.
        </p>
      </section>

      <section>
        <h2>Simple upkeep between projects</h2>
        <p>
          Rinsing dirt and pollen buildup, keeping gutters clear and directed away from siding, and touching up caulking at joints and trim as it separates are all simple steps that help exterior paint hold up longer. Keeping an eye on high-sun-exposure sides makes it easier to catch wear early.
        </p>
      </section>

      <section>
        <h2>When it&apos;s time for a new project</h2>
        <p>
          There is no fixed timeline that applies to every home. Widespread peeling or cracking beyond a small touch-up area, chalking that keeps returning shortly after cleaning, and bare wood showing through are all signs it is worth having the exterior reviewed.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          {exteriorMaintenanceGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Starting an exterior project</h2>
        <p>
          If you would like PaintSwitch to review an exterior painting project, including surface condition and weather-window planning, visit{" "}
          <a href="/exterior-painting">Exterior Painting Services</a>.
        </p>
      </section>
    </LegalPage>
  );
}
