export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
  linkLabel?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "New Orleans Big Beat",
    category: "Bandleading · Performance",
    description:
      "A large, flexible ensemble carrying New Orleans rhythm, brass, and celebration into Colorado rooms.",
    image: "/images/photos/panorama-brass-band.jpg",
    imageAlt: "Reid Poole performing trumpet with a brass band outdoors",
    href: "/book?service=performance",
    linkLabel: "Book the band",
  },
  {
    title: "Dinosaurchestra",
    category: "Recording · Live project",
    description:
      "Traditional jazz played with curiosity, personality, and a deep connection to the New Orleans repertoire.",
    image: "/images/photos/dba-band.jpg",
    imageAlt: "Dinosaurchestra performing on stage at d.b.a. in New Orleans",
    href: "https://dinosaurchestra.bandcamp.com/music",
    linkLabel: "Hear the records",
  },
  {
    title: "Reid Poole & The Night Owls",
    category: "Classic R&B · Swing",
    description:
      "A sharp, joyful party band built for dancing, timeless songs, and rooms that want real live energy.",
    image: "/images/projects/night-owls.jpg",
    imageAlt: "Reid Poole and the Night Owls illustrated owl logo",
    href: "/book?service=performance",
    linkLabel: "Book the Night Owls",
  },
  {
    title: "Reid Poole Quintet",
    category: "Modern jazz · Improvisation",
    description:
      "An agile small group for original voices, close listening, and the conversational side of jazz.",
    image: "/images/photos/blue-stage-band.jpg",
    imageAlt: "Jazz quintet performing under blue stage lights",
    href: "/book?service=performance",
    linkLabel: "Plan a performance",
  },
  {
    title: "Alpine Groove Guide",
    category: "Editorial · Colorado music",
    description:
      "A guide to the artists, venues, stories, and independent culture shaping the sound of the Front Range.",
    image: "/images/projects/alpine-groove-wordmark.jpg",
    imageAlt: "Alpine Groove Guide, the sound of the Front Range",
    status: "Growing project",
  },
  {
    title: "Human Frequency",
    category: "Radio · Curation",
    description:
      "Human-hosted radio and human-chosen music: a listening project presented by Alpine Groove Guide.",
    image: "/images/projects/alpine-groove-guide.png",
    imageAlt: "Alpine Groove Guide mountain and music logo",
    status: "In development",
  },
  {
    title: "GigBoss",
    category: "Product · Music technology",
    description:
      "Practical tools designed around the real scheduling, communication, and business needs of working musicians.",
    image: "/images/photos/gigboss-convention.jpg",
    imageAlt: "Reid Poole at the GigBoss booth during a music industry convention",
    href: "/book?service=technology",
    linkLabel: "Discuss music technology",
  },
  {
    title: "Poole and the Gang",
    category: "Band · Live events",
    description:
      "Soulful, groovy, New Orleans-rooted live music for private events, celebrations, and audiences ready for a full-band experience.",
    image: "/images/projects/poole-and-the-gang/horizontal-wordmark.jpg",
    imageAlt: "Poole and the Gang cream and orange horizontal wordmark on black",
    href: "/book?service=performance",
    linkLabel: "Book Poole and the Gang",
  },
];
