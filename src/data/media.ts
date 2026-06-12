export type VideoItem = {
  title: string;
  description: string;
  youtubeId: string;
  category: "Performance" | "Ensemble" | "Event concept" | "Education";
};

export type RecordingItem = {
  title: string;
  album: string;
  albumId: string;
  trackId?: string;
  group: "Latest album" | "Originals" | "Rare recordings";
};

export type PhotoItem = {
  src: string;
  alt: string;
  caption: string;
  orientation: "landscape" | "portrait" | "square";
  featured?: boolean;
};

export const videos: VideoItem[] = [
  {
    title: "Hey Pocky Way",
    description:
      "A high-energy New Orleans groove and a strong overview of Reid as a live performer.",
    youtubeId: "MqynNzRBlU4",
    category: "Performance",
  },
  {
    title: "Dance for Daddy",
    description:
      "The Hi-Fi Swingtet performing for dancers in New Orleans.",
    youtubeId: "XB38EFv4hYg",
    category: "Ensemble",
  },
  {
    title: "Love Me or Leave Me",
    description:
      "Straight-ahead swing with the Hi-Fi Swingtet.",
    youtubeId: "ta1FPiJf_JQ",
    category: "Ensemble",
  },
  {
    title: "Spotted Cat Gig Reel",
    description:
      "Highlights from Reid's work inside the New Orleans club tradition.",
    youtubeId: "bfkp_8rUTno",
    category: "Performance",
  },
  {
    title: "Crescendo Date",
    description:
      "A creative event concept built around live music and shared experience.",
    youtubeId: "CG0ExBe2Edg",
    category: "Event concept",
  },
  {
    title: "Louis Armstrong's “Knee Drops” Solo",
    description:
      "A focused transcription and performance from the traditional jazz language.",
    youtubeId: "V0ayLLc-Hq0",
    category: "Education",
  },
];

export const recordings: RecordingItem[] = [
  {
    title: "New Orleans Run",
    album: "New Orleans Run",
    albumId: "4251663932",
    group: "Latest album",
  },
  {
    title: "Rain on the River",
    album: "Something Like That",
    albumId: "33235340",
    trackId: "3844940733",
    group: "Originals",
  },
  {
    title: "New Orleans Run",
    album: "New Orleans Run",
    albumId: "4251663932",
    trackId: "2615630888",
    group: "Originals",
  },
  {
    title: "Martinique",
    album: "Live in New Orleans",
    albumId: "1311388121",
    trackId: "2151880652",
    group: "Originals",
  },
  {
    title: "Queen of the Night",
    album: "Weather Bird",
    albumId: "716773933",
    trackId: "173579549",
    group: "Rare recordings",
  },
  {
    title: "Soda Fountain Rag",
    album: "Weather Bird",
    albumId: "716773933",
    trackId: "3757714936",
    group: "Rare recordings",
  },
  {
    title: "Love in Swingtime",
    album: "Something Like That",
    albumId: "33235340",
    trackId: "1429396288",
    group: "Rare recordings",
  },
];

// Place selected images in public/images and add them here.
export const photos: PhotoItem[] = [];
