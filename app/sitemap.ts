import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().filter((p) => !p.draft);
  const entries: MetadataRoute.Sitemap = [{ url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 }];
  // The blog index is only listed once it has posts, matching its noindex-while-empty setting.
  if (posts.length > 0) {
    entries.push({ url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.6 });
    for (const p of posts) {
      entries.push({
        url: `${SITE_URL}/blog/${p.slug}`,
        lastModified: p.updated ?? p.date,
        changeFrequency: "yearly",
        priority: 0.5,
      });
    }
  }
  return entries;
}
