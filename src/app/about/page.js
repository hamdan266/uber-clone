import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import "@/styles/about.css";

export const metadata = {
  title: "About Us",
  description: "About Uber. We reimagine the way the world moves for the better.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="about-hero" id="about-hero">
        <div className="about-hero-bg">
          <div className="about-hero-gradient"></div>
        </div>
        <div className="container about-hero-content">
          <span className="about-hero-label">About us</span>
          <h1 className="about-hero-title">We reimagine the way the world moves for the better</h1>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll className="about-mission">
            <h2>We reimagine the way the world moves for the better</h2>
            <p>Movement is what we power. It&apos;s our lifeblood. It runs through our veins. It&apos;s what gets us out of bed each morning. It pushes us to constantly reimagine how we can move better. For you. For all the places you want to go. For all the things you want to get. For all the ways you want to earn. Across the entire world. In real time. At the incredible speed of now.</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CEO Letter */}
      <section className="about-ceo-section">
        <div className="container">
          <AnimateOnScroll className="about-ceo">
            <div className="about-ceo-image">
              <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="about-ceo-svg">
                <rect width="400" height="400" fill="#d4d0ca"/>
                <circle cx="200" cy="150" r="60" fill="#b0a89c"/>
                <ellipse cx="200" cy="340" rx="100" ry="80" fill="#b0a89c"/>
                <circle cx="180" cy="140" r="5" fill="#666"/>
                <circle cx="220" cy="140" r="5" fill="#666"/>
                <path d="M185 165 Q200 180 215 165" stroke="#666" fill="none" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="about-ceo-content">
              <h2>A letter from the CEO</h2>
              <p>At Uber, we see challenges as opportunities. Our mission to bring transportation — for everyone, everywhere — is more relevant than ever. We&apos;re not just a ride-sharing company. We&apos;re a technology platform that moves people, food, and goods around cities.</p>
              <Link href="#" className="btn btn-primary" id="read-letter-btn">Read the letter</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll className="feature-row">
            <div className="feature-image">
              <svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: 12 }}>
                <rect width="480" height="340" fill="#2d5016"/>
                <rect x="0" y="170" width="480" height="170" fill="#3a6b1e"/>
                <circle cx="120" cy="120" r="50" fill="#4a8c2a"/>
                <circle cx="240" cy="100" r="60" fill="#3d7a22"/>
                <circle cx="360" cy="130" r="45" fill="#4a8c2a"/>
                <circle cx="180" cy="80" r="35" fill="#5a9c3a"/>
                <circle cx="300" cy="90" r="40" fill="#5a9c3a"/>
                <path d="M0 200 Q120 180 240 200 Q360 220 480 200 L480 340 L0 340Z" fill="#4a8c2a"/>
              </svg>
            </div>
            <div className="feature-text">
              <h2>Sustainability</h2>
              <p>Uber is committed to becoming a fully electric, zero-emission platform by 2040. We&apos;re investing in electric vehicles, expanding green ride options, and partnering with cities to build more sustainable transportation systems.</p>
              <Link href="#" className="btn btn-primary" id="sustainability-btn">Learn more</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Rides and Beyond */}
      <section className="section" style={{ background: "#fafafa" }}>
        <div className="container">
          <AnimateOnScroll className="feature-row reverse">
            <div className="feature-image">
              <svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: 12 }}>
                <rect width="480" height="340" fill="#f0ebe4"/>
                <rect x="40" y="60" width="400" height="220" rx="8" fill="#e8e0d4"/>
                <rect x="80" y="100" width="140" height="90" rx="4" fill="#d4c8b0"/>
                <rect x="260" y="100" width="140" height="90" rx="4" fill="#d4c8b0"/>
                <circle cx="90" cy="130" r="15" fill="#b0a89c"/>
                <circle cx="120" cy="130" r="15" fill="#b0a89c"/>
                <circle cx="270" cy="130" r="15" fill="#b0a89c"/>
                <circle cx="300" cy="130" r="15" fill="#b0a89c"/>
                <circle cx="330" cy="130" r="15" fill="#b0a89c"/>
              </svg>
            </div>
            <div className="feature-text">
              <h2>Rides and beyond</h2>
              <p>In addition to helping riders find a way to go from point A to point B, we&apos;re helping people order food quickly and affordably, removing barriers to healthcare, creating new freight-booking solutions, and helping companies simplify travel and expense management.</p>
              <Link href="#" className="btn btn-primary" id="rides-btn">Learn more</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Safety */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll className="feature-row">
            <div className="feature-text">
              <h2>Your safety drives us</h2>
              <p>Whether you&apos;re in the back seat or behind the wheel, your safety is essential. We are committed to doing our part, and technology is at the heart of our approach.</p>
              <Link href="#" className="btn btn-primary" id="safety-btn">Learn more</Link>
            </div>
            <div className="about-safety-icon">
              <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" className="safety-shield">
                <path d="M100 20 L180 60 L180 140 Q180 200 100 230 Q20 200 20 140 L20 60 Z" fill="#1a73e8"/>
                <path d="M100 40 L160 70 L160 135 Q160 185 100 210 Q40 185 40 135 L40 70 Z" fill="#4a90d9"/>
                <path d="M80 130 L95 145 L130 100" stroke="#fff" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Company Info */}
      <section className="section" style={{ background: "#fafafa" }}>
        <div className="container">
          <AnimateOnScroll className="section-header">
            <h2>Company info</h2>
          </AnimateOnScroll>
          <AnimateOnScroll stagger className="grid-3">
            <div className="card about-info-card">
              <div className="about-info-card-image" style={{ background: "#e8d8c0" }}>
                <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
                  <rect width="300" height="180" fill="#1a1a2e"/>
                  <rect x="60" y="40" width="40" height="100" rx="2" fill="#e2b53a" opacity="0.8"/>
                  <rect x="120" y="60" width="40" height="80" rx="2" fill="#e2b53a" opacity="0.6"/>
                  <rect x="180" y="30" width="40" height="110" rx="2" fill="#e2b53a" opacity="0.9"/>
                </svg>
              </div>
              <div className="card-body">
                <h4>Investor relations</h4>
                <p>Access quarterly earnings, SEC filings, and shareholder information.</p>
                <Link href="#" className="btn btn-primary btn-sm" id="investor-btn">Learn more</Link>
              </div>
            </div>
            <div className="card about-info-card">
              <div className="about-info-card-image" style={{ background: "#c9daf8" }}>
                <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
                  <rect width="300" height="180" fill="#1a73e8"/>
                  <text x="50" y="100" fill="#fff" fontSize="20" fontFamily="Inter,sans-serif" fontWeight="700">Stand up</text>
                  <text x="50" y="130" fill="#fff" fontSize="20" fontFamily="Inter,sans-serif" fontWeight="700">Speak up</text>
                </svg>
              </div>
              <div className="card-body">
                <h4>Company news</h4>
                <p>Get the latest news, announcements, and stories from Uber&apos;s newsroom.</p>
                <Link href="#" className="btn btn-primary btn-sm" id="news-btn">Learn more</Link>
              </div>
            </div>
            <div className="card about-info-card">
              <div className="about-info-card-image" style={{ background: "#d4edda" }}>
                <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
                  <rect width="300" height="180" fill="#f8f4ef"/>
                  <circle cx="100" cy="90" r="40" fill="#e8d8c0"/>
                  <circle cx="200" cy="90" r="40" fill="#d4c8b0"/>
                  <circle cx="150" cy="70" r="35" fill="#c9b896"/>
                </svg>
              </div>
              <div className="card-body">
                <h4>Careers</h4>
                <p>Join us. We&apos;re building technology that moves the world.</p>
                <Link href="#" className="btn btn-primary btn-sm" id="careers-btn">Search open roles</Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Social */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll className="section-header">
            <h2>Keep up with the latest</h2>
          </AnimateOnScroll>
          <AnimateOnScroll stagger className="about-social-grid">
            <Link href="#" className="about-social-item" id="social-facebook">
              <div className="about-social-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#000"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <span>Facebook</span>
            </Link>
            <Link href="#" className="about-social-item" id="social-twitter">
              <div className="about-social-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#000"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
              <span>Twitter</span>
            </Link>
            <Link href="#" className="about-social-item" id="social-instagram">
              <div className="about-social-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#000"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
              <span>Instagram</span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Reimagine CTA */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll className="about-reimagine">
            <div className="about-reimagine-text">
              <h2>Come reimagine with us</h2>
              <Link href="#" className="btn btn-primary btn-lg" id="search-roles-btn">Search open roles</Link>
            </div>
            <div className="about-reimagine-visual">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: 160 }}>
                <circle cx="100" cy="100" r="90" fill="#e8f0fe"/>
                <circle cx="100" cy="80" r="35" fill="#a8c7fa"/>
                <ellipse cx="100" cy="160" rx="50" ry="30" fill="#a8c7fa"/>
                <circle cx="85" cy="74" r="4" fill="#4a7cc9"/>
                <circle cx="115" cy="74" r="4" fill="#4a7cc9"/>
                <path d="M88 90 Q100 102 112 90" stroke="#4a7cc9" fill="none" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
