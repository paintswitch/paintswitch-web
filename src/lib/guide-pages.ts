export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuidePageMeta = {
  slug: string;
  title: string;
  description: string;
  headline: string;
  publishedDateIso: string;
  publishedDateDisplay: string;
  faqs: GuideFaq[];
};

export const interiorColorGuide: GuidePageMeta = {
  slug: "how-to-choose-interior-paint-colors",
  title: "How to Choose Interior Paint Colors | PaintSwitch",
  description:
    "A practical guide to choosing interior paint colors: lighting, undertones, sample testing, and matching sheen to the room.",
  headline: "How to choose interior paint colors",
  publishedDateIso: "2026-08-22",
  publishedDateDisplay: "August 22, 2026",
  faqs: [
    {
      question: "Do I need to test paint samples on every wall?",
      answer:
        "Not every wall, but testing on at least two walls with different light exposure is more reliable than judging from a single spot.",
    },
    {
      question: "How long should I live with a sample before deciding?",
      answer:
        "Viewing a sample across a full day, morning, afternoon, and evening light, gives a more complete picture than a quick look under one lighting condition.",
    },
    {
      question: "Does sheen change how a color looks?",
      answer:
        "Yes. Sheen affects how light reflects off the surface, which can make the same color look noticeably different depending on the finish.",
    },
  ],
};

export const exteriorMaintenanceGuide: GuidePageMeta = {
  slug: "exterior-paint-maintenance-guide",
  title: "Exterior Paint Maintenance Guide | PaintSwitch",
  description:
    "A guide to maintaining exterior paint: early warning signs, how material and moisture affect wear, and simple upkeep between projects.",
  headline: "Exterior paint maintenance guide",
  publishedDateIso: "2026-08-22",
  publishedDateDisplay: "August 22, 2026",
  faqs: [
    {
      question: "How often does exterior paint need to be redone?",
      answer:
        "This varies by material, sun exposure, and moisture, so timing is better judged by the surface's condition than a fixed number of years.",
    },
    {
      question: "What is chalking and is it a problem?",
      answer:
        "Chalking is a powdery residue that can appear as exterior paint ages. Light chalking is common wear, while heavy or recurring chalking after cleaning can be a sign it is worth a closer look.",
    },
    {
      question: "Does the direction my house faces matter?",
      answer:
        "Yes. South- and west-facing sides typically get more direct sun exposure and tend to show fading or wear sooner than shaded sides.",
    },
  ],
};

export const interiorCostGuide: GuidePageMeta = {
  slug: "what-affects-interior-painting-cost",
  title: "What Affects Interior Painting Cost | PaintSwitch",
  description:
    "What drives an interior painting quote: room size and ceiling height, surface condition and repairs, trim and doors, color changes, and furnished rooms.",
  headline: "What affects the cost of interior painting",
  publishedDateIso: "2026-09-06",
  publishedDateDisplay: "September 6, 2026",
  faqs: [
    {
      question: "Why do two rooms of the same size get different quotes?",
      answer:
        "Because the walls are rarely the same. Ceiling height, the number of doors and windows, the condition of the existing surface, and whether the ceiling and trim are included all change the amount of preparation and painting time involved.",
    },
    {
      question: "Does changing from a dark color to a light one cost more?",
      answer:
        "It usually takes more work. A strong color change typically needs a primer coat or an extra finish coat to cover evenly, which adds material and time compared to repainting in a similar shade.",
    },
    {
      question: "Is it cheaper to paint several rooms at once?",
      answer:
        "Often the per-room effort is lower when rooms are painted together, since setup, protection, and cleanup are shared. The total still depends on each room's surfaces and condition, which is why PaintSwitch reviews the scope before confirming a quote.",
    },
  ],
};

