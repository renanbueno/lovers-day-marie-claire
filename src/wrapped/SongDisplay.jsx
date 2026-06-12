import { AnimatePresence, motion } from "framer-motion";
import { Music2 } from "lucide-react";

/**
 * Faixa "now playing" estilo Instagram Stories.
 * Aparece fixa no rodapé enquanto há música tocando.
 * Quando a música muda, o texto faz fade-out → fade-in.
 */
export default function SongDisplay({ song }) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-40 flex justify-center pb-4"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      data-testid="song-display"
    >
      <AnimatePresence mode="wait">
        {song ? (
          <motion.div
            key={`${song.artist}-${song.title}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-w-[88%] items-center gap-2 rounded-full bg-black/35 px-3.5 py-1.5 backdrop-blur-xl"
          >
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/85"
            >
              <Music2 className="h-3 w-3 text-white" />
            </motion.span>

            {/* Marquee-style title (CSS animation in index.css) */}
            <div className="relative overflow-hidden">
              <div className="flex items-center gap-1 whitespace-nowrap font-sans-ui text-[11px] font-medium tracking-[0.04em] text-wrapped-blush sm:text-xs">
                <span className="font-semibold">{song.title}</span>
                <span className="text-wrapped-blush/55">·</span>
                <span className="text-wrapped-blush/85">{song.artist}</span>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
