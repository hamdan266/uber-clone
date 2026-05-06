"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import LiveMap from "@/components/LiveMap";

/* ── Popular cities (instant, no API call) ── */
const popularCities = [
  { name: "New York", country: "US", flag: "🇺🇸", lat: 40.7128, lon: -74.006 },
  { name: "London", country: "GB", flag: "🇬🇧", lat: 51.5074, lon: -0.1278 },
  { name: "Paris", country: "FR", flag: "🇫🇷", lat: 48.8566, lon: 2.3522 },
  { name: "Tokyo", country: "JP", flag: "🇯🇵", lat: 35.6762, lon: 139.6503 },
  { name: "Jakarta", country: "ID", flag: "🇮🇩", lat: -6.2088, lon: 106.8456 },
  { name: "Sydney", country: "AU", flag: "🇦🇺", lat: -33.8688, lon: 151.2093 },
];

/* ── Category → Nominatim search keywords ── */
const categories = [
  {
    label: "Attractions",
    icon: "🏛️",
    overpass: `node["tourism"~"attraction|museum|artwork|viewpoint|gallery"](around:8000,LAT,LON);node["historic"](around:8000,LAT,LON);`,
  },
  {
    label: "Transport",
    icon: "✈️",
    overpass: `node["aeroway"="aerodrome"](around:40000,LAT,LON);node["railway"="station"](around:10000,LAT,LON);node["amenity"="bus_station"](around:8000,LAT,LON);`,
  },
  {
    label: "Hotels",
    icon: "🏨",
    overpass: `node["tourism"~"hotel|hostel|motel|guest_house"](around:6000,LAT,LON);way["tourism"~"hotel|hostel"](around:6000,LAT,LON);`,
  },
  {
    label: "Entertainment",
    icon: "🎭",
    overpass: `node["leisure"~"stadium|sports_centre"](around:10000,LAT,LON);node["amenity"~"theatre|cinema|nightclub"](around:8000,LAT,LON);`,
  },
  {
    label: "Restaurants",
    icon: "🍽️",
    overpass: `node["amenity"~"restaurant|cafe|fast_food|bar"](around:5000,LAT,LON);`,
  },
];

const categoryIcons = {
  Attractions: ["🏛️", "📍", "⛪", "🏰", "🗿", "⛩️", "🎡", "🌳"],
  Transport: ["✈️", "🚉", "🚌", "⛴️", "🚅", "🚢"],
  Hotels: ["🏨"],
  Entertainment: ["🎭", "🏟️", "🎵", "🎮", "🎨", "🎢"],
  Restaurants: ["🍽️", "☕", "🍕", "🍜", "🍣", "🍔"],
};

/* ── Debounce hook ── */
function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