export const exteriorCostGuide: GuidePageMeta = {
  slug: "what-affects-exterior-painting-cost",
  title: "What Affects Exterior Painting Cost | PaintSwitch",
  description:
    "What drives an exterior painting quote: siding material, surface condition and prep, building height and access, trim and details, and weather timing.",
  headline: "What affects the cost of exterior painting",
  publishedDateIso: "2026-09-06",
  publishedDateDisplay: "September 6, 2026",
  faqs: [
    {
      question: "Why is preparation such a large part of an exterior quote?",
      answer:
        "Exterior paint only lasts as long as the surface under it. Washing, scraping loose paint, sanding, caulking, priming bare spots, and repairing damaged wood are what keep a new coat from failing early, and they often take longer than the painting itself.",
    },
    {
      question: "Does a two-story house cost more than the square footage suggests?",
      answer:
        "Usually, yes. Height adds ladder and staging time, slows every step, and can require extra equipment to reach safely, so the same wall area takes longer on an upper story than at ground level.",
    },
    {
      question: "Does the type of siding change the price?",
      answer:
        "Yes. Wood, fiber cement, stucco, brick, and aluminum each absorb paint differently and need different preparation and primers, and heavily textured or weathered surfaces take more material and time to cover.",
    },
  ],
};

export const cabinetCostGuide: GuidePageMeta = {
  slug: "what-affects-cabinet-painting-cost",
  title: "What Affects Cabinet Painting Cost | PaintSwitch",
  description:
    "What drives a cabinet painting quote: door and drawer count, existing finish, wood type and grain, hardware, color change, and where the work is done.",
  headline: "What affects the cost of cabinet painting",
  publishedDateIso: "2026-09-06",
  publishedDateDisplay: "September 6, 2026",
  faqs: [
    {
      question: "Why are cabinets quoted by door and drawer count instead of kitchen size?",
      answer:
        "Because each door and drawer front is prepared, primed, and finished individually on both sides, plus the cabinet boxes and face frames in place. Two kitchens of the same floor area can have very different numbers of pieces.",
    },
    {
      question: "Do oak or other open-grain cabinets cost more to paint?",
      answer:
        "They can. Open-grain woods like oak show texture through paint unless the grain is filled first, which is an extra preparation step compared to smooth maple, birch, or previously painted cabinets.",
    },
    {
      question: "Is painting cabinets cheaper than replacing them?",
      answer:
        "Painting is generally a fraction of the cost of new cabinets because the boxes, doors, and layout stay in place. PaintSwitch reviews the existing cabinets first, since finishing quality depends on their condition.",
    },
  ],
};

export const guidePages = [interiorColorGuide, exteriorMaintenanceGuide, interiorCostGuide, exteriorCostGuide, cabinetCostGuide] as const;

export type CityGuidePageMeta = GuidePageMeta & {
  citySlug: string;
  cityLabel: string;
};

export const alexandriaPaintingGuide: CityGuidePageMeta = {
  slug: "alexandria-va-painting-guide",
  citySlug: "alexandria-va",
  cityLabel: "Alexandria, VA",
  title: "Alexandria, VA Painting Guide | PaintSwitch",
  description:
    "A practical guide for Alexandria, VA homeowners: older-home prep, historic-district exterior review, and seasonal timing in the DC region.",
  headline: "A local painting guide for Alexandria, VA homeowners",
  publishedDateIso: "2026-09-05",
  publishedDateDisplay: "September 5, 2026",
  faqs: [
    {
      question: "Do older Alexandria homes need different prep work than newer construction?",
      answer:
        "Often, yes. Original plaster, multiple layers of prior coatings, and older trim profiles common in Old Town and other established neighborhoods typically need more careful surface assessment than newer drywall construction.",
    },
    {
      question: "When is the best time of year to paint exterior surfaces in Alexandria?",
      answer:
        "Exterior paint generally needs a window of moderate temperature and low humidity to cure properly, which in this region usually favors spring and fall over the height of summer humidity or winter cold.",
    },
    {
      question: "Does Old Town's historic district affect exterior color choices?",
      answer:
        "Properties within a designated historic district may be subject to exterior-change review. Property owners should verify the specific rules that apply to their address before selecting a visible exterior color.",
    },
  ],
};

