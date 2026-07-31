import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer section-snap" style={{ minHeight: 'auto', padding: '4rem 3rem 2rem 3rem', justifyContent: 'flex-end', scrollSnapAlign: 'end' }}>
      <div className="footer-content" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="footer-column brand-column">
          <h3>Vanguard & Hathaway</h3>
          <p>Building long-term wealth through principled investing, exceptional management, and uncompromising integrity.</p>
          <div className="contact-info">
            <p>📍 123 Financial District, NY 10005</p>
            <p>📞 +1 (555) 019-8234</p>
            <p>✉️ contact@vanguardhathaway.example.com</p>
          </div>
        </div>
        
        <div className="footer-column">
          <h4>Investments</h4>
          <ul>
            <li><Link href="#">Insurance</Link></li>
            <li><Link href="#">Energy & Utilities</Link></li>
            <li><Link href="#">Freight & Logistics</Link></li>
            <li><Link href="#">Manufacturing</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Corporate</h4>
          <ul>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Leadership</Link></li>
            <li><Link href="#">Investor Relations</Link></li>
            <li><Link href="#">Careers</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><Link href="#">Terms of Service</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Disclosures</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vanguard & Hathaway. All rights reserved.</p>
        <p className="disclaimer">
          Disclaimer: Vanguard & Hathaway is a fictional entity created for demonstration purposes. Past performance is not indicative of future results.
        </p>
      </div>
    </footer>
  );
}
