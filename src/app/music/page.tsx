import Link from "next/link";
import {
  PhotoLibrary,
  RecordingLibrary,
  VideoLibrary,
} from "@/components/media-gallery";

const musicProjects = [
  ["New Orleans Big Beat", "New Orleans spirit, assembled in Colorado."],
  ["Dinosaurchestra", "Eclectic traditional jazz with wit and teeth."],
  ["Reid Poole & The Night Owls", "Late-night swing and timeless songs."],
  ["Reid Poole Quintet", "Modern jazz, improvisation, and original voices."],
];

export const metadata = {
  title: "Music",
  description:
    "Listen to and explore the musical projects of trumpeter and bandleader Reid Poole.",
};

export default function MusicPage() {
  return (
    <main className="interior-page music-page">
      <header className="interior-header">
        <Link className="wordmark" href="/">
          <span>RP</span>
          <strong>Reid Poole</strong>
        </Link>
        <Link className="header-cta" href="/book">
          Book a performance
        </Link>
      </header>
      <article className="interior-content">
        <p className="eyebrow">Selected music</p>
        <h1>Different bands. One deep pulse.</h1>
        <p className="music-intro">
          Two decades of jazz, brass band, swing, funk, vocals, and
          improvisation, from New Orleans clubs to Colorado stages.
        </p>
        <Link className="text-link music-project-link" href="/projects">
          See the complete project roster <span aria-hidden="true">↗</span>
        </Link>
        <div className="music-list">
          {musicProjects.map(([title, description], index) => (
            <a
              href="https://dinosaurchestra.bandcamp.com/"
              target="_blank"
              rel="noreferrer"
              key={title}
            >
              <span>0{index + 1}</span>
              <h2>{title}</h2>
              <p>{description}</p>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
        <RecordingLibrary />
        <VideoLibrary />
        <PhotoLibrary preview />
      </article>
    </main>
  );
}
