import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import './Header.scss'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onMenuClick = (e: any) => {
    e.preventDefault()
    setMenuOpen((open) => !open)
  }

  return (
    <header
      className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}
    >
      <div className="header-content">
        <div className="h-grid">
          <div className="left-content">
            <button className="menu-button" onClick={onMenuClick}>
              <span className="menu-icon--top">-</span>
              <span className="menu-icon--bottom">-</span>
            </button>
            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          <div className="right-content">
            <span className="logo">
              <img src={logo} alt="Logo" width={40} height={40} />
            </span>
            <nav className="nav-links"></nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
