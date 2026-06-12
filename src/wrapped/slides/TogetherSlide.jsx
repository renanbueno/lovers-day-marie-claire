import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TOGETHER_PHOTOS } from "@/wrapped/manifest";

/**
 * Slide 6 — Together (Capítulo 05 "Nós").
 * Uma imagem por vez, transicionando lentamente — formato portrait amigável p/ celular.
 */
export default function TogetherSlide() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % TOGETHER_PHOTOS.length);
    }, 3400); // mais devagar como pedido
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="relative flex h-full w-full flex-col px-6 pb-24 pt-14 md:px-12 md:pt-20"
      data-testid="together-slide"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md"
      >
        <p className="text-[11px] uppercase tracking-[0.36em] text-wrapped-petal/80">
          Capítulo 05 — Nós
        </p>
        <h2 className="mt-3 font-display text-3xl italic leading-tight text-wrapped-blush md:text-5xl">
          Os pequenos
          <br />
          <span className="bg-gradient-to-r from-rose-200 to-pink-400 bg-clip-text text-transparent">
            grandes momentos
          </span>
          .
        </h2>
      </motion.div>

      {/* Polaroid responsiva, uma imagem por vez */}
      <div className="relative flex flex-1 items-center justify-center py-6">
        <div className="relative aspect-[3/4] w-[78%] max-w-[300px]">
          <AnimatePresence>
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24, scale: 0.92, rotate: -3 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
              exit={{ opacity: 0, y: -16, scale: 0.96, rotate: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-md bg-white p-2 shadow-[0_28px_55px_-12px_rgba(0,0,0,0.7)]"
              data-testid="together-photo"
            >
              <div className="h-full w-full overflow-hidden rounded-[2px]">
                <img
                  src={TOGETHER_PHOTOS[idx]}
                  alt={`Nós ${idx + 1}`}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.3em] text-wrapped-blush/70">
        <span data-testid="together-counter">
          {String(idx + 1).padStart(2, "0")} / {String(TOGETHER_PHOTOS.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
