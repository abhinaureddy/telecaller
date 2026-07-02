import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { getAllPosts } from "@/lib/blog";

const staticRoutes = [
  "",
  "/how-it-works",
  "/pricing",
  "/compliance",
  "/about",
  "/book-demo",
  "/blog",
  "/legal/privacy",
  "/legal/terms",
  "/legal/dpdp",
  "/legal/refund",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-07-02"),
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date("2026-07-02"),
  }));

  return [...staticEntries, ...blogEntries];
}
