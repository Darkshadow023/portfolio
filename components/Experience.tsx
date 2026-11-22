import { also, experience } from "@/lib/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="section wrap" id="experience" aria-labelledby="exp-title">
      <div className="section__head">
        <p className="mono label">
          <span>02</span> Experience
        </p>
        <h2 id="exp-title" className="display">
          Where I’ve <em>led</em>, served
          <br />
          and taught.
        </h2>
      </div>

      <ol className="xp-list">
        {experience.map((job) => (
          <Reveal as="li" className="xp" key={job.num}>
            <span className="xp__num mono" aria-hidden="true">
              {job.num}
            </span>
            <div className="xp__main">
              <h3>{job.title}</h3>
              <p className="xp__org">{job.org}</p>
            </div>
            <div className="xp__detail">
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {job.sub && (
                <p className="xp__sub">
                  <strong>{job.sub.title}</strong> <span className="mono">{job.sub.date}</span>
                  <br />
                  {job.sub.text}
                </p>
              )}
            </div>
            <p className="xp__date mono">{job.date}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="also">
        <p className="mono label label--sm">Also</p>
        <ul>
          {also.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>, {item.org} <span className="mono">{item.date}</span>
              <br />
              {item.text}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