export const arlingtonPaintingGuide: CityGuidePageMeta = {
  slug: "arlington-va-painting-guide",
  citySlug: "arlington-va",
  cityLabel: "Arlington, VA",
  title: "Arlington, VA Painting Guide | PaintSwitch",
  description:
    "A practical guide for Arlington, VA homeowners: matching prep to housing era, managed-building rules, and weather-driven exterior timing.",
  headline: "A local painting guide for Arlington, VA homeowners",
  publishedDateIso: "2026-09-06",
  publishedDateDisplay: "September 6, 2026",
  faqs: [
    {
      question: "Does the same prep approach work for a Cherrydale bungalow and a Rosslyn condo?",
      answer:
        "Not usually. Early foursquares and bungalows often carry original plaster and older trim, while newer condo buildings typically have drywall and different common-property access rules, so each calls for its own review.",
    },
    {
      question: "Do condo and garden-apartment buildings have their own exterior rules?",
      answer:
        "Many do. Buildings with shared common property, and some individual homeowner associations, can set their own requirements for exterior color or access, separate from any citywide rule.",
    },
    {
      question: "When does Arlington's weather affect exterior painting timing?",
      answer:
        "Humid summers and year-round precipitation mean exterior surfaces need to be dry before application, and winter temperature cycling can affect wood and masonry that already has moisture damage.",
    },
  ],
};

export const chevyChaseVillagePaintingGuide: CityGuidePageMeta = {
  slug: "chevy-chase-village-md-painting-guide",
  citySlug: "chevy-chase-village-md",
  cityLabel: "Chevy Chase Village, MD",
  title: "Chevy Chase Village, MD Painting Guide | PaintSwitch",
  description:
    "A practical guide for Chevy Chase Village, MD homeowners: early-1900s home prep, historic-district exterior review, and seasonal timing.",
  headline: "A local painting guide for Chevy Chase Village, MD homeowners",
  publishedDateIso: "2026-09-06",
  publishedDateDisplay: "September 6, 2026",
  faqs: [
    {
      question: "Why do so many Chevy Chase Village homes need extra prep work?",
      answer:
        "The Village was platted in 1890 and incorporated in 1951, so many of its roughly 720 homes are early-1900s construction with original plaster and multiple layers of prior coatings that benefit from careful assessment.",
    },
    {
      question: "Does the historic district affect what exterior colors are allowed?",
      answer:
        "Chevy Chase Village includes a designated historic district, and properties within it may be subject to exterior-change review. Owners should verify the specific rules for their address before selecting a color.",
    },
    {
      question: "What time of year suits exterior painting in the Village?",
      answer:
        "A window of moderate temperature and lower humidity generally cures exterior paint best, which in this region tends to favor spring and fall over peak summer humidity or winter cold.",
    },
  ],
};

export const mcLeanPaintingGuide: CityGuidePageMeta = {
  slug: "mclean-va-painting-guide",
  citySlug: "mclean-va",
  cityLabel: "McLean, VA",
  title: "McLean, VA Painting Guide | PaintSwitch",
  description:
    "A practical guide for McLean, VA homeowners: estate-lot exterior planning, HOA review, and seasonal timing in the DC region.",
  headline: "A local painting guide for McLean, VA homeowners",
  publishedDateIso: "2026-09-06",
  publishedDateDisplay: "September 6, 2026",
  faqs: [
    {
      question: "Do larger McLean lots take longer to paint?",
      answer:
        "Estate-style homes on larger lots often have more exterior surface area and a wider mix of siding and trim materials, which can affect both preparation time and material selection.",
    },
    {
      question: "Does a homeowner association affect exterior color choices in McLean?",
      answer:
        "Some McLean properties carry homeowner-association or other exterior requirements. Property owners should verify what applies to their address before selecting a visible exterior change.",
    },
    {
      question: "When is exterior paint most likely to cure properly in McLean?",
      answer:
        "A window of moderate temperature and lower humidity works best, which generally favors spring and fall over the height of summer humidity or winter cold in this region.",
    },
  ],
};

