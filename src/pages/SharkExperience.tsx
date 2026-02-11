import './SharkExperience.scss'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import SharkExperienceHomeUI from '../assets/shark-experience-home-ui.jpg'
import SharkExperienceGolfUI from '../assets/shark-experience-golf-ui.jpg'
import SharkExperienceSportsUI from '../assets/shark-experience-sports-ui.jpg'

const SharkExperience = () => {
  const images = [
    {
      base: 'shark-experience-home-ui',
      src: SharkExperienceHomeUI,
      alt: 'Shark Experience home UI',
    },
    {
      base: 'shark-experience-golf-ui',
      src: SharkExperienceGolfUI,
      alt: 'Shark Experience golf UI',
    },
    {
      base: 'shark-experience-sports-ui',
      src: SharkExperienceSportsUI,
      alt: 'Shark Experience sports UI',
    },
  ]

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight' && selectedIndex !== null) {
        setSelectedIndex((i) => (i! + 1) % images.length)
      }
      if (e.key === 'ArrowLeft' && selectedIndex !== null) {
        setSelectedIndex((i) => (i! - 1 + images.length) % images.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedIndex])

  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const prevActiveRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Manage focus and background scroll when lightbox opens/closes
    if (selectedIndex !== null) {
      prevActiveRef.current = document.activeElement as HTMLElement
      // prevent background scroll
      const prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      // focus close button after render
      requestAnimationFrame(() => closeBtnRef.current?.focus())

      return () => {
        document.body.style.overflow = prevOverflow
        // restore focus
        prevActiveRef.current?.focus()
      }
    }
    return
  }, [selectedIndex])

  useEffect(() => {
    // Preload adjacent images for faster navigation in the lightbox
    if (selectedIndex === null) return
    const next = (selectedIndex + 1) % images.length
    const prev = (selectedIndex - 1 + images.length) % images.length
    const imgNext = new Image()
    const imgPrev = new Image()
    imgNext.src = images[next].src
    imgPrev.src = images[prev].src
    return () => {
      // allow garbage collection by removing src
      imgNext.src = ''
      imgPrev.src = ''
    }
  }, [selectedIndex, images])

  return (
    <div className="case-page shark-page">
      <div className="case-hero">
        <div className="container">
          <div className="hero-content">
            <div>
              <h1>Shark Experience</h1>
              <Link
                to="https://www.sharkexperience.com/"
                target="_blank"
                rel="noopener"
              >
                www.sharkexperience.com
              </Link>
              <p className="role">UI/UX Developer — EZLinks Golf (2019–2020)</p>
              <p className="partners">
                EZLinks Golf · Verizon · Club Car · Greg Norman
              </p>
              <p className="disclaimer small">
                Professional work conducted as part of my role at EZLinks Golf.
                Visuals and descriptions are generalized to protect proprietary
                and partner information.
              </p>
              <div className="hero-actions">
                <Link className="btn" to="/">
                  ← Back
                </Link>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-frame">
                <img
                  src={SharkExperienceHomeUI}
                  alt="shark experience thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="case-main container">
        <section className="case-section overview">
          <h2>Overview</h2>
          <p>
            Shark Experience is a connected, in-cart digital platform that
            enhances the on-course golf experience by combining GPS yardages,
            scoring, and interactive course tools with media, live sports, and
            curated content delivered through HD touchscreen displays and
            built-in speakers leveraging Verizon’s 4G LTE connectivity.
          </p>
        </section>

        <section className="case-section cards-row">
          <div className="cards-grid">
            <div>
              <h3>Business Context & Adoption</h3>
              <div className="stats-card">
                <ul className="stats-list">
                  <li>
                    <strong>50,000+</strong>
                    <span>connected golf carts equipped nationwide</span>
                  </li>
                  <li>
                    <strong>450+</strong>
                    <span>golf courses contracted with the platform</span>
                  </li>
                  <li>
                    <strong>1.9B+</strong>
                    <span>annual ad impressions</span>
                  </li>
                  <li>
                    <strong>13M+</strong>
                    <span>
                      rounds played on carts equipped with Shark Experience
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3>Role & Collaboration</h3>
              <div className="stats-card">
                <p>
                  As a UI/UX Developer I translated research into flows,
                  collaborated with partners and engineers, and supported
                  implementation through launch and iteration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section two-col">
          <div>
            <h3>User Research & Discovery</h3>
            <p>
              Research and observational feedback informed decisions around
              layout, touch targets, and information density—prioritizing
              essential golf tools while enabling optional entertainment.
            </p>
            <ul>
              <li>Studied interactions with existing in-cart GPS systems</li>
              <li>Gathered feedback from course operators and players</li>
              <li>Accounted for sunlight visibility and on-cart motion</li>
            </ul>
          </div>
        </section>

        <section className="case-section images">
          <h3>Designs & Screens</h3>
          <p className="small muted"></p>
          <div className="image-grid">
            {images.map((img, idx) => {
              const widths = [480, 768, 1024, 1600]
              const webpSrcSet = widths
                .map((w) => `/assets/responsive/${img.base}-${w}.webp ${w}w`)
                .join(', ')
              return (
                <button
                  key={idx}
                  type="button"
                  className="image-frame image-btn"
                  onClick={() => openLightbox(idx)}
                  aria-label={`Open image ${idx + 1}`}
                >
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={webpSrcSet}
                      sizes="(max-width:880px) 100vw, 33vw"
                    />
                    <img loading="lazy" src={img.src} alt={img.alt} />
                  </picture>
                </button>
              )
            })}
          </div>
        </section>

        <section className="case-section decisions">
          <h3>UX & Design Decisions</h3>
          <ul className="decisions-list">
            <li>Clear hierarchy prioritizing GPS and scorecard</li>
            <li>Optional engagement: media accessible but non-intrusive</li>
            <li>High-contrast text and large touch targets for outdoor use</li>
            <li>Modular components to support branded content</li>
          </ul>
        </section>

        <section className="case-section impact">
          <h3>Impact</h3>
          <div className="impact-card">
            Shark Experience introduced a connected, content-rich platform to
            golf carts with broad adoption and high engagement metrics.
          </div>
        </section>

        <section className="case-section outcome">
          <h3>Outcome</h3>
          <p>
            The platform delivered measurable adoption and engagement at scale.
            Key outcomes attributed to the product include:
          </p>
          <ul className="outcome-list">
            <li>50,000+ connected golf carts equipped nationwide</li>
            <li>450+ golf courses contracted with the platform</li>
            <li>Over 1.9 billion annual ad impressions</li>
            <li>
              13 million+ rounds played on carts equipped with Shark Experience
            </li>
          </ul>
        </section>

        <section className="case-section engineering">
          <h3>Engineering & Implementation</h3>
          <ul>
            <li>
              Optimized UI components for fixed-screen hardware and limited
              memory.
            </li>
            <li>
              Implemented touch-first interactions and large tap targets for
              outdoor use.
            </li>
            <li>
              Collaborated with hardware and connectivity partners to validate
              performance under real-world conditions.
            </li>
            <li>
              Maintained visual fidelity by iterating with engineers through
              integration phases.
            </li>
          </ul>
        </section>

        <section className="case-section demonstrates">
          <h3>What This Project Demonstrates</h3>
          <ul>
            <li>User-centered design and research</li>
            <li>Product thinking under real constraints</li>
            <li>Collaboration with engineering and partners</li>
            <li>Design-to-implementation ownership</li>
            <li>Understanding of both UX and business context</li>
          </ul>
        </section>

        <section className="case-section rationale">
          <h3>Why This Version Works</h3>
          <div className="rationale-list">
            <p>Aligns product descriptions with public platform features.</p>
            <p>
              Emphasizes research, collaboration, and implementation without
              overstating roles.
            </p>
            <p>
              Uses public installation and engagement metrics to illustrate
              impact.
            </p>
          </div>
        </section>

        <section className="case-section tools">
          <h3>Tools & Skills</h3>
          <p className="small">
            User Research · UX/UI Design · Interaction Design · Frontend
            Collaboration
          </p>
        </section>

        <section className="case-section footer-note">
          <p className="small muted">
            Reusable portfolio disclaimer: Screens and descriptions are
            generalized to protect proprietary information while representing
            contributions accurately.
          </p>
        </section>
      </main>
      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeLightbox} role="dialog">
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              ×
            </button>
            <picture>
              <source
                type="image/webp"
                srcSet={`/assets/responsive/${images[selectedIndex].base}-1600.webp`}
              />
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
              />
            </picture>
          </div>
        </div>
      )}
    </div>
  )
}

export default SharkExperience
