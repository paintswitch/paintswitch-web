export type ServiceScopeItem = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceCostFactor = {
  projectType: string;
  reviewFactors: string;
};

export type ServicePracticalFactor = {
  title: string;
  description: string;
};

export type ServicePageData = {
  slug: string;
  serviceName: string;
  title: string;
  description: string;
  primaryKeyword: string;
  heroHeading: string;
  heroSummary: string;
  scopeHeading: string;
  scopeParagraphs: [string, string];
  scopeItems: ServiceScopeItem[];
  costFactors: ServiceCostFactor[];
  practicalFactorsHeading: string;
  practicalFactors: ServicePracticalFactor[];
  faqs: ServiceFaq[];
};

export const interiorPaintingServicePage: ServicePageData = {
  slug: "interior-painting",
  serviceName: "Interior Painting",
  title: "Interior Painting Services | PaintSwitch",
  description:
    "Interior painting for walls, ceilings, trim, doors, and closets. Request a reviewed quote from PaintSwitch to start an interior painting project.",
  primaryKeyword: "Interior Painting Services",
  heroHeading: "Interior painting, reviewed room by room.",
  heroSummary:
    "Interior painting covers walls, ceilings, trim, doors, and closets, and each of those surfaces can carry its own condition, prior coating, and finish requirement. PaintSwitch reviews your rooms and project details before confirming availability or pricing.",
  scopeHeading: "What an interior review looks at",
  scopeParagraphs: [
    "Every interior project starts with the rooms themselves: how many, what type, and how they are used. Wall condition varies by home, from original plaster to drywall that has been painted several times, and that history affects how much preparation a surface needs before new paint is applied.",
    "Occupied homes add scheduling and protection considerations that vacant properties do not: moving or covering furniture, containing dust from sanding and patching, and managing paint odor around a household's daily routine. Sheen selection also differs by room, since kitchens and bathrooms typically call for more washable finishes than bedrooms or formal living spaces.",
  ],
  scopeItems: [
    {
      title: "Walls & ceilings",
      description:
        "Surface condition, prior coatings, texture, and ceiling height are reviewed to scope preparation and the painting approach for each room.",
    },
    {
      title: "Trim, doors & closets",
      description:
        "Trim, doors, and closet interiors can be included alongside wall painting or scoped separately, depending on the project.",
    },
    {
      title: "Repairs & prep",
      description:
        "Nail holes, minor drywall repair, caulking, and sanding are assessed as part of the review so the scope reflects the room's actual condition.",
    },
    {
      title: "Color & sheen guidance",
      description:
        "PaintSwitch discusses appropriate sheens for different rooms, such as more washable finishes for kitchens and baths, before colors are confirmed.",
    },
  ],
  costFactors: [
    {
      projectType: "Single room",
      reviewFactors:
        "Room dimensions, wall condition, trim and door count, ceiling height, existing color, and furniture level.",
    },
    {
      projectType: "Whole-house interior",
      reviewFactors:
        "Number and type of rooms, total surface area, repair needs, occupied condition, and access or scheduling constraints.",
    },
    {
      projectType: "New construction or unpainted drywall",
      reviewFactors:
        "Primer needs, drywall finish level, and full-surface coverage across every room being painted for the first time.",
    },
  ],
  practicalFactorsHeading: "What shapes an interior painting timeline",
  practicalFactors: [
    {
      title: "Occupied vs. vacant",
      description:
        "Furniture moving, protecting floors and belongings, and working around a lived-in schedule all factor into how a project is planned.",
    },
    {
      title: "Surface prep",
      description:
        "Patching, sanding, and caulking needs vary by wall condition and directly affect how much preparation a room requires before painting.",
    },
    {
      title: "Ventilation & odor",
      description:
        "Airflow and timing are considered for occupied spaces, particularly around household members or pets sensitive to paint odor.",
    },
  ],
  faqs: [
    {
      question: "Does interior painting include ceilings?",
      answer:
        "It can. Walls, ceilings, and trim can be scoped together or separately depending on your project, and that scope is confirmed during review.",
    },
    {
      question: "Do I need to move my own furniture?",
      answer:
        "Furniture and access level are part of what PaintSwitch reviews before scheduling, so this is discussed and confirmed with you ahead of time.",
    },
    {
      question: "What if my walls have damage or old wallpaper?",
      answer:
        "Repair and prep needs, including damaged drywall or existing wallpaper, are assessed during review, and the scope of additional prep work is confirmed before painting begins.",
    },
    {
      question: "How do I decide on paint colors and sheens?",
      answer:
        "PaintSwitch discusses appropriate sheens for each room type during consultation. Exact colors and products are confirmed with you before work begins.",
    },
  ],
};

