import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata = {
  title: "Delivery & Freight",
  description: "Move goods across town or across the country with Uber's logistics network.",
};

export default function FreightPage() {
  return (
    <>
      <Navbar />
      <section className="hero" style={{ background: "#fafafa" }}>
        <div className="container">
          <div className="hero-inner">
            <AnimateOnScroll className="hero-content">
              <div style={{ marginBottom: 16 }}>
                <span className="btn btn-chip btn-sm" style={{ pointerEvents: "none" }}>Uber for Business</span>
              </div>
              <h1>Delivery &amp; freight that moves at your speed</h1>
              <p>From last-mile delivery to full truckloads — ship anything, anywhere with Uber&apos;s logistics platform.</p>
              <div className="hero-cta">
                <Link href="#" className="btn btn-primary btn-lg">Ship now</Link>
                <Link href="#" className="btn btn-chip btn-lg">Get a quote</Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="hero-visual">
              <svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 520 }}>
                <rect width="520" height="400" rx="16" fill="#f0ebe4" />
                {/* Road */}
                <rect x="0" y="310" width="520" height="50" rx="0" fill="#d4c8b0" />
                <line x1="0" y1="335" x2="520" y2="335" stroke="#c9b896" strokeWidth="3" strokeDasharray="20 12">
                  <animate attributeName="stroke-dashoffset" from="0" to="-64" dur="1s" repeatCount="indefinite" />
                </line>
                {/* Truck body */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0;0,-2;0,0" dur="1.2s" repeatCount="indefinite" />
                  <rect x="120" y="220" width="200" height="90" rx="6" fill="#000" />
                  <rect x="320" y="240" width="80" height="70" rx="8" fill="#1a1a1a" />
                  <rect x="330" y="250" width="60" height="35" rx="4" fill="#b0d4f1">
                    <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
                  </rect>
                  {/* Uber logo on truck */}
                  <text x="180" y="275" fill="#fff" fontSize="22" fontWeight="700" fontFamily="Inter,sans-serif">Uber Freight</text>
                  {/* Packages on truck */}
                  <rect x="140" y="200" width="35" height="25" rx="3" fill="#c9956a" />
                  <rect x="180" y="195" width="30" height="30" rx="3" fill="#e8a85c" />
                  <rect x="215" y="205" width="25" height="20" rx="3" fill="#d4a054" />
                  <rect x="245" y="198" width="35" height="27" rx="3" fill="#c9956a" />
                  <rect x="285" y="202" width="28" height="23" rx="3" fill="#e8a85c" />
                </g>
                {/* Front wheel */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0;0,-2;0,0" dur="1.2s" repeatCount="indefinite" />
                  <circle cx="360" cy="312" r="20" fill="#333" />
                  <circle cx="360" cy="312" r="12" fill="#555" />
                  <circle cx="360" cy="312" r="4" fill="#888" />
                  <g><animateTransform attributeName="transform" type="rotate" from="0 360 312" to="360 360 312" dur="0.6s" repeatCount="indefinite" />
                    <line x1="360" y1="296" x2="360" y2="328" stroke="#777" strokeWidth="2" />
                    <line x1="344" y1="312" x2="376" y2="312" stroke="#777" strokeWidth="2" />
                  </g>
                </g>
                {/* Rear wheel */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0;0,-2;0,0" dur="1.2s" repeatCount="indefinite" />
                  <circle cx="180" cy="312" r="20" fill="#333" />
                  <circle cx="180" cy="312" r="12" fill="#555" />
                  <circle cx="180" cy="312" r="4" fill="#888" />
                  <g><animateTransform attributeName="transform" type="rotate" from="0 180 312" to="360 180 312" dur="0.6s" repeatCount="indefinite" />
                    <line x1="180" y1="296" x2="180" y2="328" stroke="#777" strokeWidth="2" />
                    <line x1="164" y1="312" x2="196" y2="312" stroke="#777" strokeWidth="2" />
                  </g>
                </g>
                {/* Map pins */}
                <g><animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="2s" repeatCount="indefinite" />
                  <circle cx="80" cy="120" r="12" fill="#000" /><circle cx="80" cy="120" r="5" fill="#fff" />
                  <path d="M80 132 L80 150" stroke="#000" strokeWidth="2" />
                </g>
                <g><animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="2.5s" repeatCount="indefinite" />
                  <circle cx="440" cy="100" r="12" fill="#27ae60" /><circle cx="440" cy="100" r="5" fill="#fff" />
                  <path d="M440 112 L440 130" stroke="#27ae60" strokeWidth="2" />
                </g>
                {/* Route line */}
                <path d="M80 140 Q260 60 440 100" stroke="#000" strokeWidth="2" fill="none" strokeDasharray="8 4">
                  <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.5s" repeatCount="indefinite" />
                </path>
              </svg>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimateOnScroll className="section-header">
            <h2>Ship smarter with Uber</h2>
            <p>Our logistics platform connects shippers with carriers instantly.</p>
          </AnimateOnScroll>
          <AnimateOnScroll stagger className="grid-3">
            <div className="card"><div className="card-body"><div className="icon">📦</div><h4>Last-mile delivery</h4><p>On-demand local delivery for packages, documents, and anything in between.</p></div></div>
            <div className="card"><div className="card-body"><div className="icon">🚛</div><h4>Full truckload</h4><p>Book full truckloads with instant pricing and real-time tracking across the country.</p></div></div>
            <div className="card"><div className="card-body"><div className="icon">📍</div><h4>Real-time tracking</h4><p>Track every shipment from pickup to delivery with live GPS updates.</p></div></div>
            <div className="card"><div className="card-body"><div className="icon">💰</div><h4>Transparent pricing</h4><p>No hidden fees. Get upfront quotes and pay only for what you ship.</p></div></div>
            <div className="card"><div className="card-body"><div className="icon">🔄</div><h4>API integration</h4><p>Connect your systems directly with our REST API for automated shipping workflows.</p></div></div>
            <div className="card"><div className="card-body"><div className="icon">📋</div><h4>Claims & support</h4><p>Dedicated support team and streamlined claims process for peace of mind.</p></div></div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimateOnScroll className="cta-banner">
            <h2>Move your business forward</h2>
            <p>Join 10,000+ shippers using Uber Freight to move goods faster.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="#" className="btn btn-secondary btn-lg">Get a quote</Link>
              <Link href="#" className="btn btn-secondary btn-lg">Talk to sales</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
