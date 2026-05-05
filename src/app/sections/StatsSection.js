import AnimateOnScroll from "@/components/AnimateOnScroll";
import StatCounter from "@/components/StatCounter";

const stats = [
  { target: 10000, suffix: "+", label: "Cities worldwide" },
  { target: 130, suffix: "M+", label: "Monthly active riders" },
  { target: 6, suffix: "M+", label: "Active drivers" },
  { target: 42, suffix: "B+", label: "Trips completed" },
];

export default function StatsSection() {
  return (
    <section className="section" style={{ background: "#fafafa" }}>
      <div className="container">
        <AnimateOnScroll stagger className="stats-grid">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <h3>
                <StatCounter target={s.target} suffix={s.suffix} />
              </h3>
              <p>{s.label}</p>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