export const exteriorPaintingServicePage: ServicePageData = {
  slug: "exterior-painting",
  serviceName: "Exterior Painting",
  title: "Exterior Painting Services | PaintSwitch",
  description:
    "Exterior painting for siding, trim, doors, and shutters. Request a reviewed quote from PaintSwitch to start an exterior painting project.",
  primaryKeyword: "Exterior Painting Services",
  heroHeading: "Exterior painting, planned around the building.",
  heroSummary:
    "Exterior painting depends on the building itself: siding material and condition, trim and accent details, and how the property can be safely accessed. PaintSwitch reviews these details, along with the weather window, before confirming availability or pricing.",
  scopeHeading: "What an exterior review looks at",
  scopeParagraphs: [
    "Exterior surfaces vary widely, from wood and fiber-cement siding to brick and stucco, and each material carries its own condition history, from peeling and chalking to moisture exposure and prior coatings. Preparation, including scraping, sanding, caulking, and priming any bare wood, is scoped around what the surface actually needs.",
    "Access is also part of the review: a single-story home with ground-level surfaces is a different project than one requiring ladders or lift equipment for higher stories. Weather windows, driven by temperature, humidity, and rain, and any property-specific exterior requirements are considered before a project moves forward.",
  ],
  scopeItems: [
    {
      title: "Siding & trim",
      description:
        "Material type and condition are reviewed to determine the appropriate preparation and painting approach for the exterior surfaces.",
    },
    {
      title: "Doors, shutters & railings",
      description:
        "Exterior doors, shutters, and railings can be scoped alongside siding and trim as part of the same project review.",
    },
    {
      title: "Prep & surface repair",
      description:
        "Scraping, sanding, caulking, and priming bare wood are assessed based on the building's existing condition before painting begins.",
    },
    {
      title: "Weather-window planning",
      description:
        "Temperature, humidity, and forecasted conditions are factored into scheduling to support proper application and drying.",
    },
  ],
  costFactors: [
    {
      projectType: "Single-story exterior",
      reviewFactors:
        "Siding material, surface condition, trim and accent details, and ground-level access.",
    },
    {
      projectType: "Multi-story or higher access",
      reviewFactors:
        "Building height, equipment needs such as ladders or lifts, and safe access planning.",
    },
    {
      projectType: "Detached structures",
      reviewFactors:
        "Sheds, fences, and detached garages reviewed as their own scope alongside or separate from the main structure.",
    },
  ],
  practicalFactorsHeading: "What shapes an exterior painting timeline",
  practicalFactors: [
    {
      title: "Weather windows",
      description:
        "Temperature, humidity, and rain all affect when exterior painting can proceed and how long proper drying takes.",
    },
    {
      title: "Surface condition",
      description:
        "Peeling, chalking, moisture, and prior coatings determine how much preparation a surface needs before new paint is applied.",
    },
    {
      title: "Access & equipment",
      description:
        "Property layout and building height determine whether ladders or lift equipment are needed, which can affect scheduling.",
    },
  ],
  faqs: [
    {
      question: "What time of year can exterior painting happen?",
      answer:
        "Exterior painting is weather-dependent. Timing is reviewed for your project and the current season before scheduling is confirmed.",
    },
    {
      question: "Do you handle surface repairs before painting?",
      answer:
        "Preparation and repair needs, such as scraping, sanding, and caulking, are assessed during review and scoped as part of the project.",
    },
    {
      question: "What if my siding has existing damage?",
      answer:
        "Existing damage is reviewed as part of the consultation and may need repair coordination before painting can proceed.",
    },
    {
      question: "Will you paint shutters, doors, and trim separately?",
      answer:
        "Shutters, doors, and trim can be scoped as part of the same exterior review alongside your siding project.",
    },
  ],
};

