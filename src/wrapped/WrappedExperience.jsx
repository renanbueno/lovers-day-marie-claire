import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StoriesProgress from "@/wrapped/StoriesProgress";
import StartSlide from "@/wrapped/slides/StartSlide";
import StatsSlide from "@/wrapped/slides/StatsSlide";
import MusicQuizSlide from "@/wrapped/slides/MusicQuizSlide";
import PhotosSlide from "@/wrapped/slides/PhotosSlide";

// Duration (ms) for each story slide. The Start slide is gated by user click,
// so its duration only kicks in AFTER the user presses "Começar a Retrospectiva".
const SLIDE_DURATIONS = [Infinity, 7500, Infinity, Infinity];
// Index 0 (start) — waits for user click to unlock audio.
// Index 1 (stats) — auto-advance after 7.5s.
// Index 2 (quiz) — gated by correct answer.
// Index 3 (photos) — final slide, stays.

const slideTransition = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 1.05, y: -20 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function WrappedExperience() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const audioRef = useRef(null);

  const totalSlides = 4;

  const advance = useCallback(() => {
    setSlideIndex((i) => Math.min(i + 1, totalSlides - 1));
    setProgressKey((k) => k + 1);
  }, []);

  const goBack = useCallback(() => {
    setSlideIndex((i) => Math.max(i - 1, 0));
    setProgressKey((k) => k + 1);
  }, []);

  const handleStart = useCallback(() => {
    setStarted(true);
    // Attempt to play background audio (placeholder — replace src in audio tag).
    const audio = audioRef.current;
    if (audio && audio.src) {
      audio.volume = 0.45;
      audio.play().catch(() => {
        /* Autoplay may be blocked even after click on some browsers — silent fallthrough. */
      });
    }
    advance();
  }, [advance]);

  // Tap-to-advance via clicking on edges of the screen (story-style).
  const handleScreenTap = useCallback(
    (e) => {
      if (slideIndex === 0) return; // Start slide handled by its own CTA.
      if (slideIndex === 2) return; // Quiz advances on correct answer.
      // Avoid hijacking clicks on actual interactive elements
      const tag = e.target?.tagName?.toLowerCase();
      if (["button", "a", "input"].includes(tag)) return;
      if (e.target?.closest?.("button,a,input")) return;

      const { clientX } = e;
      const width = window.innerWidth;
      if (clientX < width * 0.3) goBack();
      else advance();
    },
    [advance, goBack, slideIndex],
  );

  // O auto-avanço foi removido. A transição agora depende 100% de interação do usuário.
  // A barra de progresso continuará preenchendo visualmente via StoriesProgress.


  const handleQuizCorrect = useCallback(() => {
    const audio = audioRef.current;
    if (audio && audio.src) {
      // "audio louder" cue from the brief
      audio.volume = Math.min(1, (audio.volume || 0.45) + 0.4);
    }
    setTimeout(() => advance(), 2400);
  }, [advance]);

  const renderSlide = () => {
    switch (slideIndex) {
      case 0:
        return <StartSlide key="start" onStart={handleStart} />;
      case 1:
        return <StatsSlide key="stats" />;
      case 2:
        return <MusicQuizSlide key="quiz" onCorrect={handleQuizCorrect} />;
      case 3:
        return <PhotosSlide key="photos" />;
      default:
        return null;
    }
  };

  // Decide whether the active slide's progress bar should animate.
  const progressActive = started && slideIndex > 0;

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-wrapped-mesh noise-overlay text-wrapped-blush"
      data-testid="wrapped-experience"
      onClick={handleScreenTap}
    >
      {/* Slow ambient mesh pan to add motion to the gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-wrapped-mesh animate-mesh-pan animate-hue-drift opacity-90"
      />

      {/* Stories progress bar */}
      {slideIndex > 0 && (
        <StoriesProgress
          total={totalSlides - 1}
          currentIndex={slideIndex - 1}
          activeDuration={SLIDE_DURATIONS[slideIndex]}
          progressKey={progressKey}
          active={progressActive}
        />
      )}

      {/* Slide content with cinematic transition */}
      <div className="relative z-10 h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            className="absolute inset-0"
            initial={slideTransition.initial}
            animate={slideTransition.animate}
            exit={slideTransition.exit}
            transition={slideTransition.transition}
            data-testid={`wrapped-slide-${slideIndex}`}
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/*
        AUDIO PLACEHOLDER — INSIRA AQUI o caminho do seu arquivo de áudio (ex: /audio/nossa-musica.mp3).
        Tag invisível, destravada no primeiro clique do botão "Começar a Retrospectiva".
      */}
      <audio
        ref={audioRef}
        src=""
        loop
        preload="auto"
        data-testid="wrapped-background-audio"
      />
    </div>
  );
}
