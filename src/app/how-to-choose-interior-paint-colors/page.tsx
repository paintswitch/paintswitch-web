import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildGuideJsonLd, interiorColorGuide } from "@/lib/guide-pages";

export const metadata: Metadata = {
  title: interiorColorGuide.title,
  description: interiorColorGuide.description,
  keywords: ["how to choose interior paint colors", "interior paint color guide", "choosing paint sheen"],
  alternates: {
    canonical: `https://paintswitch.com/${interiorColorGuide.slug}`,
  },
};

export default function InteriorColorGuidePage() {
  return (
    <LegalPage
      title={interiorColorGuide.headline}
      intro="Color decisions get easier once you know what to test for. Here's what to consider before picking a color for any room."
      effectiveDate={interiorColorGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(interiorColorGuide)}
    >
      <section>
        <h2>Start with light, not the color chip</h2>
        <p>
          Natural light changes throughout the day, and a north-facing room reads differently than a south-facing one. Artificial lighting matters too: warm-toned bulbs shift colors one direction, cool-toned bulbs shift them another. A chip under store lighting can look noticeably different once it is on your wall at home.
        </p>
      </section>

      <section>
        <h2>Look for the undertone before you commit</h2>
        <p>
          Many colors described as &quot;neutral&quot; carry a hidden undertone, green, pink, gray, or blue, that only becomes obvious once the paint is next to your trim, flooring, or furniture. Holding a sample against the other surfaces already in the room is the most reliable way to spot an undertone before it becomes a surprise.
        </p>
      </section>

      <section>
        <h2>Test a large enough sample</h2>
        <p>
          A small paint chip is a starting point, not a decision. Painting a larger swatch, or a sample board you can move around the room, gives a much more accurate sense of a color than a chip ever will. Viewing that sample at different times of day, and on more than one wall, catches shifts a quick glance would miss.
        </p>
      </section>

      <section>
        <h2>Match sheen to the room</h2>
        <p>
          Sheen affects both how light bounces off a wall and how easy a surface is to clean. Kitchens and bathrooms typically call for a more washable finish, while flatter finishes suit bedrooms and formal living spaces where durability matters less than a soft, even look. Sheen also affects how visible small imperfections in the wall are, since higher-sheen finishes reflect more light.
        </p>
      </section>

      <section>
        <h2>Think about flow between rooms</h2>
        <p>
          Open sightlines mean colors in adjacent rooms are often seen together, not in isolation. Rooms next to each other do not need to match exactly, but a strong contrast right at a doorway can feel abrupt. Considering the view from one room into the next helps a color plan feel intentional rather than accidental.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          {interiorColorGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Starting an interior project</h2>
        <p>
          If you would like PaintSwitch to review an interior painting project, including color and sheen guidance for each room, visit{" "}
          <a href="/interior-painting">Interior Painting Services</a>.
        </p>
      </section>
    </LegalPage>
  );
}
