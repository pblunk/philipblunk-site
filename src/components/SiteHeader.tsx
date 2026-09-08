"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";

type NavLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  logoHref?: string;
  logoLabel?: string;
  links?: NavLink[];
};

const defaultLinks: NavLink[] = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const projectLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader({ logoHref, logoLabel, links }: SiteHeaderProps) {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const resolvedLinks = links ?? (isHomepage ? defaultLinks : projectLinks);
  const resolvedLogoHref = logoHref ?? (isHomepage ? "#top" : "/");
  const resolvedLogoLabel = logoLabel ?? (isHomepage ? "Back to top" : "Back to homepage");
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    function updateScrolled() {
      const nextScrolled = window.scrollY > 8;
      if (nextScrolled === scrolledRef.current) return;
      scrolledRef.current = nextScrolled;
      setScrolled(nextScrolled);
    }

    const frame = window.requestAnimationFrame(updateScrolled);
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__inner shell">
        <Link className="brand" href={resolvedLogoHref} aria-label={resolvedLogoLabel}>Phil<span>.</span></Link>
        <nav aria-label="Primary navigation">
          <div className="desktop-links">
            {resolvedLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
          <MobileMenu links={resolvedLinks} />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
