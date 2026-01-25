import React from 'react'
import Link from 'next/link'
import { getImagePath } from '../utils/imagePath';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={getImagePath('images/greenspring-logo-with-text.png')} alt="GreenSpring Logo" className="logo-with-text" />
            <p>Management & Marketing Excellence</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><Link href="/services#strategic">Strategic Planning</Link></li>
                <li><Link href="/services#operations">Operations</Link></li>
                <li><Link href="/services#marketing">Marketing</Link></li>
                <li><Link href="/services#leadership">Leadership</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><a href="/downloads/John-Leone-CV Resume 2025.pdf" download>Download CV</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 GreenSpring Management & Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}