export const potomacPaintingGuide: CityGuidePageMeta = {
  slug: "potomac-md-painting-guide",
  citySlug: "potomac-md",
  cityLabel: "Potomac, MD",
  title: "Potomac, MD Painting Guide | PaintSwitch",
  description:
    "A practical guide for Potomac, MD homeowners: wooded and sloping lot access, HOA review, and seasonal exterior-paint timing.",
  headline: "A local painting guide for Potomac, MD homeowners",
  publishedDateIso: "2026-09-06",
  publishedDateDisplay: "September 6, 2026",
  faqs: [
    {
      question: "Do wooded or sloping lots change how an exterior project is planned?",
      answer:
        "Yes. Many Potomac properties sit on wooded or sloping lots, which can affect equipment access, staging, and the overall preparation approach for exterior work.",
    },
    {
      question: "Does a homeowner association affect exterior work in Potomac?",
      answer:
        "Some Potomac properties carry homeowner-association or other exterior requirements. Property owners should verify what applies to their address before selecting a visible exterior change.",
    },
    {
      question: "What time of year is best for exterior painting in Potomac?",
      answer:
        "A window of moderate temperature and lower humidity cures exterior paint best, which in this region tends to favor spring and fall over peak summer humidity or winter cold.",
    },
  ],
};

export const viennaPaintingGuide: CityGuidePageMeta = {
  slug: "vienna-va-painting-guide",
  citySlug: "vienna-va",
  cityLabel: "Vienna, VA",
  title: "Vienna, VA Painting Guide | PaintSwitch",
  description:
    "A practical guide for Vienna, VA homeowners: historic-home prep near Windover Heights, semi-rural lots, and seasonal timing.",
  headline: "A local painting guide for Vienna, VA homeowners",
  publishedDateIso: "2026-09-06",
  publishedDateDisplay: "September 6, 2026",
  faqs: [
    {
      question: "Do homes near Windover Heights need different prep than newer Vienna construction?",
      answer:
        "Often, yes. Homes near the Windover Heights Historic District and other older sections of Vienna can carry original plaster, layered prior coatings, and age-related surface conditions worth reviewing first.",
    },
    {
      question: "Does the historic district affect exterior color choices in Vienna?",
      answer:
        "Some Vienna properties, including those in or near the historic district, carry exterior-change requirements. Property owners should verify the rules that apply before selecting visible exterior work.",
    },
    {
      question: "When does exterior paint cure best in Vienna?",
      answer:
        "A window of moderate temperature and lower humidity works best, which generally favors spring and fall over the height of summer humidity or winter cold in this region.",
    },
  ],
};

export const fairfaxStationPaintingGuide: CityGuidePageMeta = {
  slug: "fairfax-station-va-painting-guide",
  citySlug: "fairfax-station-va",
  cityLabel: "Fairfax Station, VA",
  title: "Fairfax Station, VA Painting Guide | PaintSwitch",
  description:
    "A practical guide for Fairfax Station, VA homeowners: estate and equestrian-property exterior planning, access, and seasonal timing.",
  headline: "A local painting guide for Fairfax Station, VA homeowners",
  publishedDateIso: "2026-09-06",
  publishedDateDisplay: "September 6, 2026",
  faqs: [
    {
      question: "Do wooded or equestrian properties need special exterior planning?",
      answer:
        "Estate-sized homes on wooded or equestrian properties often bring more exterior surface area and site-access considerations, which can affect both preparation time and staging.",
    },
    {
      question: "Does a homeowner association affect exterior work in Fairfax Station?",
      answer:
        "Some Fairfax Station properties carry homeowner-association or other exterior requirements. Property owners should verify what applies to their address before selecting a visible exterior change.",
    },
    {
      question: "What time of year suits exterior painting in Fairfax Station?",
      answer:
        "A window of moderate temperature and lower humidity cures exterior paint best, which in this region tends to favor spring and fall over peak summer humidity or winter cold.",
    },
  ],
};

export const bethesdaPaintingGuide: CityGuidePageMeta = {
  slug: "bethesda-md-painting-guide",
  citySlug: "bethesda-md",
  cityLabel: "Bethesda, MD",
  title: "Bethesda, MD Painting Guide | PaintSwitch",
  description:
    "A practical guide for Bethesda, MD homeowners: 1910s-subdivision home prep, condo and HOA rules, and seasonal exterior timing.",
  headline: "A local painting guide for Bethesda, MD homeowners",
  publishedDateIso: "2026-09-06",
  publishedDateDisplay: "September 6, 2026",
  faqs: [
    {
      question: "Do homes in Bethesda's older subdivisions need different prep?",
      answer:
        "Often, yes. Homes in early-1900s subdivisions such as Edgemoor, Sonoma, and Bradley Hills can carry original plaster, layered prior coatings, and age-related surface conditions worth reviewing first.",
    },
    {
      question: "Do Bethesda condo or HOA buildings have their own exterior rules?",
      answer:
        "Some Bethesda properties, including those managed by a homeowner association or condominium board, carry exterior-change requirements. Property owners should verify the rules that apply before selecting visible exterior work.",
    },
    {
      question: "When is exterior paint most likely to cure properly in Bethesda?",
      answer:
        "A window of moderate temperature and lower humidity works best, which generally favors spring and fall over the height of summer humidity or winter cold in this region.",
    },
  ],
};

