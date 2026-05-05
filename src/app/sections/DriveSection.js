import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function DriveSection() {
  return (
    <section className="section" id="drive">
      <div className="container">
        <AnimateOnScroll className="feature-row">
          <div className="feature-text">
            <h2>Drive when you want, make what you need</h2>
            <p>
              Make money on your schedule with deliveries or rides — or both. You
              can use your own car or choose a rental through Uber.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="#" className="btn btn-primary" id="start-driving-btn">
                Start driving
              </Link>
              <Link href="#" className="btn btn-chip" id="learn-drive-btn">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="feature-image">
            <svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: 12 }}>
              {/* Background */}
              <rect width="480" height="340" rx="12" fill="#fef4e8" />

              {/* Road lines */}
              <line x1="0" y1="280" x2="480" y2="280" stroke="#e0d0b8" strokeWidth="2" strokeDasharray="12 8">
                <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="1s" repeatCount="indefinite" />
              </line>

              {/* Ground shadow - pulses */}
              <ellipse cx="240" cy="268" rx="180" ry="16" fill="#e8d8c0">
                <animate attributeName="rx" values="175;185;175" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
              </ellipse>

              {/* Car group - bounces */}
              <g>
                <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0;0,-2;0,0" dur="1.5s" repeatCount="indefinite" />

                {/* Car body */}
                <rect x="130" y="185" width="220" height="75" rx="12" fill="#000" />

                {/* Car roof */}
                <rect x="175" y="155" width="130" height="35" rx="8" fill="#1a1a1a" />

                {/* Windows */}
                <rect x="180" y="160" width="52" height="28" rx="4" fill="#b0d4f1">
                  <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
                </rect>
                <rect x="238" y="160" width="52" height="28" rx="4" fill="#b0d4f1">
                  <animate attributeName="opacity" values="1;0.9;1" dur="3s" repeatCount="indefinite" />
                </rect>

                {/* Window divider */}
                <rect x="234" y="158" width="3" height="32" rx="1" fill="#000" />

                {/* Headlights */}
                <rect x="342" y="200" width="12" height="8" rx="3" fill="#f5e6a3">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite" />
                </rect>
                <rect x="126" y="200" width="12" height="8" rx="3" fill="#e74c3c">
                  <animate attributeName="opacity" values="1;0.5;1" dur="0.8s" repeatCount="indefinite" />
                </rect>

                {/* Bumpers */}
                <rect x="125" y="250" width="230" height="6" rx="3" fill="#222" />
              </g>

              {/* Front wheel - spins */}
              <g>
                <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0;0,-2;0,0" dur="1.5s" repeatCount="indefinite" />
                <circle cx="310" cy="262" r="18" fill="#333" />
                <circle cx="310" cy="262" r="12" fill="#555" />
                <circle cx="310" cy="262" r="4" fill="#888" />
                {/* Wheel spokes */}
                <g>
                  <animateTransform attributeName="transform" type="rotate" from="0 310 262" to="360 310 262" dur="0.8s" repeatCount="indefinite" />
                  <line x1="310" y1="250" x2="310" y2="274" stroke="#777" strokeWidth="1.5" />
                  <line x1="298" y1="262" x2="322" y2="262" stroke="#777" strokeWidth="1.5" />
                  <line x1="302" y1="254" x2="318" y2="270" stroke="#777" strokeWidth="1" />
                  <line x1="302" y1="270" x2="318" y2="254" stroke="#777" strokeWidth="1" />
                </g>
              </g>

              {/* Rear wheel - spins */}
              <g>
                <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0;0,-2;0,0" dur="1.5s" repeatCount="indefinite" />
                <circle cx="175" cy="262" r="18" fill="#333" />
                <circle cx="175" cy="262" r="12" fill="#555" />
                <circle cx="175" cy="262" r="4" fill="#888" />
                {/* Wheel spokes */}
                <g>
                  <animateTransform attributeName="transform" type="rotate" from="0 175 262" to="360 175 262" dur="0.8s" repeatCount="indefinite" />
                  <line x1="175" y1="250" x2="175" y2="274" stroke="#777" strokeWidth="1.5" />
                  <line x1="163" y1="262" x2="187" y2="262" stroke="#777" strokeWidth="1.5" />
                  <line x1="167" y1="254" x2="183" y2="270" stroke="#777" strokeWidth="1" />
                  <line x1="167" y1="270" x2="183" y2="254" stroke="#777" strokeWidth="1" />
                </g>
              </g>

              {/* Driver - bobs with car */}
              <g>
                <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0;0,-3;0,0" dur="1.5s" repeatCount="indefinite" />

                {/* Head */}
                <circle cx="265" cy="130" r="18" fill="#f5c49a" />

                {/* Hair */}
                <ellipse cx="265" cy="120" rx="16" ry="8" fill="#3d2c1e" />

                {/* Eyes */}
                <circle cx="260" cy="128" r="2" fill="#333" />
                <circle cx="271" cy="128" r="2" fill="#333" />

                {/* Smile */}
                <path d="M259 135 Q265 140 272 135" stroke="#c9956a" fill="none" strokeWidth="1.5" strokeLinecap="round" />

                {/* Body */}
                <rect x="252" y="148" width="26" height="20" rx="4" fill="#4a90d9" />

                {/* Arm waving */}
                <g style={{ transformOrigin: "278px 150px" }}>
                  <animateTransform attributeName="transform" type="rotate" values="0;-25;0;-15;0" dur="2s" repeatCount="indefinite" />
                  <rect x="275" y="148" width="18" height="6" rx="3" fill="#f5c49a" />
                  {/* Hand */}
                  <circle cx="293" cy="148" r="4" fill="#f5c49a">
                    <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" />
                  </circle>
                </g>
              </g>

              {/* Speed lines behind car */}
              <g opacity="0.3">
                <line x1="80" y1="200" x2="120" y2="200" stroke="#999" strokeWidth="2" strokeLinecap="round">
                  <animate attributeName="x1" values="80;40;80" dur="0.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="0.6s" repeatCount="indefinite" />
                </line>
                <line x1="70" y1="215" x2="115" y2="215" stroke="#999" strokeWidth="1.5" strokeLinecap="round">
                  <animate attributeName="x1" values="70;30;70" dur="0.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0;0.2" dur="0.8s" repeatCount="indefinite" />
                </line>
                <line x1="85" y1="230" x2="118" y2="230" stroke="#999" strokeWidth="1" strokeLinecap="round">
                  <animate attributeName="x1" values="85;50;85" dur="0.7s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.25;0;0.25" dur="0.7s" repeatCount="indefinite" />
                </line>
              </g>

              {/* Dust particles behind car */}
              <circle cx="130" cy="265" r="3" fill="#d4c8b0" opacity="0">
                <animate attributeName="cx" values="130;90;50" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="cy" values="265;258;250" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0.2;0" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="r" values="2;4;6" dur="1.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="125" cy="268" r="2" fill="#d4c8b0" opacity="0">
                <animate attributeName="cx" values="125;80;35" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="cy" values="268;262;255" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.15;0" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="r" values="1.5;3;5" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="135" cy="270" r="2" fill="#d4c8b0" opacity="0">
                <animate attributeName="cx" values="135;100;65" dur="1s" repeatCount="indefinite" />
                <animate attributeName="cy" values="270;265;260" dur="1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0.1;0" dur="1s" repeatCount="indefinite" />
                <animate attributeName="r" values="2;3.5;5.5" dur="1s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

