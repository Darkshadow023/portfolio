import Section from "@/components/Section/Section";
import Reveal from "@/components/Reveal/Reveal";
import { skills } from "@/data/content";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <Section id="skills" label="Skills" heading="What I work with">
      <div className={styles.groups}>
        {skills.map((group, index) => (
          <Reveal
            key={group.group}
            className={styles.group}
            delay={index * 100}
          >
            <h3 className={styles.groupName}>{group.group}</h3>
            <ul className={styles.chips}>
              {group.items.map((item) => (
                <li key={item} className={styles.chip}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
