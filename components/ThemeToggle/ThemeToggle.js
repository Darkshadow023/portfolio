"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

const STORAGE_KEY = "theme";

function readTheme() {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

export default function ThemeToggle() {
  // The real theme is set on <html> by the inline script in app/layout.js
  // before React loads. Both icons are in the markup and CSS shows the right
  // one, so this state is only needed for the button's label.
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(readTheme());

    // Follow the system setting until the visitor picks a theme themselves.
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onSystemChange = (event) => {
      let saved = null;
      try {
        saved = window.localStorage.getItem(STORAGE_KEY);
      } catch (error) {
        saved = null;
      }
      if (saved) return;
      const next = event.matches ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      setTheme(next);
    };

    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  function toggle() {
    const next = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      // Storage can be blocked (private mode). The theme still changes.
    }
    setTheme(next);
  }

  const label =
    theme === null
      ? "Toggle colour theme"
      : `Switch to ${theme === "dark" ? "light" : "dark"} theme`;

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <svg
        className={styles.sun}
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg
        className={styles.moon}
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
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
      </svg>
    </button>
  );
}
