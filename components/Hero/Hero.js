import TypedText from "@/components/TypedText/TypedText";
import { profile } from "@/data/content";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.grid} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.location}>
            <span className={styles.dot} aria-hidden="true" />
            {profile.location}
          </p>
          <h1 id="hero-heading" className={styles.name}>
            {profile.name}
          </h1>
          <p className={styles.title}>
            <TypedText text={profile.title} />
          </p>
          <p className={styles.intro}>{profile.intro}</p>
          <p className={styles.lookingFor}>{profile.lookingFor}</p>
          <div className={styles.buttons}>
            <a
              href={profile.cvPath}
              download
              className={`${styles.button} ${styles.secondary}`}
            >
              Download CV
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
              </svg>
            </a>
          </div>
        </div>

        <dl className={styles.stats}>
          {profile.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.statLabel}>{stat.label}</dt>
              <dd className={styles.statValue}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
