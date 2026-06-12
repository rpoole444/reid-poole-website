import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Meet Reid Poole, a Colorado Springs musician, bandleader, educator, and technologist shaped by the New Orleans music community.",
};

export default function AboutPage() {
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
      <article className="interior-content">
        <p className="eyebrow">About Reid</p>
        <h1>A musician&apos;s ear. A builder&apos;s mind.</h1>
        <div className="interior-columns">
          <p className="lead">
            Reid Poole is a trumpet player, vocalist, bandleader, educator,
            developer, husband, and father based in Colorado Springs.
          </p>
          <div>
            <p>
              More than a decade inside New Orleans&apos; music community
              shaped Reid&apos;s approach: know the tradition, serve the room,
              listen closely, and bring something of your own.
            </p>
            <p>
              He has performed with the Panorama Brass Band, Trumpet Mafia,
              Delfeayo Marsalis&apos; Uptown Jazz Orchestra, and numerous
              projects of his own. Away from the stage, he develops music
              technology, mentors artists, and helps strengthen creative
              communities.
            </p>
            <Link className="button button-primary" href="/book">
              Work with Reid <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
