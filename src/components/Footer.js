import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="#">Our offerings</Link></li>
              <li><Link href="#">Newsroom</Link></li>
              <li><Link href="#">Investors</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Products</h5>
            <ul>
              <li><Link href="/#ride">Ride</Link></li>
              <li><Link href="/#drive">Drive</Link></li>
              <li><Link href="#">Deliver</Link></li>
              <li><Link href="/#eats">Uber Eats</Link></li>
              <li><Link href="/#business">Uber Business</Link></li>
              <li><Link href="#">Uber Freight</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Global citizenship</h5>
            <ul>
              <li><Link href="#">Safety</Link></li>
              <li><Link href="#">Diversity</Link></li>
              <li><Link href="#">Sustainability</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Travel</h5>
            <ul>
              <li><Link href="#">Reserve</Link></li>
              <li><Link href="#">Airports</Link></li>
              <li><Link href="#">Cities</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Uber Technologies Inc.</p>
          <div className="footer-social">
            <Link href="#" aria-label="Facebook">Facebook</Link>
            <Link href="#" aria-label="Twitter">Twitter</Link>
            <Link href="#" aria-label="Instagram">Instagram</Link>
            <Link href="#" aria-label="LinkedIn">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
