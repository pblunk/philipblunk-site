"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import type { MouseEvent } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";
type ViewTransitionLike = {
  ready: Promise<void>;
};
const transitionDuration = 1200;
const transitionEasing = "linear";
const maskImage = "radial-gradient(circle, #000 70%, transparent 71%)";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.localStorage.getItem("theme") === "light" ? "light" : "dark";
}

function getServerTheme(): Theme {
  return "dark";
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("themechange", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("themechange", callback);
  };
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getStoredTheme, getServerTheme);
  const transitioningRef = useRef(false);
  const Icon = theme === "dark" ? Sun : Moon;

  useEffect(() => {
    if (document.documentElement.dataset.theme !== theme) {
      document.documentElement.dataset.theme = theme;
    }
  }, [theme]);

  function applyTheme(next: Theme, options: { syncReact?: boolean } = {}) {
    const updateTheme = () => {
      document.documentElement.dataset.theme = next;
      window.localStorage.setItem("theme", next);
      window.dispatchEvent(new Event("themechange"));
    };

    if (options.syncReact) {
      flushSync(updateTheme);
      return;
    }

    updateTheme();
  }

  function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    if (transitioningRef.current) return;

    const next = theme === "dark" ? "light" : "dark";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const startViewTransition = (document as Document & {
      startViewTransition?: (callback: () => void) => ViewTransitionLike;
    }).startViewTransition;

    if (!startViewTransition || prefersReducedMotion) {
      applyTheme(next);
      return;
    }

    const toggleRect = event.currentTarget.getBoundingClientRect();
    const x = toggleRect.left + toggleRect.width / 2;
    const y = toggleRect.top + toggleRect.height / 2;
    const endRadius = Math.max(
      Math.hypot(x, y),
      Math.hypot(window.innerWidth - x, y),
      Math.hypot(x, window.innerHeight - y),
      Math.hypot(window.innerWidth - x, window.innerHeight - y),
    );
    const endDiameter = endRadius * 2;

    transitioningRef.current = true;
    root.classList.add("theme-circle-transitioning");

    let transition: ViewTransitionLike;

    try {
      transition = startViewTransition.call(document, () => {
        applyTheme(next, { syncReact: true });
      });
    } catch {
      root.classList.remove("theme-circle-transitioning");
      transitioningRef.current = false;
      applyTheme(next);
      return;
    }

    transition.ready
      .then(() => {
        const animation = root.animate(
          [
            {
              maskImage,
              maskPosition: `${x}px ${y}px`,
              maskRepeat: "no-repeat",
              maskSize: "0px 0px",
              WebkitMaskImage: maskImage,
              WebkitMaskPosition: `${x}px ${y}px`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "0px 0px",
            },
            {
              maskImage,
              maskPosition: `${x - endRadius}px ${y - endRadius}px`,
              maskRepeat: "no-repeat",
              maskSize: `${endDiameter}px ${endDiameter}px`,
              WebkitMaskImage: maskImage,
              WebkitMaskPosition: `${x - endRadius}px ${y - endRadius}px`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: `${endDiameter}px ${endDiameter}px`,
            },
          ] as Keyframe[],
          {
            duration: transitionDuration,
            easing: transitionEasing,
            pseudoElement: "::view-transition-new(root)",
          } as KeyframeAnimationOptions & { pseudoElement: string },
        );

        return animation.finished;
      })
      .catch(() => undefined)
      .finally(() => {
        root.classList.remove("theme-circle-transitioning");
        transitioningRef.current = false;
      });
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Icon aria-hidden="true" focusable="false" size={20} strokeWidth={1.9} />
    </button>
  );
}