export const cabinetPaintingServicePage: ServicePageData = {
  slug: "cabinet-painting",
  serviceName: "Cabinet Painting",
  title: "Cabinet Painting Services | PaintSwitch",
  description:
    "Cabinet painting for kitchens, bathrooms, and built-ins. Request a reviewed quote from PaintSwitch to start a cabinet painting project.",
  primaryKeyword: "Cabinet Painting Services",
  heroHeading: "Cabinet painting, planned around doors and drawers.",
  heroSummary:
    "Cabinet projects are reviewed around door and drawer count, the existing finish, and the desired color change. PaintSwitch uses that project information, along with hardware and access details, to determine the appropriate consultation next step.",
  scopeHeading: "What a cabinet review looks at",
  scopeParagraphs: [
    "The existing finish drives much of the preparation: stained wood, laminate, and previously painted cabinets each require a different approach to degreasing, sanding, and priming before new paint is applied. Doors and drawers are typically removed and labeled during the process to support a consistent, even finish.",
    "Occupied kitchens add their own considerations, including dust containment and scheduling around daily cooking use. Hardware is also part of the review, since existing hinges and pulls can be removed and reinstalled, or updated hardware can be coordinated if requested.",
  ],
  scopeItems: [
    {
      title: "Doors & drawer fronts",
      description:
        "Door and drawer count, along with their existing finish, are reviewed to scope preparation and the painting approach.",
    },
    {
      title: "Frames & face frames",
      description:
        "Cabinet boxes and face frames can be included in the project alongside doors and drawers, depending on the desired result.",
    },
    {
      title: "Hardware handling",
      description:
        "Existing hardware can be removed and reinstalled, or updated hardware can be coordinated with you as part of the project.",
    },
    {
      title: "Prep & priming",
      description:
        "The existing finish, whether stained wood, laminate, or previously painted, determines the degreasing, sanding, and priming approach.",
    },
  ],
  costFactors: [
    {
      projectType: "Kitchen cabinets",
      reviewFactors:
        "Door and drawer count, cabinet box and frame surfaces, existing finish, and hardware.",
    },
    {
      projectType: "Bathroom vanities or built-ins",
      reviewFactors:
        "Smaller door and drawer counts, finish type, and surrounding surfaces reviewed as their own scope.",
    },
    {
      projectType: "Multiple rooms",
      reviewFactors:
        "Combined door and drawer count across kitchens, bathrooms, and other cabinetry in the same project.",
    },
  ],
  practicalFactorsHeading: "What shapes a cabinet painting timeline",
  practicalFactors: [
    {
      title: "Existing finish type",
      description:
        "Stained wood, laminate, and previously painted cabinets each require a different prep approach before new paint is applied.",
    },
    {
      title: "Kitchen downtime",
      description:
        "Occupied kitchens need dust containment and scheduling that works around daily use of the space.",
    },
    {
      title: "Hardware",
      description:
        "Whether existing hardware is reinstalled or updated is reviewed with you as part of the project scope.",
    },
  ],
  faqs: [
    {
      question: "Can you paint laminate cabinets?",
      answer:
        "The existing finish type, including laminate, is reviewed to confirm the appropriate preparation and product approach for your cabinets.",
    },
    {
      question: "How long is my kitchen unusable?",
      answer:
        "Timeline depends on the scope of your project. It is reviewed and confirmed with you before scheduling.",
    },
    {
      question: "Do you replace cabinet hardware?",
      answer:
        "This is reviewed with you directly. Existing hardware can be reinstalled, or updated hardware can be coordinated as part of the project.",
    },
    {
      question: "Do I need to empty my cabinets?",
      answer:
        "Access needs, including emptying cabinets, are part of the consultation review and are confirmed with you ahead of scheduling.",
    },
  ],
};

