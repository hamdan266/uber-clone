import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function CtaBanner() {
  return (
    <section className="section">
      <div className="container">
        <AnimateOnScroll className="cta-banner">
          <h2>There&apos;s more to love in the apps</h2>
          <p>Download the Uber app for the full experience — from rides and food to bikes and scooters.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="#" className="btn btn-secondary btn-lg" id="download-ios">
              Download for iOS
            </Link>
            <Link href="#" className="btn btn-secondary btn-lg" id="download-android">
              Download for Android
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
