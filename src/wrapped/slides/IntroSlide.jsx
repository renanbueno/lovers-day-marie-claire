import { motion } from "framer-motion";
import { START_PHOTOS } from "@/wrapped/manifest";

/**
 * Slide 2 — "Onde tudo começou".
 * Foto única (retrato) com frame portrait. Música: Aliança - Tribalistas.
 */
export default function IntroSlide() {
  const photo = START_PHOTOS[0];

  return (
    <div
      className="relative flex h-full w-full flex-col items-center px-6 pb-20 pt-14 md:px-12 md:pt-20"
      data-testid="intro-slide"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md text-left"
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

      {/* Portrait photo frame — formato retrato */}
      <div className="relative flex flex-1 items-center justify-center py-4">
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -3, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotate: -2, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[3/4] w-[78%] max-w-[300px] overflow-hidden rounded-md bg-white p-2 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.7)]"
        >
          <img
            src={photo}
            alt="Onde tudo começou"
            className="h-full w-full object-cover"
            loading="eager"
          />
          {/* legenda manuscrita */}
          <p className="absolute -bottom-1 left-1/2 -translate-x-1/2 translate-y-full font-display text-xs italic text-wrapped-blush/85 md:text-sm">
            o primeiro passo
          </p>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.9 }}
        className="mb-2 max-w-md text-center font-display text-lg italic leading-snug text-wrapped-blush/95 md:text-2xl"
      >
        O momento em que demos o primeiro passo
        rumo a uma vida — feita pra dois.
      </motion.p>
    </div>
  );
}
