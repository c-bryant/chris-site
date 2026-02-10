import './About.scss'
import logo from '../assets/logo.svg'

const About = () => {
  return (
    <div className="about-wrapper">
      <section className="about-hero">
        <img className="about-avatar" src={logo} alt="avatar" />
        <div className="about-intro">
          <h1>Hi, iz Chris</h1>
          <p className="lead">
            I build elegant, reliable web applications with a focus on
            performance and developer experience. I enjoy working with modern
            JavaScript tooling and creating delightful UIs.
          </p>
          <div className="contact-cta">
            <a className="btn" href="/contact">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section className="about-grid">
        <div className="card">
          <h3>Skills</h3>
          <div className="skills">
            <span>React</span>
            <span>TypeScript</span>
            <span>Vite</span>
            <span>SCSS</span>
            <span>Node.js</span>
          </div>
        </div>

        <div className="card">
          <h3>Experience</h3>
          <ul className="experience">
            <li>
              <strong>Frontend Engineer</strong>
              <span className="muted"> — 2021–Present</span>
              <div className="small">Building consumer-facing web apps.</div>
            </li>
            <li>
              <strong>Fullstack Developer</strong>
              <span className="muted"> — 2018–2021</span>
              <div className="small">
                APIs, integrations, and UX improvements.
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Interests</h3>
          <p className="small">
            Design systems, performance, developer tools, and mentoring.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
