import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const cards = [
  { icon: "🚗", title: "Corporate travel", desc: "Simplify business travel with a centralized dashboard and expensing tools.", id: "travel-cta", href: "/business/corporate-travel" },
  { icon: "🍽️", title: "Meal programs", desc: "Keep your team fueled with Uber Eats meal credits and group ordering.", id: "meals-cta", href: "/business/meals" },
  { icon: "📦", title: "Delivery & freight", desc: "Move goods across town or across the country with Uber's logistics network.", id: "freight-cta", href: "/business/freight" },
];

export default function BusinessSection() {
  return (
    <section className="section" id="business">
      <div className="container">
        <AnimateOnScroll className="section-header">
          <h2>Uber for Business</h2>
          <p>Solutions for companies of all sizes — from rides and meals to freight and delivery.</p>
        </AnimateOnScroll>
        <AnimateOnScroll stagger className="grid-3">
          {cards.map((c) => (
            <div className="card" key={c.id}>
              <div className="card-body">
                <div className="icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
                <Link href={c.href} className="btn btn-primary btn-sm" id={c.id}>
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
