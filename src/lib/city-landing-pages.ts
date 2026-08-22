export type CityService = {
  title: string;
  description: string;
  icon: "interior" | "exterior" | "cabinet" | "commercial";
};

export type CityFaq = {
  question: string;
  answer: string;
};

export type CityLandingPageData = {
  city: string;
  stateAbbreviation: "VA" | "MD";
  stateName: "Virginia" | "Maryland";
  slug: string;
  title: string;
  description: string;
  primaryKeyword: string;
  heroSummary: string;
  architectureHeading: string;
  architectureParagraphs: [string, string];
  neighborhoods: string[];
  postalCodes: string[];
  services: CityService[];
  costFactors: { projectType: string; reviewFactors: string }[];
  regionalFactors: { title: string; description: string }[];
  faqs: CityFaq[];
};

const alexandriaServices: CityService[] = [
  {
    title: "Interior Painting",
    description:
      "Plan walls, ceilings, trim, doors, and closets around the way an Alexandria room is built and used. PaintSwitch reviews room details, existing condition, color changes, repairs, and furniture level before confirming availability or pricing.",
    icon: "interior",
  },
  {
    title: "Exterior Painting",
    description:
      "Exterior requests begin with a consultation review of the building, substrate, access, and preparation needs. Weather conditions and any property-specific exterior requirements are considered before the project moves forward.",
    icon: "exterior",
  },
  {
    title: "Cabinet Painting",
    description:
      "Cabinet projects are reviewed around door and drawer count, existing finish, condition, access, and the desired color change. PaintSwitch uses that project information to determine the appropriate consultation next step.",
    icon: "cabinet",
  },
  {
    title: "Commercial Painting",
    description:
      "Commercial requests can include offices, retail spaces, multifamily common areas, and other business interiors or exteriors. Tell us about the site, surfaces, access, and operating constraints for consultation review.",
    icon: "commercial",
  },
];

const arlingtonServices: CityService[] = [
  {
    title: "Interior Painting",
    description:
      "From single-family rooms to condo interiors, PaintSwitch reviews the surfaces, trim, doors, repairs, color changes, and occupied condition involved. The request is evaluated before availability or pricing is confirmed.",
    icon: "interior",
  },
  {
    title: "Exterior Painting",
    description:
      "Exterior requests are reviewed around surface material and condition, building height, access, preparation, and a suitable weather window. Any property-specific exterior requirements remain part of the project review.",
    icon: "exterior",
  },
  {
    title: "Cabinet Painting",
    description:
      "Cabinet consultation starts with the number and condition of doors and drawers, the existing finish, project access, and the desired result. Those details help define preparation and the next step.",
    icon: "cabinet",
  },
  {
    title: "Commercial Painting",
    description:
      "PaintSwitch accepts consultation requests for Arlington offices, retail spaces, multifamily common areas, and other commercial properties. Share the site, surfaces, access, and operating needs so the project can be reviewed accurately.",
    icon: "commercial",
  },
];

export const alexandriaCityPage: CityLandingPageData = {
  city: "Alexandria",
  stateAbbreviation: "VA",
  stateName: "Virginia",
  slug: "alexandria-va",
  title: "Painters in Alexandria, VA | PaintSwitch",
  description:
    "Need painters in Alexandria, VA? Explore interior, exterior, cabinet, and commercial painting, then request a reviewed quote from PaintSwitch.",
  primaryKeyword: "Painters Alexandria VA",
  heroSummary:
    "Looking for painters in Alexandria, VA? PaintSwitch reviews interior, exterior, cabinet, and commercial painting requests with local building context in mind. Every request receives an individual service-area and project review before availability or pricing is confirmed.",
  architectureHeading: "Painting plans shaped around Alexandria architecture",
  architectureParagraphs: [
    "Alexandria includes Georgian and Federal-era rowhouses in Old Town, streetcar-era bungalows and Colonial Revival homes around Del Ray and Rosemont, brick garden-apartment communities such as Parkfairfax, and newer condos near Potomac Yard. Each building type can bring different surfaces, access conditions, and finish details.",
    "A useful painting plan starts with the actual property rather than a citywide assumption. Surface condition, prior coatings, moisture, repairs, occupied space, and any property-specific exterior review should be understood before preparation or scheduling is confirmed.",
  ],
  neighborhoods: [
    "Old Town and Old Town North",
    "Parker-Gray",
    "Del Ray",
    "Rosemont",
    "Parkfairfax",
    "Arlandria-Chirilagua",
    "Seminary Hill and Strawberry Hill",
    "Potomac Yard and Potomac Greens",
  ],
  postalCodes: ["22301", "22302", "22304", "22305", "22311", "22312", "22314"],
  services: alexandriaServices,
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
    {
      projectType: "Exterior painting",
      reviewFactors:
        "Building height, surface material and condition, access, preparation needs, moisture, repairs, exterior requirements, and an appropriate weather window.",
    },
    {
      projectType: "Kitchen cabinet painting",
      reviewFactors:
        "Door and drawer count, existing coating and condition, hardware, access, preparation, color change, and site setup.",
    },
  ],
  regionalFactors: [
    {
      title: "Humidity and rain",
      description:
        "Alexandria has hot, humid summers and precipitation throughout the year. Exterior planning should account for moisture sources, dry surfaces, sound caulk and trim, and suitable application conditions.",
    },
    {
      title: "Cold-weather cycling",
      description:
        "Moisture in exterior wood or masonry can contribute to coating failure and cold-weather deterioration. The source and condition should be evaluated before repainting rather than covered without review.",
    },
    {
      title: "Property-specific exterior review",
      description:
        "Some Alexandria properties are subject to historic-district or other exterior requirements. Property owners should verify the rules that apply before selecting visible exterior changes.",
    },
  ],
  faqs: [
    {
      question: "How is painting pricing handled in Alexandria?",
      answer:
        "PaintSwitch does not publish an unsupported citywide price. Submit the project location, service, surfaces, condition, and scope so the request can be reviewed before pricing is confirmed.",
    },
    {
      question: "Does an Alexandria city page confirm service for every local ZIP code?",
      answer:
        "No. Alexandria postal ZIP codes can cross jurisdictional lines, and a ZIP code does not confirm PaintSwitch availability. Every project location receives an individual service-area review.",
    },
    {
      question: "How long does an Alexandria painting project take?",
      answer:
        "Timing depends on scope, surface condition, preparation, repairs, access, occupied-space needs, drying conditions, and weather for exterior work. PaintSwitch reviews those details before scheduling is confirmed.",
    },
  ],
};

