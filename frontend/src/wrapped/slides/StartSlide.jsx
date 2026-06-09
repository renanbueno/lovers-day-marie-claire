import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function StartSlide({ onStart }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-6 pb-16 pt-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-wrapped-petal/80"
      >
        <span className="h-px w-8 bg-wrapped-petal/40" />
        <span>Retrospectiva</span>
        <span className="h-px w-8 bg-wrapped-petal/40" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24, letterSpacing: "0.02em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "-0.01em" }}
        transition={{ delay: 0.35, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 font-display text-5xl italic leading-[1.05] text-wrapped-blush text-shadow-soft md:text-7xl"
        data-testid="start-headline"
      >
        O Nosso
        <br />
        <span className="bg-gradient-to-r from-rose-200 via-pink-300 to-rose-400 bg-clip-text text-transparent">
          Wrapped
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-6 max-w-sm text-sm leading-relaxed text-wrapped-blush/70 md:text-base"
      >
        Uma pequena retrospectiva dos nossos melhores momentos
        — feita só para nós dois.
      </motion.p>

      <motion.button
        type="button"
        onClick={onStart}
        initial={{ opacity: 0, y: 24 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: [1, 1.045, 1],
        }}
        transition={{
          opacity: { delay: 1.0, duration: 0.6 },
          y: { delay: 1.0, duration: 0.6 },
          scale: { delay: 1.4, duration: 2.4, repeat: Infinity, ease: "easeInOut" },
        }}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.06 }}
        className="pulse-ring group mt-12 inline-flex items-center gap-3 rounded-full bg-wrapped-cta px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-wrapped-blush shadow-[0_10px_40px_-12px_rgba(225,29,72,0.7)] transition-colors duration-300 hover:bg-wrapped-ctaHover focus:outline-none focus:ring-2 focus:ring-rose-300/60 md:text-base"
        data-testid="start-wrapped-button"
      >
        <Heart className="h-4 w-4 fill-current" strokeWidth={0} />
        Começar a Retrospectiva
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-10 text-[11px] uppercase tracking-[0.32em] text-wrapped-blush/45"
      >
        Toque para começar — coloque o som
      </motion.p>
    </div>
  );
}
