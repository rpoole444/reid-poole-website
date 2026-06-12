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

export const photos: PhotoItem[] = [
  {
    src: "/images/photos/blue-hour-brass.jpg",
    alt: "Reid Poole playing trumpet with a brass band at blue hour",
    caption: "Brass in the street, after sunset.",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/photos/family-trumpet.jpg",
    alt: "Reid Poole holding a child while playing trumpet",
    caption: "Music starts close to home.",
    orientation: "portrait",
    featured: true,
  },
  {
    src: "/images/photos/panorama-brass-band.jpg",
    alt: "Reid Poole performing trumpet with the Panorama Brass Band",
    caption: "On the move with a brass band.",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/photos/dba-band.jpg",
    alt: "A traditional jazz ensemble performing at d.b.a. in New Orleans",
    caption: "A full band in a New Orleans room.",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/photos/night-owls-group.jpg",
    alt: "The Night Owls standing together in matching band uniforms",
    caption: "The Night Owls, ready to work.",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/photos/black-white-trumpet.jpg",
    alt: "Black and white close-up of Reid Poole playing trumpet",
    caption: "From the front row.",
    orientation: "portrait",
    featured: true,
  },
  {
    src: "/images/photos/park-band.jpg",
    alt: "A jazz band performing outdoors beneath a large oak tree",
    caption: "Keeping the music moving outdoors.",
    orientation: "landscape",
  },
  {
    src: "/images/photos/spotted-cat.jpg",
    alt: "Traditional jazz musicians performing at the Spotted Cat",
    caption: "A packed corner at the Spotted Cat.",
    orientation: "portrait",
  },
  {
    src: "/images/photos/blue-stage-band.jpg",
    alt: "A jazz ensemble performing under blue stage lights",
    caption: "Small-group conversation.",
    orientation: "landscape",
  },
  {
    src: "/images/photos/littleman-performance.jpg",
    alt: "Reid Poole playing trumpet in a floral shirt",
    caption: "A bright room and a strong groove.",
    orientation: "square",
  },
  {
    src: "/images/photos/jazz-art-stage.jpg",
    alt: "Reid Poole playing trumpet beside an upright bassist and colorful jazz artwork",
    caption: "Trumpet, bass, and a wall full of color.",
    orientation: "portrait",
  },
  {
    src: "/images/photos/closeup-performance.jpg",
    alt: "Close-up of Reid Poole playing trumpet with a bassist behind him",
    caption: "Inside the ensemble sound.",
    orientation: "portrait",
  },
  {
    src: "/images/photos/new-orleans-club.jpg",
    alt: "Reid Poole playing trumpet in a crowded New Orleans jazz club",
    caption: "In the middle of the band.",
    orientation: "square",
  },
  {
    src: "/images/photos/smith-lumber-band.jpg",
    alt: "A seated jazz ensemble performing on a wooden stage",
    caption: "A bandstand with room to stretch.",
    orientation: "landscape",
  },
  {
    src: "/images/photos/street-race.jpg",
    alt: "Reid Poole playing trumpet at the front of a community street race",
    caption: "Music for the starting line.",
    orientation: "portrait",
  },
  {
    src: "/images/photos/tv-studio.jpg",
    alt: "Reid Poole and guests on a television studio set",
    caption: "Sharing the work on television.",
    orientation: "portrait",
  },
  {
    src: "/images/photos/jon-batiste.jpg",
    alt: "Reid Poole with Jon Batiste at a music industry event",
    caption: "A meeting at the music industry show.",
    orientation: "portrait",
  },
  {
    src: "/images/photos/gigboss-convention.jpg",
    alt: "Reid Poole at a GigBoss convention booth",
    caption: "Building tools for working musicians.",
    orientation: "portrait",
  },
  {
    src: "/images/photos/industry-friends.jpg",
    alt: "Reid Poole with a fellow musician at an industry event",
    caption: "Community beyond the bandstand.",
    orientation: "portrait",
  },
  {
    src: "/images/photos/event-band.jpg",
    alt: "A live band performing in a large wooden event space",
    caption: "A full room, built around live music.",
    orientation: "landscape",
  },
  {
    src: "/images/photos/trumpet-backstage.jpg",
    alt: "A trumpet resting backstage beside mutes and water bottles",
    caption: "Between sets.",
    orientation: "portrait",
  },
  {
    src: "/images/photos/downtown-portrait.jpg",
    alt: "Reid Poole smiling and holding a trumpet downtown",
    caption: "Ready for the next set.",
    orientation: "square",
  },
  {
    src: "/images/photos/beach-trumpet.jpg",
    alt: "Reid Poole playing trumpet outdoors in sunglasses",
    caption: "The instrument comes along.",
    orientation: "square",
  },
  {
    src: "/images/photos/parade-collage.jpg",
    alt: "Layered collage of Reid Poole performing in a street brass band",
    caption: "A parade memory, reworked.",
    orientation: "portrait",
  },
  {
    src: "/images/photos/sunset-field.jpg",
    alt: "A person standing in a field beneath an orange sunset",
    caption: "A quieter frame between performances.",
    orientation: "portrait",
  },
];
