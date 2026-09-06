export type CityServiceFaq = {
  question: string;
  answer: string;
};

export type CityServiceCostRow = {
  projectType: string;
  reviewFactors: string;
};

export type CityServicePageData = {
  slug: string;
  citySlug: string;
  cityLabel: string;
  serviceSlug: string;
  serviceName: string;
  title: string;
  description: string;
  primaryKeyword: string;
  heroHeading: string;
  heroSummary: string;
  localHeading: string;
  localParagraphs: string[];
  costFactors: CityServiceCostRow[];
  faqs: CityServiceFaq[];
  cityGuideSlug?: string;
  costGuideSlug?: string;
};

export const alexandriaInteriorPage: CityServicePageData = {
  slug: "alexandria-va-interior-painting",
  citySlug: "alexandria-va",
  cityLabel: "Alexandria, VA",
  serviceSlug: "interior-painting",
  serviceName: "Interior Painting",
  title: "Interior Painting in Alexandria, VA | PaintSwitch",
  description:
    "Interior painting in Alexandria, VA. Call (571) 565-9491 or request a reviewed quote from PaintSwitch for walls, ceilings, trim, and doors.",
  primaryKeyword: "Interior Painting Alexandria VA",
  heroHeading: "Interior painting for Alexandria homes.",
  heroSummary:
    "From Old Town rowhouses to Del Ray bungalows and Potomac Yard condos, Alexandria's interiors carry different wall systems and prior coatings. PaintSwitch reviews your rooms and their condition before confirming availability or pricing.",
  localHeading: "Interior painting shaped around Alexandria's housing",
  localParagraphs: [
    "Georgian and Federal-era rowhouses in Old Town often carry original plaster walls and older trim profiles, while streetcar-era homes in Del Ray and Rosemont, and newer condos near Potomac Yard, bring their own mix of drywall, prior coatings, and finish details. The right preparation approach depends on which of these a specific property has, not a citywide assumption.",
    "Occupied Alexandria homes add scheduling and protection needs on top of the wall work itself, from covering furniture and floors to managing paint odor around a household's routine. PaintSwitch reviews these details alongside room type, ceiling height, and repairs before confirming a scope.",
  ],
  costFactors: [
    {
      projectType: "Single-room interior",
      reviewFactors:
        "Room type and dimensions, walls, ceilings, trim, doors, closets, ceiling height, repairs, color changes, and occupied or furniture level.",
    },
    {
      projectType: "Multi-room or full interior",
      reviewFactors:
        "Each room is reviewed separately, along with shared trim, doors, circulation areas, access, protection, repairs, and sequencing.",
    },
  ],
  faqs: [
    {
      question: "Do Old Town homes need different interior prep than newer Alexandria construction?",
      answer:
        "Often, yes. Original plaster and older trim common in Old Town typically need a closer surface assessment than newer drywall in Del Ray or Potomac Yard, which is why PaintSwitch reviews the specific property before scoping a project.",
    },
    {
      question: "Can I get a room-by-room quote instead of a whole-house price?",
      answer:
        "Yes. PaintSwitch reviews interior projects by room, so a single-room repaint and a whole-house project are scoped separately based on their own details.",
    },
    {
      question: "How do I start an interior painting review in Alexandria?",
      answer:
        "Share the rooms, surfaces, and condition using the quote request form below, and a PaintSwitch team member will follow up to review your project.",
    },
  ],
  cityGuideSlug: "alexandria-va-painting-guide",
  costGuideSlug: "what-affects-interior-painting-cost",
};

