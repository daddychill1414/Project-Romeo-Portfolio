import "./globals.css";

export const metadata = {
  title: "Project Romeo — Official Artist Portfolio",
  description:
    "Project Romeo is a Filipino indie band weaving nostalgia, warmth, and raw emotion into every chord. Listen to Bugambilya and discover their story.",
  keywords: [
    "Project Romeo",
    "Filipino indie band",
    "Bugambilya",
    "OPM",
    "indie music Philippines",
  ],
  openGraph: {
    title: "Project Romeo — Official Artist Portfolio",
    description:
      "Discover the music, story, and world of Project Romeo. Stream Bugambilya now.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts are loaded via @import in globals.css */}
        {/* GSAP CDN */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          defer
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          defer
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
