"use client";

import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "section" | "figure";
  children: ReactNode;
  delay?: number;
  variant?: "default" | "media";
};

export default function Reveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  variant = "default",
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const revealClassName = `reveal reveal--${variant}${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`;
  const revealStyle = { "--reveal-delay": `${delay}ms`, ...style } as CSSProperties;

  function setElement(element: HTMLElement | null) {
    ref.current = element;
  }

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  if (Component === "section") {
    return <section ref={setElement} className={revealClassName} style={revealStyle} {...props}>{children}</section>;
  }

  if (Component === "figure") {
    return <figure ref={setElement} className={revealClassName} style={revealStyle} {...props}>{children}</figure>;
  }

  return <div ref={setElement} className={revealClassName} style={revealStyle} {...props}>{children}</div>;
}
