import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Explore Reid Poole's bands, recordings, music technology, radio, and Colorado music projects.",
};

export default function ProjectsPage() {
  return (
    <main className="interior-page">
      <header className="interior-header">
        <Link className="wordmark" href="/">
          <span>RP</span>
          <strong>Reid Poole</strong>
        </Link>
        <Link className="header-cta" href="/book">
          Start a project
        </Link>
      </header>
      <article className="interior-content projects-page">
        <p className="eyebrow">The active roster</p>
        <h1>Bands, platforms, and ideas with a pulse.</h1>
        <p className="music-intro">
          Reid&apos;s work moves between bandstands, recordings, community
          storytelling, and technology built for musicians.
        </p>
        <div className="projects-index">
          {projects.map((project) => {
            const content = (
              <>
                <div className="projects-index-image">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    style={{ objectFit: project.imageFit || "cover" }}
                  />
                </div>
                <div className="projects-index-copy">
                  <p>{project.category}</p>
                  <h2>{project.title}</h2>
                  <span>{project.description}</span>
                  <b>
                    {project.linkLabel || project.status}
                    {project.href && <i aria-hidden="true"> ↗</i>}
                  </b>
                </div>
              </>
            );

            return project.href ? (
              <Link
                className="projects-index-card"
                href={project.href}
                key={project.title}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {content}
              </Link>
            ) : (
              <article className="projects-index-card" key={project.title}>
                {content}
              </article>
            );
          })}
        </div>
      </article>
    </main>
  );
}
