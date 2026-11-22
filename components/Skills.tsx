import { awards, skillGroups } from "@/lib/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section className="section wrap" id="skills" aria-labelledby="skills-title">
      <div className="section__head">
        <p className="mono label">
          <span>03</span> Skills
        </p>
        <h2 id="skills-title" className="display">
          What I <em>work</em> with.
        </h2>
      </div>

      <Reveal className="skills">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3 className="mono">{group.title}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>

      <Reveal className="awards">
        <p className="mono label label--sm">Certificates &amp; awards</p>
        <ul className="rows">
          {awards.map((a) => (
            <li key={a.text}>
              <span>
                {a.text}
                {a.href && (
                  <>
                    {" "}
                    &middot;{" "}
                    <a href={a.href} rel="noopener" target="_blank">
                      View credential<span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  </>
                )}
              </span>
              <span className="mono">{a.date}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
