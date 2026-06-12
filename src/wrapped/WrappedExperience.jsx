import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StoriesProgress from "@/wrapped/StoriesProgress";
import SongDisplay from "@/wrapped/SongDisplay";
import AudioPreloader from "@/wrapped/AudioPreloader";
import useSlideAudio from "@/wrapped/useSlideAudio";
import { SLIDE_AUDIO, SLIDE_SONG, SLIDE_DURATIONS } from "@/wrapped/manifest";

import EnvelopeSlide from "@/wrapped/slides/EnvelopeSlide";
import CoverSlide from "@/wrapped/slides/CoverSlide";
import IntroSlide from "@/wrapped/slides/IntroSlide";
import StatsSlide from "@/wrapped/slides/StatsSlide";
import TravelSlide from "@/wrapped/slides/TravelSlide";
import QuizSlide from "@/wrapped/slides/QuizSlide";
import TogetherSlide from "@/wrapped/slides/TogetherSlide";
import InteractiveSlide from "@/wrapped/slides/InteractiveSlide";
import BeachSlide from "@/wrapped/slides/BeachSlide";
import RomanceSlide from "@/wrapped/slides/RomanceSlide";
import MessageSlide from "@/wrapped/slides/MessageSlide";
import EndSlide from "@/wrapped/slides/EndSlide";

const TOTAL_SLIDES = 12;
const PROGRESS_TOTAL = 10; // slides 1..10

const slideTransition = {
  initial: { opacity: 0, scale: 0.96, y: 16 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 1.04, y: -16 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function WrappedExperience() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  const audioUrl = SLIDE_AUDIO[slideIndex] ?? null;
  const audioRef = useSlideAudio(audioUrl, unlocked, 0.65); // volume mais alto (foi pedido)

  const advance = useCallback(() => {
    setSlideIndex((i) => Math.min(i + 1, TOTAL_SLIDES - 1));
  }, []);
  const goBack = useCallback(() => {
    setSlideIndex((i) => Math.max(i - 1, 1));
  }, []);
  const handleEnvelopeOpen = useCallback(() => {
    setUnlocked(true);
    // Configura o áudio para começar em 2:10 (130s) na primeira tela após o envelope
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 130;
    }
    advance();
  }, [advance, audioRef]);
  const handleRestart = useCallback(() => {
    setSlideIndex(0);
    setUnlocked(false);
  }, []);

  const handleScreenTap = useCallback(
    (e) => {
      // Slides com interação obrigatória: envelope, quiz, interactive, end
      if (slideIndex === 0 || slideIndex === 5 || slideIndex === 7 || slideIndex === TOTAL_SLIDES - 1) return;
      const target = e.target;
      if (target && target.closest?.("button,a,input,[data-no-tap]")) return;
      const width = window.innerWidth;
      if (e.clientX < width * 0.28) goBack();
      else if (slideIndex < TOTAL_SLIDES - 1) advance();
    },
    [advance, goBack, slideIndex],
  );

  const renderSlide = () => {
    switch (slideIndex) {
      case 0:  return <EnvelopeSlide key="envelope" onOpen={handleEnvelopeOpen} />;
      case 1:  return <CoverSlide key="cover" onContinue={advance} />;
      case 2:  return <IntroSlide key="intro" />;
      case 3:  return <StatsSlide key="stats" />;
      case 4:  return <TravelSlide key="travel" />;
      case 5:  return <QuizSlide key="quiz" onCorrect={advance} />;
      case 6:  return <TogetherSlide key="together" />;
      case 7:  return <InteractiveSlide key="interactive" onUnlock={advance} />;
      case 8:  return <BeachSlide key="beach" />;
      case 9:  return <RomanceSlide key="romance" />;
      case 10: return <MessageSlide key="message" />;
      case 11: return <EndSlide key="end" onRestart={handleRestart} />;
      default: return null;
    }
  };

  const showProgress = slideIndex >= 1 && slideIndex <= 10;
  const progressCurrent = slideIndex - 1;
  const currentDuration = SLIDE_DURATIONS[slideIndex] ?? 12;
  const currentSong = SLIDE_SONG[slideIndex] ?? null;

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-wrapped-mesh noise-overlay text-wrapped-blush"
      data-testid="wrapped-experience"
      onClick={handleScreenTap}
    >
      {/* preloads todas as músicas ao montar */}
      <AudioPreloader />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-wrapped-mesh animate-mesh-pan animate-hue-drift opacity-90"
      />

      {showProgress && (
        <StoriesProgress
          total={PROGRESS_TOTAL}
          currentIndex={progressCurrent}
          currentDuration={currentDuration}
          resetKey={slideIndex}
        />
      )}

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

      {/* Faixa "now playing" — Instagram-like */}
      {showProgress && <SongDisplay song={currentSong} />}

      <audio
        ref={audioRef}
        loop
        preload="auto"
        data-testid="wrapped-background-audio"
      />
    </div>
  );
}
