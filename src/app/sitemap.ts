import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://paintswitch.com",
      lastModified: "2026-08-14",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://paintswitch.com/alexandria-va",
      lastModified: "2026-08-14",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://paintswitch.com/arlington-va",
      lastModified: "2026-08-14",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://paintswitch.com/chevy-chase-village-md",
      lastModified: "2026-08-22",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://paintswitch.com/mclean-va",
      lastModified: "2026-08-22",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://paintswitch.com/potomac-md",
      lastModified: "2026-08-22",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://paintswitch.com/vienna-va",
      lastModified: "2026-08-22",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://paintswitch.com/fairfax-station-va",
      lastModified: "2026-08-22",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://paintswitch.com/bethesda-md",
      lastModified: "2026-08-22",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://paintswitch.com/great-falls-va",
      lastModified: "2026-08-22",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://paintswitch.com/privacy",
      lastModified: "2026-08-08",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://paintswitch.com/terms",
      lastModified: "2026-08-09",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
