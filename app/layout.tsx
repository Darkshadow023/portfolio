import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DESCRIPTION, EMAIL, GITHUB_URL, LINKEDIN_URL, NAME, OG_DESCRIPTION, SITE_URL, TITLE } from "@/lib/site";
import "./globals.css";

const sans = localFont({
  src: "./fonts/inter-tight.woff2",
  weight: "400 700",
  variable: "--ff-sans",
  display: "swap",
});
const serif = localFont({
  src: "./fonts/instrument-serif-italic.woff2",
  weight: "400",
  style: "italic",
  variable: "--ff-serif",
  display: "swap",
});
const mono = localFont({
  src: "./fonts/jetbrains-mono.woff2",
  weight: "400 500",
  variable: "--ff-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: NAME }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: NAME,
    title: TITLE,
    description: OG_DESCRIPTION,
    url: "/",
    locale: "en_AU",
    images: [
      {
        url: "/assets/og.png",
        width: 1200,
        height: 630,
        alt: "Aditya Kapoor, Cyber Security student at Deakin University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
    images: ["/assets/og.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
    { media: "(prefers-color-scheme: light)", color: "#f8f0de" },
  ],
};

/* Runs before first paint: marks JS as available and applies a saved theme (no flash). */
const themeScript = `(function(){var d=document.documentElement;d.classList.remove('no-js');d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')d.setAttribute('data-theme',t)}catch(e){}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/assets/og.png`,
  jobTitle: "Cyber Security student",
  email: `mailto:${EMAIL}`,
  address: { "@type": "PostalAddress", addressLocality: "Burwood", addressRegion: "VIC", addressCountry: "AU" },
  affiliation: [
    { "@type": "CollegeOrUniversity", name: "Deakin University" },
    { "@type": "Organization", name: "Deakin University Cybersecurity Association (DUCA)" },
  ],
  sameAs: [LINKEDIN_URL, GITHUB_URL],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`no-js ${sans.variable} ${serif.variable} ${mono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
