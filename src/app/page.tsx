import Image from "next/image";
import Link from "next/link";
import { InteractiveHero } from "@/components/interactive-hero";
import { projects } from "@/data/projects";

const services = [
  {
    number: "01",
    title: "Live music",
    description:
      "New Orleans-rooted jazz, brass, swing, and custom ensembles for rooms that deserve more than background music.",
    link: "Explore bands & pricing",
    href: "/pricing",
  },
  {
    number: "02",
    title: "Lessons & mentorship",
    description:
      "Teaching from elementary music and beginning band through high school ensembles, college performance, and music-industry studies.",
    link: "Study with Reid",
    href: "/book?service=lessons",
  },
  {
    number: "03",
    title: "Music technology",
    description:
      "Websites, apps, and thoughtful digital systems built by a working musician who understands the actual problem.",
    link: "Build something useful",
    href: "/book?service=technology",
  },
];

const featuredProjectNames = [
  "Poole and the Gang",
  "Human Frequency",
  "Reid Poole & The Night Owls",
];

const featuredProjects = featuredProjectNames.flatMap((title) => {
  const project = projects.find((candidate) => candidate.title === title);
  return project ? [project] : [];
});

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Musician · Bandleader · Educator · Builder</p>
          <h1 id="hero-title">
            Music with
            <span>forward motion.</span>
          </h1>
          <p className="hero-intro">
            Reid Poole brings New Orleans soul, an educator&apos;s ear,
            Colorado energy, and a technologist&apos;s mind to performances,
            students, artists, and ambitious creative ideas.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/pricing">
              Explore live music <span aria-hidden="true">↗</span>
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

      <figure className="home-photo">
        <Image
          src="/images/photos/blue-hour-brass.jpg"
          alt="Reid Poole playing trumpet with a brass band at blue hour"
          fill
          priority
          sizes="100vw"
        />
        <figcaption>Live music belongs in the middle of things.</figcaption>
      </figure>

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
          <div>
            <p className="section-label">Ways to work together</p>
            <h2>Choose the kind of momentum you need.</h2>
          </div>
          <p className="services-intro">
            Start with a clear path, then shape the details together. Live
            music visitors can review estimated pricing before opening an
            inquiry.
          </p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={service.href} aria-label={`${service.link}: ${service.title}`}>
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
          <Link className="text-link" href="/projects">
            Explore all projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <Link
              className={`project project-${index + 1}`}
              href={project.href || "/projects"}
              key={project.title}
              target={project.href?.startsWith("http") ? "_blank" : undefined}
              rel={project.href?.startsWith("http") ? "noreferrer" : undefined}
            >
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                style={{ objectFit: project.imageFit || "cover" }}
              />
              <span className="project-meta">{project.category}</span>
              <h3>{project.title}</h3>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">Make something memorable</p>
        <h2>Have a room to move, an artist to develop, or an idea to build?</h2>
        <Link className="contact-link" href="/book">
          Start your inquiry <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <footer>
        <Link className="wordmark footer-mark" href="/">
          <span aria-hidden="true">
            <Image
              src="/images/projects/poole-and-the-gang/monogram.jpg"
              alt=""
              fill
              sizes="36px"
            />
          </span>
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
