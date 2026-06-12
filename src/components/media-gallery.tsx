import Image from "next/image";
import Link from "next/link";
import { photos, recordings, videos } from "@/data/media";

function bandcampEmbedUrl(albumId: string, trackId?: string) {
  const track = trackId ? `/track=${trackId}` : "";
  return `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=1a1714/linkcol=d5ab5f/tracklist=false${track}/transparent=true/`;
}

export function RecordingLibrary() {
  const groups = ["Latest album", "Originals", "Rare recordings"] as const;

  return (
    <section className="recording-library">
      <div className="media-heading">
        <div>
          <p className="section-label">Recorded music</p>
          <h2>Albums, originals, and deep cuts.</h2>
        </div>
        <a
          className="text-link"
          href="https://dinosaurchestra.bandcamp.com/music"
          target="_blank"
          rel="noreferrer"
        >
          Full Bandcamp archive <span aria-hidden="true">↗</span>
        </a>
      </div>

      {groups.map((group) => (
        <div className="recording-group" key={group}>
          <h3>{group}</h3>
          <div className="recording-grid">
            {recordings
              .filter((recording) => recording.group === group)
              .map((recording) => (
                <article
                  className="recording-card"
                  key={`${recording.albumId}-${recording.trackId || "album"}`}
                >
                  <iframe
                    src={bandcampEmbedUrl(recording.albumId, recording.trackId)}
                    title={`${recording.title} by Dinosaurchestra`}
                    loading="lazy"
                    seamless
                  />
                  <div>
                    <h4>{recording.title}</h4>
                    <p>{recording.album} · Dinosaurchestra</p>
                  </div>
                </article>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export function VideoLibrary() {
  return (
    <section className="video-library">
      <p className="section-label">Watch</p>
      <h2>Live, in the room.</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <article key={video.youtubeId}>
            <div className="video-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                title={video.title}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <span>{video.category}</span>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PhotoLibrary({ preview = false }: { preview?: boolean }) {
  const visiblePhotos = preview ? photos.filter((photo) => photo.featured).slice(0, 6) : photos;

  if (photos.length === 0) {
    return (
      <section className="media-empty">
        <p className="section-label">Photo library</p>
        <h2>Performance and portrait archive coming next.</h2>
        <p>
          The library is built and ready for the selected high-resolution
          photographs.
        </p>
      </section>
    );
  }

  return (
    <section className="photo-library">
      <div className="media-heading">
        <div>
          <p className="section-label">Photo library</p>
          <h2>On stage and behind the work.</h2>
        </div>
        {preview && (
          <Link className="text-link" href="/photos">
            View all photos <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
      <div className="photo-grid">
        {visiblePhotos.map((photo) => (
          <figure className={`photo-${photo.orientation}`} key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.orientation === "portrait" ? 1000 : 1600}
              height={photo.orientation === "portrait" ? 1400 : 1100}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