export const commercialPaintingServicePage: ServicePageData = {
  slug: "commercial-painting",
  serviceName: "Commercial Painting",
  title: "Commercial Painting Services | PaintSwitch",
  description:
    "Commercial painting for offices, retail spaces, and common areas. Request a reviewed quote from PaintSwitch to start a project.",
  primaryKeyword: "Commercial Painting Services",
  heroHeading: "Commercial painting, coordinated around your business.",
  heroSummary:
    "Commercial requests can include offices, retail spaces, multifamily common areas, and other business interiors or exteriors. PaintSwitch reviews the site, surfaces, access, and operating constraints before confirming availability or pricing.",
  scopeHeading: "What a commercial review looks at",
  scopeParagraphs: [
    "Commercial properties bring their own scheduling logic. Business hours, tenant coordination, and site-specific safety or access requirements all factor into when and how a project can proceed, and phased or after-hours scheduling is often part of limiting disruption to daily operations.",
    "Surface variety is common in commercial buildings, from drywall and block to metal and other architectural materials, and multi-tenant properties add coordination around notifying occupants and managing shared access. These details are reviewed alongside the space itself before a project is scoped.",
  ],
  scopeItems: [
    {
      title: "Office & retail interiors",
      description:
        "Interior spaces are reviewed for surface type, square footage, and whether work can happen during or outside business hours.",
    },
    {
      title: "Multifamily common areas",
      description:
        "Hallways, lobbies, and shared amenity spaces are reviewed with tenant coordination and access logistics in mind.",
    },
    {
      title: "Commercial exteriors",
      description:
        "Exterior commercial surfaces are reviewed for material, building size, and access equipment needs.",
    },
    {
      title: "Scheduling around operations",
      description:
        "Business hours and operating constraints are reviewed to plan a schedule that limits disruption to your operations.",
    },
  ],
  costFactors: [
    {
      projectType: "Office or retail interior",
      reviewFactors:
        "Square footage, surface types, and whether access is during business hours or after-hours.",
    },
    {
      projectType: "Multifamily common areas",
      reviewFactors:
        "Hallways, lobbies, and shared amenity spaces along with tenant coordination and access logistics.",
    },
    {
      projectType: "Commercial exterior",
      reviewFactors:
        "Building size, substrate material, and access equipment needs for the property.",
    },
  ],
  practicalFactorsHeading: "What shapes a commercial painting timeline",
  practicalFactors: [
    {
      title: "Business hours & access",
      description:
        "After-hours or phased scheduling can be reviewed with you to help limit disruption to daily operations.",
    },
    {
      title: "Multi-tenant coordination",
      description:
        "Notifying tenants or occupants and coordinating shared access are part of the review for multifamily and multi-tenant properties.",
    },
    {
      title: "Surface variety",
      description:
        "Commercial buildings often mix materials such as drywall, block, and metal, each requiring its own preparation approach.",
    },
  ],
  faqs: [
    {
      question: "Can work be done after business hours?",
      answer:
        "Scheduling, including after-hours or phased options, is reviewed and coordinated based on your property and operations.",
    },
    {
      question: "Do you work with property managers?",
      answer:
        "Yes. Project details and access can be coordinated with the responsible property manager or point of contact.",
    },
    {
      question: "What types of commercial spaces do you review?",
      answer:
        "Offices, retail spaces, multifamily common areas, and other business interiors or exteriors are all reviewed on request.",
    },
    {
      question: "How do I start a commercial project review?",
      answer:
        "Share your space details, including the site, surfaces, access, and operating constraints, using the quote request form.",
    },
  ],
};

export const servicePages = [
  interiorPaintingServicePage,
  exteriorPaintingServicePage,
  cabinetPaintingServicePage,
  commercialPaintingServicePage,
] as const;

export function buildServiceJsonLd(page: ServicePageData) {
  const url = `https://paintswitch.com/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#painting-service`,
        name: `${page.serviceName} services`,
        serviceType: page.serviceName,
        description: page.description,
        url,
        provider: {
          "@type": "Organization",
          "@id": "https://paintswitch.com/#organization",
          name: "PaintSwitch",
          url: "https://paintswitch.com",
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
