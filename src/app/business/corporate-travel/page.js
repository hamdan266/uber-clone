import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata = {
  title: "Corporate Travel",
  description: "Simplify business travel with Uber for Business. Centralized dashboard, expensing tools, and global coverage.",
};

export default function CorporateTravelPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero" style={{ background: "#fafafa" }}>
        <div className="container">
          <div className="hero-inner">
            <AnimateOnScroll className="hero-content">
              <div style={{ marginBottom: 16 }}>
                <span className="btn btn-chip btn-sm" style={{ pointerEvents: "none" }}>Uber for Business</span>
              </div>
              <h1>Corporate travel, simplified</h1>
              <p>Give your team a seamless travel experience with centralized billing, policy controls, and real-time reporting — all in one dashboard.</p>
              <div className="hero-cta">
                <Link href="#" className="btn btn-primary btn-lg">Get started</Link>
                <Link href="#" className="btn btn-chip btn-lg">Contact sales</Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="hero-visual">
              <svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 520 }}>
                <rect width="520" height="400" rx="16" fill="#f0f0f0" />
                {/* Dashboard mockup */}
                <rect x="40" y="40" width="440" height="320" rx="12" fill="#fff" stroke="#e0e0e0" />
                <rect x="40" y="40" width="440" height="50" rx="12" fill="#000" />
                <text x="65" y="72" fill="#fff" fontSize="16" fontWeight="700" fontFamily="Inter,sans-serif">Uber for Business</text>
                <circle cx="450" cy="65" r="12" fill="#333" />
                {/* Sidebar */}
                <rect x="40" y="90" width="120" height="270" fill="#fafafa" />
                <rect x="55" y="110" width="90" height="10" rx="5" fill="#e0e0e0" />
                <rect x="55" y="130" width="70" height="10" rx="5" fill="#000" />
                <rect x="55" y="150" width="80" height="10" rx="5" fill="#e0e0e0" />
                <rect x="55" y="170" width="60" height="10" rx="5" fill="#e0e0e0" />
                <rect x="55" y="190" width="75" height="10" rx="5" fill="#e0e0e0" />
                {/* Chart area */}
                <rect x="180" y="110" width="280" height="120" rx="8" fill="#fafafa" />
                <text x="195" y="135" fill="#000" fontSize="12" fontWeight="600" fontFamily="Inter,sans-serif">Travel spend</text>
                <rect x="200" y="155" width="30" height="60" rx="4" fill="#000"><animate attributeName="height" values="20;60;20" dur="3s" repeatCount="indefinite" /><animate attributeName="y" values="195;155;195" dur="3s" repeatCount="indefinite" /></rect>
                <rect x="240" y="175" width="30" height="40" rx="4" fill="#333"><animate attributeName="height" values="40;25;40" dur="3s" repeatCount="indefinite" /><animate attributeName="y" values="175;190;175" dur="3s" repeatCount="indefinite" /></rect>
                <rect x="280" y="160" width="30" height="55" rx="4" fill="#000"><animate attributeName="height" values="55;35;55" dur="3s" repeatCount="indefinite" /><animate attributeName="y" values="160;180;160" dur="3s" repeatCount="indefinite" /></rect>
                <rect x="320" y="170" width="30" height="45" rx="4" fill="#333"><animate attributeName="height" values="45;60;45" dur="3s" repeatCount="indefinite" /><animate attributeName="y" values="170;155;170" dur="3s" repeatCount="indefinite" /></rect>
                <rect x="360" y="150" width="30" height="65" rx="4" fill="#000"><animate attributeName="height" values="65;40;65" dur="3s" repeatCount="indefinite" /><animate attributeName="y" values="150;175;150" dur="3s" repeatCount="indefinite" /></rect>
                <rect x="400" y="165" width="30" height="50" rx="4" fill="#333"><animate attributeName="height" values="50;30;50" dur="3s" repeatCount="indefinite" /><animate attributeName="y" values="165;185;165" dur="3s" repeatCount="indefinite" /></rect>
                {/* Cards */}
                <rect x="180" y="250" width="130" height="90" rx="8" fill="#fff" stroke="#e8e8e8" />
                <text x="195" y="275" fill="#000" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">Active riders</text>
                <text x="195" y="310" fill="#000" fontSize="24" fontWeight="700" fontFamily="Inter,sans-serif">2,847</text>
                <rect x="330" y="250" width="130" height="90" rx="8" fill="#fff" stroke="#e8e8e8" />
                <text x="345" y="275" fill="#000" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">Avg. savings</text>
                <text x="345" y="310" fill="#000" fontSize="24" fontWeight="700" fontFamily="Inter,sans-serif">34%</text>
              </svg>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll className="section-header">
            <h2>Everything your team needs</h2>
            <p>Manage business travel from one powerful dashboard.</p>
          </AnimateOnScroll>
          <AnimateOnScroll stagger className="grid-3">
            <div className="card">
              <div className="card-body">
                <div className="icon">📊</div>
                <h4>Centralized dashboard</h4>
                <p>Monitor all travel activity, costs, and policy compliance from a single view.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="icon">💳</div>
                <h4>Automated expensing</h4>
                <p>Eliminate manual expense reports. Rides are automatically categorized and billed.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="icon">🔒</div>
                <h4>Travel policies</h4>
                <p>Set ride budgets, approved hours, and geographic limits for your organization.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="icon">🌍</div>
                <h4>Global coverage</h4>
                <p>Available in 10,000+ cities. Your team rides with Uber wherever business takes them.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="icon">🛡️</div>
                <h4>Safety features</h4>
                <p>Real-time ride tracking, trip sharing, and 24/7 incident support for peace of mind.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="icon">📱</div>
                <h4>Employee app</h4>
                <p>Employees use the same Uber app they love — no separate download needed.</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll className="cta-banner">
            <h2>Ready to simplify business travel?</h2>
            <p>Join thousands of companies using Uber for Business to save time and money.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="#" className="btn btn-secondary btn-lg">Get started free</Link>
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
