import { motion } from "framer-motion";
import { TOGETHER_PHOTOS } from "@/wrapped/manifest";

/**
 * Slide 6 — Together.
 * Polaroid stack of moments from the `together/` folder.
 */
const POLAROID_POSITIONS = [
  { rotate: -8, top: "3%", left: "3%" },
  { rotate: 6, top: "7%", left: "44%" },
  { rotate: -3, top: "30%", left: "20%" },
  { rotate: 9, top: "33%", left: "58%" },
  { rotate: -5, top: "58%", left: "5%" },
  { rotate: 4, top: "60%", left: "42%" },
  { rotate: -7, top: "82%", left: "20%" },
];

export default function TogetherSlide() {
  return (
    <div
      className="relative flex h-full w-full flex-col px-6 pb-12 pt-16 md:px-12 md:pt-20"
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

      <div className="relative mt-4 h-[58vh] w-full md:mt-6 md:h-[64vh]">
        {TOGETHER_PHOTOS.slice(0, POLAROID_POSITIONS.length).map((src, i) => {
          const pos = POLAROID_POSITIONS[i];
          return (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30, scale: 0.85, rotate: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: pos.rotate }}
              transition={{
                delay: 0.35 + i * 0.13,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.06, rotate: pos.rotate * 0.4, zIndex: 30 }}
              className="absolute h-[36%] w-[40%] max-w-[180px] rounded-[6px] bg-white/95 p-1.5 shadow-[0_28px_50px_-18px_rgba(0,0,0,0.65)] md:h-[40%] md:w-[26%]"
              style={{ top: pos.top, left: pos.left }}
              data-testid="together-polaroid"
            >
              <div className="relative h-[88%] w-full overflow-hidden rounded-[2px] bg-rose-200">
                <img
                  src={src}
                  alt={`Juntos ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-1 text-center font-display text-[10px] italic text-rose-900/70 md:text-[11px]">
                nós dois
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-auto text-[11px] uppercase tracking-[0.32em] text-wrapped-blush/45"
      >
        toque para continuar →
      </motion.p>
    </div>
  );
}
