import { CV_PATH, EMAIL, GITHUB_URL, LINKEDIN_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import Reveal from "./Reveal";

const external = (
  <span className="visually-hidden"> (opens in a new tab)</span>
);

export default function Contact() {
  return (
    <section className="section wrap contact" id="contact" aria-labelledby="contact-title">
      <div className="section__head">
        <p className="mono label">
          <span>05</span> Contact
        </p>
        <h2 id="contact-title" className="display display--xl">
          Hiring for an intern, vacationer or <em>IT support</em> role? Let’s talk.
        </h2>
      </div>

      <Reveal as="a" className="contact__mail" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </Reveal>

      <Reveal as="ul" className="contact__list">
        <li>
          <span className="mono">Phone</span>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
        </li>
        <li>
          <span className="mono">Location</span>
          <span>Burwood, VIC 3125</span>
        </li>
        <li>
          <span className="mono">LinkedIn</span>
          <a href={LINKEDIN_URL} rel="me noopener" target="_blank">
            linkedin.com/in/adityakapoor23{external}
          </a>
        </li>
        <li>
          <span className="mono">GitHub</span>
          <a href={GITHUB_URL} rel="me noopener" target="_blank">
            {GITHUB_URL.replace(/^https?:\/\//, "")}
            {external}
          </a>
        </li>
      </Reveal>

      <Reveal as="a" className="btn btn--primary btn--lg" href={CV_PATH} download>
        Download CV (PDF) <span aria-hidden="true">&darr;</span>
      </Reveal>
    </section>
  );
}
