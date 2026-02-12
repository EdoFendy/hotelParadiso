import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/dashboard/", "/checkout/"],
      },
      {
        userAgent: [
          "GPTBot",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "Bytespider",
          "PetalBot",
        ],
        disallow: "/",
      },
    ],
    sitemap: [
      "https://paradisodellemadonie.it/sitemap.xml",
      "https://paradisodellemadonie.it/sitemap-images.xml",
    ],
    host: "https://paradisodellemadonie.it",
  }
}
