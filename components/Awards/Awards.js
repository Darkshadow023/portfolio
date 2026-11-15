import Section from "@/components/Section/Section";
import Reveal from "@/components/Reveal/Reveal";
import { awards } from "@/data/content";
import styles from "./Awards.module.css";

export default function Awards() {
  return (
    <Section id="awards" label="Awards" heading="Awards & certificates">
      <ul className={styles.list}>
        {awards.map((award) => (
          <Reveal as="li" key={award.title + award.date} className={styles.row}>
            <p className={styles.date}>{award.date}</p>
            <div className={styles.details}>
              <h3 className={styles.title}>{award.title}</h3>
              <p className={styles.issuer}>{award.issuer}</p>
              {/* The link only shows when `link` is filled in data/content.js */}
              {award.link ? (
                <a
                  href={award.link}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {award.linkLabel || "View"}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
            <p className={styles.kind}>{award.kind}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
