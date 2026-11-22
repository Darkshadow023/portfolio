import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="section wrap" id="education" aria-labelledby="edu-title">
      <div className="section__head">
        <p className="mono label">
          <span>04</span> Education
        </p>
        <h2 id="edu-title" className="display">
          Studying <em>cyber</em> security.
        </h2>
      </div>

      <div className="edu">
        <Reveal as="article" className="edu__item">
          <p className="mono edu__date">Feb 2025 &ndash; Feb 2027 (expected)</p>
          <h3>Bachelor of Cyber Security</h3>
          <p className="edu__org">Deakin University, Burwood, VIC</p>
          <ul>
            <li>WAM 81.5 (High Distinction average).</li>
            <li>
              Relevant units: SIT325 Advanced Network Security, SIT384 Cyber Security Analytics, SIT282 Computer
              Forensics and Investigations, SIT223 Professional Practices in I.T.
            </li>
            <li>
              SIT325 assessment (Distinction): simulated a DDoS attack in a controlled lab and compared bandwidth and
              CPU use over TCP and UDP, with and without the attack.
            </li>
          </ul>
        </Reveal>
        <Reveal as="article" className="edu__item">
          <p className="mono edu__date">Apr 2010 &ndash; Mar 2024</p>
          <h3>Year 12 (Senior Secondary)</h3>
          <p className="edu__org">Apeejay School, Noida, India</p>
          <ul>
            <li>Result: 85%.</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