export const alexandriaExteriorPage: CityServicePageData = {
  slug: "alexandria-va-exterior-painting",
  citySlug: "alexandria-va",
  cityLabel: "Alexandria, VA",
  serviceSlug: "exterior-painting",
  serviceName: "Exterior Painting",
  title: "Exterior Painting in Alexandria, VA | PaintSwitch",
  description:
    "Exterior painting in Alexandria, VA. Call (571) 565-9491 or request a reviewed quote from PaintSwitch for siding, trim, and historic-district homes.",
  primaryKeyword: "Exterior Painting Alexandria VA",
  heroHeading: "Exterior painting for Alexandria properties.",
  heroSummary:
    "Alexandria's exteriors range from Old Town rowhouses within a designated historic district to newer siding in Potomac Yard. PaintSwitch reviews the building, substrate, and any applicable exterior requirements before confirming availability or pricing.",
  localHeading: "Exterior painting shaped around Alexandria's buildings",
  localParagraphs: [
    "Attached rowhouse construction common in Old Town and Old Town North can mean shared party walls and limited side access, which affects how exterior work is staged. Some of these properties also sit within a designated historic district, so exterior-color and finish requirements should be verified for the specific address before work is scoped.",
    "Alexandria's humid summers and year-round precipitation make moisture and surface dryness important checks before exterior painting begins, and existing damage from cold-weather cycling in wood or masonry should be evaluated before new coatings are applied over it.",
  ],
  costFactors: [
    {
      projectType: "Exterior painting",
      reviewFactors:
        "Building height, surface material and condition, access, preparation needs, moisture, repairs, exterior requirements, and an appropriate weather window.",
    },
  ],
  faqs: [
    {
      question: "Does Old Town's historic district affect my exterior project?",
      answer:
        "Properties within a designated historic district may be subject to exterior-change review. Verify the specific rules for your address before selecting a visible exterior color, and share that context when requesting a review.",
    },
    {
      question: "What time of year is best for exterior painting in Alexandria?",
      answer:
        "A window of moderate temperature and lower humidity generally cures exterior paint best, which in this region tends to favor spring and fall over peak summer humidity or winter cold.",
    },
    {
      question: "How do I start an exterior painting review in Alexandria?",
      answer:
        "Share your property's siding material, condition, and any historic-district context using the quote request form below, and a PaintSwitch team member will follow up.",
    },
  ],
  cityGuideSlug: "alexandria-va-painting-guide",
  costGuideSlug: "what-affects-exterior-painting-cost",
};

export const alexandriaCabinetPage: CityServicePageData = {
  slug: "alexandria-va-cabinet-painting",
  citySlug: "alexandria-va",
  cityLabel: "Alexandria, VA",
  serviceSlug: "cabinet-painting",
  serviceName: "Cabinet Painting",
  title: "Cabinet Painting in Alexandria, VA | PaintSwitch",
  description:
    "Cabinet painting in Alexandria, VA. Call (571) 565-9491 or request a reviewed quote from PaintSwitch for kitchen and bathroom cabinets.",
  primaryKeyword: "Cabinet Painting Alexandria VA",
  heroHeading: "Cabinet painting for Alexandria kitchens.",
  heroSummary:
    "Cabinet projects in Alexandria are reviewed around door and drawer count, existing finish, condition, and access, whether the kitchen is in an Old Town rowhouse or a newer Potomac Yard condo. PaintSwitch uses that information to determine the appropriate next step.",
  localHeading: "Cabinet painting for Alexandria homes",
  localParagraphs: [
    "Older Alexandria kitchens, particularly in Old Town and Del Ray homes, can carry cabinets with years of prior coatings or stained wood that needs degreasing and priming before new paint is applied. Newer construction near Potomac Yard more often has factory-finished or laminate cabinets, which call for a different preparation approach.",
    "Occupied kitchens add scheduling considerations regardless of neighborhood, since dust containment and access around daily cooking use factor into how a project is planned and sequenced.",
  ],
  costFactors: [
    {
      projectType: "Kitchen cabinet painting",
      reviewFactors:
        "Door and drawer count, existing coating and condition, hardware, access, preparation, color change, and site setup.",
    },
  ],
  faqs: [
    {
      question: "Can you paint cabinets in an older Alexandria home?",
      answer:
        "Yes. Older cabinets with layered prior coatings or stained wood are reviewed for the appropriate degreasing, sanding, and priming approach before new paint is applied.",
    },
    {
      question: "Do you paint laminate cabinets common in newer construction?",
      answer:
        "The existing finish, including laminate, is reviewed to confirm the right preparation and product approach for your specific cabinets.",
    },
    {
      question: "How do I start a cabinet painting review in Alexandria?",
      answer:
        "Share your door and drawer count, current finish, and desired color using the quote request form below, and a PaintSwitch team member will follow up.",
    },
  ],
  cityGuideSlug: "alexandria-va-painting-guide",
  costGuideSlug: "what-affects-cabinet-painting-cost",
};

