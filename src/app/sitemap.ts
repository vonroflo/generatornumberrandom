import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://generatornumberrandom.com";
  const lastModified = new Date("2026-03-20");

  // Tool pages (high priority)
  const toolPages = [
    "/coin-flip",
    "/dice-roller",
    "/yes-no-generator",
    "/random-number-picker",
    "/random-name-picker",
    "/random-letter-generator",
    "/random-color-generator",
    "/random-date-generator",
  ];

  // Preset range pages (high priority)
  const presetRanges = [
    "/random-number-1-10",
    "/random-number-1-100",
    "/random-number-1-20",
    "/random-number-1-50",
    "/random-number-1-1000",
    "/random-number-1-6",
    "/random-number-0-1",
    "/random-number-1-52",
    "/random-number-1-365",
    "/random-number-1-12",
  ];

  // Low-priority informational pages
  const infoPages = [
    "/privacy-policy",
    "/terms",
    "/about",
    "/contact",
  ];

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...toolPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...presetRanges.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...infoPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
