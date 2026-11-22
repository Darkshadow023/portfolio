"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  [prop: string]: unknown;
};

/** Fades and lifts its element in when it scrolls into view. Content stays visible without JS. */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as ElementType;
  return (
    <Component ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Component>
  );
}