export const alexandriaCommercialPage: CityServicePageData = {
  slug: "alexandria-va-commercial-painting",
  citySlug: "alexandria-va",
  cityLabel: "Alexandria, VA",
  serviceSlug: "commercial-painting",
  serviceName: "Commercial Painting",
  title: "Commercial Painting in Alexandria, VA | PaintSwitch",
  description:
    "Commercial painting in Alexandria, VA. Call (571) 565-9491 or request a reviewed quote from PaintSwitch for offices, retail, and common areas.",
  primaryKeyword: "Commercial Painting Alexandria VA",
  heroHeading: "Commercial painting for Alexandria businesses.",
  heroSummary:
    "Commercial requests in Alexandria can include offices, retail spaces, multifamily common areas, and other business interiors or exteriors. PaintSwitch reviews the site, surfaces, access, and operating constraints before confirming availability or pricing.",
  localHeading: "Commercial painting across Alexandria's business districts",
  localParagraphs: [
    "Alexandria's commercial mix spans Old Town retail storefronts, office space along the Potomac Yard and Eisenhower Avenue corridors, and multifamily common areas in communities like Parkfairfax. Each brings its own scheduling logic, from historic-district exterior review for Old Town storefronts to tenant coordination in multifamily buildings.",
    "Business hours, occupancy, and site-specific access requirements all factor into when and how a commercial project can proceed, and phased or after-hours scheduling is often part of limiting disruption to daily operations.",
  ],
  costFactors: [],
  faqs: [
    {
      question: "Do you paint retail storefronts in Old Town Alexandria?",
      answer:
        "Yes. Storefront and retail interiors are reviewed on request, including any historic-district exterior requirements that may apply to the specific address.",
    },
    {
      question: "Can commercial work be scheduled after business hours?",
      answer:
        "Scheduling, including after-hours or phased options, is reviewed and coordinated based on your property and operations.",
    },
    {
      question: "How do I start a commercial painting review in Alexandria?",
      answer:
        "Share your site, surfaces, access, and operating constraints using the quote request form below, and a PaintSwitch team member will follow up.",
    },
  ],
  cityGuideSlug: "alexandria-va-painting-guide",
};

export const arlingtonInteriorPage: CityServicePageData = {
  slug: "arlington-va-interior-painting",
  citySlug: "arlington-va",
  cityLabel: "Arlington, VA",
  serviceSlug: "interior-painting",
  serviceName: "Interior Painting",
  title: "Interior Painting in Arlington, VA | PaintSwitch",
  description:
    "Interior painting in Arlington, VA. Call (571) 565-9491 or request a reviewed quote from PaintSwitch for walls, ceilings, trim, and doors.",
  primaryKeyword: "Interior Painting Arlington VA",
  heroHeading: "Interior painting for Arlington homes and condos.",
  heroSummary:
    "From early foursquares in Cherrydale to condo interiors along the Rosslyn-Ballston corridor, Arlington's housing calls for different interior approaches. PaintSwitch reviews your rooms and building type before confirming availability or pricing.",
  localHeading: "Interior painting shaped around Arlington's housing",
  localParagraphs: [
    "Early foursquares and bungalows in Maywood and Cherrydale often carry original plaster and older trim, brick garden apartments in Buckingham and Lyon Park bring their own surface history, and newer condo buildings along the Rosslyn-Ballston corridor typically have drywall with different common-property access rules. The right approach depends on the specific unit or property.",
    "Occupied homes and condos add scheduling and protection considerations on top of the wall work itself, and building-specific access rules for condos and managed properties are reviewed alongside room details before a project is scoped.",
  ],
  costFactors: [
    {
      projectType: "Single-room interior",
      reviewFactors:
        "Room type and dimensions, walls, ceilings, trim, doors, closets, ceiling height, repairs, color changes, and occupied or furniture level.",
    },
    {
      projectType: "Multi-room or full interior",
      reviewFactors:
        "Room-by-room scope, shared trim and doors, access, protection, repairs, occupied-space needs, and project sequencing.",
    },
  ],
  faqs: [
    {
      question: "Do condo interiors need a different review than a Cherrydale bungalow?",
      answer:
        "Often, yes. Condo buildings can have their own access rules and typically have drywall rather than older plaster, so each property is reviewed on its own details rather than a single citywide approach.",
    },
    {
      question: "Can I get a room-by-room quote instead of a whole-unit price?",
      answer:
        "Yes. PaintSwitch reviews interior projects by room, so a single-room repaint and a whole-home or whole-unit project are scoped separately.",
    },
    {
      question: "How do I start an interior painting review in Arlington?",
      answer:
        "Share the rooms, surfaces, and condition using the quote request form below, and a PaintSwitch team member will follow up to review your project.",
    },
  ],
  cityGuideSlug: "arlington-va-painting-guide",
  costGuideSlug: "what-affects-interior-painting-cost",
};

