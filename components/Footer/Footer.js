import { profile } from "@/data/content";
import styles from "./Footer.module.css";

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
