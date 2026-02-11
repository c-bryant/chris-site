import './Home.scss'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import ProjectCards from '../components/ProjectCards/ProjectCards'

const Home = () => {
  return (
    <div className="home-page">
      <div className="blob-bg" aria-hidden>
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
        <span className="blob blob-4" />
      </div>
      <div className="home-hero">
        <div className="home-inner">
          <h1 className="home-title">Crafting delightful web experiences</h1>
          <p className="home-lead">
            I design and build modern, responsive web applications focused on
            performance and developer ergonomics. This site showcases projects,
            writing, and ways to get in touch.
          </p>
          <div className="home-actions">
            <Link className="btn primary" to="/about">
              Learn more about me
            </Link>
            <Link className="btn ghost" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="home-visual">
          <img src={logo} alt="brand" />
        </div>
      </div>

      <hr />
      <section className="projects">
        <h2>What I've Built</h2>
        <ProjectCards />
      </section>
    </div>
  )
}

export default Home
