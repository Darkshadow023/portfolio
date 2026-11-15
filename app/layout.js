import { Montserrat, JetBrains_Mono } from "next/font/google";
import { site, profile } from "@/data/content";
import "./globals.css";

// Montserrat is the base font for body text and headings.
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

// JetBrains Mono is used for small labels, dates and tags.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title: site.title,
    description: site.description,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0e0f" },
    { media: "(prefers-color-scheme: light)", color: "#f5f8f7" },
  ],
};

// Runs before the page paints, so the right theme is on screen from the first
// frame. Order of preference: saved choice, then the system setting, then dark.
// It also sets data-js so the CSS knows JavaScript is available.
const themeScript = `(function () {
  var root = document.documentElement;
  root.setAttribute("data-js", "");
  var theme = "dark";
  try {
    var saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      theme = saved;
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      theme = "light";
    }
  } catch (error) {}
  root.setAttribute("data-theme", theme);
})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-AU"
      className={`${montserrat.variable} ${jetbrainsMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
