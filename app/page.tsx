const details = [
  { label: 'Major', value: 'Software Convergence' },
  { label: 'Age', value: '24 years old' },
  { label: 'MBTI', value: 'INTP' },
]

export default function Page() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="monogram" href="#top" aria-label="Jahyun Lee home">JL<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#interests">Interests</a>
          <a className="nav-contact" href="mailto:jahyun@example.com">Let&apos;s connect <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> Personal introduction / 2026</p>
          <h1 id="hero-title">Hello, I&apos;m<br /><em>Jahyun Lee.</em></h1>
          <p className="hero-description">A curious mind exploring the space where technology, people, and creative expression meet.</p>
          <a className="scroll-cue" href="#about"><span className="scroll-line" /> Scroll to explore</a>
        </div>
        <div className="hero-art" aria-label="Abstract portrait illustration" role="img">
          <div className="orb orb-large" />
          <div className="orb orb-small" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="art-label art-label-top">IN / OUT</span>
          <span className="art-label art-label-bottom">01 — 24</span>
        </div>
      </section>

      <section className="intro-section" id="about" aria-labelledby="about-title">
        <div className="section-index">01 / 03</div>
        <div className="section-content">
          <p className="section-kicker">A little about me</p>
          <h2 id="about-title">Always learning,<br /><span>always in motion.</span></h2>
          <p className="body-copy">I&apos;m Jahyun, a Software Convergence student with a natural curiosity for how things work. I enjoy turning complex ideas into simple, meaningful experiences—and finding new perspectives along the way.</p>
          <dl className="details-grid">
            {details.map((detail) => (
              <div className="detail" key={detail.label}>
                <dt>{detail.label}</dt><dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="interest-section" id="interests" aria-labelledby="interest-title">
        <div className="section-index">02 / 03</div>
        <div className="interest-main">
          <p className="section-kicker">Outside the screen</p>
          <h2 id="interest-title">Movement is<br /><em>my reset button.</em></h2>
          <div className="interest-row">
            <span className="interest-number">01</span>
            <div><h3>Dancing</h3><p>Rhythm, energy, and a different way to think with the body.</p></div>
            <span className="interest-arrow" aria-hidden="true">↗</span>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div><p className="section-kicker">Thanks for stopping by</p><p className="footer-title">Let&apos;s make something<br /><em>worth remembering.</em></p></div>
        <a className="footer-link" href="mailto:jahyun@example.com">Say hello <span aria-hidden="true">↗</span></a>
        <p className="footer-note">© 2026 Jahyun Lee</p>
      </footer>
    </main>
  )
}

