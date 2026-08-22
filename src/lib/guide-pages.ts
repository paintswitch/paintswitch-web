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

export const guidePages = [interiorColorGuide, exteriorMaintenanceGuide] as const;

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
