"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FloatingParticles from "@/components/FloatingParticles";

const tabData = {
  Ride: {
    heading: "Go anywhere with Uber",
    desc: "Request a ride, hop in, and go. Available in thousands of cities worldwide.",
    inputs: [
      { id: "pickup-input", placeholder: "Enter pickup location", label: "Pickup location" },
      { id: "dest-input", placeholder: "Enter destination", label: "Destination" },
    ],
    cta: [
      { label: "See prices", href: "#", id: "see-prices-btn", style: "btn btn-primary btn-lg" },
      { label: "Schedule for later", href: "#", id: "schedule-btn", style: "btn btn-chip btn-lg" },
    ],
  },
  Drive: {
    heading: "Drive when you want, make what you need",
    desc: "Make money on your schedule with deliveries or rides — or both. You can use your own car.",
    inputs: [
      { id: "city-input", placeholder: "Enter your city", label: "City" },
    ],
    cta: [
      { label: "Start driving", href: "#", id: "start-driving-hero", style: "btn btn-primary btn-lg" },
      { label: "Learn more", href: "#drive", id: "learn-drive-hero", style: "btn btn-chip btn-lg" },
    ],
  },
  Eats: {
    heading: "Order food to your door",
    desc: "Explore restaurants that deliver near you, then order your favorite meal.",
    inputs: [
      { id: "address-input", placeholder: "Enter delivery address", label: "Delivery address" },
    ],
    cta: [
      { label: "Find food", href: "#", id: "find-food-btn", style: "btn btn-primary btn-lg" },
      { label: "View all cities", href: "#", id: "view-cities-btn", style: "btn btn-chip btn-lg" },
    ],
  },
  Business: {
    heading: "Uber for Business",
    desc: "Solutions for companies of all sizes — from rides and meals to freight and delivery.",
    inputs: [
      { id: "company-input", placeholder: "Company email address", label: "Company email" },
    ],
    cta: [
      { label: "Get started", href: "/business/corporate-travel", id: "biz-start-btn", style: "btn btn-primary btn-lg" },
      { label: "See all solutions", href: "#business", id: "biz-solutions-btn", style: "btn btn-chip btn-lg" },
    ],
  },
};

const pills = Object.keys(tabData);

/* SVG illustrations per tab */
function RideSVG() {
  return (
    <svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 520 }}>
      <defs><filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <rect width="520" height="400" rx="12" fill="#f7f3ee" />
      <rect x="60" y="200" width="400" height="120" rx="8" fill="#e8e0d4" />
      <rect x="100" y="160" width="80" height="160" rx="4" fill="#d4c8b0" />
      <rect x="220" y="120" width="100" height="200" rx="4" fill="#c9b896" />
      <rect x="360" y="140" width="70" height="180" rx="4" fill="#d4c8b0" />
      <rect x="140" y="290" width="240" height="12" rx="6" fill="#4b4b4b" />
      <rect x="200" y="270" width="60" height="30" rx="4" fill="#000" />
      <circle cx="210" cy="300" r="8" fill="#333" /><circle cx="250" cy="300" r="8" fill="#333" />
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
  );
}

function DriveSVG() {
  return (
    <svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 520 }}>
      <rect width="520" height="400" rx="12" fill="#e8f5e9" />
      <rect x="0" y="320" width="520" height="80" fill="#c8e6c9" />
      <line x1="0" y1="340" x2="520" y2="340" stroke="#a5d6a7" strokeWidth="3" strokeDasharray="20 12">
        <animate attributeName="stroke-dashoffset" from="0" to="-64" dur="1s" repeatCount="indefinite" />
      </line>
      <g><animateTransform attributeName="transform" type="translate" values="-520,0;520,0" dur="6s" repeatCount="indefinite" />
        <rect x="200" y="280" width="120" height="50" rx="8" fill="#000" />
        <rect x="230" y="268" width="60" height="18" rx="4" fill="#1a1a1a" />
        <circle cx="220" cy="332" r="12" fill="#333" /><circle cx="300" cy="332" r="12" fill="#333" />
      </g>
      <circle cx="260" cy="120" r="60" fill="#fff" opacity="0.8" />
      <text x="225" y="115" fill="#000" fontSize="16" fontWeight="700" fontFamily="Inter,sans-serif">Earn</text>
      <text x="218" y="140" fill="#27ae60" fontSize="22" fontWeight="700" fontFamily="Inter,sans-serif">$26/hr</text>
    </svg>
  );
}

