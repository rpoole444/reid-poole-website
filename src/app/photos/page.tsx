import { PhotoLibrary } from "@/components/media-gallery";

export const metadata = {
  title: "Photos",
  description:
    "Performance, portrait, and behind-the-scenes photography of musician and bandleader Reid Poole.",
};

export default function PhotosPage() {
  return (
    <main className="interior-page">
      <article className="interior-content photo-page">
        <p className="eyebrow">The archive</p>
        <h1>Photos with some life in them.</h1>
        <p className="music-intro">
          Performance, portrait, community, and behind-the-scenes images from
          New Orleans to Colorado.
        </p>
        <PhotoLibrary />
      </article>
    </main>
  );
}
