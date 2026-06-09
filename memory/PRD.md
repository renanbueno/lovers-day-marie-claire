# O Nosso Wrapped — PRD

## Problem Statement
A "Spotify Wrapped" style romantic, interactive web app for Dia dos Namorados.
User chose React + Framer Motion adaptation (originally requested Vanilla JS + GSAP).

## Stack
- React 19, Framer Motion 11, Tailwind CSS, canvas-confetti, lucide-react
- Fonts: Playfair Display (display, italic) + Outfit (UI)
- No backend logic required — purely frontend visual story

## User Personas
- Couple/individual creating a personalized Valentine's experience as a gift

## Core Requirements (static)
1. Stories-style navigation with top progress bar (Instagram/Spotify wrapped)
2. Dark cinematic gradient theme (deep purple → dark pink → red) + film grain
3. Mobile-first responsive
4. All textual content uses [INSIRA AQUI] placeholders
5. Photo placeholders use gradient div + heart emoji
6. Audio placeholder unlocked on first user click

## What's been implemented (2026-02-09)
- StartSlide: "O Nosso Wrapped" + pulsing "Começar a Retrospectiva" CTA, unlocks audio
- StatsSlide: Animated counters with placeholders for days/pizzas/call hours
- MusicQuizSlide: 3 song options; wrong = shake + red; correct = canvas-confetti + auto-advance
- PhotosSlide: Polaroid-style photo placeholders + final message + "Te amo" button → heart rain
- StoriesProgress: animated top progress bars synced to slide durations
- Hot zones: tap-left = back, tap-right = forward (on stats/photos)
- Audio placeholder (`<audio>` tag) wired and unlocked on first click

## Backlog / Next Action Items (P1/P2)
- P1: Replace all `[INSIRA AQUI]` placeholders with real content (numbers, song names, message)
- P1: Add audio src + photo src to PhotosSlide PHOTOS array
- P2: Allow URL-driven configuration so each couple can have their own wrapped via querystring
- P2: Add a "Share" / screenshot export of the final slide
- P2: Add hold-to-pause story progress (touch & hold)
