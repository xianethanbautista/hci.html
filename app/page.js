import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> YOUR NEIGHBORHOOD GYM</p>
          <h1>GET STRONGER.<br /><span>FEEL BETTER.</span></h1>
          <p className="hero-intro">
            Good training, good people, no pressure. Find your pace and build
            strength that carries into everyday life.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/portfolio">Explore programs <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/about#visit">Come say hello <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-note"><span className="note-line" /> FIRST SESSION IS ON US</div>
        </div>
        <div className="hero-art" aria-label="Illustration of a barbell" role="img">
          <div className="art-caption"><span>01 / 04</span><span>SHOW UP FOR YOU</span></div>
          <div className="art-sun" />
          <div className="art-floor" />
          <div className="barbell">
            <span className="weight weight-left" />
            <span className="bar" />
            <span className="weight weight-right" />
          </div>
          <span className="art-label">STRONG<br />STARTS HERE</span>
          <span className="art-star" aria-hidden="true">✳</span>
        </div>
      </section>

      <section className="welcome-strip">
        <div className="page-shell strip-content">
          <p>TRAIN YOUR WAY</p>
          <span>Strength</span><i />
          <span>Movement</span><i />
          <span>Community</span><i />
          <span>Progress</span>
        </div>
      </section>

      <section className="intro-section page-shell">
        <div>
          <p className="eyebrow">A BETTER KIND OF GYM</p>
          <h2>Built for real life.<br />And real <span>people.</span></h2>
        </div>
        <div className="intro-side">
          <p>Whether you’re new to training or ready for a fresh challenge, you’ll find the coaching, kit, and friendly faces to help you keep going.</p>
          <Link className="text-link" href="/about">Get to know us <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}