function EatsSVG() {
  return (
    <svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 520 }}>
      <rect width="520" height="400" rx="12" fill="#fff3e0" />
      <rect x="160" y="50" width="200" height="300" rx="24" fill="#000" />
      <rect x="170" y="70" width="180" height="260" rx="16" fill="#fff" />
      <rect x="170" y="70" width="180" height="36" rx="16" fill="#27ae60" />
      <text x="210" y="95" fill="#fff" fontSize="14" fontWeight="700" fontFamily="Inter,sans-serif">Uber Eats</text>
      <rect x="185" y="120" width="150" height="50" rx="8" fill="#fef4e8" />
      <rect x="185" y="180" width="150" height="50" rx="8" fill="#e8f5e9" />
      <rect x="185" y="240" width="150" height="50" rx="8" fill="#fce4ec" />
      <g><animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="2.5s" repeatCount="indefinite" /><text x="60" y="140" fontSize="40">🍕</text></g>
      <g><animateTransform attributeName="transform" type="translate" values="0,0;0,6;0,0" dur="3s" repeatCount="indefinite" /><text x="420" y="180" fontSize="36">🍔</text></g>
      <g><animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="2s" repeatCount="indefinite" /><text x="70" y="300" fontSize="32">🥗</text></g>
      <g><animateTransform attributeName="transform" type="translate" values="0,0;0,5;0,0" dur="3.2s" repeatCount="indefinite" /><text x="410" y="310" fontSize="34">🌮</text></g>
    </svg>
  );
}

function BusinessSVG() {
  return (
    <svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 520 }}>
      <rect width="520" height="400" rx="12" fill="#f0f0f0" />
      <rect x="60" y="60" width="400" height="280" rx="12" fill="#fff" stroke="#e0e0e0" />
      <rect x="60" y="60" width="400" height="44" rx="12" fill="#000" />
      <text x="85" y="88" fill="#fff" fontSize="14" fontWeight="700" fontFamily="Inter,sans-serif">Uber for Business</text>
      <rect x="80" y="130" width="160" height="80" rx="8" fill="#fafafa" stroke="#eee" />
      <text x="95" y="150" fill="#888" fontSize="10" fontFamily="Inter,sans-serif">Total rides</text>
      <text x="95" y="185" fill="#000" fontSize="28" fontWeight="700" fontFamily="Inter,sans-serif">12,847</text>
      <rect x="260" y="130" width="180" height="80" rx="8" fill="#fafafa" stroke="#eee" />
      <text x="275" y="150" fill="#888" fontSize="10" fontFamily="Inter,sans-serif">Savings</text>
      <text x="275" y="185" fill="#27ae60" fontSize="28" fontWeight="700" fontFamily="Inter,sans-serif">$48.2K</text>
      <rect x="80" y="230" width="50" height="80" rx="4" fill="#000"><animate attributeName="height" values="40;80;40" dur="3s" repeatCount="indefinite"/><animate attributeName="y" values="270;230;270" dur="3s" repeatCount="indefinite"/></rect>
      <rect x="145" y="250" width="50" height="60" rx="4" fill="#333"><animate attributeName="height" values="60;35;60" dur="3s" repeatCount="indefinite"/><animate attributeName="y" values="250;275;250" dur="3s" repeatCount="indefinite"/></rect>
      <rect x="210" y="240" width="50" height="70" rx="4" fill="#000"><animate attributeName="height" values="70;50;70" dur="3s" repeatCount="indefinite"/><animate attributeName="y" values="240;260;240" dur="3s" repeatCount="indefinite"/></rect>
      <rect x="275" y="255" width="50" height="55" rx="4" fill="#333"><animate attributeName="height" values="55;75;55" dur="3s" repeatCount="indefinite"/><animate attributeName="y" values="255;235;255" dur="3s" repeatCount="indefinite"/></rect>
      <rect x="340" y="245" width="50" height="65" rx="4" fill="#000"><animate attributeName="height" values="65;45;65" dur="3s" repeatCount="indefinite"/><animate attributeName="y" values="245;265;245" dur="3s" repeatCount="indefinite"/></rect>
    </svg>
  );
}

const svgMap = { Ride: RideSVG, Drive: DriveSVG, Eats: EatsSVG, Business: BusinessSVG };

export default function HeroSection() {
  const [activePill, setActivePill] = useState("Ride");
  const tab = tabData[activePill];
  const SVGComponent = svgMap[activePill];

  return (
    <section className="hero" id="ride" style={{ position: "relative", overflow: "hidden" }}>
      <FloatingParticles count={25} color="#000" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-inner">
          <div className="hero-content">
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
            <div key={activePill} style={{ animation: "blurIn 0.5s ease both" }}>
              <h1>{tab.heading}</h1>
              <p>{tab.desc}</p>
              <div className="hero-inputs">
                {tab.inputs.map((inp) => (
                  <input
                    key={inp.id}
                    type="text"
                    className="hero-input"
                    id={inp.id}
                    placeholder={inp.placeholder}
                    aria-label={inp.label}
                  />
                ))}
              </div>
              <div className="hero-cta">
                {tab.cta.map((c) => (
                  <Link key={c.id} href={c.href} className={c.style} id={c.id}>
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-visual" key={`svg-${activePill}`} style={{ animation: "scaleIn 0.5s ease both" }}>
            <SVGComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
