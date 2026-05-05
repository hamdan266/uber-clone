import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function EatsSection() {
  return (
    <section className="section" style={{ background: "#fafafa" }} id="eats">
      <div className="container">
        <AnimateOnScroll className="feature-row reverse">
          <div className="feature-text">
            <h2>Order food to your door with Uber Eats</h2>
            <p>
              Get food from your favorite restaurants delivered fast. Browse local
              menus, track your order in real-time, and enjoy your meal.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="#" className="btn btn-primary" id="order-now-btn">
                Order now
              </Link>
              <Link href="#" className="btn btn-chip" id="learn-eats-btn">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="feature-image">
            <svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: 12 }}>
              <rect width="480" height="340" rx="12" fill="#fce8e6" />
              <rect x="140" y="100" width="200" height="160" rx="12" fill="#fff" stroke="#e0e0e0" />
              <circle cx="200" cy="160" r="30" fill="#f5a623" />
              <circle cx="280" cy="160" r="30" fill="#e74c3c" />
              <circle cx="240" cy="200" r="25" fill="#27ae60" />
              <rect x="180" y="230" width="120" height="8" rx="4" fill="#e0e0e0" />
              <rect x="340" y="230" width="60" height="30" rx="15" fill="#000" />
              <text x="355" y="250" fill="#fff" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="500">Order</text>
            </svg>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
