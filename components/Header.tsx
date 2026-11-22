"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { BLOG_NAV, CV_PATH, NAV } from "@/lib/site";

type Theme = "light" | "dark";

export default function Header() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const onHome = pathname === "/";
  const onBlog = pathname.startsWith("/blog");

  /* theme: read what the head script already applied, then follow system changes */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const read = () => {
      const t = document.documentElement.getAttribute("data-theme");
      setTheme(t === "light" || t === "dark" ? t : mq.matches ? "light" : "dark");
    };
    read();
    mq.addEventListener("change", read);
    return () => mq.removeEventListener("change", read);
  }, []);

  const nextTheme: Theme | null = theme ? (theme === "dark" ? "light" : "dark") : null;

  const toggleTheme = useCallback(() => {
    if (!nextTheme) return;
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      /* storage can be blocked; the theme still applies for this visit */
    }
    setTheme(nextTheme);
  }, [nextTheme]);

  /* mobile menu: lock scroll, Esc closes, close when the viewport becomes wide */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    const mq = window.matchMedia("(max-width: 899px)");
    const onChange = () => {
      if (!mq.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
      document.body.style.overflow = "";
    };
  }, [open]);

  /* highlight the section in view */
  useEffect(() => {
    if (!onHome || !("IntersectionObserver" in window)) {
      setActive(null);
      return;
    }
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });
    return () => spy.disconnect();
  }, [onHome]);

  return (
    <header className="site-header" id="top">
      <div className="wrap header-row">
        <Link className="brand" href="/" aria-label="AK, Aditya Kapoor, home">
          AK<span aria-hidden="true">.</span>
        </Link>

        <nav className="nav" id="nav" aria-label="Primary" data-open={open}>
          <ul>
            {NAV.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={onHome ? `#${id}` : `/#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={BLOG_NAV.href} aria-current={onBlog ? "page" : undefined} onClick={() => setOpen(false)}>
                {BLOG_NAV.label}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="btn-text"
            id="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={nextTheme ? `Switch to ${nextTheme} theme` : "Switch colour theme"}
          >
            <span>{nextTheme ? (nextTheme === "light" ? "Light" : "Dark") : "Theme"}</span>
          </button>
          <a className="btn-text btn-text--cv" href={CV_PATH} download>
            CV&nbsp;&darr;
          </a>
          <button
            ref={menuBtn}
            className="btn-text menu-btn"
            id="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
