import Image from "next/image";
import { photos, videos } from "@/data/media";

export function MediaGallery() {
  if (photos.length === 0 && videos.length === 0) {
    return (
      <section className="media-empty">
        <p className="section-label">Photos & video</p>
        <h2>The stage is set for the real work.</h2>
        <p>
          Performance photography, portraits, and selected live videos will
          live here. The gallery is ready as soon as the first assets are
          selected.
        </p>
      </section>
    );
  }

  return (
    <section className="media-gallery">
      <p className="section-label">Photos & video</p>
      <div className="photo-grid">
        {photos.map((photo) => (
          <figure key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1400}
              height={1000}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="video-grid">
        {videos.map((video) => (
          <article key={video.youtubeId}>
            <div className="video-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
