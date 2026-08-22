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

const mcLeanServices: CityService[] = [
  {
    title: "Interior Painting",
    description:
      "McLean's mix of established estate-style homes and newer construction brings a wide range of wall systems, trim details, and prior coatings. PaintSwitch reviews room details, existing condition, color changes, repairs, and furniture level before confirming availability or pricing.",
    icon: "interior",
  },
  {
    title: "Exterior Painting",
    description:
      "Exterior requests begin with a consultation review of the building, substrate, access, and preparation needs. Larger lots and varied siding materials are common in McLean, so property-specific exterior requirements remain part of the review.",
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
      "Commercial requests can include offices, retail spaces, and other business interiors or exteriors near Tysons and the broader McLean area. Tell us about the site, surfaces, access, and operating constraints for consultation review.",
    icon: "commercial",
  },
];

export const mcLeanCityPage: CityLandingPageData = {
  city: "McLean",
  stateAbbreviation: "VA",
  stateName: "Virginia",
  slug: "mclean-va",
  title: "Painters in McLean, VA | PaintSwitch",
  description:
    "Need painters in McLean, VA? Explore interior, exterior, cabinet, and commercial painting, then request a reviewed quote from PaintSwitch.",
  primaryKeyword: "Painters McLean VA",
  heroSummary:
    "Looking for painters in McLean, VA? PaintSwitch reviews interior, exterior, cabinet, and commercial painting requests across the area's mix of estate-style and newer homes. Every request receives an individual service-area and project review before availability or pricing is confirmed.",
  architectureHeading: "Painting plans shaped around McLean architecture",
  architectureParagraphs: [
    "McLean is an unincorporated Fairfax County community on the west bank of the Potomac River, named for John R. McLean and traced to the early-1900s Great Falls and Old Dominion Railroad trolley line. Its housing spans established single-family neighborhoods with large, estate-style homes, newer construction throughout the area, and townhome and condominium options nearer Tysons and the Silver Line corridor.",
    "A useful painting plan starts with the actual property rather than a citywide assumption. Surface condition, prior coatings, moisture, repairs, occupied space, and any property-specific exterior review should be understood before preparation or scheduling is confirmed.",
  ],
  neighborhoods: [
    "Salona Village",
    "Ballantrae",
    "Franklin Park",
    "Langley Forest",
    "Chesterbrook Woods",
    "West McLean",
  ],
  postalCodes: ["22101", "22102"],
  services: mcLeanServices,
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
        "McLean has hot, humid summers and precipitation throughout the year. Exterior planning should account for moisture sources, dry surfaces, sound caulk and trim, and suitable application conditions.",
    },
    {
      title: "Larger lots and varied siding",
      description:
        "Estate-style homes on larger lots can bring more exterior surface area and a wider mix of siding and trim materials, which affects preparation time and material selection.",
    },
    {
      title: "Property-specific exterior review",
      description:
        "Some McLean properties carry homeowner-association or other exterior requirements. Property owners should verify the rules that apply before selecting visible exterior changes.",
    },
  ],
  faqs: [
    {
      question: "How is painting pricing handled in McLean?",
      answer:
        "PaintSwitch does not publish an unsupported citywide price. Submit the project location, service, surfaces, condition, and scope so the request can be reviewed before pricing is confirmed.",
    },
    {
      question: "Does a McLean city page confirm service for every local ZIP code?",
      answer:
        "No. McLean ZIP codes do not confirm PaintSwitch availability. Every project location receives an individual service-area review.",
    },
    {
      question: "How long does a McLean painting project take?",
      answer:
        "Timing depends on scope, surface condition, preparation, repairs, access, occupied-space needs, drying conditions, and weather for exterior work. PaintSwitch reviews those details before scheduling is confirmed.",
    },
  ],
};

const potomacServices: CityService[] = [
  {
    title: "Interior Painting",
    description:
      "Potomac's mix of mid-century suburban homes, restored farmhouses, and larger newer construction brings a wide range of wall systems and prior coatings. PaintSwitch reviews room details, existing condition, color changes, repairs, and furniture level before confirming availability or pricing.",
    icon: "interior",
  },
  {
    title: "Exterior Painting",
    description:
      "Exterior requests begin with a consultation review of the building, substrate, access, and preparation needs. Wooded, sloping lots are common in Potomac, so site access and property-specific exterior requirements remain part of the review.",
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
      "Commercial requests can include offices, retail spaces, and other business interiors or exteriors near Potomac Village and the surrounding area. Tell us about the site, surfaces, access, and operating constraints for consultation review.",
    icon: "commercial",
  },
];