export const greatFallsPaintingGuide: CityGuidePageMeta = {
  slug: "great-falls-va-painting-guide",
  citySlug: "great-falls-va",
  cityLabel: "Great Falls, VA",
  title: "Great Falls, VA Painting Guide | PaintSwitch",
  description:
    "A practical guide for Great Falls, VA homeowners: colonial and Federal-style home prep, large-lot exterior planning, and timing.",
  headline: "A local painting guide for Great Falls, VA homeowners",
  publishedDateIso: "2026-09-06",
  publishedDateDisplay: "September 6, 2026",
  faqs: [
    {
      question: "Do Great Falls' older colonial-era homes need special prep?",
      answer:
        "Homes tracing to the 1730s and 1750s, alongside later Federal-inspired construction, can carry original plaster, layered prior coatings, and age-related surface conditions worth assessing before new coatings are applied.",
    },
    {
      question: "Do large, tree-lined lots add to an exterior project?",
      answer:
        "Estate-style homes on large, wooded lots often bring more exterior surface area and site-access considerations, which can affect preparation time and staging.",
    },
    {
      question: "What time of year is best for exterior painting in Great Falls?",
      answer:
        "A window of moderate temperature and lower humidity cures exterior paint best, which in this region tends to favor spring and fall over peak summer humidity or winter cold.",
    },
  ],
};

export const oaktonPaintingGuide: CityGuidePageMeta = {
  slug: "oakton-va-painting-guide",
  citySlug: "oakton-va",
  cityLabel: "Oakton, VA",
  title: "Oakton, VA Painting Guide | PaintSwitch",
  description:
    "A practical guide for Oakton, VA homeowners: 1960s-subdivision home prep, wooded-lot access, and seasonal exterior-paint timing.",
  headline: "A local painting guide for Oakton, VA homeowners",
  publishedDateIso: "2026-09-06",
  publishedDateDisplay: "September 6, 2026",
  faqs: [
    {
      question: "Do homes in Oakton's 1960s subdivisions need different prep than newer construction?",
      answer:
        "Often, yes. Homes in subdivisions such as Waples Mill Manor can carry original wall surfaces and multiple layers of prior coatings that benefit from a closer look than newer drywall construction.",
    },
    {
      question: "Do wooded lots change how an Oakton exterior project is planned?",
      answer:
        "Homes on larger, tree-covered lots often bring more exterior surface area and site-access considerations, which can affect preparation time and staging.",
    },
    {
      question: "When does exterior paint cure best in Oakton?",
      answer:
        "A window of moderate temperature and lower humidity works best, which generally favors spring and fall over the height of summer humidity or winter cold in this region.",
    },
  ],
};

export const cityGuidePages: readonly CityGuidePageMeta[] = [
  alexandriaPaintingGuide,
  arlingtonPaintingGuide,
  chevyChaseVillagePaintingGuide,
  mcLeanPaintingGuide,
  potomacPaintingGuide,
  viennaPaintingGuide,
  fairfaxStationPaintingGuide,
  bethesdaPaintingGuide,
  greatFallsPaintingGuide,
  oaktonPaintingGuide,
];

export function buildGuideJsonLd(meta: GuidePageMeta) {
  const url = `https://paintswitch.com/${meta.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: meta.headline,
        description: meta.description,
        url,
        datePublished: meta.publishedDateIso,
        author: {
          "@type": "Organization",
          "@id": "https://paintswitch.com/#organization",
          name: "PaintSwitch",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://paintswitch.com/#organization",
          name: "PaintSwitch",
          logo: {
            "@type": "ImageObject",
            url: "https://paintswitch.com/images/paintswitch-logo.svg",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: meta.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
