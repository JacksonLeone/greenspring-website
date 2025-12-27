import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getImagePath } from '../utils/imagePath';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Results' },
    { href: '/contact', label: 'Contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement
      if (navbar) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        if (scrollTop > 100) {
          navbar.style.background = 'rgba(10, 10, 10, 0.98)'
        } else {
          navbar.style.background = 'rgba(10, 10, 10, 0.95)'
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/">
            <img src={getImagePath('images/greenspring-logo-with-text.png')} alt="GreenSpring - Management & Marketing" className="logo-with-text" />
          </Link>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={`nav-link ${router.pathname === item.href ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}