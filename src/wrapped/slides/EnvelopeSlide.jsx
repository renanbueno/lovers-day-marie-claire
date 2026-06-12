import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Slide 0 — Envelope.
 * A closed wax-sealed envelope. Clicking opens the flap and reveals a peek
 * of the letter, then triggers `onOpen` after the animation completes.
 */
export default function EnvelopeSlide({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (opened) return;
    setOpened(true);
    // Wait for the unfolding animation to finish before advancing.
    setTimeout(() => onOpen?.(), 1400);
  };

  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center px-6"
      data-testid="envelope-slide"
    >
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mb-10 text-center text-[11px] uppercase tracking-[0.42em] text-wrapped-petal/80"
      >
        para você, com amor
      </motion.p>

      {/* Envelope */}
      <motion.button
        type="button"
        onClick={handleClick}
        whileHover={!opened ? { scale: 1.025, rotate: -0.5 } : {}}
        whileTap={!opened ? { scale: 0.97 } : {}}
        initial={{ opacity: 0, y: 30, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[210px] w-[290px] focus:outline-none sm:h-[252px] sm:w-[348px]"
        data-testid="envelope-button"
        aria-label="Abrir envelope"
      >
        {/* Envelope body */}
        <div className="absolute inset-0 overflow-hidden rounded-[6px] bg-[linear-gradient(135deg,#F4DCE0_0%,#E8C2C8_50%,#D9A8B0_100%)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.18)_inset]">
          {/* Subtle paper texture */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(rgba(132,17,38,0.18) 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
          />
          {/* Bottom diagonal lines (where flap meets body) */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 290 210"
            preserveAspectRatio="none"
            aria-hidden
          >
            <line
              x1="0"
              y1="210"
              x2="145"
              y2="105"
              stroke="rgba(132,17,38,0.18)"
              strokeWidth="1"
            />
            <line
              x1="290"
              y1="210"
              x2="145"
              y2="105"
              stroke="rgba(132,17,38,0.18)"
              strokeWidth="1"
            />
          </svg>

          {/* Peek of letter inside (revealed when opened) */}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={opened ? { y: -60, opacity: 1 } : { y: 0, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-4 top-6 z-10 h-[140px] rounded-sm bg-[linear-gradient(180deg,#FFFBF7_0%,#F8E9E5_100%)] px-4 py-3 text-left font-display text-[11px] italic leading-snug text-rose-900/80 shadow-md sm:text-xs"
          >
            <p className="font-bold not-italic uppercase tracking-[0.3em] text-rose-700/80">
              Meu amor,
            </p>
            <p className="mt-1.5">
              esta é a nossa retrospectiva — uma pequena caixinha
              de memórias só nossas...
            </p>
          </motion.div>
        </div>

        {/* Envelope FLAP (triangle on top, flips upward when opened) */}
        <motion.div
          aria-hidden
          initial={{ rotateX: 0 }}
          animate={opened ? { rotateX: -180 } : { rotateX: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
          className="absolute inset-x-0 top-0 z-20 h-[60%]"
        >
          <div
            className="h-full w-full"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background:
                "linear-gradient(135deg, #F8E5E8 0%, #EFC9CE 60%, #DCAAB4 100%)",
              boxShadow:
                "inset 0 -2px 0 rgba(132,17,38,0.15), 0 4px 14px rgba(0,0,0,0.25)",
            }}
          />
        </motion.div>

        {/* Wax seal (heart) — sits on top of flap, scales away when opening */}
        <motion.div
          aria-hidden
          initial={{ scale: 1, opacity: 1 }}
          animate={opened ? { scale: 0, opacity: 0 } : { scale: [1, 1.06, 1], opacity: 1 }}
          transition={
            opened
              ? { duration: 0.4 }
              : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
          }
          className="pointer-events-none absolute left-1/2 top-[36%] z-30 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#E11D48_0%,#9F1239_55%,#6B0A1F_100%)] shadow-[0_6px_20px_rgba(225,29,72,0.5),inset_0_-3px_6px_rgba(0,0,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.25)]">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7 text-rose-100/95"
            >
              <path d="M12 21s-7-4.534-7-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 21 11c0 5.466-9 10-9 10z" />
            </svg>
          </div>
        </motion.div>
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 0 : 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10 text-center text-[11px] uppercase tracking-[0.32em] text-wrapped-blush/55"
        data-testid="envelope-hint"
      >
        Toque para abrir
      </motion.p>
    </div>
  );
}
