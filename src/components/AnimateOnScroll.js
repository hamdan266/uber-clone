"use client";

import { useRef, useEffect } from "react";

export default function AnimateOnScroll({ children, className = "", stagger = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass = stagger ? "stagger-children" : "animate-on-scroll";

  return (
    <div ref={ref} className={`${baseClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
