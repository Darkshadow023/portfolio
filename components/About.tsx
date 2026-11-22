import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section wrap" id="about" aria-labelledby="about-title">
      <div className="section__head">
        <p className="mono label">
          <span>01</span> About
        </p>
        <h2 id="about-title" className="visually-hidden">
          About
        </h2>
      </div>
      <div className="about">
        <Reveal as="p" className="about__big">
          I’m finishing a Bachelor of Cyber Security at Deakin, with a High Distinction average. I don’t have
          professional security experience yet, so here’s the <em>evidence</em> I do have.
        </Reveal>
        <ul className="proof">
          <Reveal as="li" className="proof__item">
            <p className="mono proof__tag">Hands-on</p>
            <p>
              In a controlled lab for SIT325 I simulated a DDoS attack and compared bandwidth and CPU use over TCP and
              UDP, with and without the attack. My toolkit includes Wireshark, Nmap and Kali Linux, plus CTF problem
              solving.
            </p>
          </Reveal>
          <Reveal as="li" className="proof__item">
            <p className="mono proof__tag">Organised</p>
            <p>
              As Vice President of DUCA I follow up with each executive on their tasks so that 10+ events a trimester
              run on time.
            </p>
          </Reveal>
          <Reveal as="li" className="proof__item">
            <p className="mono proof__tag">Communicates</p>
            <p>
              I’m the link between members, university staff and our 7 industry sponsors. At McDonald’s I take 200+
              customer orders a shift, peak hours included.
            </p>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
