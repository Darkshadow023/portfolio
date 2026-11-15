import Reveal from "@/components/Reveal/Reveal";
import { contact } from "@/data/content";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <Reveal className={styles.panel}>
          <p className={styles.label}>
            <span className={styles.marker} aria-hidden="true" />
            Contact
          </p>
          <h2 id="contact-heading" className={styles.heading}>
            {contact.heading}
          </h2>
          <p className={styles.text}>{contact.text}</p>

          <a href={`mailto:${contact.email}`} className={styles.email}>
            {contact.email}
          </a>

          <ul className={styles.links}>
            {contact.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer me"
                >
                  <span className={styles.linkLabel}>{link.label}</span>
                  <span className={styles.linkHandle}>{link.handle}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
