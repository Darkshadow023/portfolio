import Section from "@/components/Section/Section";
import Reveal from "@/components/Reveal/Reveal";
import { education } from "@/data/content";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <Section id="education" label="Education" heading="Where I study">
      <div className={styles.list}>
        {education.map((item, index) => (
          <Reveal
            as="article"
            key={item.qualification}
            className={styles.card}
            delay={index * 100}
          >
            <div className={styles.main}>
              <p className={styles.dates}>{item.dates}</p>
              <h3 className={styles.qualification}>{item.qualification}</h3>
              <p className={styles.institution}>
                {item.institution}, {item.location}
              </p>

              {item.units.length > 0 ? (
                <div className={styles.units}>
                  <h4 className={styles.unitsHeading}>Relevant units</h4>
                  <ul className={styles.unitList}>
                    {item.units.map((unit) => (
                      <li key={unit.code} className={styles.unit}>
                        <span className={styles.unitCode}>{unit.code}</span>
                        <span>{unit.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <p className={styles.result}>
              <span className={styles.resultLabel}>{item.result.label}</span>
              <span className={styles.resultValue}>{item.result.value}</span>
              {item.result.note ? (
                <span className={styles.resultNote}>{item.result.note}</span>
              ) : null}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
