"use client";

import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const exitDuration = 90;

function shouldHandleLink(anchor: HTMLAnchorElement) {
  if (anchor.target && anchor.target !== "_self") return false;
  if (anchor.hasAttribute("download")) return false;

  const url = new URL(anchor.href);
  if (url.origin !== window.location.origin) return false;
  if (url.protocol !== window.location.protocol) return false;

  return true;
}

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [exiting, setExiting] = useState(false);
  const [skipEnter, setSkipEnter] = useState(false);

  useEffect(() => {
    let exitTimer: number | undefined;

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented) return;
      if (event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest("a");
      if (!anchor || !shouldHandleLink(anchor)) return;

      const url = new URL(anchor.href);
      const isSamePath = url.pathname === window.location.pathname;
      const hasHash = url.hash.length > 0;

      if (hasHash) {
        setSkipEnter(true);
        return;
      }

      if (isSamePath) return;

      event.preventDefault();

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        router.push(`${url.pathname}${url.search}`);
        return;
      }

      setSkipEnter(false);
      setExiting(true);
      exitTimer = window.setTimeout(() => {
        setExiting(false);
        router.push(`${url.pathname}${url.search}`);
      }, exitDuration);
    }

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      window.clearTimeout(exitTimer);
    };
  }, [router]);

  return (
    <div
      key={pathname}
      className={`page-transition${exiting ? " is-exiting" : ""}${skipEnter ? " skip-enter" : ""}`}
    >
      {children}
    </div>
  );
}
