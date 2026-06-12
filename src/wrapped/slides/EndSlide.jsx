import { motion } from "framer-motion";
import { RefreshCcw, Sparkles } from "lucide-react";

/**
 * Slide 11 — End.
 * Last screen: "Volte ano que vem para descobrir o que mudou por aqui".
 * A música de fundo aqui é Sparks - Coldplay (definida em manifest.js).
 */
export default function EndSlide({ onRestart }) {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center px-6 pb-16 pt-20 text-center md:px-12"
      data-testid="end-slide"
    >
      {/* Floating sparkles */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[18%] top-[24%] text-rose-200/70"
      >
        <Sparkles className="h-5 w-5" />
      </motion.div>
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 1, 0.4], y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute right-[16%] top-[28%] text-rose-200/60"
      >
        <Sparkles className="h-4 w-4" />
      </motion.div>
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.9, 0.3], y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute left-[28%] bottom-[28%] text-rose-200/60"
      >
        <Sparkles className="h-4 w-4" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-[11px] uppercase tracking-[0.4em] text-wrapped-petal/90"
      >
        fim — por enquanto
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 max-w-md font-display text-4xl italic leading-[1.1] text-wrapped-blush text-shadow-soft md:text-6xl"
        data-testid="end-headline"
      >
        Volte ano que vem
        <br />
        para descobrir
        <br />
        <span className="bg-gradient-to-r from-rose-200 via-pink-300 to-rose-400 bg-clip-text text-transparent">
          o que mudou
        </span>{" "}
        por aqui.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.9 }}
        className="mt-8 max-w-sm font-display text-lg italic leading-relaxed text-wrapped-blush/75 md:text-xl"
      >
        Até lá, fica essa música tocando<br />
        (roubei todas do seu tiktok).
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="mt-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.42em] text-wrapped-petal/80">
          ♫ Sparks — Coldplay
        </span>
      </motion.div>

      <motion.button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onRestart?.();
        }}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 0.7 }}
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.04 }}
        className="group mt-12 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-wrapped-blush/85 backdrop-blur-xl transition-colors hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
        data-testid="end-restart-button"
      >
        <RefreshCcw className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-180" />
        ver de novo
      </motion.button>
    </div>
  );
}
