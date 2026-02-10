import './Home.scss'

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
            <a className="btn primary" href="/about">
              Learn more about me
            </a>
            <a className="btn ghost" href="/contact">
              Contact
            </a>
          </div>
        </div>
        <div className="home-visual">
          <img src="/logo.svg" alt="brand" />
        </div>
      </div>
      <hr />
      <section className="projects">
        <h2>What I've Built</h2>
        <div className="projects-grid">
          <article className="project-card">
            <img src="/logo.svg" alt="project 1" />
            <h3>Project One</h3>
            <p>
              A modern web app showcasing performant UI and scalable
              architecture.
            </p>
            <a className="btn ghost" href="#">
              View
            </a>
          </article>

          <article className="project-card">
            <img src="/logo.svg" alt="project 2" />
            <h3>Project Two</h3>
            <p>
              Design system and component library used across multiple products.
            </p>
            <a className="btn ghost" href="#">
              View
            </a>
          </article>

          <article className="project-card">
            <img src="/logo.svg" alt="project 3" />
            <h3>Project Three</h3>
            <p>
              API-driven platform with realtime updates and great DX for teams.
            </p>
            <a className="btn ghost" href="#">
              View
            </a>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Home
