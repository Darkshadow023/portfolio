"use client";

import { useEffect, useState } from "react";
import styles from "./TypedText.module.css";

// Types `text` out one character at a time, then leaves a blinking cursor.
// The full text is always in the markup: screen readers get it straight away,
// and the untyped part is only hidden visually, so the layout never jumps.
export default function TypedText({ text, speed = 45, startDelay = 400 }) {
  // null = not started yet (the server render, and no-JS, show the full text).
  const [count, setCount] = useState(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setCount(text.length);
      return undefined;
    }

    let current = 0;
    let timer = null;
    setCount(0);

    const tick = () => {
      current += 1;
      setCount(current);
      if (current < text.length) {
        timer = window.setTimeout(tick, speed);
      }
    };

    timer = window.setTimeout(tick, startDelay);
    return () => window.clearTimeout(timer);
  }, [text, speed, startDelay]);

  const shown = count === null ? text.length : count;
  const done = shown >= text.length;

  return (
    <span className={styles.wrapper}>
      <span className="sr-only">{text}</span>
      <span
        className={styles.visual}
        data-ready={count === null ? undefined : ""}
        aria-hidden="true"
      >
        <span>{text.slice(0, shown)}</span>
        <span className={`${styles.cursor} ${done ? styles.cursorIdle : ""}`} />
        <span className={styles.rest}>{text.slice(shown)}</span>
      </span>
    </span>
  );
}
