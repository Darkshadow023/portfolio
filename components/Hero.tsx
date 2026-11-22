import Image from "next/image";
import profile from "@/app/profile.webp";
import { CV_PATH } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <p className="mono hero__kicker">
        <span className="dot" aria-hidden="true" />
        Cyber Security student &middot; Deakin University &middot; Melbourne
      </p>

      <h1 className="hero__name" id="hero-title">
        <span className="line">
          <span className="line__in">Aditya</span>
        </span>
        <span className="line">
          <span className="line__in line__in--d">
            <em>Kapoor</em>
          </span>
        </span>
      </h1>

      <figure className="hero__photo">
        <div className="frame">
          <Image
            src={profile}
            alt="Portrait of Aditya Kapoor wearing glasses and a navy shirt"
            sizes="(min-width: 900px) 30vw, 70vw"
            quality={80}
            priority
          />
        </div>
        <figcaption className="mono">Melbourne, VIC</figcaption>
      </figure>

      <div className="hero__body">
        <p className="hero__lead">
          I’m a third-year Cyber Security student. I run a team of <em>40+</em> as Vice President of the Deakin
          University Cybersecurity Association, and I mentored <em>500+</em> people at CodeDay.
        </p>
        <p className="hero__seek mono">
          <span>Looking for</span> cyber security internships &amp; vacationer programs &middot; part-time IT support
        </p>
        <div className="hero__cta">
          <a className="btn btn--primary" href={CV_PATH} download>
            Download CV <span aria-hidden="true">&darr;</span>
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
