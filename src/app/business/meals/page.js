import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata = {
  title: "Meal Programs",
  description: "Keep your team fueled with Uber Eats meal credits and group ordering.",
};

export default function MealProgramsPage() {
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
              <h1>Meal programs your team will love</h1>
              <p>From daily lunch credits to team celebrations — keep your people energized with Uber Eats meal programs.</p>
              <div className="hero-cta">
                <Link href="#" className="btn btn-primary btn-lg">Get started</Link>
                <Link href="#" className="btn btn-chip btn-lg">See plans</Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="hero-visual">
              <svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 520 }}>
                <rect width="520" height="400" rx="16" fill="#fce8e6" />
                <rect x="175" y="30" width="170" height="340" rx="24" fill="#000" />
                <rect x="183" y="50" width="154" height="300" rx="16" fill="#fff" />
                <rect x="183" y="50" width="154" height="40" rx="16" fill="#27ae60" />
                <text x="210" y="76" fill="#fff" fontSize="13" fontWeight="700" fontFamily="Inter,sans-serif">Uber Eats</text>
                <rect x="193" y="100" width="134" height="70" rx="8" fill="#fef4e8" />
                <circle cx="230" cy="130" r="20" fill="#f5a623"><animate attributeName="r" values="18;22;18" dur="2s" repeatCount="indefinite" /></circle>
                <rect x="260" y="145" width="50" height="16" rx="8" fill="#000" />
                <rect x="193" y="180" width="134" height="70" rx="8" fill="#e8f5e9" />
                <circle cx="230" cy="210" r="20" fill="#27ae60"><animate attributeName="r" values="20;18;20" dur="2.5s" repeatCount="indefinite" /></circle>
                <rect x="260" y="225" width="50" height="16" rx="8" fill="#000" />
                <rect x="193" y="260" width="134" height="70" rx="8" fill="#fce4ec" />
                <circle cx="230" cy="290" r="20" fill="#e74c3c"><animate attributeName="r" values="19;21;19" dur="1.8s" repeatCount="indefinite" /></circle>
                <rect x="260" y="305" width="50" height="16" rx="8" fill="#000" />
                <g><animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,0" dur="3s" repeatCount="indefinite" /><text x="80" y="120" fontSize="36">🍕</text></g>
                <g><animateTransform attributeName="transform" type="translate" values="0,0;0,8;0,0" dur="2.5s" repeatCount="indefinite" /><text x="400" y="200" fontSize="32">🍔</text></g>
                <g><animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="2s" repeatCount="indefinite" /><text x="60" y="280" fontSize="28">🥗</text></g>
                <g><animateTransform attributeName="transform" type="translate" values="0,0;0,6;0,0" dur="3.5s" repeatCount="indefinite" /><text x="410" y="300" fontSize="30">🌮</text></g>
              </svg>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimateOnScroll className="section-header">
            <h2>Flexible meal solutions</h2>
            <p>From daily stipends to one-time events, we have a plan for every team.</p>
          </AnimateOnScroll>
          <AnimateOnScroll stagger className="grid-3">
            <div className="card"><div className="card-body"><div className="icon">🎫</div><h4>Meal credits</h4><p>Give employees a daily, weekly, or monthly food stipend they can use on Uber Eats.</p></div></div>
            <div className="card"><div className="card-body"><div className="icon">👥</div><h4>Group ordering</h4><p>Let everyone pick what they want from the same restaurant — delivered together.</p></div></div>
            <div className="card"><div className="card-body"><div className="icon">📅</div><h4>Recurring programs</h4><p>Set up weekly team lunches or monthly celebrations on autopilot.</p></div></div>
            <div className="card"><div className="card-body"><div className="icon">🏢</div><h4>Office catering</h4><p>Order large-format meals from local restaurants for meetings and events.</p></div></div>
            <div className="card"><div className="card-body"><div className="icon">📊</div><h4>Spending controls</h4><p>Set per-person budgets, restrict categories, and track every dollar spent.</p></div></div>
            <div className="card"><div className="card-body"><div className="icon">🌱</div><h4>Dietary options</h4><p>Filter by vegan, gluten-free, halal, and more to accommodate every team member.</p></div></div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimateOnScroll className="cta-banner">
            <h2>Feed your team the easy way</h2>
            <p>Set up a meal program in minutes. No contracts, cancel anytime.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="#" className="btn btn-secondary btn-lg">Start free trial</Link>
              <Link href="#" className="btn btn-secondary btn-lg">View pricing</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
