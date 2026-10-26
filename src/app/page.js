"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

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
        /* ==========================================
           1. NAVBAR BRAND
           ========================================== */
        gsap.set(".navbar__brand-text", { opacity: 1 });

        /* ==========================================
           2. HERO ENTRANCE WITH WORD-MASK
           ========================================== */
        const heroTimeline = gsap.timeline({ delay: 0.2 });

        heroTimeline
          .from(".hero__overline", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          })

        // Title word-mask reveal with stamp bounce
        heroTimeline
          .to(
            ".hero__title-word",
            {
              y: "0%",
              skewY: 0,
              opacity: 1,
              duration: 1.1,
              stagger: 0.16,
              ease: "back.out(1.2)",
            },
            "-=0.2"
          )
          .from(
            ".hero__subtitle",
            { y: 25, opacity: 0, duration: 0.8, ease: "power3.out" },
            "-=0.5"
          )
          .from(
            ".hero__tagline",
            { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
            "-=0.4"
          )
          .from(
            ".hero__cta-row",
            { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
            "-=0.4"
          )
          .from(
            ".hero__scroll-indicator",
            { opacity: 0, duration: 0.6, ease: "power2.out" },
            "-=0.3"
          );

        /* ==========================================
           3. FLOATING PHOTOS — BREATHING & PARALLAX
           ========================================== */
        // Entrance then subtle ambient float loop
        gsap.to(".hero__floating-photo--1", {
          y: -10,
          rotation: "+=0.8",
          duration: 4.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: 0.8,
        });

        gsap.to(".hero__floating-photo--2", {
          y: -14,
          rotation: "-=1",
          duration: 5.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: 1.2,
        });

        // Parallax scrub on scroll
        gsap.to(".hero__floating-photo--1", {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(".hero__floating-photo--2", {
          yPercent: -35,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        // Hero background overlay darkens progressively
        gsap.to(".hero__overlay", {
          background:
            "linear-gradient(to top, rgba(28, 14, 0, 0.98) 0%, rgba(28, 14, 0, 0.85) 50%, rgba(28, 14, 0, 0.5) 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        /* ==========================================
           4. MUSIC SECTION — VINYL DROP & WORDS
           ========================================== */
        // Vinyl drop in and continuous spinning
        const vinylTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".music",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });

        vinylTl
          .fromTo(
            ".music__vinyl",
            { opacity: 0, scale: 0.6, rotation: -180 },
            {
              opacity: 0.35,
              scale: 1,
              rotation: 0,
              duration: 1.4,
              ease: "power2.out",
            }
          )
          .call(() => {
            gsap.to(".music__vinyl", {
              rotation: 360,
              duration: 14,
              repeat: -1,
              ease: "none",
            });
          });

        // Pullquote word-by-word reveal
        const quoteWords = document.querySelectorAll(".music__pullquote .quote-word");
        if (quoteWords.length > 0) {
          gsap.from(quoteWords, {
            opacity: 0,
            y: 8,
            duration: 0.4,
            stagger: 0.035,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".music__pullquote",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        }

        /* 3D tilt interaction for embed cards */
        const embedCards = document.querySelectorAll(".music__embed-card");
        embedCards.forEach((card) => {
          const onMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;

            gsap.to(card, {
              rotateX,
              rotateY,
              transformPerspective: 800,
              duration: 0.3,
              ease: "power1.out",
            });
          };

          const onMouseLeave = () => {
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              duration: 0.5,
              ease: "back.out(1.2)",
            });
          };

          card.addEventListener("mousemove", onMouseMove);
          card.addEventListener("mouseleave", onMouseLeave);
        });

        /* ==========================================
           5. STORY SECTION — CURTAIN WIPE & STAMP
           ========================================= */
        // Background curtain wipe
        gsap.to(".story__bg-texture", {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.4,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".story",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });

        // Gold pullquote stamp bounce
        gsap.from(".story__gold-quote", {
          scale: 0.94,
          rotate: -2,
          opacity: 0,
          duration: 0.9,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".story__gold-quote",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Story floating images velocity parallax
        document.querySelectorAll(".story__floating-img").forEach((img, i) => {
          const direction = i % 2 === 0 ? 1 : -1;
          gsap.fromTo(
            img,
            { y: 20 * direction, rotate: -2 * direction },
            {
              y: -20 * direction,
              rotate: 2 * direction,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                start: "top 85%",
                end: "bottom 15%",
                scrub: 1.2,
              },
            }
          );
        });

        /* ==========================================
           6. LIVE SECTION — TV GLITCH & TICKER
           ========================================== */
        ScrollTrigger.create({
          trigger: ".live__heading",
          start: "top 80%",
          once: true,
          onEnter: () => {
            const heading = document.querySelector(".live__heading");
            if (heading) heading.classList.add("glitch-active");
          },
        });

        // Ticker tape entrance for social links
        gsap.from(".live__social-link", {
          x: 40,
          rotate: 6,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".live__socials",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        /* ==========================================
           7. SUPPORT SECTION — SEQUENTIAL FLIP-IN
           ========================================== */
        gsap.from(".support__card", {
          rotateY: 45,
          opacity: 0,
          y: 40,
          duration: 0.9,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".support__grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        /* ==========================================
           8. COMMUNITY SECTION — TESTIMONIALS & PARALLAX
           ========================================== */
        // Crowd parallax
        gsap.to(".community__bg-texture", {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: ".community",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        // Testimonial cards settle into place
        gsap.from(".community__testimonial", {
          y: 35,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".community__testimonials",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // CTA text breathing tracking out
        gsap.fromTo(
          ".community__cta-text",
          { letterSpacing: "0em" },
          {
            letterSpacing: "0.035em",
            duration: 2,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".community__cta-text",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        /* ==========================================
           9. GENERAL GSAP UTILITY ENTRANCES
           ========================================== */
        document.querySelectorAll(".gsap-fade-up").forEach((el) => {
          gsap.to(el, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });

        document.querySelectorAll(".gsap-scale-in").forEach((el) => {
          gsap.to(el, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });

        /* ==========================================
           10. NAVBAR MORPH ON SCROLL
           ========================================== */
        ScrollTrigger.create({
          trigger: ".hero",
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

    /* Wait for GSAP & ScrollTrigger to load from CDN */
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
          HERO SECTION — Manila Sound Revival
          ============================================================ */}
      <section ref={heroRef} className="hero section" id="hero">
        <div className="hero__bg">
          <Image
            src="/images/backgrounds/RFP08287.jpeg"
            alt="Project Romeo at the stadium"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero__overlay" />

        {/* Floating photos with ambient breathing + parallax */}
        <div className="hero__floating-photo hero__floating-photo--1">
          <Image
            src="/images/backgrounds/RFP08261.jpeg"
            alt="Project Romeo performing"
            fill
            sizes="240px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero__floating-photo hero__floating-photo--2">
          <Image
            src="/images/backgrounds/RFP07717.jpeg"
            alt="Project Romeo on film"
            fill
            sizes="200px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="hero__content container">
          <p className="hero__overline">Manila Sound Revival</p>

          {/* Word-masked massive title */}
          <h1 className="hero__title">
            <span className="hero__title-word-wrap">
              <span className="hero__title-word">Project</span>
            </span>
            <br />
            <span className="hero__title-word-wrap">
              <span className="hero__title-word">Romeo</span>
            </span>
          </h1>

          <p className="hero__subtitle">
            Where nostalgia meets the next verse.
          </p>
          <p className="hero__tagline">
            Now Streaming: Bugambilya &mdash; Available on all platforms
          </p>

          <div className="hero__cta-row">
            <a
              href={LINKS.spotifyTrack}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <SpotifyIcon />
              Listen Now
            </a>
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <YouTubeIcon />
              Watch
            </a>
          </div>
        </div>

        {/* Filmstrip scroll indicator */}
        <div className="hero__scroll-indicator">
          <div className="hero__filmstrip">
            <div className="hero__filmstrip-row">
              <div className="hero__filmstrip-hole" />
              <div className="hero__filmstrip-hole" />
              <div className="hero__filmstrip-hole" />
            </div>
            <div className="hero__filmstrip-row">
              <div className="hero__filmstrip-hole" />
              <div className="hero__filmstrip-hole" />
              <div className="hero__filmstrip-hole" />
            </div>
          </div>
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ============================================================
          MUSIC SECTION — Now Spinning
          ============================================================ */}
      <section className="music section" id="music">
        <div className="container" style={{ position: "relative" }}>
          <VinylSVG />

          <div className="music__header gsap-fade-up">
            <p className="music__label">Now Spinning</p>
            <h2 className="music__heading">
              The <em>Sound</em> of Project Romeo
            </h2>
          </div>

          <div className="ornament gsap-fade-up">The Discography</div>

          <div className="music__spread">
            {/* Pull Quote with word-by-word reveal */}
            <div className="music__pullquote gsap-fade-up">
              <blockquote>
                {"Music is the closest thing we have to a time machine. Every chord carries us somewhere we have already been, and somewhere we have not yet arrived."
                  .split(" ")
                  .map((word, i) => (
                    <span key={i} className="quote-word" style={{ display: "inline-block", marginRight: "0.28em" }}>
                      {word}
                    </span>
                  ))}
              </blockquote>
              <cite>&mdash; Project Romeo</cite>
            </div>

            {/* Spotify & Apple Music Embed Cards with 3D Tilt */}
            <div className="music__embeds">
              <div className="music__embed-card gsap-fade-up">
                <p className="music__embed-label">Spotify</p>
                <iframe
                  src="https://open.spotify.com/embed/track/4OdvA38vT7i7b9R56liX7C?utm_source=generator&theme=0"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify - Bugambilya"
                />
              </div>

              <div className="music__embed-card gsap-fade-up">
                <p className="music__embed-label">Apple Music</p>
                <iframe
                  src="https://embed.music.apple.com/ph/album/bugambilya/6818278763?i=6818278767&app=music"
                  height="175"
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                  loading="lazy"
                  title="Apple Music - Bugambilya"
                  style={{
                    borderRadius: "12px",
                    background: "transparent",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Stream Everywhere Row */}
          <div className="ornament gsap-fade-up">Stream Everywhere</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "1rem",
            }}
          >
            <a
              href={LINKS.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="live__social-link"
            >
              <SpotifyIcon /> Spotify
            </a>
            <a
              href={LINKS.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="live__social-link"
            >
              <AppleMusicIcon /> Apple Music
            </a>
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="live__social-link"
            >
              <YouTubeIcon /> YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          STORY SECTION — The Chronicle
          ============================================================ */}
      <section className="story section" id="story">
        <div className="story__bg-texture">
          <Image
            src="/images/backgrounds/RFP08230.jpeg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container">
          <div className="story__header gsap-fade-up">
            <p className="music__label">The Chronicle</p>
            <h2 className="story__heading">
              The Story of Project Romeo
            </h2>
          </div>

          <div className="ornament gsap-fade-up">An Editorial Feature</div>

          <div className="story__editorial">
            {/* Column 1 */}
            <div className="story__column gsap-fade-up">
              <p>
                Born from the hazy warmth of late-night jam sessions and the
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

              <figure className="story__floating-img">
                <Image
                  src="/images/backgrounds/RFP07591.jpeg"
                  alt="Project Romeo on film"
                  width={500}
                  height={340}
                  style={{ width: "100%", height: "auto" }}
                />
                <figcaption>On Film &mdash; Project Romeo, 2024</figcaption>
              </figure>
            </div>

            {/* Column 2 */}
            <div className="story__column gsap-fade-up">
              <div className="story__gold-quote">
                We do not chase trends. We chase truth. The kind of truth that
                lives in a chord change that makes the hair on your arms stand
                up. That is the only metric that matters to us.
              </div>

              <p>
                Their debut single turned heads not through spectacle, but
                through substance &mdash; a rare quality in an era of disposable
                content. Word traveled the way good music always does: from ear
                to ear, from heart to heart. Listeners did not just hear
                Project Romeo; they felt them.
              </p>

              <figure className="story__floating-img story__floating-img--right">
                <Image
                  src="/images/backgrounds/RFP08373.jpeg"
                  alt="Project Romeo walking"
                  width={500}
                  height={700}
                  style={{ width: "100%", height: "auto" }}
                />
                <figcaption>Walking Forward &mdash; Project Romeo</figcaption>
              </figure>

              <p>
                With Bugambilya, their latest release, Project Romeo distills
                everything they stand for into a single body of work. It is a
                record that rewards patience, that unfolds like a letter you
                find tucked inside a book you forgot you owned. The kind of
                music that makes you want to call someone you have not spoken
                to in years.
              </p>
            </div>
          </div>

          <div className="ornament gsap-fade-up">
            Artist bio to be updated
          </div>
        </div>
      </section>

      {/* ============================================================
          LIVE & CONTENT SECTION — The Stage
          ============================================================ */}
      <section className="live section" id="live">
        <div className="container">
          <div className="live__header gsap-fade-up">
            <p className="music__label">The Stage</p>
            <h2 className="live__heading">
              Live <em>&</em> Content
              <span className="live__heading-glitch-clone" aria-hidden="true">
                Live <em>&</em> Content
              </span>
            </h2>
          </div>

          <div className="ornament gsap-fade-up">From the Archives</div>

          {/* YouTube Embed with VHS Scan lines */}
          <div className="music__video-row gsap-fade-up">
            <div className="music__embed-card">
              <p className="music__embed-label">Latest from YouTube</p>
              <div className="music__video-embed">
                <iframe
                  src="https://www.youtube.com/embed/?listType=user_uploads&list=UCFI5dggQubf72RLGpuz1DuQ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title="Project Romeo - YouTube"
                />
              </div>
            </div>
          </div>

          {/* Social Media Grid */}
          <div className="ornament gsap-fade-up">Follow the Journey</div>

          <div className="live__socials">
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="live__social-link"
            >
              <FacebookIcon /> Facebook
            </a>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="live__social-link"
            >
              <InstagramIcon /> Instagram
            </a>
            <a
              href={LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="live__social-link"
            >
              <TikTokIcon /> TikTok
            </a>
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="live__social-link"
            >
              <YouTubeIcon /> YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          SUPPORT SECTION — The Inner Circle
          ============================================================ */}
      <section className="support section" id="support">
        <div className="container">
          <div className="support__header gsap-fade-up">
            <p
              className="music__label"
              style={{ color: "var(--color-taupe)" }}
            >
              The Inner Circle
            </p>
            <h2 className="support__heading">
              Support the <em>Movement</em>
            </h2>
          </div>

          <div
            className="ornament gsap-fade-up"
            style={{ color: "var(--color-taupe)" }}
          >
            How to Get Involved
          </div>

          <div className="support__grid">
            <div className="support__card">
              <div className="support__card-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: "var(--color-gold)" }}
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </div>
              <h3 className="support__card-title">Stream the Music</h3>
              <p className="support__card-text">
                Every stream is a vote. Add Project Romeo to your playlists,
                share their tracks, and let the algorithm know that good music
                still matters. It is the simplest act with the greatest
                impact.
              </p>
              <a
                href={LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Open Spotify
              </a>
            </div>

            <div className="support__card">
              <div className="support__card-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: "var(--color-gold)" }}
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="support__card-title">Join the Community</h3>
              <p className="support__card-text">
                Follow Project Romeo across social platforms. Be the first to
                hear announcements, behind-the-scenes content, and new
                releases. The inner circle is where the real conversation
                happens.
              </p>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Follow on Instagram
              </a>
            </div>

            <div className="support__card">
              <div className="support__card-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: "var(--color-gold)" }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="support__card-title">Book the Band</h3>
              <p className="support__card-text">
                For inquiries about live performances, collaborations, and
                private events, reach out through the official channels.
                Project Romeo brings the warmth of vinyl to every stage they
                touch.
              </p>
              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Contact via Facebook
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
