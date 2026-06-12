import { motion } from "framer-motion";
import { START_PHOTOS } from "@/wrapped/manifest";

/**
 * Slide 2 — Introduction.
 * Two photos from the start/ folder (ring + couple) presented as a storytelling intro.
 * Uses overlapping/stacked layout for a cinematic feel.
 */
export default function IntroSlide() {
  const [ringPhoto, couplePhoto] = START_PHOTOS;

  return (
    <div
      className="relative flex h-full w-full flex-col px-6 pb-14 pt-16 md:px-12 md:pt-20"
      data-testid="intro-slide"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md"
      >
        <p className="text-[11px] uppercase tracking-[0.36em] text-wrapped-petal/80">
          Capítulo 01 — Era uma vez
        </p>
        <h2 className="mt-3 font-display text-3xl italic leading-tight text-wrapped-blush md:text-5xl">
          Onde tudo
          <br />
          <span className="bg-gradient-to-r from-rose-200 to-pink-400 bg-clip-text text-transparent">
            começou
          </span>
          .
        </h2>
      </motion.div>

      {/* Photo stage */}
      <div className="relative mt-6 flex-1">
        {/* Couple photo - back, larger, tilted left */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -8, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, rotate: -5, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[2%] top-[2%] h-[58%] w-[62%] overflow-hidden rounded-md bg-white p-1.5 shadow-[0_28px_60px_-16px_rgba(0,0,0,0.7)] md:left-[8%] md:w-[44%]"
        >
          <img
            src={couplePhoto}
            alt="Nós dois"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Ring photo - front, smaller, tilted right */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: 12, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, rotate: 7, scale: 1 }}
          transition={{ delay: 0.85, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-[6%] right-[2%] h-[52%] w-[54%] overflow-hidden rounded-md bg-white p-1.5 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.75)] md:right-[10%] md:w-[38%]"
        >
          <img
            src={ringPhoto}
            alt="A aliança"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-4 max-w-md font-display text-lg italic leading-snug text-wrapped-blush/90 md:text-2xl"
      >
        Duas vidas que se encontraram —
        e decidiram virar uma só história.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        className="mt-3 text-[11px] uppercase tracking-[0.32em] text-wrapped-blush/45"
      >
        toque para continuar →
      </motion.p>
    </div>
  );
}
