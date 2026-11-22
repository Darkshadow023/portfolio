import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
  a({ href, children }) {
    const external = !!href && /^https?:\/\//.test(href);
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    ) : (
      <a href={href}>{children}</a>
    );
  },
  // Focusable so keyboard users can scroll wide code blocks and tables.
  pre({ children }) {
    return <pre tabIndex={0}>{children}</pre>;
  },
  table({ children }) {
    return (
      <div className="table-wrap" tabIndex={0}>
        <table>{children}</table>
      </div>
    );
  },
  // GFM task-list items are read-only, so draw them as a labelled box instead of an unlabelled <input>.
  input({ type, checked }) {
    if (type !== "checkbox") return null;
    return (
      <span className="task-box" data-checked={checked ? "true" : "false"}>
        <span className="visually-hidden">{checked ? "Done: " : "To do: "}</span>
      </span>
    );
  },
  img({ src, alt }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} loading="lazy" decoding="async" />;
  },
};

export default function Markdown({ children }: { children: string }) {
  return (
    <div className="prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