export const arlingtonCityPage: CityLandingPageData = {
  city: "Arlington",
  stateAbbreviation: "VA",
  stateName: "Virginia",
  slug: "arlington-va",
  title: "Painters in Arlington, VA | PaintSwitch",
  description:
    "Need painters in Arlington, VA? Explore interior, exterior, cabinet, and commercial painting, then request a reviewed quote from PaintSwitch.",
  primaryKeyword: "Painters Arlington VA",
  heroSummary:
    "Looking for painters in Arlington, VA? PaintSwitch reviews interior, exterior, cabinet, and commercial painting requests across the county's varied housing and commercial spaces. Every request receives an individual service-area and project review before availability or pricing is confirmed.",
  architectureHeading: "Painting plans shaped around Arlington architecture",
  architectureParagraphs: [
    "Arlington's housing ranges from early foursquares and bungalows in Maywood and Cherrydale to Cape Cod and Colonial Revival homes, brick garden apartments in Buckingham and Lyon Park, and newer condo buildings along the Rosslyn-Ballston corridor. Those property types call for different access, preparation, and finish decisions.",
    "The project review should reflect the actual surfaces and building conditions. Existing coatings, repairs, moisture, occupied areas, common-property access, and any property-specific exterior review can all affect the appropriate preparation and next step.",
  ],
  neighborhoods: [
    "Rosslyn",
    "Clarendon",
    "Ballston",
    "Cherrydale",
    "Lyon Park",
    "Buckingham",
    "Westover",
    "Shirlington and Columbia Pike",
  ],
  postalCodes: ["22201", "22202", "22203", "22204", "22205", "22206", "22207", "22209", "22213"],
  services: arlingtonServices,
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
    {
      projectType: "Exterior painting",
      reviewFactors:
        "Building type and height, substrate and condition, access, preparation, moisture, repairs, exterior requirements, and a suitable weather window.",
    },
    {
      projectType: "Kitchen cabinet painting",
      reviewFactors:
        "Door and drawer count, current finish and condition, hardware, access, preparation, color change, and site setup.",
    },
  ],
  regionalFactors: [
    {
      title: "Humidity and wet weather",
      description:
        "Northern Virginia's humid summers and year-round precipitation make moisture and surface dryness important exterior-preparation checks. Application conditions should follow the selected coating's project-specific requirements.",
    },
    {
      title: "Seasonal temperature changes",
      description:
        "Exterior wood, trim, and masonry can be affected by water intrusion and winter temperature cycling. Existing damage or moisture should be understood before new coatings are applied.",
    },
    {
      title: "Building and property requirements",
      description:
        "Historic districts, managed buildings, and individual properties may have exterior color, access, or work-hour requirements. Owners and property managers should verify the rules that apply to their project.",
    },
  ],
  faqs: [
    {
      question: "How is painting pricing handled in Arlington?",
      answer:
        "PaintSwitch does not publish an unsupported citywide price. Submit the property location, service, surfaces, condition, and scope so the request can be reviewed before pricing is confirmed.",
    },
    {
      question: "Does an Arlington city page confirm service for every local ZIP code?",
      answer:
        "No. ZIP codes do not define PaintSwitch availability, and some postal areas cross jurisdictional lines. Every project location receives an individual service-area review.",
    },
    {
      question: "How long does an Arlington painting project take?",
      answer:
        "Timing depends on scope, preparation, repairs, access, building requirements, occupied-space needs, drying conditions, and weather for exterior work. PaintSwitch reviews those details before scheduling is confirmed.",
    },
  ],
};

