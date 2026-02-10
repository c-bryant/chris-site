import { Link } from 'react-router-dom'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Me</h4>
          <p>My name is Chris and I help build amazing software.</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Me</h4>
          <p>chrisbryant.dev@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
