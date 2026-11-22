import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "@/components/Markdown";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";
import { NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const image = post.image ?? "/assets/og.png";
  return {
    title: `${post.title} | ${NAME}`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [NAME],
      tags: post.tags,
      images: [{ url: image }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [image] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { "@type": "Person", name: NAME, url: `${SITE_URL}/` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}${post.image ?? "/assets/og.png"}`,
    keywords: post.tags.join(", ") || undefined,
  };

  return (
    <article className="wrap page post">
      <Link className="back mono" href="/blog">
        <span aria-hidden="true">&larr;</span> All posts
      </Link>

      <header className="post__head">
        <p className="mono post__meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true"> / </span>
          {post.readingMinutes} min read
          {post.updated && (
            <>
              <span aria-hidden="true"> / </span>
              Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
            </>
          )}
          {post.draft && <span className="post-row__draft"> Draft</span>}
        </p>
        <h1 className="post__title">{post.title}</h1>
        <p className="post__lead">{post.description}</p>
        {post.tags.length > 0 && (
          <ul className="chips chips--sm" aria-label="Tags">
            {post.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </header>

      <Markdown>{post.content}</Markdown>

      <footer className="post__foot">
        <Link className="btn btn--ghost" href="/blog">
          <span aria-hidden="true">&larr;</span> All posts
        </Link>
        <Link className="btn btn--primary" href="/#contact">
          Get in touch <span aria-hidden="true">&rarr;</span>
        </Link>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
