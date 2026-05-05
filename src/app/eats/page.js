"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const cuisines = [
  { name: "Pizza", emoji: "🍕", color: "#fff3e0" },
  { name: "Burgers", emoji: "🍔", color: "#fce4ec" },
  { name: "Sushi", emoji: "🍣", color: "#e8f5e9" },
  { name: "Chinese", emoji: "🥡", color: "#fff8e1" },
  { name: "Mexican", emoji: "🌮", color: "#fbe9e7" },
  { name: "Indian", emoji: "🍛", color: "#f3e5f5" },
  { name: "Thai", emoji: "🍜", color: "#e0f7fa" },
  { name: "Dessert", emoji: "🧁", color: "#fce4ec" },
];

const restaurants = [
  { name: "The Golden Wok", cuisine: "Chinese", rating: 4.8, time: "20-30 min", price: "$$", emoji: "🥡", promo: "Free delivery" },
  { name: "Napoli Express", cuisine: "Pizza", rating: 4.9, time: "15-25 min", price: "$", emoji: "🍕", promo: null },
  { name: "Sakura Sushi Bar", cuisine: "Japanese", rating: 4.7, time: "25-35 min", price: "$$$", emoji: "🍣", promo: "20% off" },
  { name: "Taco Fiesta", cuisine: "Mexican", rating: 4.6, time: "15-20 min", price: "$", emoji: "🌮", promo: "Buy 1 Get 1" },
  { name: "Burger Republic", cuisine: "American", rating: 4.5, time: "10-20 min", price: "$$", emoji: "🍔", promo: null },
  { name: "Spice Garden", cuisine: "Indian", rating: 4.8, time: "25-40 min", price: "$$", emoji: "🍛", promo: "Free delivery" },
  { name: "Thai Orchid", cuisine: "Thai", rating: 4.7, time: "20-30 min", price: "$$", emoji: "🍜", promo: null },
  { name: "Sweet Bliss Bakery", cuisine: "Dessert", rating: 4.9, time: "15-25 min", price: "$", emoji: "🧁", promo: "$0 delivery fee" },
  { name: "Mediterranean Grill", cuisine: "Mediterranean", rating: 4.6, time: "20-35 min", price: "$$", emoji: "🥙", promo: null },
];

const steps = [
  { num: "1", title: "Choose what you want", desc: "Browse restaurants and cuisines, then pick your favorite meal.", icon: "🔍" },
  { num: "2", title: "Place your order", desc: "Customize your order, add to cart, and checkout in seconds.", icon: "🛒" },
  { num: "3", title: "Track delivery", desc: "Watch your order in real-time on the map as it heads to you.", icon: "📍" },
  { num: "4", title: "Enjoy your meal", desc: "Your food arrives hot and fresh. Rate your experience!", icon: "🎉" },
];

