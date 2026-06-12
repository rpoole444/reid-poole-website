import Link from "next/link";
import { InteractiveHero } from "@/components/interactive-hero";

const services = [
  {
    number: "01",
    title: "Live music",
    description:
      "New Orleans-rooted jazz, brass, swing, and custom ensembles for rooms that deserve more than background music.",
    link: "Explore performances",
  },
  {
    number: "02",
    title: "Lessons & mentorship",
    description:
      "Direct, practical coaching in trumpet, improvisation, bandleading, artistry, and the business around the music.",
    link: "Study with Reid",
  },
  {
    number: "03",
    title: "Music technology",
    description:
      "Websites, apps, and thoughtful digital systems built by a working musician who understands the actual problem.",
    link: "Build something useful",
  },
];

const projects = [
  {
    title: "New Orleans Big Beat",
    type: "Bandleading · Performance",
    mark: "NOBB",
  },
  {
    title: "Dinosaurchestra",
    type: "Recording · Live project",
    mark: "DINO",
  },
  {
    title: "GigBoss",
    type: "Product · Music technology",
    mark: "GB",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Reid Poole home">
          <span>RP</span>
          <strong>Reid Poole</strong>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="#work">Work</Link>
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
        </nav>
        <Link className="header-cta" href="#contact">
          Start a project
        </Link>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Musician · Bandleader · Builder</p>
          <h1 id="hero-title">
            Music with
            <span>forward motion.</span>
          </h1>
          <p className="hero-intro">
            Reid Poole brings New Orleans soul, Colorado energy, and a
            technologist&apos;s mind to performances, artists, and ambitious
            creative ideas.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#contact">
              Book Reid <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="#work">
              See selected work <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
        <InteractiveHero />
        <div className="hero-note">
          <span>Based in</span>
          Colorado Springs
          <br />
          Available worldwide
        </div>
      </section>

      <section className="statement" id="about">
        <p className="section-label">A wider practice</p>
        <h2>
          Twenty years on stage taught me how to listen, lead, improvise, and
          make the whole room feel <em>alive.</em>
        </h2>
        <div className="statement-detail">
          <p>
            I apply that same instinct everywhere: assembling the right band,
            helping an artist find their next move, or building technology that
            gets out of the way and lets creative work happen.
          </p>
          <Link className="text-link dark-link" href="/about">
            More about Reid <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <p className="section-label">Ways to work together</p>
          <h2>One creative partner. Several instruments.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href="#contact" aria-label={`${service.link}: ${service.title}`}>
                {service.link} <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading work-heading">
          <div>
            <p className="section-label">Selected work</p>
            <h2>Built to be heard.</h2>
          </div>
          <Link className="text-link" href="/music">
            Explore all music <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Link className={`project project-${index + 1}`} href="/music" key={project.title}>
              <span className="project-mark">{project.mark}</span>
              <span className="project-meta">{project.type}</span>
              <h3>{project.title}</h3>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">Make something memorable</p>
        <h2>Have a room to move, an artist to develop, or an idea to build?</h2>
        <a className="contact-link" href="mailto:poole.reid@gmail.com">
          poole.reid@gmail.com <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <Link className="wordmark footer-mark" href="/">
          <span>RP</span>
          <strong>Reid Poole</strong>
        </Link>
        <p>Music · Events · Innovation</p>
        <div>
          <a href="https://www.instagram.com/reid_poole_music/">Instagram</a>
          <a href="https://www.youtube.com/user/rpoole444/featured">YouTube</a>
          <a href="https://www.facebook.com/reidpoolemusic">Facebook</a>
        </div>
        <small>© {new Date().getFullYear()} Reid Poole</small>
      </footer>
    </main>
  );
}
