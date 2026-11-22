import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/blog";

export function generateMetadata(): Metadata {
  const hasPosts = getAllPosts().length > 0;
  return {
    title: "Blog | Aditya Kapoor",
    description: "Writing by Aditya Kapoor, Cyber Security student at Deakin University, Melbourne.",
    alternates: { canonical: "/blog" },
    // Keep the page out of search results until there is something on it.
    robots: { index: hasPosts, follow: true },
  };
}

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="wrap page">
      <header className="page__head">
        <p className="mono label">
          <span>Blog</span>
        </p>
        <h1 className="display">
          Notes &amp; <em>writing</em>.
        </h1>
      </header>

      {posts.length === 0 ? (
        <div className="empty">
          <p className="empty__title">Nothing published yet.</p>
          <p>The first post will appear here.</p>
          <Link className="btn btn--ghost" href="/">
            <span aria-hidden="true">&larr;</span> Back to home
          </Link>
        </div>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug} className="post-row">
              <p className="mono post-row__meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true"> / </span>
                {post.readingMinutes} min read
                {post.draft && <span className="post-row__draft"> Draft</span>}
              </p>
              <div className="post-row__body">
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.description}</p>
                {post.tags.length > 0 && (
                  <ul className="chips chips--sm" aria-label="Tags">
                    {post.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