export const arlingtonExteriorPage: CityServicePageData = {
  slug: "arlington-va-exterior-painting",
  citySlug: "arlington-va",
  cityLabel: "Arlington, VA",
  serviceSlug: "exterior-painting",
  serviceName: "Exterior Painting",
  title: "Exterior Painting in Arlington, VA | PaintSwitch",
  description:
    "Exterior painting in Arlington, VA. Call (571) 565-9491 or request a reviewed quote from PaintSwitch for siding, trim, and managed buildings.",
  primaryKeyword: "Exterior Painting Arlington VA",
  heroHeading: "Exterior painting for Arlington properties.",
  heroSummary:
    "Arlington's exteriors range from Cape Cod and Colonial Revival homes to brick garden apartments and managed condo buildings. PaintSwitch reviews the building, substrate, and any applicable exterior requirements before confirming availability or pricing.",
  localHeading: "Exterior painting shaped around Arlington's buildings",
  localParagraphs: [
    "Managed properties and condo or garden-apartment buildings in areas like Buckingham and Lyon Park can carry their own exterior-color and access requirements, separate from any citywide standard, and historic districts add another layer of review in some parts of the county. Verifying what applies to a specific building is worth doing before selecting visible exterior work.",
    "Northern Virginia's humid summers and year-round precipitation make moisture and surface dryness important checks before exterior painting, and winter temperature cycling can affect wood, trim, and masonry that already has water damage.",
  ],
  costFactors: [
    {
      projectType: "Exterior painting",
      reviewFactors:
        "Building type and height, substrate and condition, access, preparation, moisture, repairs, exterior requirements, and a suitable weather window.",
    },
  ],
  faqs: [
    {
      question: "Do managed buildings in Arlington have their own exterior rules?",
      answer:
        "Many do. Condo and garden-apartment buildings, and some individual homeowner associations, can set requirements for exterior color or access separate from any citywide rule.",
    },
    {
      question: "What time of year is best for exterior painting in Arlington?",
      answer:
        "A window of moderate temperature and lower humidity generally cures exterior paint best, which in this region tends to favor spring and fall over peak summer humidity or winter cold.",
    },
    {
      question: "How do I start an exterior painting review in Arlington?",
      answer:
        "Share your property's siding material, condition, and any building-specific requirements using the quote request form below, and a PaintSwitch team member will follow up.",
    },
  ],
  cityGuideSlug: "arlington-va-painting-guide",
  costGuideSlug: "what-affects-exterior-painting-cost",
};

