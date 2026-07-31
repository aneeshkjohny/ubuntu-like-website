"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ width: '24px', height: '24px', background: '#fff', borderRadius: '50%' }}></div>
        <span style={{ fontWeight: 600, fontSize: '1.2rem', letterSpacing: '-0.03em' }}>Vanguard</span>
      </div>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><Link href="/" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Products</Link></li>
        <li><Link href="/" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Solutions</Link></li>
        <li><Link href="/" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Resources</Link></li>
        <li><Link href="/" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Enterprise</Link></li>
        <li><Link href="/" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Docs</Link></li>
        <li><Link href="/" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Pricing</Link></li>
      </ul>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Log In</button>
        <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Sign Up</button>
      </div>
    </nav>
  );
}