export default function EatsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [address, setAddress] = useState("");

  const filtered = activeFilter === "All"
    ? restaurants
    : restaurants.filter((r) => r.cuisine === activeFilter || r.name.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#27ae60", padding: "80px 0 60px", position: "relative", overflow: "hidden" }}>
        {/* Floating food background */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            {[...Array(12)].map((_, i) => (
              <text
                key={i}
                x={`${(i * 8.5) % 100}%`}
                y={`${(i * 19 + 10) % 100}%`}
                fontSize={28 + (i % 3) * 8}
                fill="#fff"
              >
                {["🍕", "🍔", "🍣", "🌮", "🍜", "🥗", "🍛", "☕", "🧁", "🥡", "🍝", "🥙"][i]}
              </text>
            ))}
          </svg>
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-inner" style={{ alignItems: "center" }}>
            <AnimateOnScroll className="hero-content">
              <div style={{ marginBottom: 12 }}>
                <span style={{
                  display: "inline-block", padding: "6px 16px", background: "rgba(255,255,255,0.2)",
                  borderRadius: 999, color: "#fff", fontSize: "0.875rem", fontWeight: 600,
                  backdropFilter: "blur(8px)",
                }}>
                  🍽️ Uber Eats
                </span>
              </div>
              <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 16 }}>
                Order food to your door
              </h1>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.125rem", maxWidth: 480, marginBottom: 28 }}>
                Explore restaurants that deliver near you, then order your favorite meal with just a few taps.
              </p>
              <div style={{ display: "flex", gap: 12, maxWidth: 480 }}>
                <input
                  type="text"
                  className="hero-input"
                  placeholder="Enter delivery address"
                  aria-label="Delivery address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{ flex: 1, borderRadius: 999, border: "none" }}
                />
                <button className="btn btn-primary btn-lg" style={{ borderRadius: 999, background: "#000", flexShrink: 0 }}>
                  Find food
                </button>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="hero-visual">
              <svg viewBox="0 0 440 360" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 440 }}>
                <rect width="440" height="360" rx="20" fill="rgba(255,255,255,0.1)" />
                {/* Phone */}
                <rect x="130" y="20" width="180" height="320" rx="24" fill="#fff" />
                <rect x="140" y="45" width="160" height="275" rx="14" fill="#fafafa" />
                <rect x="185" y="28" width="70" height="10" rx="5" fill="#e0e0e0" />
                {/* App header */}
                <rect x="140" y="45" width="160" height="35" rx="14" fill="#27ae60" />
                <text x="175" y="68" fill="#fff" fontSize="12" fontWeight="700" fontFamily="Inter,sans-serif">Uber Eats</text>
                {/* Search bar */}
                <rect x="150" y="90" width="140" height="24" rx="12" fill="#fff" stroke="#e0e0e0" />
                <text x="162" y="106" fill="#ccc" fontSize="8" fontFamily="Inter,sans-serif">Search food...</text>
                {/* Food cards */}
                <rect x="150" y="124" width="65" height="55" rx="6" fill="#fff3e0" />
                <text x="170" y="155" fontSize="20" textAnchor="middle">🍕</text>
                <rect x="225" y="124" width="65" height="55" rx="6" fill="#fce4ec" />
                <text x="245" y="155" fontSize="20" textAnchor="middle">🍔</text>
                <rect x="150" y="188" width="65" height="55" rx="6" fill="#e8f5e9" />
                <text x="170" y="219" fontSize="20" textAnchor="middle">🍣</text>
                <rect x="225" y="188" width="65" height="55" rx="6" fill="#e0f7fa" />
                <text x="245" y="219" fontSize="20" textAnchor="middle">🍜</text>
                {/* Order button */}
                <rect x="155" y="260" width="130" height="30" rx="15" fill="#000" />
                <text x="192" y="280" fill="#fff" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">Order now</text>
                {/* Floating emojis */}
                <g><animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,0" dur="3s" repeatCount="indefinite" />
                  <text x="40" y="100" fontSize="36">🍕</text></g>
                <g><animateTransform attributeName="transform" type="translate" values="0,0;0,8;0,0" dur="2.5s" repeatCount="indefinite" />
                  <text x="360" y="150" fontSize="32">🍔</text></g>
                <g><animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="2s" repeatCount="indefinite" />
                  <text x="50" y="270" fontSize="28">🥗</text></g>
                <g><animateTransform attributeName="transform" type="translate" values="0,0;0,6;0,0" dur="3.2s" repeatCount="indefinite" />
                  <text x="350" y="280" fontSize="30">🌮</text></g>
              </svg>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Cuisine categories */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll className="section-header">
            <h2>What are you craving?</h2>
            <p>Browse by cuisine type and discover something delicious.</p>
          </AnimateOnScroll>
          <AnimateOnScroll stagger>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 16 }}>
              {cuisines.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setActiveFilter(activeFilter === c.name ? "All" : c.name)}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                    padding: "24px 12px", borderRadius: 16, border: activeFilter === c.name ? "2px solid #000" : "2px solid transparent",
                    background: c.color, cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                    transform: activeFilter === c.name ? "scale(1.05)" : "scale(1)",
                    animation: `fadeInUp 0.4s ease ${i * 0.06}s both`,
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>{c.emoji}</span>
                  <span style={{ fontWeight: 600, fontSize: "0.875rem", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>{c.name}</span>
                </button>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Restaurant list */}
      <section className="section" style={{ background: "#fafafa" }}>
        <div className="container">
          <AnimateOnScroll className="section-header" style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <h2 style={{ textAlign: "left", margin: 0 }}>
                {activeFilter === "All" ? "Popular near you" : activeFilter}
              </h2>
              {activeFilter !== "All" && (
                <button className="btn btn-chip btn-sm" onClick={() => setActiveFilter("All")}>
                  Show all ×
                </button>
              )}
            </div>
          </AnimateOnScroll>

          <div key={activeFilter} style={{ animation: "blurIn 0.4s ease both" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
              {filtered.map((r, i) => (
                <div
                  key={r.name}
                  style={{
                    background: "#fff", borderRadius: 16, overflow: "hidden",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                    cursor: "pointer",
                    animation: `fadeInUp 0.4s ease ${i * 0.06}s both`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)"; }}
                >
                  {/* Image area */}
                  <div style={{ height: 140, background: `linear-gradient(135deg, #f0f0f0, #e8e8e8)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <span style={{ fontSize: "3.5rem" }}>{r.emoji}</span>
                    {r.promo && (
                      <span style={{
                        position: "absolute", top: 12, left: 12, background: "#27ae60",
                        color: "#fff", padding: "4px 10px", borderRadius: 6,
                        fontSize: "0.75rem", fontWeight: 600,
                      }}>
                        {r.promo}
                      </span>
                    )}
                  </div>
                  {/* Info */}
                  <div style={{ padding: "16px 20px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                      <h4 style={{ margin: 0, fontSize: "1rem" }}>{r.name}</h4>
                      <span style={{
                        display: "flex", alignItems: "center", gap: 4,
                        background: "#f0f0f0", padding: "2px 8px", borderRadius: 6,
                        fontSize: "0.8125rem", fontWeight: 600,
                      }}>
                        ⭐ {r.rating}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.8125rem", color: "#888" }}>
                      {r.cuisine} · {r.time} · {r.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll className="section-header">
            <h2>How Uber Eats works</h2>
            <p>Getting food delivered is as easy as 1-2-3-4.</p>
          </AnimateOnScroll>
          <AnimateOnScroll stagger>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 24 }}>
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  style={{
                    textAlign: "center", padding: 32,
                    animation: `fadeInUp 0.5s ease ${i * 0.1}s both`,
                  }}
                >
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%", background: "#e8f5e9",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px", fontSize: "1.75rem",
                  }}>
                    {s.icon}
                  </div>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%", background: "#000",
                    color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "-28px auto 16px", fontSize: "0.75rem", fontWeight: 700,
                    position: "relative", top: -8, left: 24,
                  }}>
                    {s.num}
                  </div>
                  <h4 style={{ marginBottom: 8 }}>{s.title}</h4>
                  <p style={{ fontSize: "0.875rem", color: "#888", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll className="cta-banner" style={{ background: "linear-gradient(-45deg, #1b5e20, #27ae60, #2e7d32, #43a047)", backgroundSize: "400% 400%", animation: "gradientShift 8s ease infinite" }}>
            <h2>Hungry? We got you.</h2>
            <p>Order from the best restaurants in your city. Available 24/7.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="#" className="btn btn-secondary btn-lg">Order now</Link>
              <Link href="#" className="btn btn-secondary btn-lg">Become a partner</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
