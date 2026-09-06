import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildGuideJsonLd, interiorCostGuide } from "@/lib/guide-pages";

export const metadata: Metadata = {
  title: interiorCostGuide.title,
  description: interiorCostGuide.description,
  keywords: ["interior painting cost factors", "how much does interior painting cost", "cost to paint a room"],
  alternates: {
    canonical: `https://paintswitch.com/${interiorCostGuide.slug}`,
  },
};

export default function InteriorCostGuidePage() {
  return (
    <LegalPage
      title={interiorCostGuide.headline}
      intro="There is no single price per room because no two rooms take the same work. These are the factors that actually move an interior painting quote up or down, so you know what a painter is looking at when they walk through your home."
      effectiveDate={interiorCostGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(interiorCostGuide)}
    >
      <section>
        <h2>Room size and ceiling height</h2>
        <p>
          Wall area is the starting point, and ceiling height changes it more than most people expect. A room with nine- or ten-foot ceilings has noticeably more wall than the same footprint at eight feet, and taller walls also slow the work because every cut line and roller pass happens on a ladder. Vaulted ceilings and open stairwells go further still, since they need staging to reach safely.
        </p>
      </section>

      <section>
        <h2>Surface condition and repairs</h2>
        <p>
          Preparation is where quotes diverge most. Fresh drywall in good shape needs little beyond a light sand and a wipe-down. Older plaster with hairline cracks, nail pops, peeling paint, water stains, or patched holes needs filling, sanding, spot-priming, and sometimes skim-coating before a finish coat will look right. That work is skilled, slow, and invisible once the paint is on, but it is what separates a repaint that looks new from one that shows every flaw.
        </p>
      </section>

      <section>
        <h2>What is included: walls, ceilings, trim, doors</h2>
        <p>
          &quot;Painting the room&quot; can mean walls only, or walls plus ceiling, or walls, ceiling, baseboards, window and door casings, closet interiors, and the doors themselves. Trim and doors are the slowest parts of a room because they are painted by brush with a durable finish, and a room with a lot of millwork can take as long as its walls. Being clear about what is included is the fastest way to get a quote that matches what you expect.
        </p>
      </section>

      <section>
        <h2>Color change and finish</h2>
        <p>
          Repainting a wall in a similar color usually takes two coats. Going from a deep color to a pale one, or covering a strong accent wall, often needs a primer coat first or a third finish coat to cover evenly, adding material and time. Sheen matters too: higher-sheen finishes show surface imperfections more, so they can call for more preparation to look right.
        </p>
      </section>

      <section>
        <h2>Furnished and occupied rooms</h2>
        <p>
          An empty room is the fastest room to paint. Moving and covering furniture, protecting floors and fixtures, working around a family&apos;s schedule, and returning everything afterward all add time. Rooms with built-ins, heavy furniture, or a lot of wall hangings take longer to prepare than the painting itself might suggest.
        </p>
      </section>

      <section>
        <h2>Access and logistics</h2>
        <p>
          Condo buildings with elevator reservations or restricted work hours, homes with narrow stairs, and rooms that must stay usable during the project all affect how the work is sequenced. None of these are unusual, but they are worth mentioning up front so the plan accounts for them.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          {interiorCostGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Getting an interior quote</h2>
        <p>
          PaintSwitch does not publish a citywide price because these factors change it for every home. If you would like your project reviewed, visit{" "}
          <a href="/interior-painting">Interior Painting Services</a> and share the rooms, surfaces, and condition, and a team member will follow up.
        </p>
      </section>
    </LegalPage>
  );
}
