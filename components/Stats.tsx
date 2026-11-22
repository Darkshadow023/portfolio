import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="wrap stats" aria-label="Key numbers">
      <dl className="stats__grid">
        <Reveal className="stat">
          <dt>WAM, High Distinction average</dt>
          <dd>81.5</dd>
        </Reveal>
        <Reveal className="stat">
          <dt>People on the DUCA team I lead</dt>
          <dd>
            40<sup>+</sup>
          </dd>
        </Reveal>
        <Reveal className="stat">
          <dt>Attendees at DUCA events</dt>
          <dd>
            80<span className="en">&ndash;</span>100
          </dd>
        </Reveal>
        <Reveal className="stat">
          <dt>CodeDay participants mentored in 2 days</dt>
          <dd>
            500<sup>+</sup>
          </dd>
        </Reveal>
      </dl>
    </section>
  );
}
