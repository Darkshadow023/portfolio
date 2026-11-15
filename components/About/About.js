import Image from "next/image";
import Section from "@/components/Section/Section";
import Reveal from "@/components/Reveal/Reveal";
import { about, profile } from "@/data/content";
import styles from "./About.module.css";

export default function About() {
  const { photo } = profile;

  return (
    <Section id="about" label="About" heading={about.heading}>
      <div className={styles.layout}>
        <Reveal className={styles.text}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal as="figure" className={styles.figure} delay={120}>
          {/* TODO: replace the placeholder with a real photo. Change
              profile.photo in data/content.js (see the README). */}
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 900px) 240px, 320px"
            className={styles.photo}
            // SVG placeholders are served as they are; real photos get optimised.
            unoptimized={photo.src.endsWith(".svg")}
          />
          {photo.isPlaceholder ? (
            <figcaption className={styles.caption}>
              Photo placeholder
            </figcaption>
          ) : null}
        </Reveal>
      </div>
    </Section>
  );
}
