import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import LiveMap from "@/components/LiveMap";

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
              <Link href="/eats" className="btn btn-primary" id="order-now-btn">
                Order now
              </Link>
              <Link href="/eats" className="btn btn-chip" id="learn-eats-btn">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="feature-image" style={{ position: "relative" }}>
            <LiveMap lat={40.758} lon={-73.9855} zoom={14} height="320px" />
            {/* Floating food pins overlay */}
            <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" style={{
              position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none",
            }}>
              <g><animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="2.5s" repeatCount="indefinite" />
                <circle cx="120" cy="100" r="20" fill="#fff" stroke="#e0e0e0" /><text x="112" y="108" fontSize="18">🍕</text>
              </g>
              <g><animateTransform attributeName="transform" type="translate" values="0,0;0,5;0,0" dur="3s" repeatCount="indefinite" />
                <circle cx="320" cy="80" r="20" fill="#fff" stroke="#e0e0e0" /><text x="312" y="88" fontSize="18">🍔</text>
              </g>
              <g><animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="2s" repeatCount="indefinite" />
                <circle cx="380" cy="200" r="20" fill="#fff" stroke="#e0e0e0" /><text x="372" y="208" fontSize="18">🍣</text>
              </g>
              <g><animateTransform attributeName="transform" type="translate" values="0,0;0,6;0,0" dur="3.2s" repeatCount="indefinite" />
                <circle cx="80" cy="230" r="20" fill="#fff" stroke="#e0e0e0" /><text x="72" y="238" fontSize="18">🌮</text>
              </g>
              {/* Delivery route */}
              <path d="M240 280 Q200 200 160 160" stroke="#27ae60" strokeWidth="3" fill="none" strokeDasharray="8 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.5s" repeatCount="indefinite" />
              </path>
              <circle cx="240" cy="280" r="8" fill="#27ae60">
                <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
