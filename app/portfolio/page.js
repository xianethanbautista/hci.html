import Link from "next/link";

const programs = [
  { number: "01", title: "Strength training", detail: "Build confidence with the basics, free weights, and a plan that meets you where you are.", tag: "ALL LEVELS" },
  { number: "02", title: "Small group sessions", detail: "Good energy, thoughtful coaching, and just the right amount of friendly accountability.", tag: "UP TO 8 PEOPLE" },
  { number: "03", title: "One-to-one coaching", detail: "Personal support and practical programming built around your goals and your schedule.", tag: "MADE FOR YOU" },
];

export default function ProgramsPage() {
  return (
    <main className="page-shell inner-page">
      <section className="page-heading">
        <p className="eyebrow"><span className="status-dot" /> FIND YOUR FIT</p>
        <h1>GOOD TRAINING.<br /><span>YOUR WAY.</span></h1>
        <p>Simple, supportive ways to move more, get stronger, and feel at home in the gym.</p>
      </section>
      <section className="program-list" aria-label="Training programs">
        {programs.map((program) => (
          <article className="program-card" key={program.number}>
            <span className="program-number">{program.number}</span>
            <div className="program-copy">
              <p className="eyebrow">{program.tag}</p>
              <h2>{program.title}</h2>
              <p>{program.detail}</p>
            </div>
            <span className="program-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </section>
      <div className="page-cta">
        <p>Not sure where to start? We’ll help you figure it out.</p>
        <Link className="button button-dark" href="/about#visit">Let’s talk <span aria-hidden="true">↗</span></Link>
      </div>
    </main>
  );
}
