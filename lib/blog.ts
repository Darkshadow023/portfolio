import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  /** ISO date, YYYY-MM-DD */
  updated?: string;
  tags: string[];
  /** Optional social/preview image, a path under /public such as /blog/my-post.png */
  image?: string;
  draft: boolean;
  readingMinutes: number;
};

export type Post = PostMeta & { content: string };

function toIsoDate(value: unknown): string | undefined {
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10);
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value.trim())) return value.trim();
  return undefined;
}

function readPost(file: string): Post {
  const slug = file.replace(/\.md$/, "");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`content/blog/${file}: file names must be lowercase words joined by hyphens, e.g. "my-first-post.md".`);
  }
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);

  const title = typeof data.title === "string" ? data.title.trim() : "";
  const description = typeof data.description === "string" ? data.description.trim() : "";
  const date = toIsoDate(data.date);
  if (!title || !description || !date) {
    throw new Error(
      `content/blog/${file}: front matter needs "title", "description" and "date" (YYYY-MM-DD). See content/blog/_template.md.`,
    );
  }

  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title,
    description,
    date,
    updated: toIsoDate(data.updated),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    image: typeof data.image === "string" && data.image ? data.image : undefined,
    draft: data.draft === true,
    readingMinutes: Math.max(1, Math.round(words / 220)),
    content,
  };
}

/** All published posts, newest first. Files starting with "_" are ignored. Drafts show in dev only. */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const showDrafts = process.env.NODE_ENV !== "production";
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map(readPost)
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .map(({ content: _content, ...meta }) => meta);
}

export function getPost(slug: string): Post | null {
  const file = `${slug}.md`;
  if (slug.startsWith("_") || !fs.existsSync(path.join(POSTS_DIR, file))) return null;
  const post = readPost(file);
  if (post.draft && process.env.NODE_ENV === "production") return null;
  return post;
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-AU", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`),
  );
}
