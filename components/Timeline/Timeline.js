import Section from "@/components/Section/Section";
import Reveal from "@/components/Reveal/Reveal";
import { experience } from "@/data/content";
import styles from "./Timeline.module.css";

export default function Timeline() {
  return (
    <Section
      id="experience"
      label="Experience"
      heading="Leadership & experience"
      intro="Running a student association, working with customers and volunteering at events."
    >
      <ol className={styles.timeline}>
        {experience.map((item) => (
          <Reveal
            as="li"
            key={`${item.role}-${item.organisation}`}
            className={styles.item}
          >
            <div className={styles.meta}>
              <p className={styles.dates}>{item.dates}</p>
              <p className={styles.type}>{item.type}</p>
            </div>

            <span className={styles.dot} aria-hidden="true" />

            <div className={styles.content}>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.organisation}>
                {item.organisation} · {item.location}
              </p>
              <ul className={styles.points}>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