/* ── Nominatim: search cities ── */
async function searchCities(query) {
  if (!query || query.length < 2) return [];
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=8&accept-language=en`,
      { headers: { "User-Agent": "UberCloneDemo/1.0" } }
    );
    const data = await res.json();
    return data
      .filter((d) => ["city", "administrative", "town", "village", "hamlet"].includes(d.type) || d.class === "place" || d.class === "boundary")
      .slice(0, 6)
      .map((d) => ({
        name: d.address?.city || d.address?.town || d.address?.village || d.name,
        country: d.address?.country_code?.toUpperCase() || "",
        flag: countryFlag(d.address?.country_code || ""),
        lat: parseFloat(d.lat),
        lon: parseFloat(d.lon),
        display: d.display_name,
      }));
  } catch {
    return [];
  }
}

/* ── Overpass API: search places by OSM tags ── */
async function searchPlaces(lat, lon, overpassTemplate) {
  try {
    const overpassQuery = overpassTemplate
      .replace(/LAT/g, lat.toFixed(6))
      .replace(/LON/g, lon.toFixed(6));

    const query = `[out:json][timeout:10];(${overpassQuery});out center 12;`;

    const res = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: `data=${encodeURIComponent(query)}`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const data = await res.json();
    const seen = new Set();
    return data.elements
      .filter((el) => {
        const name = el.tags?.name;
        if (!name || seen.has(name)) return false;
        seen.add(name);
        return true;
      })
      .slice(0, 9)
      .map((el) => ({
        name: el.tags.name,
        type: el.tags.tourism || el.tags.amenity || el.tags.aeroway || el.tags.railway || el.tags.leisure || el.tags.historic || "",
      }));
  } catch {
    return [];
  }
}

/* ── Country code → flag emoji ── */
function countryFlag(code) {
  if (!code) return "🌍";
  return code
    .toUpperCase()
    .split("")
    .map((c) => String.fromCodePoint(0x1f1e6 - 65 + c.charCodeAt(0)))
    .join("");
}

export default function ExploreSection() {
  const [activeCity, setActiveCity] = useState(popularCities[0]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debouncedSearch = useDebounce(searchQuery, 400);
  const searchRef = useRef(null);

  /* Search cities as user types */
  useEffect(() => {
    if (!debouncedSearch || debouncedSearch.length < 2) {
      setSuggestions([]);
      return;
    }
    searchCities(debouncedSearch).then(setSuggestions);
  }, [debouncedSearch]);

  /* Fetch places when city or category changes */
  const fetchPlaces = useCallback(async () => {
    setLoading(true);
    const cat = categories[activeCategory];
    const results = await searchPlaces(activeCity.lat, activeCity.lon, cat.overpass);
    setPlaces(results);
    setLoading(false);
  }, [activeCity, activeCategory]);

  useEffect(() => {
    fetchPlaces();
  }, [fetchPlaces]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selectCity = (city) => {
    setActiveCity(city);
    setActiveCategory(0);
    setSearchQuery("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const getRandomIcon = (catLabel) => {
    const icons = categoryIcons[catLabel] || ["📍"];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <section className="section" style={{ background: "#fafafa" }}>
      <div className="container">
        <AnimateOnScroll className="section-header" style={{ textAlign: "left" }}>
          <h2 style={{ textAlign: "left" }}>Explore your destination</h2>
        </AnimateOnScroll>

        {/* City search input */}
        <div ref={searchRef} style={{ position: "relative", marginBottom: 20, maxWidth: 480 }}>
          <div style={{ position: "relative" }}>
            <svg
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
            >
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setShowSuggestions(true); }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Search any city worldwide..."
              className="hero-input"
              style={{ paddingLeft: 42, width: "100%", borderRadius: 999 }}
              aria-label="Search city"
            />
          </div>

          {/* Autocomplete dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div style={{
              position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 50,
              background: "#fff", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              overflow: "hidden", animation: "fadeInUp 0.2s ease both",
            }}>
              {suggestions.map((city, i) => (
                <button
                  key={i}
                  onClick={() => selectCity(city)}
                  style={{
                    display: "flex", alignItems: "center", gap: 12, width: "100%",
                    padding: "14px 18px", border: "none", background: "none",
                    cursor: "pointer", textAlign: "left", fontSize: "0.9375rem",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    transition: "background 0.15s ease",
                    borderBottom: i < suggestions.length - 1 ? "1px solid #f0f0f0" : "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f6f6f6")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                >
                  <span style={{ fontSize: "1.25rem" }}>{city.flag}</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>{city.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#888", marginTop: 2 }}>
                      {city.display?.split(",").slice(1, 3).join(",").trim() || city.country}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Active city badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: "1.25rem" }}>{activeCity.flag}</span>
          <span style={{ fontWeight: 700, fontSize: "1.125rem" }}>{activeCity.name}</span>
        </div>

        {/* Popular city pills */}
        <div className="category-pills" style={{ marginBottom: 24 }}>
          {popularCities.map((city) => (
            <button
              key={city.name}
              className={`btn btn-chip${activeCity.name === city.name ? " active" : ""}`}
              onClick={() => selectCity(city)}
            >
              {city.flag} {city.name}
            </button>
          ))}
        </div>

        {/* Category tabs */}
        <div style={{ display: "flex", gap: 0, borderBottom: "2px solid #e0e0e0", marginBottom: 24, overflowX: "auto" }}>
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(i)}
              style={{
                padding: "12px 20px", fontSize: "0.9375rem",
                fontWeight: activeCategory === i ? 600 : 400,
                color: activeCategory === i ? "#000" : "#888",
                background: "none", border: "none", whiteSpace: "nowrap",
                borderBottom: activeCategory === i ? "2px solid #000" : "2px solid transparent",
                marginBottom: "-2px", cursor: "pointer", transition: "all 0.2s ease",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Map + Places grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24, alignItems: "start" }}>
          <div key={`map-${activeCity.name}`} style={{ animation: "blurIn 0.5s ease both" }}>
            <LiveMap lat={activeCity.lat} lon={activeCity.lon} zoom={13} height="360px" />
          </div>
          <div key={`${activeCity.name}-${activeCategory}`} style={{ animation: "blurIn 0.4s ease both", minHeight: 200 }}>
          {loading ? (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 48, gap: 12 }}>
              <div style={{
                width: 24, height: 24, border: "3px solid #e0e0e0", borderTopColor: "#000",
                borderRadius: "50%", animation: "spin 0.6s linear infinite",
              }} />
              <span style={{ color: "#888", fontSize: "0.9375rem" }}>Finding places in {activeCity.name}...</span>
            </div>
          ) : places.length > 0 ? (
            <div className="grid-3" style={{ gap: 12 }}>
              {places.map((place, i) => (
                <div
                  key={`${place.name}-${i}`}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "16px 20px", background: "#fff", borderRadius: "var(--radius-standard)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)", cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                    animation: `fadeInUp 0.4s ease ${i * 0.06}s both`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
                    <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{getRandomIcon(categories[activeCategory].label)}</span>
                    <span style={{ fontWeight: 500, fontSize: "0.9375rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {place.name}
                    </span>
                  </div>
                  <button
                    className="btn btn-primary btn-sm"
                    style={{ padding: "6px 16px", fontSize: "0.8125rem", flexShrink: 0, marginLeft: 8 }}
                    onClick={() => {
                      const pickup = document.getElementById("pickup-input") || document.getElementById("city-input") || document.getElementById("address-input") || document.getElementById("company-input");
                      const dest = document.getElementById("dest-input");
                      if (pickup) pickup.value = activeCity.name;
                      if (dest) dest.value = place.name;
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Go
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: 48, color: "#888" }}>
              <p style={{ fontSize: "1rem" }}>No places found for this category in {activeCity.name}.</p>
              <p style={{ fontSize: "0.875rem" }}>Try another category or search a different city.</p>
            </div>
          )}
        </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