export const potomacCityPage: CityLandingPageData = {
  city: "Potomac",
  stateAbbreviation: "MD",
  stateName: "Maryland",
  slug: "potomac-md",
  title: "Painters in Potomac, MD | PaintSwitch",
  description:
    "Need painters in Potomac, MD? Explore interior, exterior, cabinet, and commercial painting, then request a reviewed quote from PaintSwitch.",
  primaryKeyword: "Painters Potomac MD",
  heroSummary:
    "Looking for painters in Potomac, MD? PaintSwitch reviews interior, exterior, cabinet, and commercial painting requests across the area's mix of mid-century and newer homes. Every request receives an individual service-area and project review before availability or pricing is confirmed.",
  architectureHeading: "Painting plans shaped around Potomac architecture",
  architectureParagraphs: [
    "Potomac transformed from a rural Montgomery County farming community into a suburban one from the 1950s through the late 20th century. Some neighborhoods, such as Potomac Overlook, reflect an early planned approach that integrated housing into wooded, sloping topography along secluded cul-de-sac streets, while restored older farmhouses and structures remain scattered among later suburban development.",
    "A useful painting plan starts with the actual property rather than a citywide assumption. Surface condition, prior coatings, moisture, repairs, occupied space, and any property-specific exterior review should be understood before preparation or scheduling is confirmed.",
  ],
  neighborhoods: ["Potomac Village", "Avenel", "Falconhurst", "River Falls", "Falls Road corridor"],
  postalCodes: ["20854", "20859"],
  services: potomacServices,
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
        "Potomac has hot, humid summers and precipitation throughout the year. Exterior planning should account for moisture sources, dry surfaces, sound caulk and trim, and suitable application conditions.",
    },
    {
      title: "Wooded, sloping lots",
      description:
        "Many Potomac properties sit on wooded or sloping lots, which can affect equipment access, staging, and the preparation approach for exterior work.",
    },
    {
      title: "Property-specific exterior review",
      description:
        "Some Potomac properties carry homeowner-association or other exterior requirements. Property owners should verify the rules that apply before selecting visible exterior changes.",
    },
  ],
  faqs: [
    {
      question: "How is painting pricing handled in Potomac?",
      answer:
        "PaintSwitch does not publish an unsupported citywide price. Submit the project location, service, surfaces, condition, and scope so the request can be reviewed before pricing is confirmed.",
    },
    {
      question: "Does a Potomac city page confirm service for every local ZIP code?",
      answer:
        "No. Potomac ZIP codes do not confirm PaintSwitch availability. Every project location receives an individual service-area review.",
    },
    {
      question: "How long does a Potomac painting project take?",
      answer:
        "Timing depends on scope, surface condition, preparation, repairs, access, occupied-space needs, drying conditions, and weather for exterior work. PaintSwitch reviews those details before scheduling is confirmed.",
    },
  ],
};

const viennaServices: CityService[] = [
  {
    title: "Interior Painting",
    description:
      "Vienna's mix of historic homes near the Windover Heights district, mid-century houses, and newer construction brings a wide range of wall systems and prior coatings. PaintSwitch reviews room details, existing condition, color changes, repairs, and furniture level before confirming availability or pricing.",
    icon: "interior",
  },
  {
    title: "Exterior Painting",
    description:
      "Exterior requests begin with a consultation review of the building, substrate, access, and preparation needs. Larger, semi-rural lots near Wolf Trap are common in the area, so property-specific exterior requirements remain part of the review.",
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
      "Commercial requests can include offices, retail spaces, and other business interiors or exteriors near Vienna's Church Street area and the surrounding corridor. Tell us about the site, surfaces, access, and operating constraints for consultation review.",
    icon: "commercial",
  },
];

export const viennaCityPage: CityLandingPageData = {
  city: "Vienna",
  stateAbbreviation: "VA",
  stateName: "Virginia",
  slug: "vienna-va",
  title: "Painters in Vienna, VA | PaintSwitch",
  description:
    "Need painters in Vienna, VA? Explore interior, exterior, cabinet, and commercial painting, then request a reviewed quote from PaintSwitch.",
  primaryKeyword: "Painters Vienna VA",
  heroSummary:
    "Looking for painters in Vienna, VA? PaintSwitch reviews interior, exterior, cabinet, and commercial painting requests across the town's mix of historic and newer homes. Every request receives an individual service-area and project review before availability or pricing is confirmed.",
  architectureHeading: "Painting plans shaped around Vienna architecture",
  architectureParagraphs: [
    "Vienna traces to a late-1760s tobacco plantation called Ayr Hill, and grew into a town by the mid-1850s with the arrival of a rail line, later taking the name Vienna. The Windover Heights Historic District preserves homes from that era, while the surrounding town and nearby Wolf Trap area mix mid-century houses, larger semi-rural lots, and newer construction.",
    "A useful painting plan starts with the actual property rather than a citywide assumption. Surface condition, prior coatings, moisture, repairs, occupied space, and any property-specific exterior review should be understood before preparation or scheduling is confirmed.",
  ],
  neighborhoods: ["Windover Heights Historic District", "Stonewall Manor", "Four Corners", "Old Courthouse", "Wolf Trap area"],
  postalCodes: ["22180", "22181", "22182"],
  services: viennaServices,
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
        "Vienna has hot, humid summers and precipitation throughout the year. Exterior planning should account for moisture sources, dry surfaces, sound caulk and trim, and suitable application conditions.",
    },
    {
      title: "Historic-home surface conditions",
      description:
        "Homes near Windover Heights and other older sections of Vienna can carry original plaster, layered prior coatings, and age-related surface conditions worth reviewing before new coatings are applied.",
    },
    {
      title: "Property-specific exterior review",
      description:
        "Some Vienna properties, including those in or near the historic district, carry exterior-change requirements. Property owners should verify the rules that apply before selecting visible exterior work.",
    },
  ],
  faqs: [
    {
      question: "How is painting pricing handled in Vienna?",
      answer:
        "PaintSwitch does not publish an unsupported citywide price. Submit the project location, service, surfaces, condition, and scope so the request can be reviewed before pricing is confirmed.",
    },
    {
      question: "Does a Vienna city page confirm service for every local ZIP code?",
      answer:
        "No. Vienna ZIP codes do not confirm PaintSwitch availability. Every project location receives an individual service-area review.",
    },
    {
      question: "How long does a Vienna painting project take?",
      answer:
        "Timing depends on scope, surface condition, preparation, repairs, access, occupied-space needs, drying conditions, and weather for exterior work. PaintSwitch reviews those details before scheduling is confirmed.",
    },
  ],
};

