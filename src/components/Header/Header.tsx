import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import './Header.scss'
import logo from '../../assets/logo.svg'
import { useEffect, useState } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-content">
        <div className="h-grid">
          <div className="left-content">
            <span className="logo">
              <img src={logo} alt="Logo" width={40} height={40} />
            </span>
            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          <div className="right-content">
            <span className="profile-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <nav className="nav-links"></nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
