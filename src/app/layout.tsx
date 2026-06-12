import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reidpoole.com"),
  title: {
    default: "Reid Poole | Music, Events & Innovation",
    template: "%s | Reid Poole",
  },
  description:
    "Colorado Springs musician, New Orleans-trained bandleader, educator, and music technologist Reid Poole.",
  openGraph: {
    title: "Reid Poole | Music, Events & Innovation",
    description:
      "Live music, artist development, education, and technology built with creative purpose.",
    url: "https://www.reidpoole.com",
    siteName: "Reid Poole",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
