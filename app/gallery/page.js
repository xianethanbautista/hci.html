const moments = [
  { number: "01", title: "A little more room to move", type: "THE SPACE", className: "gallery-tile tile-space" },
  { number: "02", title: "Good people, good energy", type: "THE COMMUNITY", className: "gallery-tile tile-community" },
  { number: "03", title: "Small steps add up", type: "THE WORK", className: "gallery-tile tile-work" },
  { number: "04", title: "Find your kind of strong", type: "YOUR JOURNEY", className: "gallery-tile tile-journey" },
];

export default function GalleryPage() {
  return (
    <main className="page-shell inner-page">
      <section className="page-heading gallery-heading">
        <p className="eyebrow"><span className="status-dot" /> AROUND THE HOUSE</p>
        <h1>THE GOOD STUFF<br /><span>HAPPENS HERE.</span></h1>
        <p>A few snapshots of what makes training at Iron House feel different.</p>
      </section>
      <section className="gallery-grid" aria-label="Gym moments">
        {moments.map((moment) => (
          <article className={moment.className} key={moment.number}>
            <div className="tile-shape" aria-hidden="true"><span /><span /><span /></div>
            <div className="tile-caption"><span>{moment.type}</span><span>{moment.number}</span></div>
            <h2>{moment.title}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
