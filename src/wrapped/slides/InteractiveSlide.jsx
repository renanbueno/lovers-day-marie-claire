import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

/**
 * Slide 7 — Interactive (Capítulo 06).
 * Aperte o coração para revelar um motivo. Após todos, libera o avanço.
 */
const REASONS = [
  "Pelo seu sorriso que ilumina qualquer dia.",
  "Pelo acelero que meu coração tem toda vez que você me beija.",
  "Por ser essa pessoa querida, especial e única, no melhor dos sentidos.",
  "Pela sua beleza, que é imensurável e me desmonta em silêncio.",
  "Pelo afeto que você me dá, do jeito mais sincero do mundo.",
  "Pelo seu jeito único de ser, que não tem em mais ninguém.",
  "Por me escolher, mesmo com as dificuldades, todo santo dia.",
];

const HEART_EMOJIS = ["♥", "❤", "💗", "💖", "💘"];

function burst() {
  const c = document.getElementById("interactive-burst-layer");
  if (!c) return;
  for (let i = 0; i < 8; i++) {
    const el = document.createElement("span");
    el.textContent = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
    el.className = "absolute select-none pointer-events-none";
    const size = 14 + Math.random() * 22;
    el.style.fontSize = `${size}px`;
    el.style.color = "#fb7185";
    el.style.left = `${40 + Math.random() * 20}%`;
    el.style.top = `${42 + Math.random() * 8}%`;
    el.style.transform = `translate(-50%, -50%)`;
    el.style.transition = "transform 1.2s ease-out, opacity 1.2s ease-out";
    c.appendChild(el);
    requestAnimationFrame(() => {
      const dx = (Math.random() - 0.5) * 220;
      const dy = -120 - Math.random() * 140;
      el.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${(Math.random() - 0.5) * 360}deg)`;
      el.style.opacity = "0";
    });
    setTimeout(() => el.remove(), 1300);
  }
}

export default function InteractiveSlide({ onUnlock }) {
  const [revealed, setRevealed] = useState(0);
  const allRevealed = revealed >= REASONS.length;

  const handleTap = (e) => {
    e.stopPropagation();
    if (allRevealed) return;
    burst();
    setRevealed((r) => Math.min(REASONS.length, r + 1));
  };

  return (
    <div
      className="relative flex h-full w-full flex-col items-center px-6 pb-24 pt-14 text-center md:px-12 md:pt-20"
      data-testid="interactive-slide"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md"
      >
        <p className="text-[11px] uppercase tracking-[0.36em] text-wrapped-petal/80">
          Capítulo 06 — Pra você
        </p>
        <h2 className="mt-3 font-display text-3xl italic leading-tight text-wrapped-blush md:text-5xl">
          Aperte o coração
          <br />
          e descubra um{" "}
          <span className="bg-gradient-to-r from-rose-200 to-pink-400 bg-clip-text text-transparent">
            motivo
          </span>
          .
        </h2>
      </motion.div>

      <div className="relative my-5 flex h-[32vh] w-full items-center justify-center md:h-[38vh]">
        <div
          id="interactive-burst-layer"
          aria-hidden
          className="pointer-events-none absolute inset-0"
        />
        <motion.button
          type="button"
          onClick={handleTap}
          disabled={allRevealed}
          animate={allRevealed ? { scale: [1, 1.04, 1] } : { scale: [1, 1.06, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          whileTap={{ scale: 0.9 }}
          className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full bg-gradient-to-br from-rose-400 via-rose-500 to-rose-700 shadow-[0_30px_60px_-12px_rgba(225,29,72,0.6),inset_0_-6px_12px_rgba(0,0,0,0.2),inset_0_4px_8px_rgba(255,255,255,0.25)] focus:outline-none focus:ring-2 focus:ring-rose-300/60 md:h-[180px] md:w-[180px]"
          data-testid="interactive-heart-button"
          aria-label="Apertar o coração"
        >
          <Heart className="h-16 w-16 fill-white text-white drop-shadow-[0_4px_12px_rgba(225,29,72,0.4)] md:h-20 md:w-20" strokeWidth={0} />
        </motion.button>
      </div>

      <div className="flex min-h-[90px] w-full max-w-md flex-col items-center gap-3">
        <p className="text-[11px] uppercase tracking-[0.3em] text-wrapped-blush/60" data-testid="interactive-counter">
          {revealed} de {REASONS.length}
        </p>

        <motion.p
          key={revealed}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-lg italic leading-snug text-wrapped-blush md:text-xl"
          data-testid="interactive-reason"
        >
          {revealed === 0
            ? "(toque o coração pra começar)"
            : REASONS[revealed - 1]}
        </motion.p>
      </div>

      <motion.button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (allRevealed) onUnlock?.();
        }}
        animate={allRevealed ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 0 }}
        transition={{ duration: 0.5 }}
        disabled={!allRevealed}
        className={[
          "mt-auto inline-flex items-center gap-2 rounded-full px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] transition-all sm:text-sm sm:tracking-[0.18em]",
          allRevealed
            ? "bg-wrapped-cta text-wrapped-blush shadow-[0_10px_40px_-12px_rgba(225,29,72,0.7)] hover:bg-wrapped-ctaHover pulse-ring"
            : "cursor-not-allowed bg-white/8 text-wrapped-blush/40",
        ].join(" ")}
        data-testid="interactive-continue-button"
      >
        {allRevealed ? "Continuar a história" : `Faltam ${REASONS.length - revealed}...`}
      </motion.button>
    </div>
  );
}
