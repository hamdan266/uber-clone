"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FloatingParticles from "@/components/FloatingParticles";

const pills = ["Ride", "Drive", "Eats", "Business"];

export default function HeroSection() {
  const [activePill, setActivePill] = useState("Ride");

  return (
    <section className="hero" id="ride" style={{ position: "relative", overflow: "hidden" }}>
      <FloatingParticles count={25} color="#000" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-inner">
          <AnimateOnScroll className="hero-content">
            <div className="category-pills" style={{ marginBottom: 24 }}>
              {pills.map((pill) => (
                <button
                  key={pill}
                  className={`btn btn-chip${activePill === pill ? " active" : ""}`}
                  id={`pill-${pill.toLowerCase()}`}
                  onClick={() => setActivePill(pill)}
                >
                  {pill}
                </button>
              ))}
            </div>
            <h1>Go anywhere with Uber</h1>
            <p>Request a ride, hop in, and go. Available in thousands of cities worldwide.</p>
            <div className="hero-inputs">
              <input
                type="text"
                className="hero-input"
                id="pickup-input"
                placeholder="Enter pickup location"
                aria-label="Pickup location"
              />
              <input
                type="text"
                className="hero-input"
                id="dest-input"
                placeholder="Enter destination"
                aria-label="Destination"
              />
            </div>
            <div className="hero-cta">
              <Link href="#" className="btn btn-primary btn-lg" id="see-prices-btn">
                See prices
              </Link>
              <Link href="#" className="btn btn-chip btn-lg" id="schedule-btn">
                Schedule for later
              </Link>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll className="hero-visual">
            <svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 520 }}>
              <defs>
                <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <rect width="520" height="400" rx="12" fill="#f7f3ee" />
              <rect x="60" y="200" width="400" height="120" rx="8" fill="#e8e0d4" />
              <rect x="100" y="160" width="80" height="160" rx="4" fill="#d4c8b0" />
              <rect x="220" y="120" width="100" height="200" rx="4" fill="#c9b896" />
              <rect x="360" y="140" width="70" height="180" rx="4" fill="#d4c8b0" />
              <rect x="140" y="290" width="240" height="12" rx="6" fill="#4b4b4b" />
              <rect x="200" y="270" width="60" height="30" rx="4" fill="#000" />
              <circle cx="210" cy="300" r="8" fill="#333" />
              <circle cx="250" cy="300" r="8" fill="#333" />
              <circle cx="380" cy="100" r="30" fill="#f5a623" opacity="0.8" />
              <circle cx="120" cy="80" r="15" fill="#f5a623" opacity="0.4" />
              <path d="M80 320 Q260 280 440 320" stroke="#000" strokeWidth="3" fill="none" strokeDasharray="8 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="2s" repeatCount="indefinite"/>
              </path>
              <circle cx="80" cy="320" r="6" fill="#000" />
              <circle cx="440" cy="320" r="8" fill="#27ae60" filter="url(#glow)">
                <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

