import Reveal from "@/components/Reveal/Reveal";
import styles from "./Section.module.css";

// Shared wrapper for every section below the hero: a small monospace label,
// a heading, an optional intro line, then the section's own content.
export default function Section({ id, label, heading, intro, children }) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <div className="container">
        <Reveal as="header" className={styles.header}>
          <p className={styles.label}>
            <span className={styles.marker} aria-hidden="true" />
            {label}
          </p>
          <h2 id={headingId} className={styles.heading}>
            {heading}
          </h2>
          {intro ? <p className={styles.intro}>{intro}</p> : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