const fairfaxStationServices: CityService[] = [
  {
    title: "Interior Painting",
    description:
      "Fairfax Station's large estate-sized homes bring a wide range of room sizes, trim details, and prior coatings. PaintSwitch reviews room details, existing condition, color changes, repairs, and furniture level before confirming availability or pricing.",
    icon: "interior",
  },
  {
    title: "Exterior Painting",
    description:
      "Exterior requests begin with a consultation review of the building, substrate, access, and preparation needs. Wooded lots and equestrian properties are common in Fairfax Station, so property-specific exterior requirements remain part of the review.",
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
      "Commercial requests can include offices, retail spaces, and other business interiors or exteriors in and around Fairfax Station. Tell us about the site, surfaces, access, and operating constraints for consultation review.",
    icon: "commercial",
  },
];

export const fairfaxStationCityPage: CityLandingPageData = {
  city: "Fairfax Station",
  stateAbbreviation: "VA",
  stateName: "Virginia",
  slug: "fairfax-station-va",
  title: "Painters in Fairfax Station, VA | PaintSwitch",
  description:
    "Need painters in Fairfax Station, VA? Explore interior, exterior, cabinet, and commercial painting, then request a reviewed quote from PaintSwitch.",
  primaryKeyword: "Painters Fairfax Station VA",
  heroSummary:
    "Looking for painters in Fairfax Station, VA? PaintSwitch reviews interior, exterior, cabinet, and commercial painting requests across the area's wooded, larger-lot properties. Every request receives an individual service-area and project review before availability or pricing is confirmed.",
  architectureHeading: "Painting plans shaped around Fairfax Station architecture",
  architectureParagraphs: [
    "Fairfax Station grew around a 19th-century railroad station in western Fairfax County, was briefly renamed Swetnam in 1897, and reverted to Fairfax Station in 1921; the area's Civil War-era history is preserved at the Fairfax Station Railroad Museum. Today the community is known for large estate-sized homes, wooded lots, and equestrian properties near Burke Lake Park.",
    "A useful painting plan starts with the actual property rather than a citywide assumption. Surface condition, prior coatings, moisture, repairs, occupied space, and any property-specific exterior review should be understood before preparation or scheduling is confirmed.",
  ],
  neighborhoods: ["Crosspointe", "South Run", "Devereux Station", "English Hills", "Silverbrook Farms"],
  postalCodes: ["22039"],
  services: fairfaxStationServices,
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
        "Fairfax Station has hot, humid summers and precipitation throughout the year. Exterior planning should account for moisture sources, dry surfaces, sound caulk and trim, and suitable application conditions.",
    },
    {
      title: "Larger, wooded lots",
      description:
        "Estate-sized homes on wooded or equestrian properties can bring more exterior surface area and site-access considerations, which affect preparation time and staging.",
    },
    {
      title: "Property-specific exterior review",
      description:
        "Some Fairfax Station properties carry homeowner-association or other exterior requirements. Property owners should verify the rules that apply before selecting visible exterior changes.",
    },
  ],
  faqs: [
    {
      question: "How is painting pricing handled in Fairfax Station?",
      answer:
        "PaintSwitch does not publish an unsupported citywide price. Submit the project location, service, surfaces, condition, and scope so the request can be reviewed before pricing is confirmed.",
    },
    {
      question: "Does a Fairfax Station city page confirm service for every local ZIP code?",
      answer:
        "No. The Fairfax Station ZIP code does not confirm PaintSwitch availability. Every project location receives an individual service-area review.",
    },
    {
      question: "How long does a Fairfax Station painting project take?",
      answer:
        "Timing depends on scope, surface condition, preparation, repairs, access, occupied-space needs, drying conditions, and weather for exterior work. PaintSwitch reviews those details before scheduling is confirmed.",
    },
  ],
};

export const cityLandingPages = [
  alexandriaCityPage,
  arlingtonCityPage,
  chevyChaseVillageCityPage,
  mcLeanCityPage,
  potomacCityPage,
  viennaCityPage,
  fairfaxStationCityPage,
] as const;

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