const chevyChaseVillageServices: CityService[] = [
  {
    title: "Interior Painting",
    description:
      "Chevy Chase Village's older, larger homes often bring plaster walls, original trim, and multiple past coatings. PaintSwitch reviews room details, existing condition, color changes, repairs, and furniture level before confirming availability or pricing.",
    icon: "interior",
  },
  {
    title: "Exterior Painting",
    description:
      "Exterior requests begin with a consultation review of the building, substrate, access, and preparation needs, including any property-specific requirements that may apply within a designated historic district.",
    icon: "exterior",
  },
  {
    title: "Cabinet Painting",
    description:
      "Cabinet projects are reviewed around door and drawer count, existing finish, condition, access, and the desired color change. PaintSwitch uses that project information to determine the appropriate consultation next step.",
    icon: "cabinet",
  },
  {
    title: "Commercial Painting",
    description:
      "Commercial requests can include offices, retail spaces, and other business interiors or exteriors near Connecticut Avenue and the surrounding area. Tell us about the site, surfaces, access, and operating constraints for consultation review.",
    icon: "commercial",
  },
];

export const chevyChaseVillageCityPage: CityLandingPageData = {
  city: "Chevy Chase Village",
  stateAbbreviation: "MD",
  stateName: "Maryland",
  slug: "chevy-chase-village-md",
  title: "Painters in Chevy Chase Village, MD | PaintSwitch",
  description:
    "Need painters in Chevy Chase Village, MD? Explore interior, exterior, cabinet, and commercial painting reviewed before PaintSwitch confirms your quote.",
  primaryKeyword: "Painters Chevy Chase Village MD",
  heroSummary:
    "Looking for painters in Chevy Chase Village, MD? PaintSwitch reviews interior, exterior, cabinet, and commercial painting requests with the Village's historic housing stock in mind. Every request receives an individual service-area and project review before availability or pricing is confirmed.",
  architectureHeading: "Painting plans shaped around Chevy Chase Village architecture",
  architectureParagraphs: [
    "Chevy Chase Village was platted in 1890 by the Chevy Chase Land Company as one of the original streetcar suburbs of Washington, D.C., and incorporated in 1951. Its roughly 720 homes sit along tree-lined streets and brick sidewalks near Connecticut Avenue and Chevy Chase Circle, with a mix of large early-1900s houses and later infill construction, much of it within a designated historic district.",
    "A useful painting plan starts with the actual property rather than a citywide assumption. Original plaster, prior coatings, moisture, repairs, occupied space, and any historic-district exterior review should be understood before preparation or scheduling is confirmed.",
  ],
  neighborhoods: [
    "Along Connecticut Avenue near Chevy Chase Circle",
    "Streets near the Village Hall",
    "The area bordering Rock Creek Park",
    "Blocks near the Maryland-D.C. line",
  ],
  postalCodes: ["20815"],
  services: chevyChaseVillageServices,
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
    {
      projectType: "Exterior painting",
      reviewFactors:
        "Building height, surface material and condition, access, preparation needs, moisture, repairs, any historic-district exterior requirements, and an appropriate weather window.",
    },
    {
      projectType: "Kitchen cabinet painting",
      reviewFactors:
        "Door and drawer count, existing coating and condition, hardware, access, preparation, color change, and site setup.",
    },
  ],
  regionalFactors: [
    {
      title: "Humidity and rain",
      description:
        "Chevy Chase Village has hot, humid summers and precipitation throughout the year. Exterior planning should account for moisture sources, dry surfaces, sound caulk and trim, and suitable application conditions.",
    },
    {
      title: "Older housing stock",
      description:
        "Many Village homes date to the early 1900s, so original plaster, layered prior coatings, and age-related surface conditions are common review points before new coatings are applied.",
    },
    {
      title: "Historic-district exterior review",
      description:
        "Chevy Chase Village includes a designated historic district. Property owners should verify any applicable exterior-change requirements before selecting visible exterior work.",
    },
  ],
  faqs: [
    {
      question: "How is painting pricing handled in Chevy Chase Village?",
      answer:
        "PaintSwitch does not publish an unsupported citywide price. Submit the project location, service, surfaces, condition, and scope so the request can be reviewed before pricing is confirmed.",
    },
    {
      question: "Does a Chevy Chase Village city page confirm service for every local ZIP code?",
      answer:
        "No. The 20815 ZIP code is shared across several separate Chevy Chase jurisdictions in Maryland and does not confirm PaintSwitch availability. Every project location receives an individual service-area review.",
    },
    {
      question: "How long does a Chevy Chase Village painting project take?",
      answer:
        "Timing depends on scope, surface condition, preparation, repairs, access, occupied-space needs, drying conditions, and weather for exterior work. PaintSwitch reviews those details before scheduling is confirmed.",
    },
  ],
};

export const cityLandingPages = [alexandriaCityPage, arlingtonCityPage, chevyChaseVillageCityPage] as const;

export function buildCityJsonLd(page: CityLandingPageData) {
  const url = `https://paintswitch.com/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#painting-service`,
        name: `Painting services in ${page.city}, ${page.stateAbbreviation}`,
        serviceType: page.services.map((service) => service.title),
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
