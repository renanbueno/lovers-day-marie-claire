import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Waves } from "lucide-react";
import { BEACH_PHOTOS } from "@/wrapped/manifest";

/**
 * Slide 8 — Beach.
 * Cinematic full-bleed crossfade with subtle ken-burns and a wave divider.
 */
export default function BeachSlide() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % BEACH_PHOTOS.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      data-testid="beach-slide"
    >
      {/* Ken-burns crossfade photo layer */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={BEACH_PHOTOS[idx]}
              alt={`Praia ${idx + 1}`}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black/85" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SVG wave decoration */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-[18%] left-0 right-0 z-10 h-12 w-full opacity-50 md:h-16"
      >
        <path
          d="M0 40 Q 180 0 360 40 T 720 40 T 1080 40 T 1440 40 L 1440 80 L 0 80 Z"
          fill="rgba(253,242,245,0.18)"
        />
      </svg>

      <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-14 pt-16 md:px-12 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md"
        >
          <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.36em] text-wrapped-petal/95">
            <Waves className="h-3.5 w-3.5" /> Capítulo 07 — Maresia
          </p>
          <h2 className="mt-3 font-display text-3xl italic leading-tight text-wrapped-blush md:text-5xl">
            Entre o sal,
            <br />o sol e{" "}
            <span className="bg-gradient-to-r from-rose-200 to-pink-400 bg-clip-text text-transparent">
              você
            </span>
            .
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-md font-display text-lg italic leading-snug text-wrapped-blush/95 md:text-2xl"
        >
          Toda vez que a maré sobe, eu lembro de cada pôr-do-sol
          que a gente roubou do mundo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-[11px] uppercase tracking-[0.32em] text-wrapped-blush/55"
        >
          toque para continuar →
        </motion.p>
      </div>
    </div>
  );
}
