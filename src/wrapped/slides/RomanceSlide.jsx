import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ROMANCE_PHOTOS } from "@/wrapped/manifest";

/**
 * Slide 9 — Romance.
 * Slow elegant zoom + crossfade. The most intimate visual moment.
 */
export default function RomanceSlide() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % ROMANCE_PHOTOS.length);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      data-testid="romance-slide"
    >
      {/* Slow zoom crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={ROMANCE_PHOTOS[idx]}
              alt={`Romance ${idx + 1}`}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/85" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Sparkle decoration */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.15, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-8 top-[26%] z-10 text-rose-200/70 md:right-16"
      >
        <Sparkles className="h-6 w-6" />
      </motion.div>
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute left-10 top-[18%] z-10 text-rose-200/60"
      >
        <Sparkles className="h-4 w-4" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-14 pt-16 md:px-12 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md"
        >
          <p className="text-[11px] uppercase tracking-[0.36em] text-wrapped-petal/95">
            Capítulo 08 — Romance
          </p>
          <h2 className="mt-3 font-display text-3xl italic leading-tight text-wrapped-blush md:text-5xl">
            Esse jeito{" "}
            <span className="bg-gradient-to-r from-rose-200 to-pink-400 bg-clip-text text-transparent">
              só seu
            </span>
            <br />
            de me fazer sentir em casa.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-[11px] uppercase tracking-[0.32em] text-wrapped-blush/55"
        >
          toque para continuar →
        </motion.p>
      </div>
    </div>
  );
}
