import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="page-shell inner-page">
      <section className="about-grid">
        <div className="page-heading about-heading">
          <p className="eyebrow"><span className="status-dot" /> NICE TO MEET YOU</p>
          <h1>WE’RE HERE<br />TO HELP YOU <span>MOVE.</span></h1>
          <p>Iron House is a neighborhood gym for people who want to feel stronger, supported, and right at home.</p>
        </div>
        <div className="about-card">
          <span className="about-symbol" aria-hidden="true">+</span>
          <p className="eyebrow">OUR APPROACH</p>
          <h2>Progress over perfection.</h2>
          <p>No mirrors to impress and no goals set by someone else. Just good coaching, useful equipment, and a community that cheers you on.</p>
        </div>
      </section>
      <section className="values-row">
        <article><span>01</span><h3>Start where you are</h3><p>Every body and every starting point belongs here.</p></article>
        <article><span>02</span><h3>Keep it simple</h3><p>Consistent, enjoyable training beats a perfect plan.</p></article>
        <article><span>03</span><h3>Do it together</h3><p>Friendly people make showing up a little easier.</p></article>
      </section>
      <section className="visit-banner" id="visit">
        <div><p className="eyebrow">YOUR FIRST VISIT</p><h2>Come as you are.</h2><p>Drop by for a look around and a no-pressure chat. We’d love to meet you.</p></div>
        <Link className="button button-light" href="mailto:hello@ironhouse.example">Say hello <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
