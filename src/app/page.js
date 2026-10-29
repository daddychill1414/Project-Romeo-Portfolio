"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ============================================================
   DISCOGRAPHY CATALOG — 1970s Vinyl Crate
   ============================================================ */
const TRACKS = [
  { id: "bugambilya", title: "Bugambilya", file: "BUGAMBILYA.jpg", year: "1974", note: "The breakthrough Manila Sound anthem", spotifyId: "4OdvA38vT7i7b9R56liX7C", ytQuery: "Project Romeo Bugambilya" },
  { id: "ermita", title: "Ermita", file: "ERMITA.jpg", year: "1975", note: "Neon nights across the boulevard", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Ermita" },
  { id: "ito-lamang", title: "Ito Lamang", file: "ITO LAMANG.jpg", year: "1976", note: "Acoustic ballad of simple devotion", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Ito Lamang" },
  { id: "tugon", title: "Tugon", file: "TUGON.jpg", year: "1977", note: "Strings, sentiment & tender answers", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Tugon" },
  { id: "hay", title: "Hay", file: "HAY.jpg", year: "1976", note: "Breezy afternoon acoustic strums", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Hay" },
  { id: "laro-ng-buhay", title: "Laro Ng Buhay", file: "LARO NG BUHAY.jpg", year: "1978", note: "Psychedelic pop and urban truths", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Laro Ng Buhay" },
  { id: "malik-mata", title: "Malik-Mata", file: "MALIK-MATA.jpg", year: "1977", note: "Hazy twilight romance on tape", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Malik Mata" },
  { id: "gloria", title: "Gloria (ft. JRoa)", file: "GLORIA (by jroa feat. Project romeo).jpg", year: "1979", note: "Collaborative soul-groove classic", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Gloria JRoa" },
  { id: "dito-lang-ako", title: "Dito Lang Ako", file: "Dito Lang Ako  (Michael Pacquiao ft. Project_romeo).jpg", year: "1978", note: "Duo harmonies with raw warmth", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Dito Lang Ako" },
  { id: "just-you", title: "Just You", file: "JUST YOU (jroa ft. project_romeo).jpg", year: "1977", note: "Smooth rhythm and horn arrangements", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Just You JRoa" },
  { id: "sayong-sayo", title: "Sa'yong-Sa'yo", file: "SAYONG-SAYO (daniel paringit & project romeo).jpg", year: "1976", note: "Golden hour guitar progression", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Sayong Sayo" },
  { id: "miss-please", title: "Miss Please", file: "MISS PLEASE.jpg", year: "1975", note: "Playful jeepney pickup line groove", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Miss Please" },
  { id: "naging-tayo", title: "Naging Tayo", file: "NAGING TAYO.jpg", year: "1976", note: "Melancholic reminiscing in amber", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Naging Tayo" },
  { id: "parol-sa-duyan", title: "Parol Sa Duyan", file: "PAROL SA DUYAN.jpg", year: "1978", note: "Warm capiz glow holiday memory", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Parol Sa Duyan" },
  { id: "pramiss", title: "Pramiss", file: "PRAMISS.JPG", year: "1975", note: "Folk-rock promise carved in wood", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Pramiss" },
  { id: "seas-n-u", title: "Seas N U", file: "SEAS N U.jpg", year: "1977", note: "Island breezes meets tape delay", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Seas N U" },
  { id: "sunny-hunny", title: "Sunny Hunny", file: "SUNNY HUNNY.jpg", year: "1976", note: "Upbeat brass and sunlit drive", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Sunny Hunny" },
  { id: "tugon-wedding", title: "Tugon (Wedding Ver.)", file: "TUGON THE WEDDING VER.jpg", year: "1979", note: "Church bells and acoustic pledge", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Tugon Wedding" },
  { id: "di-tiyak", title: "‘Di Tiyak", file: "‘DI TIYAK.jpg", year: "1975", note: "Wandering bassline in late dusk", spotifyId: "3Y4E0sWmWrd7930e3F3I55", ytQuery: "Project Romeo Di Tiyak" },
];

/* ============================================================
   SOCIAL MEDIA LINKS — Single source of truth
   ============================================================ */
const LINKS = {
  spotify:
    "https://open.spotify.com/artist/3Y4E0sWmWrd7930e3F3I55?si=qHX9GQM6S3OPBghc7Hit5Q",
  spotifyTrack:
    "https://open.spotify.com/track/4OdvA38vT7i7b9R56liX7C?si=96a574c896124634",
  appleMusic:
    "https://music.apple.com/ph/artist/project-romeo/1579531262",
  appleMusicAlbum:
    "https://music.apple.com/ph/album/bugambilya/6818278763?i=6818278767",
  facebook: "https://www.facebook.com/prjctrm",
  instagram: "https://www.instagram.com/projectromeoofficial/",
  tiktok:
    "https://www.tiktok.com/@projectromeomusic?is_from_webapp=1&sender_device=pc",
  youtube: "https://www.youtube.com/channel/UCFI5dggQubf72RLGpuz1DuQ",
};

/* ============================================================
   SVG ICONS
   ============================================================ */
const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const AppleMusicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.7.228C18.96.1 18.212.06 17.463.04 16.832.02 16.2 0 15.57 0H8.433c-.634.02-1.266.02-1.9.04-.747.02-1.494.06-2.234.19-.747.128-1.434.39-2.074.755C1.11 1.54.363 2.54.048 3.85a9.156 9.156 0 00-.24 2.19c-.02.63-.04 1.26-.04 1.89V16.07c0 .63.02 1.26.04 1.89.02.75.06 1.5.24 2.19.315 1.31 1.062 2.31 2.177 3.043a5.02 5.02 0 001.874.684c.74.13 1.487.17 2.234.19.634.02 1.266.04 1.9.04h7.134c.634 0 1.266-.02 1.899-.04.747-.02 1.494-.06 2.234-.19.747-.13 1.434-.39 2.074-.684 1.115-.734 1.862-1.734 2.177-3.043.18-.69.22-1.44.24-2.19.02-.63.04-1.26.04-1.89V8.014c0-.63-.02-1.26-.04-1.89zM11.996 3.91c.275 0 .548 0 .823.005 1.11.008 2.22.042 3.328.116.734.047 1.46.123 2.182.272.537.11 1.05.288 1.527.555.714.4 1.212.98 1.497 1.746.175.467.276.956.32 1.454.077.855.098 1.712.105 2.57.01 1.266.01 2.53-.005 3.797-.008.856-.032 1.712-.098 2.567-.044.56-.128 1.112-.332 1.637-.305.785-.824 1.372-1.556 1.765-.453.242-.94.394-1.447.488-.834.155-1.677.195-2.52.22-1.06.03-2.12.042-3.18.042-1.195 0-2.39-.012-3.584-.055-.74-.026-1.478-.067-2.21-.175-.58-.086-1.14-.234-1.663-.5-.787-.4-1.35-1.003-1.652-1.838-.165-.453-.257-.924-.3-1.404-.065-.753-.094-1.508-.104-2.264-.017-1.358-.01-2.716.007-4.074.01-.846.032-1.692.095-2.536.04-.537.116-1.067.305-1.574.3-.816.83-1.42 1.573-1.82.45-.242.934-.394 1.44-.487.834-.155 1.677-.195 2.52-.22.79-.02 1.577-.034 2.367-.04.432-.005.864-.005 1.296-.005v.003zm4.083 4.073v7.645c0 .378-.05.75-.178 1.108-.205.578-.584.99-1.134 1.242-.378.174-.778.246-1.188.273-.712.046-1.346-.15-1.89-.596-.557-.46-.82-1.054-.774-1.78.042-.67.363-1.19.917-1.566.34-.23.72-.378 1.116-.484.547-.146 1.1-.27 1.65-.397.307-.07.52-.24.603-.55.025-.09.04-.186.04-.28V9.95c0-.28-.093-.407-.37-.348-.57.12-1.14.244-1.71.366l-3.685.788c-.036.008-.073.018-.11.03-.227.074-.33.2-.343.44-.005.06-.003.12-.003.18v6.47c0 .428-.043.852-.195 1.258-.21.567-.583.972-1.127 1.22-.376.17-.774.242-1.18.27-.71.048-1.345-.14-1.893-.584-.567-.46-.836-1.06-.788-1.798.04-.65.343-1.158.878-1.535.35-.247.743-.398 1.15-.508.456-.124.916-.232 1.374-.347.42-.107.696-.376.778-.807.023-.12.034-.245.034-.368V5.926c0-.298.064-.564.285-.78.163-.16.367-.248.583-.297.102-.023.204-.044.307-.06l5.285-1.09c.51-.107 1.023-.213 1.534-.316.223-.044.448-.074.675-.05.36.04.598.25.67.607.022.106.03.216.03.325l-.002 3.72z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

/* ============================================================
   VINYL RECORD SVG (decorative & animated)
   ============================================================ */
const VinylSVG = () => (
  <svg
    className="music__vinyl"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="98" stroke="#5A3113" strokeWidth="1" />
    <circle cx="100" cy="100" r="80" stroke="#5A3113" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="60" stroke="#5A3113" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="40" stroke="#5A3113" strokeWidth="1" />
    <circle cx="100" cy="100" r="20" fill="#5A3113" fillOpacity="0.15" />
    <circle cx="100" cy="100" r="5" fill="#5A3113" fillOpacity="0.4" />
    {/* Grooves */}
    {[85, 75, 65, 55, 45].map((r) => (
      <circle
        key={r}
        cx="100"
        cy="100"
        r={r}
        stroke="#5A3113"
        strokeWidth="0.3"
        strokeDasharray="2 4"
      />
    ))}
  </svg>
);

/* ============================================================
   MAIN PAGE COMPONENT
   ============================================================ */
export default function HomePage() {
  const [activeTrack, setActiveTrack] = useState(TRACKS[0]);
  const [isSpinning, setIsSpinning] = useState(true);
  const heroRef = useRef(null);
  const navRef = useRef(null);

  /* ---- GSAP Animations & Interactions ---- */
  useEffect(() => {
    let ctx;

    const initAnimations = () => {
      if (typeof window === "undefined" || !window.gsap) return;

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }

      ctx = gsap.context(() => {
        /* ============================================================
           0. LENIS SMOOTH SCROLL INTEGRATION (Polpharma Physics)
           ============================================================ */
        if (typeof window.Lenis !== "undefined") {
          const lenis = new window.Lenis({
            duration: 1.25,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
          });

          lenis.on("scroll", ScrollTrigger.update);
          gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
          });
          gsap.ticker.lagSmoothing(0);
        }

        /* ============================================================
           1. THE HERO TEXT-SCALE THRUST (Polpharma H1 Style)
           ============================================================ */
        const heroThrustTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-thrust-stage",
            start: "top top",
            end: "+=130%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });

        // Background text fluidly scales up and converts into massive organic backdrop
        heroThrustTl
          .to(
            ".hero-thrust-giant-text",
            {
              scale: 3.2,
              y: -80,
              opacity: 0.18,
              letterSpacing: "0.15em",
              ease: "power2.inOut",
            },
            0
          )
          // Raw cut-out artist graphics expand gracefully outward
          .to(
            ".hero-cutout-graphic",
            {
              scale: 1.28,
              rotate: 0,
              boxShadow: "0 25px 80px rgba(0,0,0,0.95)",
              ease: "power2.out",
            },
            0
          )
          // Background layer parallax
          .to(
            ".hero-thrust-bg",
            {
              scale: 1.15,
              y: 40,
              ease: "none",
            },
            0
          )
          // Organic text mask wraps & subtle fade
          .to(
            ".hero-organic-content",
            {
              y: -30,
              opacity: 1,
              ease: "power1.out",
            },
            0.2
          );

        /* ============================================================
           2. THE "SECTION REVEAL" SHEET WIPE (Polpharma Interface Flow)
           ============================================================ */
        ScrollTrigger.create({
          trigger: ".story-wipe-container",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          onUpdate: (self) => {
            const sheet = document.querySelector(".story-wipe-sheet");
            if (sheet) {
              const p = self.progress;
              // Smooth morph from bottom curtain into authentic jagged unfolding parchment
              const topY = (1 - p) * 100;
              sheet.style.clipPath = `polygon(
                0% ${topY}%, 
                100% ${Math.max(0, topY - 3)}%, 
                100% 100%, 
                0% 100%
              )`;
            }
          },
        });

        /* ============================================================
           3. HORIZONTAL SLIDER DISCOGRAPHY GATE (Polpharma Molecule Pipeline)
           ============================================================ */
        const discographyStrip = document.querySelector(".discography-horizontal-strip");
        if (discographyStrip) {
          const totalWidth = discographyStrip.scrollWidth;
          const windowWidth = window.innerWidth;
          const distanceToScroll = totalWidth - windowWidth;

          if (distanceToScroll > 0) {
            const discTl = gsap.timeline({
              scrollTrigger: {
                trigger: ".discography-gate-section",
                start: "top top",
                end: () => `+=${distanceToScroll * 1.3}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            // Smooth horizontal scroll of strip
            discTl.to(discographyStrip, {
              x: -distanceToScroll,
              ease: "none",
            }, 0);

            // Pull out vinyl record asset from behind aged sleeve & rotate
            discTl.to(
              ".gate-vinyl-record",
              {
                x: 180,
                rotation: 720,
                ease: "none",
              },
              0
            );

            // Floating lyrics / metadata at varying parallax speed (1.4x)
            discTl.to(
              ".discography-metadata-layer",
              {
                x: -distanceToScroll * 0.4,
                ease: "none",
              },
              0
            );

            // Parallax background at 0.3x
            discTl.to(
              ".discography-parallax-bg",
              {
                x: distanceToScroll * 0.25,
                ease: "none",
              },
              0
            );
          }
        }

        /* ============================================================
           4. UN-BOXED HUD MATRIX (Art Deco Indicators & Viewport Proximity)
           ============================================================ */
        const hudItems = document.querySelectorAll(".hud-telemetry-item");
        hudItems.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0.2, y: 30, borderColor: "rgba(226, 166, 59, 0.2)" },
            {
              opacity: 1,
              y: 0,
              borderColor: "rgba(226, 166, 59, 1)",
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "bottom 30%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        });

        /* ============================================================
           5. NAVBAR MORPH ON SCROLL
           ============================================================ */
        ScrollTrigger.create({
          trigger: ".hero-thrust-stage",
          start: "top top",
          end: "bottom top",
          onLeave: () => {
            const nav = document.querySelector(".navbar");
            if (nav) {
              nav.classList.remove("navbar--transparent");
              nav.classList.add("navbar--solid");
            }
          },
          onEnterBack: () => {
            const nav = document.querySelector(".navbar");
            if (nav) {
              nav.classList.remove("navbar--solid");
              nav.classList.add("navbar--transparent");
            }
          },
        });
      });
    };

    /* Wait for GSAP, ScrollTrigger & Lenis to load from CDN */
    const checkGsap = setInterval(() => {
      if (window.gsap && window.ScrollTrigger) {
        clearInterval(checkGsap);
        initAnimations();
      }
    }, 100);

    return () => {
      clearInterval(checkGsap);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <>
      {/* ============================================================
          NAVBAR — Floating Pill
          ============================================================ */}
      <nav ref={navRef} className="navbar navbar--transparent" id="navbar">
        <a href="#hero" className="navbar__logo-wrap" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div className="navbar__logo">
            <Image
              src="/images/logos/PR LOGO CLEAN.png"
              alt="Project Romeo"
              width={42}
              height={42}
              priority
            />
          </div>
          <span className="navbar__brand-text">Project Romeo</span>
        </a>

        <ul className="navbar__links">
          <li>
            <a href="#music">Music</a>
          </li>
          <li>
            <a href="#story">Story</a>
          </li>
          <li>
            <a href="#live">Live</a>
          </li>
          <li>
            <a href="#support">Support</a>
          </li>
          <li>
            <a href="#community">Community</a>
          </li>
        </ul>

        <a
          href={LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary navbar__cta"
        >
          Book Now
        </a>

        <button
          className="navbar__mobile-toggle"
          aria-label="Toggle navigation"
          onClick={() => {
            const links = document.querySelector(".navbar__links");
            if (links) {
              links.style.display =
                links.style.display === "flex" ? "none" : "flex";
            }
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ============================================================
          1. THE HERO TEXT-SCALE THRUST (Polpharma H1 Style)
          ============================================================ */}
      <section ref={heroRef} className="hero-thrust-stage" id="hero">
        {/* Parallaxing stadium/band background image */}
        <div className="hero-thrust-bg">
          <Image
            src="/images/backgrounds/RFP08287.jpeg"
            alt="Project Romeo live stadium"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="hero__overlay" style={{ background: "linear-gradient(to bottom, rgba(18,10,5,0.45) 0%, rgba(18,10,5,0.88) 80%, rgba(18,10,5,0.98) 100%)" }} />
        </div>

        {/* Massive Typography Thrust Block (Rotated -2deg, Scales up fluidly on scroll) */}
        <h1 className="hero-thrust-giant-text">
          PROJECT ROMEO
        </h1>

        {/* Pinned Expanding Cut-out Graphic */}
        <div className="hero-cutout-wrap">
          <div className="hero-cutout-graphic">
            <div className="scrap-tape" style={{ top: "-10px", left: "20%" }} />
            <div className="scrap-tape scrap-tape--right" style={{ top: "-10px", right: "20%" }} />
            <Image
              src="/images/backgrounds/RFP08261.jpeg"
              alt="Project Romeo cut-out stage"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 680px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Organic Text Mask Content Wrapping at Bottom-Left Third */}
        <div className="hero-shape-wrap-container">
          <div className="hero-organic-content paper-torn-edge">
            <span className="jeepney-badge" style={{ marginBottom: "0.8rem" }}>
              Manila Sound Revival // Escolta Sound 1970s
            </span>
            <h2 style={{ fontFamily: "var(--font-retro-title)", fontSize: "clamp(2rem, 3.8vw, 3.2rem)", color: "var(--color-cream)", margin: "0.4rem 0" }}>
              Where Nostalgia Meets the Next Verse.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--color-taupe)", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "1.2rem" }}>
              Born from late-night Escolta reel-to-reel tape sessions. Project Romeo resurrects the raw, brass-laden soul of 1970s Philippine vinyl.
            </p>
            <div className="hero__cta-row" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={LINKS.spotifyTrack} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <SpotifyIcon /> Listen to Bugambilya
              </a>
              <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <YouTubeIcon /> Watch Archive
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. THE "SECTION REVEAL" SHEET WIPE (Polpharma Interface Flow)
          The Chronicle unfolds like authentic jagged parchment wiping across
          ============================================================ */}
      <div className="story-wipe-container" id="story">
        <section className="story-wipe-sheet">
          <div className="section-tear-divider" />
          <div className="story__bg-texture" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <Image
              src="/images/backgrounds/RFP08230.jpeg"
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: "cover", opacity: 0.15 }}
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 5, padding: "clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem)" }}>
            <div className="story__header" style={{ marginBottom: "2.5rem" }}>
              <span className="jeepney-badge">Liwayway Weekly &bull; Ed. Nobyembre 1976</span>
              <h2 className="story__heading" style={{ marginTop: "1rem" }}>
                The <em>Chronicle</em> of Project Romeo
              </h2>
            </div>

            {/* Organic Scrapbook Broadsheet Paper Surface */}
            <div className="story__editorial-scrapbook paper-torn-edge">
              <div className="scrap-tape" style={{ top: "-10px", left: "40px" }} />
              <div className="scrap-tape scrap-tape--right" style={{ top: "-10px", right: "60px" }} />

              <div className="story__editorial">
                {/* Column 1 */}
                <div className="story__column">
                  <p>
                    <span className="story__dropcap">B</span>
                    orn from the hazy warmth of late-night jam sessions and the
                    golden glow of a setting Manila sun, Project Romeo emerged as a
                    voice for a generation caught between yesterday and tomorrow.
                    Their sound &mdash; a careful blend of nostalgia-soaked melodies and
                    contemporary arrangements &mdash; speaks to the universal longing
                    for connection, for home, and for the moments that define who
                    we are.
                  </p>
                  <p>
                    The duo draws from the deep well of Filipino musical heritage,
                    channeling the romanticism of Manila Sound through a modern
                    lens. Each composition is a vignette, a snapshot of feeling
                    preserved in amber, delivered with the kind of sincerity that
                    cannot be manufactured.
                  </p>

                  <figure className="story__floating-img" style={{ border: "2px solid #1a1008", transform: "rotate(-1.5deg)", boxShadow: "4px 8px 18px rgba(0,0,0,0.3)" }}>
                    <Image
                      src="/images/backgrounds/RFP07591.jpeg"
                      alt="Project Romeo on film"
                      width={500}
                      height={340}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <figcaption style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#6a5035" }}>
                      Kodak 400 Film &mdash; Escolta Studio Session, 1976
                    </figcaption>
                  </figure>
                </div>

                {/* Column 2 */}
                <div className="story__column">
                  {/* Authentic Old Manila Vintage Stamp Manifesto Box */}
                  <div className="story__vintage-stamp-box">
                    <div className="scrap-tape scrap-tape--right" style={{ top: "-12px", right: "20px" }} />
                    <p className="story__vintage-stamp-quote">
                      &ldquo;We do not chase trends. We chase truth. The kind of truth that
                      lives in a chord change that makes the hair on your arms stand
                      up. That is the only metric that matters to us.&rdquo;
                    </p>
                    <p style={{ 
                      fontFamily: "var(--font-mono)", 
                      fontSize: "0.82rem", 
                      fontWeight: 700,
                      color: "#b54228", 
                      letterSpacing: "0.14em", 
                      textTransform: "uppercase",
                      marginTop: "0.8rem",
                      marginBottom: 0
                    }}>
                      &mdash; Project Romeo // Escolta Sound Recording Journal
                    </p>
                  </div>

                  <p style={{ marginTop: "1.2rem" }}>
                    Their debut single turned heads not through spectacle, but
                    through substance &mdash; a rare quality in an era of disposable
                    content. Word traveled the way good music always does: from ear
                    to ear, from heart to heart. Listeners did not just hear
                    Project Romeo; they felt them.
                  </p>

                  <figure className="story__floating-img story__floating-img--right" style={{ border: "2px solid #1a1008", transform: "rotate(2deg)", boxShadow: "4px 8px 18px rgba(0,0,0,0.3)" }}>
                    <Image
                      src="/images/backgrounds/RFP08373.jpeg"
                      alt="Project Romeo walking"
                      width={500}
                      height={700}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <figcaption style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#6a5035" }}>
                      Walking Along Roxas Blvd &mdash; Sunset Vignette
                    </figcaption>
                  </figure>

                  <p>
                    With Bugambilya, their latest release, Project Romeo distills
                    everything they stand for into a single body of work. It is a
                    record that rewards patience, that unfolds like a letter you
                    find tucked inside a book you forgot you owned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================
          3. HORIZONTAL SLIDER DISCOGRAPHY GATE (Polpharma Molecule Pipeline)
          Vertical scroll locks; user spins wheel to glide through 19 releases
          Smooth rotating vinyl pulls out behind album jacket with multi-speed parallax
          ============================================================ */}
      <section className="discography-gate-section" id="music">
        {/* Parallax Background Layer (0.3x speed) */}
        <div 
          className="discography-parallax-bg"
          style={{ backgroundImage: `url('/images/backgrounds/RFP07717.jpeg')` }}
        />

        <div className="discography-horizontal-strip">
          {/* Panel 1: Interactive Turntable & Now Spinning Focus */}
          <div className="discography-stage-panel">
            <div className="discography-interactive-vinyl-suite">
              {/* Sleeve + Rotating Vinyl Pulled Out */}
              <div className="vinyl-deck" style={{ position: "relative", flexShrink: 0 }}>
                {/* Vintage Tonearm */}
                <div className={`vinyl-tonearm ${isSpinning ? "needle-dropped" : "needle-lifted"}`}>
                  <svg viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="65" cy="15" r="12" fill="#120a05" stroke="#e2a63b" strokeWidth="3" />
                    <circle cx="65" cy="15" r="5" fill="#f5efe1" />
                    <path d="M65 15 L45 80 L30 115 L22 130" stroke="#120a05" strokeWidth="5" strokeLinecap="round" />
                    <path d="M65 15 L45 80 L30 115 L22 130" stroke="#e2a63b" strokeWidth="2" strokeLinecap="round" />
                    <rect x="14" y="124" width="16" height="12" rx="2" fill="#b54228" stroke="#120a05" strokeWidth="2" />
                    <line x1="16" y1="136" x2="18" y2="140" stroke="#f5efe1" strokeWidth="2" />
                  </svg>
                </div>

                {/* Album Jacket Sleeve */}
                <div 
                  className="vinyl-sleeve-envelope"
                  onClick={() => setIsSpinning(!isSpinning)}
                  style={{ cursor: "pointer", zIndex: 4 }}
                >
                  <Image
                    src={`/images/music track covers/${activeTrack.file}`}
                    alt={activeTrack.title}
                    fill
                    sizes="280px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    insetInline: 0,
                    background: "linear-gradient(transparent, rgba(18,10,5,0.95))",
                    padding: "0.8rem",
                    color: "#f5efe1",
                    fontFamily: "var(--font-label)",
                    fontSize: "0.78rem"
                  }}>
                    <span style={{ color: "#e2a63b", fontWeight: 700 }}>VOL. {activeTrack.year}</span> &bull; {activeTrack.title}
                  </div>
                </div>

                {/* Mechanically Extruded Vinyl Disc */}
                <div className="vinyl-disc-pullout active-pulled gate-vinyl-record" style={{ zIndex: 2 }}>
                  <div className="vinyl-record" style={{ animation: isSpinning ? "spinRecord 3.6s linear infinite" : "none" }}>
                    <div className="vinyl-center-label">
                      <Image
                        src={`/images/music track covers/${activeTrack.file}`}
                        alt="Label"
                        width={96}
                        height={96}
                        style={{ objectFit: "cover", opacity: 0.9 }}
                      />
                      <div className="vinyl-center-spindle" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Parallax Metadata Layer (1.4x Speed) */}
              <div className="discography-metadata-layer">
                <span className="jeepney-badge" style={{ marginBottom: "0.8rem" }}>
                  Now Spinning // 33⅓ RPM Escolta Master Tape
                </span>
                <h2 style={{ fontFamily: "var(--font-retro-title)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--color-cream)", margin: "0.4rem 0" }}>
                  {activeTrack.title}
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", color: "var(--color-gold)", fontSize: "1.15rem", marginBottom: "1.2rem" }}>
                  &ldquo;{activeTrack.note}&rdquo;
                </p>

                {/* Spotify Embed Player */}
                <iframe
                  key={activeTrack.id}
                  src={`https://open.spotify.com/embed/track/${activeTrack.spotifyId}?utm_source=generator&theme=0`}
                  height="80"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`Spotify Player - ${activeTrack.title}`}
                  style={{ border: "2px solid var(--color-espresso)", borderRadius: "4px", width: "100%", maxWidth: "460px", background: "#120a05" }}
                />

                <div style={{ display: "flex", gap: "0.8rem", marginTop: "1rem", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    onClick={() => setIsSpinning(!isSpinning)}
                    className="jeepney-badge"
                    style={{ 
                      cursor: "pointer", 
                      background: isSpinning ? "#b54228" : "#f5efe1", 
                      color: isSpinning ? "#ffffff" : "#120a05" 
                    }}
                  >
                    {isSpinning ? "⏸ PAUSE NEEDLE" : "▶ DROP NEEDLE"}
                  </button>
                  <a
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(activeTrack.ytQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jeepney-badge"
                    style={{ textDecoration: "none", color: "#120a05" }}
                  >
                    <YouTubeIcon /> Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2+: Horizontal Billboard Pipeline (All 19 Tracks) */}
          <div className="discography-tracks-strip">
            {TRACKS.map((track) => (
              <div
                key={track.id}
                className="discography-track-billboard"
                onClick={() => {
                  setActiveTrack(track);
                  setIsSpinning(true);
                }}
              >
                <div className="scrap-tape" style={{ top: "-8px", right: "20%" }} />
                <div style={{ position: "relative", width: "100%", aspectRatio: "1", overflow: "hidden", border: "2px solid #120a05" }}>
                  <Image
                    src={`/images/music track covers/${track.file}`}
                    alt={track.title}
                    fill
                    sizes="320px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ marginTop: "0.75rem", textAlign: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-terracotta)", fontWeight: 700 }}>
                    VOL. {track.year}
                  </span>
                  <h4 style={{ fontFamily: "var(--font-retro-title)", fontSize: "1.2rem", margin: "0.2rem 0", color: "#120a05" }}>
                    {track.title}
                  </h4>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", fontStyle: "italic", color: "#4a3220", margin: 0 }}>
                    {track.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. THE UN-BOXED HUD MATRIX (Polpharma Data Counter / Tech Layout)
          No container boxes: Telemetry numbers, dates, Art Deco glowing line indicators
          ============================================================ */}
      <section className="hud-matrix-section" id="support">
        {/* Faint Art Deco architectural blueprint drafting grid */}
        <div className="hud-artdeco-lines" />

        <div className="container" style={{ position: "relative", zIndex: 5 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="jeepney-badge">// Studio Console Telemetry & Booking Ledger</span>
            <h2 style={{ fontFamily: "var(--font-retro-title)", fontSize: "clamp(2.5rem, 5vw, 4.2rem)", color: "var(--color-cream)", marginTop: "1rem" }}>
              The <em>Un-Boxed</em> HUD Matrix
            </h2>
            <p style={{ fontFamily: "var(--font-mono)", color: "var(--color-taupe)", fontSize: "0.95rem" }}>
              Live metrics streamed directly from analog reels, Manila radio broadcasts & tour dispatches
            </p>
          </div>

          <div className="hud-matrix-grid">
            {/* Metric 01 */}
            <div className="hud-telemetry-item">
              <div className="hud-telemetry-indicator" />
              <p className="hud-telemetry-label">// TAPE SATURATION</p>
              <h3 className="hud-telemetry-value">33⅓ RPM</h3>
              <p className="hud-telemetry-desc">
                Analog recording standard on Ampex 2-inch magnetic master tape at Escolta Sound Studio.
              </p>
            </div>

            {/* Metric 02 */}
            <div className="hud-telemetry-item">
              <div className="hud-telemetry-indicator" />
              <p className="hud-telemetry-label">// TOTAL DISCOGRAPHY</p>
              <h3 className="hud-telemetry-value">19 TRACKS</h3>
              <p className="hud-telemetry-desc">
                From Bugambilya to Ermita &mdash; each single pressed with authentic 1970s brass arrangements.
              </p>
            </div>

            {/* Metric 03 */}
            <div className="hud-telemetry-item">
              <div className="hud-telemetry-indicator" />
              <p className="hud-telemetry-label">// CUMULATIVE STREAMS</p>
              <h3 className="hud-telemetry-value">2.4M+</h3>
              <p className="hud-telemetry-desc">
                Active listeners reviving the Manila Sound movement across Spotify, Apple Music & radio waves.
              </p>
            </div>

            {/* Metric 04 */}
            <div className="hud-telemetry-item">
              <div className="hud-telemetry-indicator" />
              <p className="hud-telemetry-label">// LIVE AUDIENCE PEAK</p>
              <h3 className="hud-telemetry-value">12,000</h3>
              <p className="hud-telemetry-desc">
                Packed arenas singing every lyric at the historic Folk Arts Theater and Roxas Boulevard shows.
              </p>
            </div>

            {/* Metric 05 - Booking Dispatch */}
            <div className="hud-telemetry-item">
              <div className="hud-telemetry-indicator" />
              <p className="hud-telemetry-label">// NEXT TOUR WINDOW</p>
              <h3 className="hud-telemetry-value">Q4 TOUR</h3>
              <p className="hud-telemetry-desc">
                Open booking calendar for cultural festivals, vintage hall performances & auditorium recitals.
              </p>
              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="jeepney-badge"
                style={{ marginTop: "1rem", textDecoration: "none" }}
              >
                Inquire Tour Dates &rarr;
              </a>
            </div>

            {/* Metric 06 - Archival Status */}
            <div className="hud-telemetry-item">
              <div className="hud-telemetry-indicator" />
              <p className="hud-telemetry-label">// ESCORT STATION STATUS</p>
              <h3 className="hud-telemetry-value">OPERATIONAL</h3>
              <p className="hud-telemetry-desc">
                Transmitting nostalgic frequencies 24/7 across the archipelago with zero corporate filters.
              </p>
              <a
                href={LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="jeepney-badge"
                style={{ marginTop: "1rem", textDecoration: "none" }}
              >
                <SpotifyIcon /> Stream Master Reel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMMUNITY SECTION — The Movement
          ============================================================ */}
      <section className="community section" id="community">
        <div className="community__bg-texture">
          <Image
            src="/images/backgrounds/RFP08261.jpeg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container">
          <div className="community__header gsap-fade-up">
            <p
              className="music__label"
              style={{ color: "var(--color-taupe)" }}
            >
              The Community
            </p>
            <h2 className="community__heading">
              Join the <em>Movement</em>
            </h2>
          </div>

          <div className="community__cta-block gsap-fade-up">
            <p className="community__cta-text">
              Project Romeo is not just a band. It is a gathering of people
              who believe that music should move you, not just pass through
              you. Welcome to the fold.
            </p>
          </div>

          <div className="community__socials gsap-fade-up">
            <a
              href={LINKS.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="community__social-btn"
            >
              <SpotifyIcon /> Spotify
            </a>
            <a
              href={LINKS.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="community__social-btn"
            >
              <AppleMusicIcon /> Apple Music
            </a>
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="community__social-btn"
            >
              <FacebookIcon /> Facebook
            </a>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="community__social-btn"
            >
              <InstagramIcon /> Instagram
            </a>
            <a
              href={LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="community__social-btn"
            >
              <TikTokIcon /> TikTok
            </a>
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="community__social-btn"
            >
              <YouTubeIcon /> YouTube
            </a>
          </div>

          <div
            className="ornament gsap-fade-up"
            style={{ color: "var(--color-taupe)" }}
          >
            Listener Testimonials
          </div>

          <div className="community__testimonials">
            <div className="community__testimonial">
              <p className="community__testimonial-text">
                &ldquo;Their music feels like warm light filtering through old
                curtains. It reminds me of home in a way I cannot quite
                explain.&rdquo;
              </p>
              <p className="community__testimonial-author">
                &mdash; A listener from Manila
              </p>
            </div>
            <div className="community__testimonial">
              <p className="community__testimonial-text">
                &ldquo;Bugambilya made me call my mother. That is the highest
                compliment I can give a piece of music.&rdquo;
              </p>
              <p className="community__testimonial-author">
                &mdash; A fan on social media
              </p>
            </div>
            <div className="community__testimonial">
              <p className="community__testimonial-text">
                &ldquo;In a world drowning in noise, Project Romeo is the
                silence between notes that actually means something.&rdquo;
              </p>
              <p className="community__testimonial-author">
                &mdash; A concertgoer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER — The Editorial Colophon
          ============================================================ */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__brand-col">
              <div className="footer__logo">
                <Image
                  src="/images/logos/PR LOGO CLEAN.png"
                  alt="Project Romeo"
                  width={60}
                  height={60}
                />
              </div>
              <p className="footer__brand-name">Project Romeo</p>
              <p className="footer__tagline">
                Where nostalgia meets the next verse.
              </p>
              <p className="footer__manifesto">
                Project Romeo is a Filipino indie act dedicated to crafting
                music that outlives its moment. Every song is a letter sealed
                in melody, written for anyone who still believes in the power
                of a good song.
              </p>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="footer__col-title">Navigate</h4>
              <ul className="footer__col-links">
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#music">Music</a>
                </li>
                <li>
                  <a href="#story">Story</a>
                </li>
                <li>
                  <a href="#live">Live &amp; Content</a>
                </li>
                <li>
                  <a href="#support">Support</a>
                </li>
              </ul>
            </div>

            {/* Stream Column */}
            <div>
              <h4 className="footer__col-title">Stream</h4>
              <ul className="footer__col-links">
                <li>
                  <a
                    href={LINKS.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spotify
                  </a>
                </li>
                <li>
                  <a
                    href={LINKS.appleMusic}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple Music
                  </a>
                </li>
                <li>
                  <a
                    href={LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h4 className="footer__col-title">Connect</h4>
              <ul className="footer__col-links">
                <li>
                  <a
                    href={LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href={LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Booking Inquiries
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__status">
              <span className="footer__status-dot" />
              All Platforms Operational
            </div>
            <p className="footer__copyright">
              Project Romeo. All rights reserved.
            </p>
            <p className="footer__manila">Made in the Philippines</p>
          </div>
        </div>
      </footer>
    </>
  );
}
