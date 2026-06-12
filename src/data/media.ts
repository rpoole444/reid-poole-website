export type VideoItem = {
  title: string;
  description: string;
  youtubeId: string;
};

export type PhotoItem = {
  src: string;
  alt: string;
  caption: string;
};

// Add YouTube IDs and local images here as assets are selected.
// Photos should be placed in public/images and referenced as /images/file-name.jpg.
export const videos: VideoItem[] = [];
export const photos: PhotoItem[] = [];
