"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Ride", href: "/#ride" },
  { label: "Drive", href: "/#drive" },
  { label: "Uber Eats", href: "/#eats" },
  { label: "Business", href: "/#business" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="main-nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" id="logo">
            Uber
          </Link>
          <ul className="nav-links" id="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? "active" : ""}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <Link href="/login" className="btn btn-chip btn-sm" id="login-btn">
              Log in
            </Link>
            <Link href="/signup" className="btn btn-primary btn-sm" id="signup-btn">
              Sign up
            </Link>
          </div>
          <button
            className={`nav-toggle${mobileOpen ? " open" : ""}`}
            id="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-nav${mobileOpen ? " open" : ""}`} id="mobile-nav">
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeMobile}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-actions">
          <Link
            href="/signup"
            className="btn btn-primary btn-lg"
            style={{ width: "100%" }}
            onClick={closeMobile}
          >
            Sign up
          </Link>
          <Link
            href="/login"
            className="btn btn-chip btn-lg"
            style={{ width: "100%" }}
            onClick={closeMobile}
          >
            Log in
          </Link>
        </div>
      </div>
    </>
  );
}
