import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildGuideJsonLd, exteriorCostGuide } from "@/lib/guide-pages";

export const metadata: Metadata = {
  title: exteriorCostGuide.title,
  description: exteriorCostGuide.description,
  keywords: ["exterior painting cost factors", "how much does it cost to paint a house exterior", "house painting cost"],
  alternates: {
    canonical: `https://paintswitch.com/${exteriorCostGuide.slug}`,
  },
};

export default function ExteriorCostGuidePage() {
  return (
    <LegalPage
      title={exteriorCostGuide.headline}
      intro="Exterior quotes vary more than interior ones because the building, its condition, and the weather all get a vote. These are the factors a painter is weighing when they look at the outside of your home."
      effectiveDate={exteriorCostGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(exteriorCostGuide)}
    >
      <section>
        <h2>Siding material</h2>
        <p>
          Wood clapboard, cedar shingles, fiber cement, stucco, brick, and aluminum each take paint differently. Bare or weathered wood drinks primer, stucco and masonry have texture that uses more material per square foot, and previously painted metal needs specific primers to hold. The material sets both the preparation steps and the products, so it is one of the first things a painter identifies.
        </p>
      </section>

      <section>
        <h2>Surface condition and preparation</h2>
        <p>
          Exterior preparation is usually the largest share of the work. Washing off dirt and mildew, scraping and sanding loose or peeling paint, replacing failed caulk around windows and trim, spot-priming bare wood, and repairing rotted boards all happen before a finish coat goes on. A house that has been maintained on schedule needs far less of this than one where the last coat has chalked, cracked, or peeled, and that difference is often the biggest gap between two quotes.
        </p>
      </section>

      <section>
        <h2>Height and access</h2>
        <p>
          Every story above the first slows the work. Upper walls need ladders or staging, dormers and gables need careful setup, and steep or sloping lots can limit where equipment can go. Two houses with the same wall area can differ substantially in time simply because one is a ranch and the other is a tall colonial on a hillside.
        </p>
      </section>

      <section>
        <h2>Trim, shutters, doors, and details</h2>
        <p>
          Windows, fascia, soffits, porch railings, columns, shutters, and doors are painted by hand and often in a second color, which means separate masking, separate products, and separate passes. A simple house with little trim paints faster than a Victorian or Craftsman with layers of detail, even at the same size.
        </p>
      </section>

      <section>
        <h2>Color change and number of coats</h2>
        <p>
          Staying close to the existing color usually means two finish coats. A dramatic change, especially light over dark or a bold new trim color, can require a full primer coat or an additional finish coat to cover evenly and hold up outdoors.
        </p>
      </section>

      <section>
        <h2>Weather and timing</h2>
        <p>
          Exterior paint needs dry surfaces and a stretch of moderate temperatures to cure properly. In the Washington, D.C. region that generally means spring and fall are the most predictable windows, while midsummer humidity and winter cold can force pauses. Scheduling around a good window is not a cost line on its own, but it affects how long a project takes and whether it can be done in one continuous stretch.
        </p>
      </section>

      <section>
        <h2>Historic-district and association requirements</h2>
        <p>
          Some properties sit within a historic district or a homeowner association with its own rules on exterior colors, finishes, and sometimes work hours. Those requirements are the owner&apos;s to verify, but they can shape product choice and sequencing, so they belong in the conversation early.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          {exteriorCostGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Getting an exterior quote</h2>
        <p>
          PaintSwitch does not publish a citywide price because these factors change it for every building. If you would like your project reviewed, visit{" "}
          <a href="/exterior-painting">Exterior Painting Services</a> and share the siding, condition, and height, and a team member will follow up. For upkeep between projects, see the{" "}
          <a href="/exterior-paint-maintenance-guide">exterior paint maintenance guide</a>.
        </p>
      </section>
    </LegalPage>
  );
}
