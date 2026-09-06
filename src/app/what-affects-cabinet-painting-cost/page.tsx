import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildGuideJsonLd, cabinetCostGuide } from "@/lib/guide-pages";

export const metadata: Metadata = {
  title: cabinetCostGuide.title,
  description: cabinetCostGuide.description,
  keywords: ["cabinet painting cost factors", "how much does it cost to paint kitchen cabinets", "cabinet refinishing cost"],
  alternates: {
    canonical: `https://paintswitch.com/${cabinetCostGuide.slug}`,
  },
};

export default function CabinetCostGuidePage() {
  return (
    <LegalPage
      title={cabinetCostGuide.headline}
      intro="Cabinet painting is quoted differently from walls because every door and drawer is a small furniture-finishing project. These are the factors that determine how much work a kitchen or bathroom actually involves."
      effectiveDate={cabinetCostGuide.publishedDateDisplay}
      eyebrowLabel="Published"
      jsonLd={buildGuideJsonLd(cabinetCostGuide)}
    >
      <section>
        <h2>Door and drawer count</h2>
        <p>
          The number of doors and drawer fronts is the main driver, not the size of the room. Each piece is removed, labeled, cleaned, sanded, primed, and finished on both faces, then reinstalled and adjusted. The cabinet boxes and face frames are finished in place. A galley kitchen with many small doors can involve more pieces than a larger kitchen with fewer, wider ones.
        </p>
      </section>

      <section>
        <h2>Existing finish and condition</h2>
        <p>
          Factory-finished or previously painted cabinets in good shape need cleaning, de-glossing, and a bonding primer. Cabinets with grease buildup, peeling laminate, water damage near the sink, or a failed earlier paint job need more preparation and sometimes repair before they will take a durable finish. Condition is the factor most likely to surprise a homeowner, because much of it is only visible once the doors come off.
        </p>
      </section>

      <section>
        <h2>Wood type and grain</h2>
        <p>
          Smooth woods like maple, birch, and poplar paint cleanly. Open-grain woods like oak show their texture through paint unless the grain is filled first, which is an extra step some homeowners want and others are happy to skip. Thermofoil and laminate doors need specific primers and are not always good candidates, which is part of what a review checks.
        </p>
      </section>

      <section>
        <h2>Color change and finish</h2>
        <p>
          Going from a dark stain to a light paint takes more primer and finish coats than refreshing an already-painted set in a similar shade. The finish itself matters too: a sprayed, factory-style finish is smoother than a brushed one and is usually what people picture when they think of painted cabinets, but it requires more masking and a controlled space to apply.
        </p>
      </section>

      <section>
        <h2>Hardware, hinges, and details</h2>
        <p>
          Swapping hinges or pulls, filling old hardware holes and drilling new ones, adding or removing crown molding, and painting the inside of glass-front or open cabinets each add steps. None are large on their own, but a kitchen with several of them takes noticeably longer than a straight repaint.
        </p>
      </section>

      <section>
        <h2>Where the work is done</h2>
        <p>
          Doors and drawer fronts are typically finished off-site or in a protected area, while boxes are finished in the kitchen with the room masked off. How long the kitchen is out of use, whether appliances need to move, and how the space is protected all factor into the plan and are worth discussing before the project starts.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          {cabinetCostGuide.faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Getting a cabinet quote</h2>
        <p>
          PaintSwitch does not publish a fixed cabinet price because door count, condition, and finish change it for every kitchen. If you would like your cabinets reviewed, visit{" "}
          <a href="/cabinet-painting">Cabinet Painting Services</a> and share the door and drawer count, the current finish, and the color you have in mind.
        </p>
      </section>
    </LegalPage>
  );
}
