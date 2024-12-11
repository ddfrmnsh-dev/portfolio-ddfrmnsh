import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ddfrmnsh.tech/",
      lastModified: new Date(),
    },
    {
      url: "https://ddfrmnsh.tech/article",
      lastModified: new Date(),
    },
    {
      url: "https://ddfrmnsh.tech/portfolio",
      lastModified: new Date(),
    },
  ];
}