export const arlingtonCabinetPage: CityServicePageData = {
  slug: "arlington-va-cabinet-painting",
  citySlug: "arlington-va",
  cityLabel: "Arlington, VA",
  serviceSlug: "cabinet-painting",
  serviceName: "Cabinet Painting",
  title: "Cabinet Painting in Arlington, VA | PaintSwitch",
  description:
    "Cabinet painting in Arlington, VA. Call (571) 565-9491 or request a reviewed quote from PaintSwitch for kitchen and bathroom cabinets.",
  primaryKeyword: "Cabinet Painting Arlington VA",
  heroHeading: "Cabinet painting for Arlington kitchens.",
  heroSummary:
    "Cabinet projects in Arlington are reviewed around door and drawer count, existing finish, condition, and access, whether the kitchen is in a Cherrydale bungalow or a Rosslyn-Ballston condo. PaintSwitch uses that information to determine the appropriate next step.",
  localHeading: "Cabinet painting for Arlington homes",
  localParagraphs: [
    "Older Arlington homes in neighborhoods like Cherrydale and Westover can have cabinets with years of prior coatings or stained wood, while newer condo kitchens along the Rosslyn-Ballston corridor more often have factory-finished or laminate cabinets that call for a different preparation approach.",
    "Occupied kitchens add scheduling considerations regardless of building type, since dust containment and access around daily cooking use factor into how a project is planned.",
  ],
  costFactors: [
    {
      projectType: "Kitchen cabinet painting",
      reviewFactors:
        "Door and drawer count, current finish and condition, hardware, access, preparation, color change, and site setup.",
    },
  ],
  faqs: [
    {
      question: "Can you paint cabinets in an older Arlington home?",
      answer:
        "Yes. Older cabinets with layered prior coatings or stained wood are reviewed for the appropriate degreasing, sanding, and priming approach before new paint is applied.",
    },
    {
      question: "Do you paint laminate cabinets common in newer condos?",
      answer:
        "The existing finish, including laminate, is reviewed to confirm the right preparation and product approach for your specific cabinets.",
    },
    {
      question: "How do I start a cabinet painting review in Arlington?",
      answer:
        "Share your door and drawer count, current finish, and desired color using the quote request form below, and a PaintSwitch team member will follow up.",
    },
  ],
  cityGuideSlug: "arlington-va-painting-guide",
  costGuideSlug: "what-affects-cabinet-painting-cost",
};

export const arlingtonCommercialPage: CityServicePageData = {
  slug: "arlington-va-commercial-painting",
  citySlug: "arlington-va",
  cityLabel: "Arlington, VA",
  serviceSlug: "commercial-painting",
  serviceName: "Commercial Painting",
  title: "Commercial Painting in Arlington, VA | PaintSwitch",
  description:
    "Commercial painting in Arlington, VA. Call (571) 565-9491 or request a reviewed quote from PaintSwitch for offices, retail, and common areas.",
  primaryKeyword: "Commercial Painting Arlington VA",
  heroHeading: "Commercial painting for Arlington businesses.",
  heroSummary:
    "PaintSwitch accepts consultation requests for Arlington offices, retail spaces, multifamily common areas, and other commercial properties. Share the site, surfaces, access, and operating needs so the project can be reviewed accurately.",
  localHeading: "Commercial painting across Arlington's business districts",
  localParagraphs: [
    "Arlington's commercial mix spans office towers and retail along the Rosslyn-Ballston corridor and Columbia Pike, and multifamily common areas in garden-apartment communities like Buckingham. Each brings its own scheduling logic, from building-management coordination in office towers to tenant notification in multifamily common areas.",
    "Business hours, occupancy, and site-specific access requirements all factor into when and how a commercial project can proceed, and phased or after-hours scheduling is often part of limiting disruption to daily operations.",
  ],
  costFactors: [],
  faqs: [
    {
      question: "Do you paint office space along the Rosslyn-Ballston corridor?",
      answer:
        "Yes. Office and retail interiors are reviewed on request, including building-management coordination where applicable.",
    },
    {
      question: "Can commercial work be scheduled after business hours?",
      answer:
        "Scheduling, including after-hours or phased options, is reviewed and coordinated based on your property and operations.",
    },
    {
      question: "How do I start a commercial painting review in Arlington?",
      answer:
        "Share your site, surfaces, access, and operating constraints using the quote request form below, and a PaintSwitch team member will follow up.",
    },
  ],
  cityGuideSlug: "arlington-va-painting-guide",
};

export const cityServicePages: readonly CityServicePageData[] = [
  alexandriaInteriorPage,
  alexandriaExteriorPage,
  alexandriaCabinetPage,
  alexandriaCommercialPage,
  arlingtonInteriorPage,
  arlingtonExteriorPage,
  arlingtonCabinetPage,
  arlingtonCommercialPage,
];

export function buildCityServiceJsonLd(page: CityServicePageData) {
  const url = `https://paintswitch.com/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#painting-service`,
        name: `${page.serviceName} in ${page.cityLabel}`,
        serviceType: page.serviceName,
        description: page.description,
        url,
        provider: {
          "@type": "Organization",
          "@id": "https://paintswitch.com/#organization",
          name: "PaintSwitch",
          url: "https://paintswitch.com",
          telephone: "+15715659491",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: page.faqs.map((faq) => ({
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
