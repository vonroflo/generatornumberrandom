import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://generatornumberrandom.com";

  // Main pages
  const mainPages = [
    "",
    "/coin-flip",
    "/dice-roller",
    "/yes-no-generator",
    "/random-number-picker",
    "/random-name-picker",
    "/random-letter-generator",
    "/random-color-generator",
    "/random-date-generator",
    "/privacy-policy",
    "/terms",
    "/about",
    "/contact",
  ];

  // Preset range pages
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

  const allPages = [...mainPages, ...presetRanges];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/random-number-") ? 0.8 : 0.7,
  }));
}
